export interface IViewBasic {
    submitEnteredCity(handler: Function): string | void;
    drawEnteredCity(city: string, byWho: string): void;
    drawErrorMsg(errText: string): void;
    resetCity():void;
    refreshCurrentLetter(letter: string): void;
}