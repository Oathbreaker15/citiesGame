import { IOpponentsTurn, IUsersTurn, ICity, IError, IModel } from "./interfaces/modelInterfaces";


export default class CitiesModel implements IModel {
    list: ICity[] | undefined;
    country: ICity | undefined;
    currentCity: string;
    formattedCities:  ICity[];
    mentionedСities: string[];
    errors: {
        [index: number]: string
    }
    currentLetter: string;
    forbiddenLetters: (string | number)[];

    constructor() {
        this.list;
        this.country;
        this.currentCity = '';
        this.formattedCities = [];
        this.mentionedСities = [];
        this.currentLetter = '';
        this.errors = {
            0: `Игра закончилась. Перезагрузите страницу чтобы начать заново.`,
            1: this.handleLastCityOnCurrentLetterError(),
            2: this.handleNoCityFoundError(),
            3: `Такой город уже называли.`,
            4: `Новый город должен начинаться на последнюю букву предыдущего города`
        }
        this.forbiddenLetters = ['ё', 'ь', 'ы', 'ъ', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '-'];
        this.getCountriesList();
    }

    async getCountriesList()  {
        let result = await fetch(`https://api.hh.ru/areas`);
        this.list = await result.json();
        if (this.list !== undefined) {
            this.country = this.list[0];
        }
        
        this.getCitiesList(this.country)
    }

    async getCitiesList(country: ICity | undefined) {
        this.country = country;
        country?.areas.forEach((item: ICity)=>{
            return item.areas.length ? this.formattedCities.push(...item.areas) : this.formattedCities.push(item);
        });

        this.formatData(this.formattedCities)
    }

    formatData(arr: ICity[]) {
        arr.forEach(item => {
            if (item.name.includes('(')) {
                item.name = item.name.slice(0, item.name.lastIndexOf('(') - 1);
                item.name.trim();
            }
        })

        return this.list = [...new Set(this.list)];
    }

    handleLastCityOnCurrentLetterError() {
        return `Все города на букву "${this.currentCity[0]?.toUpperCase()}" были названы.`;
    }

    handleNoCityFoundError() {
        return `Похоже, в стране ${this.country?.name} нет такого города.`;
    }
}

export class GameMain implements IUsersTurn, IOpponentsTurn {
    model: IModel;

    constructor(model: IModel) {
        this.model = model;
    }

    generateError(code: number): string {
        return this.model.errors[code];
    }

    handleLastCityOnCurrentLetterError(): string {
        return this.model.handleLastCityOnCurrentLetterError();
    }

    handleNoCityFoundError(): string {
        return this.model.handleNoCityFoundError();
    }

    checkIfFirstLetterCorrect(city: string): boolean {
        return city[0].toLowerCase() === this.model.currentLetter.toLowerCase();
    }

    checkIfCityInList(city: string, arr: ICity[]): boolean {
        return arr.some(item =>  item.name.toLowerCase() === city.toLowerCase());
    }

    checkIfCityWasMentioned(city: string | undefined): number | boolean {
        if (typeof city === undefined) {
            return 1;
        }
        return this.model.mentionedСities.some(item =>  item.toLowerCase() === city?.toLowerCase());
    }

    handleIfNoMOreCitiesOnCurrentLetter(city: string, index: number): void {
        let lastCity: string;
        this.model.mentionedСities.length ? lastCity = this.model.mentionedСities[this.model.mentionedСities.length - 1].toLowerCase() : lastCity = city;

        const isLetterInForbiddenList = this.model.forbiddenLetters.some(item => item === city[0].toLowerCase());

        if (!isLetterInForbiddenList) {
            this.model.forbiddenLetters.push(city[0].toLowerCase());
        }
        this.handleLastLetter(lastCity, ++index);
    }

    checkIfThereIsMoreCitiesOnCurrentLetter(city: string): boolean {
        let morePotentionalCities: ICity[] = [];
        this.model.formattedCities?.forEach((item: ICity)=>{
            if (city[0].toLowerCase() === item.name[0].toLowerCase()) {
                morePotentionalCities.push(item);
            }
        });

        console.log(morePotentionalCities.length, morePotentionalCities.length > 1, city);
        return morePotentionalCities.length > 1;
    
    }

    addToMentionedCities(city: string): void {
        this.model.mentionedСities.push(city);
    }

    checkIfCityEndsOnForbiddenLetter(comparedCity: string, stepForIncrementIndexFromBehind: number): boolean {
        let isLastCityEndsWithForbiddenLetter = this.model.forbiddenLetters.some(item => {
            return comparedCity[comparedCity.length - stepForIncrementIndexFromBehind] === item.toString();
        })
        
        return isLastCityEndsWithForbiddenLetter;
    }

    handleLastLetter(city: string, stepForIncrementIndexFromBehind: number = 1): void {
        if (this.checkIfCityEndsOnForbiddenLetter(city, stepForIncrementIndexFromBehind)) {
            return this.handleLastLetter(city, ++stepForIncrementIndexFromBehind)
        } else {
            this.setCurrentLetter(city[city.length - stepForIncrementIndexFromBehind]);
            stepForIncrementIndexFromBehind = 1;
        }
    }

    setCurrentLetter(letter: string): void {
        this.model.currentLetter = letter;
    }

    setCurrentCity(city: string): void {
        this.model.currentCity = city;
    }

    getCitiesListOnCurrentLetter(letter: string) {
        let potentialAnswers = this.model.formattedCities.filter(item => {
            return letter.toLowerCase() === item.name[0].toLowerCase();
        });
        return potentialAnswers;
    }

    generateRandom(limit:number, min:number = 0): number {
        let difference = limit - min;
        let rand = Math.random();
        rand = Math.floor( rand * difference);
        rand = rand + min;
        return rand;
    }

    searchByOpponent(currentLetter: string): void | number {
        let cities = this.getCitiesListOnCurrentLetter(currentLetter);
        let selectedCity = undefined;

        if (cities) {
            selectedCity = cities[this.generateRandom(0, cities?.length - 1)].name;
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
            return 0;
        }
    }
}