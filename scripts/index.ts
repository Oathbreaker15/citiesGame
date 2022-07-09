import CitiesModel, { GameMain } from './mvc/model/model';
import CitiesView from './mvc/view/view';
import CitiesController from './mvc/controller/controller';
// import '../styles/style.css';


document.addEventListener('DOMContentLoaded', ()=>{
    const block = document.querySelector('section.cities-main-block-inner');
    const view = new CitiesView(block as HTMLElement, '#cityForm');
    const model = new CitiesModel();
    const game = new GameMain(model);
    // как я понял model это типа хранилища данных, репозиторий грубо говоря
    // зачем контроллеру знать про него? С данными пусть работает game, все должно быть через game сервис
    const controller = new CitiesController(model, game, view);
})

