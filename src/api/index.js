import axios from 'axios';

const KEY = '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const URL = `https://api.unsplash.com/photos/`;

export const fetchImages = async (page) => {
  const res = await axios.get(`${URL}${KEY}&per_page=3&page=${page}`);
  return res.data;
}

export const fetchImageStats = async (id) => {
  const res = await axios.get(`${URL}/${id}/statistics${KEY}`);
  return res.data;
}