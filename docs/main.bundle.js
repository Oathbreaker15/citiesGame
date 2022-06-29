(()=>{"use strict";var e={247:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),i=n.n(r),o=n(645),s=n.n(o)()(i());s.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\n.cities-main-block {\n    /* background: linear-gradient(#9198e5, #e66465); */\n    background: url(https://i.pinimg.com/originals/4f/5a/d7/4f5ad7e36badd510727b5c08145644f7.png) no-repeat;\n    border-radius: 4px;\n    height: 100vh;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 24px;\n    box-sizing: border-box;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n}\n\n.cities-main-block::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: url(https://i.pinimg.com/originals/4f/5a/d7/4f5ad7e36badd510727b5c08145644f7.png) no-repeat;\n    filter: blur(4px);\n}\n\n.cities-main-block-inner {\n    background: linear-gradient(#e66465, #9198e5);\n    border-radius: 4px;\n    width: 600px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    padding: 24px;\n    box-sizing: border-box;\n    border: 2px solid darkgray;\n    opacity: 1;\n    position: relative;\n    background: #17181f;\n    color: #EEEDF0;\n}\n\nbutton.start-game-btn {\n    width: 128px;\n    box-sizing: border-box;\n    border-radius: 4px;\n    padding: 8px 16px;\n    border: none;\n    font-weight: bold;\n}\n\nh3.current-letter {\n    margin-bottom: 16px;\n}\n\nmain h1 {\n    margin-bottom: 16px;\n    font-size: 36px;\n}\n\n.mentioned-cites-wrapper h3 {\n    margin-bottom: 8px;\n}\n\n.mentioned-cites {\n    background: #EEEDF0;\n    min-height: 580px;\n    max-height: 580px;\n    border-radius: 4px;\n    border: 2px solid darkgray;\n    padding: 16px;\n    box-sizing: border-box;\n    overflow: hidden;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n}\n\n.mentioned-cites li {\n    font-size: 24px;\n    list-style: none;\n    text-transform: capitalize;\n    padding: 8px 16px;\n    /* min-height: 48px; */\n    border-radius: 12px;\n    display: flex;\n    align-items: center;\n    color: white;\n    margin-bottom: 12px;\n    min-width: 60%;\n    max-width: 80%;\n    box-sizing: border-box;\n    font-size: 22px;\n}\n\n.mentioned-cites li:last-child {\n    margin-bottom: 0;\n}\n\n.mentioned-cites li.user {\n    background: #e66465;\n    justify-content: flex-end;\n    align-self: end;\n}\n\n.mentioned-cites li.opponent {\n    background: #9198e5;\n    justify-content: flex-start;\n}\n\nform#cityForm {\n    display: flex;\n    margin-top: 16px;\n}\n\ninput.city-value {\n    height: 40px;\n    border-radius: 4px;\n    border: 2px solid darkgray;\n    font-size: 16px;\n    width: 500px;\n    padding: 0 8px;\n    box-sizing: border-box;\n    text-transform: capitalize;\n    background: #EEEDF0;\n}\n\ninput.city-submit {\n    width: 40px;\n    height: 40px;\n    padding: 8px;\n    border: 2px solid darkgray;\n    border-radius: 4px;\n    margin-left: 8px;\n    position: relative;\n    cursor: pointer;\n    /* background: url(../imgs/icons/Ok_font_awesome.svg) no-repeat 0 0; */\n    background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ok_font_awesome.svg/2048px-Ok_font_awesome.svg.png) no-repeat 0 0;\n    background-color: #EEEDF0;\n    background-size: cover;\n}\n\ninput:focus-visible,\ninput.city-submit:active,\ninput.city-value:focus + input.city-submit,\ninput.city-value:focus {\n    border-color: #e66465;\n}\n\ninput.city-submit:active {\n    background-color:#e66465 ;\n}\n\ninput:focus-visible {\n    outline: none;\n}\n\n.error-block {\n    position: absolute;\n    box-sizing: border-box;\n    width: calc(100% - 48px);\n    min-height: 126px;\n    background: white;\n    border: 2px solid grey;\n    border-radius: 4px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 16px 24px;\n    background: linear-gradient(to right, #e66465, #9198e5);\n}\n\n.error-block:not(.hidden.hidden)::before {\n    content: '';\n    width: 38px;\n    height: 122px;\n    background: white;\n    box-sizing: border-box;\n    position: absolute;\n    opacity: 0.4;\n    transform: skewX(155deg);\n    top: 0px;\n    left: 29px;\n    animation: 3s linear slidein;\n    animation-timing-function: cubic-bezier(.17,.67,.83,.67);\n}\n\n@keyframes slidein {\n    from {\n        left: 29px;\n    }\n\n    to {\n        left: 478px;\n    }\n}\n\n.error-text {\n    font-size: 24px;\n    color:#EEEDF0;\n}\n\n.hidden.hidden {\n    display: none;\n}\n\n.neon-wrapper {\n    padding: 12px;\n    padding-top: 32px;\n    box-sizing: border-box;\n    background: linear-gradient(to right, #e66465, #9198e5);\n    border-radius: 4px;\n    box-shadow: 0 8px 16px 0 rgb(0 0 0 / 4%), 0 4px 8px 0 rgb(0 0 0 / 8%);\n    z-index: 99;\n}",""]);const a=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(s[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&s[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],a=0;a<e.length;a++){var d=e[a],l=r.base?d[0]+r.base:d[0],c=o[l]||0,u="".concat(l," ").concat(c);o[l]=c+1;var h=n(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var m=i(p,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var a=n(o[s]);t[a].references--}for(var d=r(e,i),l=0;l<o.length;l++){var c=n(o[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{d(r.next(e))}catch(e){o(e)}}function a(e){try{d(r.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}d((r=r.apply(e,t||[])).next())}))};class t{constructor(){this.list,this.country,this.currentCity="",this.formattedCities=[],this.mentionedСities=[],this.currentLetter="",this.errors={0:"Игра закончилась. Перезагрузите страницу чтобы начать заново.",1:this.handleLastCityOnCurrentLetterError(),2:this.handleNoCityFoundError(),3:"Такой город уже называли.",4:"Новый город должен начинаться на последнюю букву предыдущего города"},this.forbiddenLetters=["ё","ь","ы","ъ",0,1,2,3,4,5,6,7,8,9,"-"],this.getCountriesList()}getCountriesList(){return e(this,void 0,void 0,(function*(){let e=yield fetch("https://api.hh.ru/areas");this.list=yield e.json(),void 0!==this.list&&(this.country=this.list[0]),this.getCitiesList(this.country)}))}getCitiesList(t){return e(this,void 0,void 0,(function*(){this.country=t,null==t||t.areas.forEach((e=>e.areas.length?this.formattedCities.push(...e.areas):this.formattedCities.push(e))),this.formatData(this.formattedCities)}))}formatData(e){return e.forEach((e=>{e.name.includes("(")&&(e.name=e.name.slice(0,e.name.lastIndexOf("(")-1),e.name.trim())})),this.list=[...new Set(this.list)]}handleLastCityOnCurrentLetterError(){var e;return`Все города на букву "${null===(e=this.currentCity[0])||void 0===e?void 0:e.toUpperCase()}" были названы.`}handleNoCityFoundError(){var e;return`Похоже, в стране ${null===(e=this.country)||void 0===e?void 0:e.name} нет такого города.`}}class r{constructor(e){this.model=e}generateError(e){return this.model.errors[e]}handleLastCityOnCurrentLetterError(){return this.model.handleLastCityOnCurrentLetterError()}handleNoCityFoundError(){return this.model.handleNoCityFoundError()}checkIfFirstLetterCorrect(e){return e[0].toLowerCase()===this.model.currentLetter.toLowerCase()}checkIfCityInList(e,t){return t.some((t=>t.name.toLowerCase()===e.toLowerCase()))}checkIfCityWasMentioned(e){return void 0===typeof e?1:this.model.mentionedСities.some((t=>t.toLowerCase()===(null==e?void 0:e.toLowerCase())))}handleIfNoMOreCitiesOnCurrentLetter(e,t){let n;n=this.model.mentionedСities.length?this.model.mentionedСities[this.model.mentionedСities.length-1].toLowerCase():e,this.model.forbiddenLetters.some((t=>t===e[0].toLowerCase()))||this.model.forbiddenLetters.push(e[0].toLowerCase()),this.handleLastLetter(n,++t)}checkIfThereIsMoreCitiesOnCurrentLetter(e){var t;let n=[];return null===(t=this.model.formattedCities)||void 0===t||t.forEach((t=>{e[0].toLowerCase()===t.name[0].toLowerCase()&&n.push(t)})),console.log(n.length,n.length>1,e),n.length>1}addToMentionedCities(e){this.model.mentionedСities.push(e)}checkIfCityEndsOnForbiddenLetter(e,t){return this.model.forbiddenLetters.some((n=>e[e.length-t]===n.toString()))}handleLastLetter(e,t=1){if(this.checkIfCityEndsOnForbiddenLetter(e,t))return this.handleLastLetter(e,++t);this.setCurrentLetter(e[e.length-t]),t=1}setCurrentLetter(e){this.model.currentLetter=e}setCurrentCity(e){this.model.currentCity=e}getCitiesListOnCurrentLetter(e){return this.model.formattedCities.filter((t=>e.toLowerCase()===t.name[0].toLowerCase()))}generateRandom(e,t=0){let n=e-t,r=Math.random();return r=Math.floor(r*n),r+=t,r}searchByOpponent(e){let t,n=this.getCitiesListOnCurrentLetter(e);if(!n)return 0;if(t=n[this.generateRandom(0,(null==n?void 0:n.length)-1)].name,!this.checkIfThereIsMoreCitiesOnCurrentLetter(e)){let e=1;return this.handleIfNoMOreCitiesOnCurrentLetter(t,++e),this.addToMentionedCities(t),this.handleLastLetter(t,1),this.setCurrentCity(t),1}this.addToMentionedCities(t),this.handleLastLetter(t,1),this.setCurrentCity(t)}}class i{constructor(e,t){var n;this.formWrapper=e,this.currentLetterBlock=null!==this.formWrapper?this.formWrapper.querySelector(".current-letter"):null,this.form=e.querySelector(`${t}`),this.submitBtn=null!==this.form?this.form.querySelector(".city-submit"):null,this.errorBlock=null!==this.formWrapper?this.formWrapper.querySelector(".error-block"):null,this.errorBlockInner=null!==this.errorBlock?null===(n=this.errorBlock)||void 0===n?void 0:n.querySelector(".error-text"):null,this.textInput=null!==this.form?this.form.querySelector(".city-value"):null,this.mentionedListBlock=e.querySelector("ul")}isTextInputValue(e){return null!==e}submitEnteredCity(e){var t;null===(t=this.form)||void 0===t||t.addEventListener("submit",(t=>{t.preventDefault(),e(this.textInput),this.resetCity()}))}drawErrorMsg(e){var t;null===(t=this.errorBlock)||void 0===t||t.classList.remove("hidden"),this.errorBlockInner instanceof HTMLElement&&(this.errorBlockInner.innerText=e),setTimeout((()=>{var e;null===(e=this.errorBlock)||void 0===e||e.classList.add("hidden")}),3e3)}drawEnteredCity(e,t){var n;const r=document.createElement("li");"user"===t?r.classList.add("user"):r.classList.add("opponent"),r.innerText=e,null===(n=this.mentionedListBlock)||void 0===n||n.append(r),r.scrollIntoView({block:"center"})}resetCity(){this.isTextInputValue(this.textInput)&&(this.textInput.value="")}refreshCurrentLetter(e){this.currentLetterBlock instanceof HTMLHeadingElement&&(this.currentLetterBlock.innerText=`Текущая буква: ${e.toUpperCase()}`)}}class o{constructor(e,t,n){this.handleSubmitEnteredCity=e=>{const t=e.value;this.game.setCurrentCity(t),this.handleSelectedCity(t)},this.handleSelectedCity=e=>{if(!this.game.checkIfCityInList(this.model.currentCity,this.model.formattedCities))return this.view.drawErrorMsg(this.game.handleNoCityFoundError());if(this.game.checkIfThereIsMoreCitiesOnCurrentLetter(e)&&this.game.setCurrentCity(e),!this.game.checkIfFirstLetterCorrect(e[0])&&this.model.mentionedСities.length)return this.view.drawErrorMsg(this.model.errors[4]);if(this.game.checkIfCityWasMentioned(e))return this.view.drawErrorMsg(this.model.errors[3]);if(!this.game.checkIfThereIsMoreCitiesOnCurrentLetter(e)){let t=1;this.game.handleIfNoMOreCitiesOnCurrentLetter(e,++t),this.game.addToMentionedCities(e),this.game.handleLastLetter(e,1),this.game.setCurrentCity(e),this.view.drawEnteredCity(this.model.currentCity,"user"),this.view.refreshCurrentLetter(this.model.currentLetter),this.view.drawErrorMsg(this.game.handleLastCityOnCurrentLetterError());let n=this.game.searchByOpponent(this.model.currentLetter);return void 0!==n&&(1===n?this.view.drawErrorMsg(this.game.handleLastCityOnCurrentLetterError()):this.view.drawErrorMsg(this.game.generateError(n))),this.view.drawEnteredCity(this.model.currentCity,"opponent"),void this.view.refreshCurrentLetter(this.model.currentLetter)}this.game.addToMentionedCities(e),this.game.handleLastLetter(e,1),this.view.drawEnteredCity(e,"user");let t=this.game.searchByOpponent(this.model.currentLetter);void 0!==t&&(1===t?this.view.drawErrorMsg(this.game.handleLastCityOnCurrentLetterError()):this.view.drawErrorMsg(this.game.generateError(t))),this.view.drawEnteredCity(this.model.currentCity,"opponent"),this.view.refreshCurrentLetter(this.model.currentLetter)},this.model=e,this.game=t,this.view=n,this.view.submitEnteredCity(this.handleSubmitEnteredCity),console.log(this)}}var s=n(379),a=n.n(s),d=n(795),l=n.n(d),c=n(569),u=n.n(c),h=n(565),p=n.n(h),m=n(216),f=n.n(m),g=n(589),b=n.n(g),x=n(247),y={};y.styleTagTransform=b(),y.setAttributes=p(),y.insert=u().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=f(),a()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("section.cities-main-block-inner"),n=new i(e,"#cityForm"),s=new t,a=new r(s);new o(s,a,n)}))})()})();