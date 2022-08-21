import CitiesModel from './mvc/model/model';
import { Game, GameState } from './mvc/model/game';
import CitiesView from './mvc/view/view';
import CitiesController from './mvc/controller/controller';
import '../styles/style.css';


document.addEventListener('DOMContentLoaded', ()=>{
    const block = document.querySelector('section.cities-main-block-inner');
    const view = new CitiesView(block as HTMLElement, '#cityForm');
    const model = new CitiesModel();
    const gameState = new GameState(model);
    const game = new Game(model, gameState);
    game.init();
    const controller = new CitiesController(game, view);
})

