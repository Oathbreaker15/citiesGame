// OBJECTS
export interface ICity {
    areas: ICity[],
    id: number,
    name: string,
    parent_id: number | null
}

export interface IError {
    [index: number]: string
}

// METHODS
export interface IModel {
    list: ICity[] | undefined;
    country: ICity | undefined;
    currentCity: string;
    formattedCities:  ICity[];
    mentionedСities: string[];
    currentLetter: string;
    forbiddenLetters: (string | number)[];
    errors: {
        [index: number]: string
    }
    
    getCountriesList(): void;
    getCitiesList(country: ICity): void;
    formatData(arr: ICity[]): void;
    handleLastCityOnCurrentLetterError(): string;
    handleNoCityFoundError(): string;
}

export interface IGameBasic {
    checkIfCityWasMentioned(city: string | undefined): number | boolean;
    checkIfThereIsMoreCitiesOnCurrentLetter(cityName: string): boolean;
    handleIfNoMOreCitiesOnCurrentLetter(city: string, index: number): void;
    addToMentionedCities(city: string): void;
    checkIfCityEndsOnForbiddenLetter(comparedCity: string, stepForIncrementIndexFromBehind: number): boolean;
    handleLastLetter(city: string, stepForIncrementIndexFromBehind: number): void;
    setCurrentLetter(letter: string): void;
    setCurrentCity(city: string): void;
    generateError(code: number): string;
    handleLastCityOnCurrentLetterError(): string;
    handleNoCityFoundError(): string;
}

// Не вижу смысла разделять интерфейсы IUsersTurn и IOpponentsTurn
// они используются всегда вместе
// ну или сделать третий интерфейс IGame и отнаследуюся от этих двух и используй его
export interface IUsersTurn extends IGameBasic {
    checkIfFirstLetterCorrect(city: string): boolean;
    checkIfCityInList(city: string, arr: ICity[] | undefined): boolean;
}

export interface IOpponentsTurn extends IGameBasic {
    getCitiesListOnCurrentLetter(letter: string): ICity[] | undefined;
    generateRandom(limit:number, min:number): number;
    searchByOpponent(currentLetter: string): void | number;
}















enum Player {
    me,
    opponent
}

interface GameState {
    currentCity: string;
    nextLetter: string;
}

interface Model {
    cities: string[];
    currentCity: string;
    nextLetter: string;
    mentionedCities: string[];
    forbiddenLetters: string[];
    init(): Promise<void>;
}


interface Game {
    init(): Promise<void>;
    enterCity(city: string): void; // Throws errors sometimes
    getState(): GameState
}

interface View {
    onCitySubmit(handler: (city: string) => void): void;
    renderCity(city: string, nextLetter: string, player: Player): void;
    renderError(error: string): void;
    // renderCountry(country: string): void;
}