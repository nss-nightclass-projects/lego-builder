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
        <img src="${lego.headImage}" alt="" class="card-media" id=""head"/>
        <img src="${lego.torsoImage}" alt="" class="card-media" />
        <img src="${lego.legImage}" alt="" class="card-media" />
      </div>
      </div>`;
  });
  $('#legos').html(newString);
};

getLegos()
  .then((data) => {
    console.log(data.data.legos);
    createLegoCards(data.data.legos);
    createLegoOneCards(data.data.legos);
  })
  .catch((error) => {
    console.error({ error });
  });
