export interface IGameState {
    currentCity: string;
    currentLetter: string;
}

export interface IGame {
    init(): Promise<void>;
    enterCity(city: string): void;
    getState(): IGameState;
}