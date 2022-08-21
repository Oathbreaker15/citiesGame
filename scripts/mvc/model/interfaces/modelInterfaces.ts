// OBJECTS
export type Country = {
    areas: ICity[],
    id: number,
    name: string,
    parent_id: number | null
}

export enum Player {
    player,
    opponent
}

export interface ICity {
    areas: ICity[],
    id: number,
    name: string,
    parent_id: number | null
}

// METHODS
export interface IModel {
    cities: ICity[];
    country: Country | undefined;
    currentCity: string;
    currentLetter: string;
    mentionedCities: string[];
    forbiddenLetters: (string | number)[];
    getCity(): string;

    init(): Promise<void>;
}