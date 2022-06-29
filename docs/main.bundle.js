(()=>{"use strict";var t=function(t,e,r,i){return new(r||(r=Promise))((function(s,n){function o(t){try{a(i.next(t))}catch(t){n(t)}}function h(t){try{a(i.throw(t))}catch(t){n(t)}}function a(t){var e;t.done?s(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,h)}a((i=i.apply(t,e||[])).next())}))};class e{constructor(){this.list,this.country,this.currentCity="",this.formattedCities=[],this.mentionedСities=[],this.currentLetter="",this.errors={0:"Игра закончилась. Перезагрузите страницу чтобы начать заново.",1:this.handleLastCityOnCurrentLetterError(),2:this.handleNoCityFoundError(),3:"Такой город уже называли.",4:"Новый город должен начинаться на последнюю букву предыдущего города"},this.forbiddenLetters=["ё","ь","ы","ъ",0,1,2,3,4,5,6,7,8,9,"-"],this.getCountriesList()}getCountriesList(){return t(this,void 0,void 0,(function*(){let t=yield fetch("https://api.hh.ru/areas");this.list=yield t.json(),void 0!==this.list&&(this.country=this.list[0]),this.getCitiesList(this.country)}))}getCitiesList(e){return t(this,void 0,void 0,(function*(){this.country=e,null==e||e.areas.forEach((t=>t.areas.length?this.formattedCities.push(...t.areas):this.formattedCities.push(t))),this.formatData(this.formattedCities)}))}formatData(t){return t.forEach((t=>{t.name.includes("(")&&(t.name=t.name.slice(0,t.name.lastIndexOf("(")-1),t.name.trim())})),this.list=[...new Set(this.list)]}handleLastCityOnCurrentLetterError(){var t;return`Все города на букву "${null===(t=this.currentCity[0])||void 0===t?void 0:t.toUpperCase()}" были названы.`}handleNoCityFoundError(){var t;return`Похоже, в стране ${null===(t=this.country)||void 0===t?void 0:t.name} нет такого города.`}}class r{constructor(t){this.model=t}generateError(t){return this.model.errors[t]}handleLastCityOnCurrentLetterError(){return this.model.handleLastCityOnCurrentLetterError()}handleNoCityFoundError(){return this.model.handleNoCityFoundError()}checkIfFirstLetterCorrect(t){return t[0].toLowerCase()===this.model.currentLetter.toLowerCase()}checkIfCityInList(t,e){return e.some((e=>e.name.toLowerCase()===t.toLowerCase()))}checkIfCityWasMentioned(t){return void 0===typeof t?1:this.model.mentionedСities.some((e=>e.toLowerCase()===(null==t?void 0:t.toLowerCase())))}handleIfNoMOreCitiesOnCurrentLetter(t,e){let r;r=this.model.mentionedСities.length?this.model.mentionedСities[this.model.mentionedСities.length-1].toLowerCase():t,this.model.forbiddenLetters.some((e=>e===t[0].toLowerCase()))||this.model.forbiddenLetters.push(t[0].toLowerCase()),this.handleLastLetter(r,++e)}checkIfThereIsMoreCitiesOnCurrentLetter(t){var e;let r=[];return null===(e=this.model.formattedCities)||void 0===e||e.forEach((e=>{t[0].toLowerCase()===e.name[0].toLowerCase()&&r.push(e)})),console.log(r.length,r.length>1,t),r.length>1}addToMentionedCities(t){this.model.mentionedСities.push(t)}checkIfCityEndsOnForbiddenLetter(t,e){return this.model.forbiddenLetters.some((r=>t[t.length-e]===r.toString()))}handleLastLetter(t,e=1){if(this.checkIfCityEndsOnForbiddenLetter(t,e))return this.handleLastLetter(t,++e);this.setCurrentLetter(t[t.length-e]),e=1}setCurrentLetter(t){this.model.currentLetter=t}setCurrentCity(t){this.model.currentCity=t}getCitiesListOnCurrentLetter(t){return this.model.formattedCities.filter((e=>t.toLowerCase()===e.name[0].toLowerCase()))}generateRandom(t,e=0){let r=t-e,i=Math.random();return i=Math.floor(i*r),i+=e,i}searchByOpponent(t){let e,r=this.getCitiesListOnCurrentLetter(t);if(!r)return 0;if(e=r[this.generateRandom(0,(null==r?void 0:r.length)-1)].name,!this.checkIfThereIsMoreCitiesOnCurrentLetter(t)){let t=1;return this.handleIfNoMOreCitiesOnCurrentLetter(e,++t),this.addToMentionedCities(e),this.handleLastLetter(e,1),this.setCurrentCity(e),1}this.addToMentionedCities(e),this.handleLastLetter(e,1),this.setCurrentCity(e)}}class i{constructor(t,e){var r;this.formWrapper=t,this.currentLetterBlock=null!==this.formWrapper?this.formWrapper.querySelector(".current-letter"):null,this.form=t.querySelector(`${e}`),this.submitBtn=null!==this.form?this.form.querySelector(".city-submit"):null,this.errorBlock=null!==this.formWrapper?this.formWrapper.querySelector(".error-block"):null,this.errorBlockInner=null!==this.errorBlock?null===(r=this.errorBlock)||void 0===r?void 0:r.querySelector(".error-text"):null,this.textInput=null!==this.form?this.form.querySelector(".city-value"):null,this.mentionedListBlock=t.querySelector("ul")}isTextInputValue(t){return null!==t}submitEnteredCity(t){var e;null===(e=this.form)||void 0===e||e.addEventListener("submit",(e=>{e.preventDefault(),t(this.textInput),this.resetCity()}))}drawErrorMsg(t){var e;null===(e=this.errorBlock)||void 0===e||e.classList.remove("hidden"),this.errorBlockInner instanceof HTMLElement&&(this.errorBlockInner.innerText=t),setTimeout((()=>{var t;null===(t=this.errorBlock)||void 0===t||t.classList.add("hidden")}),3e3)}drawEnteredCity(t,e){var r;const i=document.createElement("li");"user"===e?i.classList.add("user"):i.classList.add("opponent"),i.innerText=t,null===(r=this.mentionedListBlock)||void 0===r||r.append(i),i.scrollIntoView({block:"center"})}resetCity(){this.isTextInputValue(this.textInput)&&(this.textInput.value="")}refreshCurrentLetter(t){this.currentLetterBlock instanceof HTMLHeadingElement&&(this.currentLetterBlock.innerText=`Текущая буква: ${t.toUpperCase()}`)}}class s{constructor(t,e,r){this.handleSubmitEnteredCity=t=>{const e=t.value;this.game.setCurrentCity(e),this.handleSelectedCity(e)},this.handleSelectedCity=t=>{if(!this.game.checkIfCityInList(this.model.currentCity,this.model.formattedCities))return this.view.drawErrorMsg(this.game.handleNoCityFoundError());if(this.game.checkIfThereIsMoreCitiesOnCurrentLetter(t)&&this.game.setCurrentCity(t),!this.game.checkIfFirstLetterCorrect(t[0])&&this.model.mentionedСities.length)return this.view.drawErrorMsg(this.model.errors[4]);if(this.game.checkIfCityWasMentioned(t))return this.view.drawErrorMsg(this.model.errors[3]);if(!this.game.checkIfThereIsMoreCitiesOnCurrentLetter(t)){let e=1;this.game.handleIfNoMOreCitiesOnCurrentLetter(t,++e),this.game.addToMentionedCities(t),this.game.handleLastLetter(t,1),this.game.setCurrentCity(t),this.view.drawEnteredCity(this.model.currentCity,"user"),this.view.refreshCurrentLetter(this.model.currentLetter),this.view.drawErrorMsg(this.game.handleLastCityOnCurrentLetterError());let r=this.game.searchByOpponent(this.model.currentLetter);return void 0!==r&&(1===r?this.view.drawErrorMsg(this.game.handleLastCityOnCurrentLetterError()):this.view.drawErrorMsg(this.game.generateError(r))),this.view.drawEnteredCity(this.model.currentCity,"opponent"),void this.view.refreshCurrentLetter(this.model.currentLetter)}this.game.addToMentionedCities(t),this.game.handleLastLetter(t,1),this.view.drawEnteredCity(t,"user");let e=this.game.searchByOpponent(this.model.currentLetter);void 0!==e&&(1===e?this.view.drawErrorMsg(this.game.handleLastCityOnCurrentLetterError()):this.view.drawErrorMsg(this.game.generateError(e))),this.view.drawEnteredCity(this.model.currentCity,"opponent"),this.view.refreshCurrentLetter(this.model.currentLetter)},this.model=t,this.game=e,this.view=r,this.view.submitEnteredCity(this.handleSubmitEnteredCity),console.log(this)}}document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector("section.cities-main-block-inner"),n=new i(t,"#cityForm"),o=new e,h=new r(o);new s(o,h,n)}))})();