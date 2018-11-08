import $ from 'jquery';
import 'bootstrap';
import '../../index.scss';

import getHeads from '../../data/partsData';
// import getTorsos from '../../data/partsData';
// import getLegs from '../../data/partsData';


const loadHeads = (heads) => {
  let headPrint = '';
  heads.forEach((head) => {
    headPrint += `
    <div>
    <img class="img-responsive" style="width: 5rem" src="${head.imageUrl}"></img>
    <h6>${head.name}</h6>
    </div>
    `;
    $('part-head').html(headPrint);
  });
};

getHeads()
  .then((data) => {
    console.log(data.data);
    loadHeads(data.data);
  })
  .catch((error) => {
    console.error(error);
  });

$('part-head').show();
