import { IView } from "./interfaces/viewInterfaces";
import { Player } from "../model/interfaces/modelInterfaces";

export default class CitiesView implements IView {
    protected formWrapper: Element;
    protected currentLetterBlock: HTMLHeadingElement;
    protected form: Element;
    protected submitBtn: Element;
    protected errorBlock: Element;
    protected errorBlockInner: Element;
    protected textInput: HTMLInputElement;
    protected mentionedListBlock: Element;

    constructor(formWrapper: Element, formId: string) {
        this.formWrapper = formWrapper;
        this.currentLetterBlock = this.formWrapper.querySelector('.current-letter') as HTMLHeadingElement;
        this.form = formWrapper.querySelector(`${formId}`) as Element;
        if (!this.form) {
            throw new Error('Не найдена форма для ввода города');
        }
        this.submitBtn = this.form.querySelector('.city-submit') as Element;
        this.errorBlock = this.formWrapper.querySelector('.error-block') as Element;
        this.errorBlockInner = this.errorBlock.querySelector('.error-text') as Element;
        this.textInput = this.form.querySelector('.city-value') as HTMLInputElement;
        this.mentionedListBlock = formWrapper.querySelector('ul') as Element;
    }

    public onCitySubmit(handler: (city: string) => void): void {
        this.form?.addEventListener('submit', event => {
            event.preventDefault();
            if (this.isTextInputValue(this.textInput)) {
                handler(this.textInput.value);
            }
            this.resetCity();
        });
    }

    public renderCity(city: string, nextLetter: string, player: Player): void {
        const listElem = document.createElement('li');
        player === 0 ? listElem.classList.add('player') : listElem.classList.add('opponent');
        listElem.innerText = city;
        this.mentionedListBlock?.append(listElem);
        listElem.scrollIntoView({block: "center"});
        this.refreshCurrentLetter(nextLetter);
    }

    public renderError(error: string): void {
        this.errorBlock?.classList.remove('hidden');
        if (this.errorBlockInner instanceof HTMLElement) {
            this.errorBlockInner.innerText = error;
        }
        setTimeout(()=>{
            this.errorBlock?.classList.add('hidden');
        },3000)
    }

    protected isTextInputValue(inputValue: HTMLInputElement  | null): inputValue is HTMLInputElement {
        return inputValue !== null;
    }

    protected resetCity() {
        if (this.isTextInputValue(this.textInput)) {
            this.textInput.value = '';
        }
    }

    protected refreshCurrentLetter(letter: string): void {
        if (this.currentLetterBlock instanceof HTMLHeadingElement) {
            this.currentLetterBlock.innerText = `Текущая буква: ${letter.toUpperCase()}`;
        }
    }
}