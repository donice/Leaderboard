import './style.css';
import {
  populate, addScore,
} from './utils.js';

const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addScore();
});

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', async () => {
  populate();
});
