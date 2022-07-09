import { IViewBasic } from "./interfaces/viewInterfaces";

export default class CitiesView implements IViewBasic {
    protected formWrapper: Element;
    // Зачем эти нулы везде
    protected currentLetterBlock: HTMLHeadingElement | null;
    protected form: Element;
    protected submitBtn: Element | null;
    protected errorBlock: Element | null;
    protected errorBlockInner: Element | null;
    // protected startGameBtn: Element | null;
    protected textInput: HTMLInputElement  | null;
    protected mentionedListBlock: Element | null;

    constructor(formWrapper: Element, formId: string) {
        this.formWrapper = formWrapper;
        // Зачем проверки на нулы?
        // Нам полюбому нужны все элементы, просто ожидаем все элементы, а если чего-то не будет - ошибка
        this.currentLetterBlock = this.formWrapper.querySelector('.current-letter')
        const form = formWrapper.querySelector(`${formId}`);
        if (!form) {
            throw new Error('Не найден форма для ввода города');
        }
        this.form = form
        this.submitBtn = this.form !== null ? this.form.querySelector('.city-submit') : null;
        this.errorBlock = this.formWrapper !== null ? this.formWrapper.querySelector('.error-block') : null;
        this.errorBlockInner = this.errorBlock !== null ? this.errorBlock?.querySelector('.error-text') : null;
        // this.startGameBtn = this.form !== null ? this.formWrapper.querySelector('.start-game-btn') : null;
        this.textInput = this.form !== null ? this.form.querySelector('.city-value') : null;
        this.mentionedListBlock = formWrapper.querySelector('ul');
    }

    isTextInputValue(inputValue: HTMLInputElement  | null): inputValue is HTMLInputElement {
        return inputValue !== null;
    }

    submitEnteredCity(handler: Function) {
        this.form?.addEventListener('submit', event => {
            event.preventDefault();
            handler(this.textInput);
            this.resetCity();
        });
      }

    drawErrorMsg(errText: string): void {
        this.errorBlock?.classList.remove('hidden');
        if (this.errorBlockInner instanceof HTMLElement) {
            this.errorBlockInner.innerText = errText;
        }
        setTimeout(()=>{
            this.errorBlock?.classList.add('hidden');
        },3000)
    }

    drawEnteredCity(city:string, byWho:string) {
        const listElem = document.createElement('li');
        byWho === 'user' ? listElem.classList.add('user') : listElem.classList.add('opponent');
        listElem.innerText = city;
        this.mentionedListBlock?.append(listElem);
        listElem.scrollIntoView({block: "center"});
    }

    resetCity() {
        if (this.isTextInputValue(this.textInput)) {
            this.textInput.value = '';
        }
    }

    refreshCurrentLetter(letter: string): void {
        if (this.currentLetterBlock instanceof HTMLHeadingElement) {
            this.currentLetterBlock.innerText = `Текущая буква: ${letter.toUpperCase()}`;
        }
    }
}