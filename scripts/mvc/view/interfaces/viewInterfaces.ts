import { Player } from "../../model/interfaces/modelInterfaces";

export interface IView {
    onCitySubmit(handler: (city: string) => void): void;
    renderCity(city: string, nextLetter: string, player: Player): void;
    renderError(error: string): void;
    // renderCountry(country: string): void;
}