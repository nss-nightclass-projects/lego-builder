import axios from 'axios';

const getLegos = () => axios.get('https://api.myjson.com/bins/fxbrq');

export default getLegos;
