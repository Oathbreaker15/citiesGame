import { ICity, IModel, Country } from "./interfaces/modelInterfaces";


export default class CitiesModel implements IModel {
    cities: ICity[] = [];
    country: Country | undefined;
    currentCity: string = '';
    mentionedCities: string[] = [];
    currentLetter: string;
    forbiddenLetters: (string | number)[];

    constructor() {
        this.cities;
        this.country;
        this.currentCity = '';
        this.mentionedCities = [];
        this.currentLetter = '';
        this.forbiddenLetters = ['ё', 'ь', 'ы', 'ъ', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '-'];
    }

    public async init(): Promise<void> {
        const countriesList = await this.fetchCountriesList();
        this.country = countriesList[0];
        const cities = await this.getCitiesList(this.country);
        this.cities = this.formatCities(cities)
    }

   protected async fetchCountriesList(): Promise<ICity[]>  {
        let result = await fetch(`https://api.hh.ru/areas`);
        return await result.json() as ICity[];
        // пока что будет только Россия, возможно дальше можно будет сделать выбор стран
        // this.country = this.cities[0];
    }

    protected async getCitiesList(country: ICity) {
        let formattedCities:ICity[] = [];
        country.areas.forEach((item: ICity)=>{
            item.areas.length ? formattedCities.push(...item.areas) : formattedCities.push(item);
        });

        return formattedCities;
    }

    protected formatCities(arr: ICity[]): ICity[] {
        arr.forEach(item => {
            if (item.name.includes('(')) {
                item.name = item.name.slice(0, item.name.lastIndexOf('(') - 1);
                item.name.trim();
            }
        })

        arr = [...new Set(arr)];
        return arr;
    }

    public getCity(): string {
        return this.currentCity;
    }
}