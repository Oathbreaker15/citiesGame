import { IControllerBasic } from "./interfaces/controllerInterfaces";
import { IOpponentsTurn, IUsersTurn, IModel } from "../model/interfaces/modelInterfaces";
import { IViewBasic } from "../view/interfaces/viewInterfaces";

export default class CitiesController {
    model: IModel;
    game: IOpponentsTurn & IUsersTurn;
    view: IViewBasic;

    constructor(model: IModel, game: IOpponentsTurn & IUsersTurn, view: IViewBasic) {
        this.model = model;
        this.game = game;
        this.view = view;
        // Не понимаю почему это тут да еще и в конструкторе
        // А, я понял...это подписка на сабмит, тогда название корявое
        // Нужно onSubmitEnteredCity
        this.view.submitEnteredCity(this.handleSubmitEnteredCity);
        console.log(this);
        
    }

    // Контроллер ничо не должен знать про HTMLFormElement и любое проявление html
    // Почему не передавать сразу city?
    handleSubmitEnteredCity = (event: HTMLFormElement): void => {
        const city = event.value;
        this.game.setCurrentCity(city);
        this.handleSelectedCity(city);
    };

    // Вся эта логика должна быть в game
    // Мы вообще обсуждали что надо сделать отдельно модель\сервис, отдельно вью и какие у них должны были быть
    // интерфейсы, тут бы логики небыло и интерфейсы небыли бы раздутыми
    // Это все логика игры, ну есть же класс game, там вся игра должна быть
    // контроллер\презентер соединяет логику и вью и все, тут нифига ничо этого не должно быть
    handleSelectedCity = (city: string): void => {
        if (!this.game.checkIfCityInList(this.model.currentCity, this.model.formattedCities)) {
            return this.view.drawErrorMsg(this.game.handleNoCityFoundError());
        } 
        if (this.game.checkIfThereIsMoreCitiesOnCurrentLetter(city)) {
            this.game.setCurrentCity(city);
        }

        if (!this.game.checkIfFirstLetterCorrect(city[0]) && this.model.mentionedСities.length) {
            return this.view.drawErrorMsg(this.model.errors[4]);
        } 
        if (this.game.checkIfCityWasMentioned(city)) {
            return this.view.drawErrorMsg(this.model.errors[3]);
        } 

        if (!this.game.checkIfThereIsMoreCitiesOnCurrentLetter(city)) {
            let index = 1;
            this.game.handleIfNoMOreCitiesOnCurrentLetter(city, ++index);
            this.game.addToMentionedCities(city);
            this.game.handleLastLetter(city, 1);
            this.game.setCurrentCity(city);
            this.view.drawEnteredCity(this.model.currentCity, 'user');
            this.view.refreshCurrentLetter(this.model.currentLetter);
            this.view.drawErrorMsg(this.game.handleLastCityOnCurrentLetterError());
            let result = this.game.searchByOpponent(this.model.currentLetter);
            if (result !== undefined) {
                if (result === 1) {
                    this.view.drawErrorMsg(this.game.handleLastCityOnCurrentLetterError())
                } else {
                    this.view.drawErrorMsg(this.game.generateError(result));
                }
            }
            this.view.drawEnteredCity(this.model.currentCity, 'opponent');
            this.view.refreshCurrentLetter(this.model.currentLetter);

            return;
        }
        this.game.addToMentionedCities(city);
        this.game.handleLastLetter(city, 1);
        this.view.drawEnteredCity(city, 'user');

        let result = this.game.searchByOpponent(this.model.currentLetter);
        if (result !== undefined) {
            if (result === 1) {
                this.view.drawErrorMsg(this.game.handleLastCityOnCurrentLetterError())
            } else {
                this.view.drawErrorMsg(this.game.generateError(result));
            }
        }

        this.view.drawEnteredCity(this.model.currentCity, 'opponent');
        this.view.refreshCurrentLetter(this.model.currentLetter);
     
    }
}