import { ICity, IModel } from "../model/interfaces/modelInterfaces";
import { IGame, IGameState } from "./interfaces/gameInterfaces";

export class GameState implements IGameState  {
    currentCity: string;
    currentLetter: string;

    constructor(protected readonly model: IModel) {
        this.currentCity = model.currentCity;
        this.currentLetter = model.currentLetter;
    }
}

export class Game implements IGame {
    constructor(protected readonly model: IModel, protected readonly gameState: IGameState) {
        this.model = model;
        this.gameState = gameState;
    }

    public init(): Promise<void> {
        return this.model.init();
    }

    public enterCity(city: string): void | Error {
        if (!this.checkIfCityInList(city, this.model.cities)) {
            return this.handleNoCityFoundError();
        } 

        if (!this.checkIfFirstLetterCorrect(city[0]) && this.model.mentionedCities.length) {
            return this.generateError(`Новый город должен начинаться на последнюю букву предыдущего города`);
        } 
        if (this.checkIfCityWasMentioned(city)) {
            return this.generateError(`Такой город уже называли.`);
        } 

        if (this.checkIfThereIsMoreCitiesOnCurrentLetter(city)) {
            this.setCurrentCity(city);
        }

        if (!this.checkIfThereIsMoreCitiesOnCurrentLetter(city)) {
            let index = 1;
            this.handleIfNoMOreCitiesOnCurrentLetter(city, ++index);
            this.addToMentionedCities(city.toLowerCase());
            this.handleLastLetter(city, 1);
            let result = this.searchByOpponent(this.model.currentLetter);
            if (result !== undefined) {
                if (result === 1) {
                    return this.handleLastCityOnCurrentLetterError();
                } else {
                    return this.generateError(`Игра закончилась. Перезагрузите страницу чтобы начать заново.`);
                }
            }

            this.handleLastCityOnCurrentLetterError(city[0].toUpperCase());
            return;
        }
        this.addToMentionedCities(city.toLowerCase());
        this.handleLastLetter(city, 1);
        let result = this.searchByOpponent(this.model.currentLetter);
        if (result !== undefined) {
            if (result === 1) {
                return this.handleLastCityOnCurrentLetterError();
            } else {
                return this.generateError(`Игра закончилась. Перезагрузите страницу чтобы начать заново.`);
            }
        }
    }
    
    public getState(): IGameState {
        return {
            currentCity: this.model.currentCity,
            currentLetter: this.model.currentLetter
        };
    }

    protected generateError(error: string): Error {
        throw new Error(error);
    }

    protected generateWarning(error: string): string {
        throw error;
    }

    protected handleLastCityOnCurrentLetterError(letter: string = this.model.currentCity[0]?.toUpperCase()): void {
        this.generateWarning(`Все города на букву "${letter}" были названы.`);
    }

    protected handleNoCityFoundError(): void {
        this.generateError(`Похоже, в стране ${this.model.country?.name} нет такого города.`);
    }

    protected checkIfFirstLetterCorrect(city: string): boolean {
        return city[0].toLowerCase() === this.model.currentLetter.toLowerCase();
    }

    protected checkIfCityInList(city: string, arr: ICity[]): boolean {
        return arr.some(item =>  item.name.toLowerCase() === city.toLowerCase());
    }

    protected checkIfCityWasMentioned(city: string | undefined): number | boolean {
        if (typeof city === undefined) {
            return 1;
        }
        return this.model.mentionedCities.some(item => item.toLowerCase() === city?.toLowerCase());
    }

    protected handleIfNoMOreCitiesOnCurrentLetter(city: string, index: number): void {
        let lastCity: string;
        this.model.mentionedCities.length ? lastCity = this.model.mentionedCities[this.model.mentionedCities.length - 1].toLowerCase() : lastCity = city;

        const isLetterInForbiddenList = this.model.forbiddenLetters.some(item => item === city[0].toLowerCase());

        if (!isLetterInForbiddenList) {
            this.model.forbiddenLetters.push(city[0].toLowerCase());
        }
        this.handleLastLetter(lastCity, ++index);
    }

    protected checkIfThereIsMoreCitiesOnCurrentLetter(city: string): boolean {
        let morePotentionalCities: ICity[] = [];
        this.model.cities?.forEach((item: ICity)=>{
            if (city[0].toLowerCase() === item.name[0].toLowerCase()) {
                morePotentionalCities.push(item);
            }
        });

        return morePotentionalCities.length > 1;
    
    }

    protected addToMentionedCities(city: string): void {
        this.model.mentionedCities.push(city);
    }

    protected checkIfCityEndsOnForbiddenLetter(comparedCity: string, stepForIncrementIndexFromBehind: number): boolean {
        let isLastCityEndsWithForbiddenLetter = this.model.forbiddenLetters.some(item => {
            return comparedCity[comparedCity.length - stepForIncrementIndexFromBehind] === item.toString();
        })
        
        return isLastCityEndsWithForbiddenLetter;
    }

    protected handleLastLetter(city: string, stepForIncrementIndexFromBehind: number = 1): void {
        if (this.checkIfCityEndsOnForbiddenLetter(city, stepForIncrementIndexFromBehind)) {
            return this.handleLastLetter(city, ++stepForIncrementIndexFromBehind)
        } else {
            this.setCurrentLetter(city[city.length - stepForIncrementIndexFromBehind]);
            stepForIncrementIndexFromBehind = 1;
        }
    }

    protected setCurrentLetter(letter: string): void {
        this.model.currentLetter = letter;
    }

    protected setCurrentCity(city: string): void {
        this.model.currentCity = city;
    }

    protected getCitiesListOnCurrentLetter(letter: string) {
        let potentialAnswers = this.model.cities.filter(item => {
            return letter.toLowerCase() === item.name[0].toLowerCase();
        });
        return potentialAnswers;
    }

    protected generateRandom(limit:number, min:number = 0): number {
        let difference = limit - min;
        let rand = Math.random();
        rand = Math.floor( rand * difference);
        rand = rand + min;
        return rand;
    }

    protected searchByOpponent(currentLetter: string): void | number {
        let cities = this.getCitiesListOnCurrentLetter(currentLetter);
        let selectedCity = undefined;

        if (cities) {
            selectedCity = cities[this.generateRandom(0, cities.length - 1)].name.toLowerCase();
            if (!!!this.checkIfCityWasMentioned(selectedCity)) {
                if (this.checkIfThereIsMoreCitiesOnCurrentLetter(currentLetter)) {
                    this.addToMentionedCities(selectedCity);
                    this.handleLastLetter(selectedCity, 1);
                    this.setCurrentCity(selectedCity);
                } else {
                    let index = 1;
                    this.handleIfNoMOreCitiesOnCurrentLetter(selectedCity, ++index);
                    this.addToMentionedCities(selectedCity);
                    this.handleLastLetter(selectedCity, 1);
                    this.setCurrentCity(selectedCity);
                    return 1;
                }
            } else {
                this.searchByOpponent(currentLetter);
            }
        } else {
            return 0;
        }
    }
}