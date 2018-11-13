import $ from 'jquery';
import 'bootstrap';
import './legoCharacter.scss';
import getLegos from './legoGetter';

const createLegoCards = (legos) => {
  let newString = '';
  legos.forEach((lego) => {
    newString += `
      <div class="card u">
      <h3 class="player-name">${lego.name}</h3>
      <div class="card-body">
        <img src="${lego.headImage}" alt="" class="card-media" id="head"/>
        <input type="radio" name="wonder-woman" id="wonder-woman">Wonder Woman<br>
        <input type="radio" name="smooth-operator" id="smooth-operator">Smooth Operator<br>
        <input type="radio" name="thomas-jefferson" id="thomas-jefferson">Thomas Jefferson<br> 
        <img src="${lego.torsoImage}" alt="" class="card-media" />
        <input type="radio" name="guard-uniform" id="guard-uniform">Guard Uniform<br>
        <input type="radio" name="dolphin-shirt" id="dolphin-shirt">Dolphin Shirt<br>
        <input type="radio" name="astronaut-shirt" id="astronaut-shirt">Astronaut Shirt<br> 
        <img src="${lego.legImage}" alt="" class="card-media" />
        <input type="radio" name="white-pants" id="white-pants">White<br>
        <input type="radio" name="tan-pants" id="tan-pants">Tan<br>
        <input type="radio" name="blue-pants" id="blue-pants">Blue<br> 
      </div>
      </div>`;
  });
  $('#legos').html(newString);
};

$(document).ready(() => {
  $('input:radio[name=wonder-woman]').click(() => {
    console.log('hello');
  });
  $('input:radio[name=smooth-operator]').click(() => {
    console.log('hello');
  });
  $('input:radio[name=thomas-jefferson]').click(() => {
    console.log('hello');
  });
});

$(document).ready(() => {
  $('input:radio[name=guard-uniform]').click(() => {
    console.log('hello');
  });
  $('input:radio[name=dolphin-shirt]').click(() => {
    console.log('hello');
  });
  $('input:radio[name=astronaut-shirt]').click(() => {
    console.log('hello');
  });
});

$(document).ready(() => {
  $('input:radio[name=white-pants]').click(() => {
    console.log('hello');
  });
  $('input:radio[name=tan-pants]').click(() => {
    console.log('hello');
  });
  $('input:radio[name=blue-pants]').click(() => {
    console.log('hello');
  });
});
getLegos()
  .then((data) => {
    console.log(data.data.legos);
    createLegoCards(data.data.legos);
  })
  .catch((error) => {
    console.error({ error });
  });
