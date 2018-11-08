import axios from 'axios';

const getHeads = () => axios.get('http://localhost:3005/heads');
// const getTorsos = () => axios.get('http://localhost:3005/torsos');
// const getLegs = () => axios.get('http://localhost:3005/legs');

export default getHeads;
// export default getTorsos;
// export default getLegs;
