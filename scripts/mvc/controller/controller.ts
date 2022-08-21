import { IGame } from "../game-service/interfaces/gameInterfaces";
import { IView } from "../view/interfaces/viewInterfaces";
import { Player } from "../model/interfaces/modelInterfaces";

export default class CitiesController {
    game: IGame;
    view: IView;

    constructor(game: IGame, view: IView) {
        this.game = game;
        this.view = view;
        this.view.onCitySubmit(this.handleSubmitEnteredCity);
    }

    protected handleSubmitEnteredCity = (city: string): void => {
        this.handleSelectedCity(city);
    };

    protected makeFullTurn(city: string): void {
        this.view.renderCity(city, this.game.getState().currentLetter, Player.player);
        this.view.renderCity(this.game.getState().currentCity, this.game.getState().currentLetter, Player.opponent);
    }

    protected handleSelectedCity = (city: string): void => {
        try {
            this.game.enterCity(city);
            this.makeFullTurn(city);
        } catch(err) {
            const error = err as Error;
            if (error instanceof Error) {
                this.view.renderError(error.message);
            } else {
                this.makeFullTurn(city);
                this.view.renderError(error);
            }
        }
    }
}