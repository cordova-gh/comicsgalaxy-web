import axios from 'axios';

export const APIGET = async (PATH: any) => {
  return axios.get(`https://comicsgalaxy.ew.r.appspot.com/api/${PATH}`);
};
