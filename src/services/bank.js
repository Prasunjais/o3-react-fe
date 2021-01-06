import axios from 'axios';
import { api as APIConfig } from '../AppConfig';

//Get Application Information
export const searchBank = async (city = 'bombay') => {

  // hitting the api 
  return axios.get(APIConfig.base_url + '?city=' + (city).toUpperCase(), { timeout: 20000 }).then(response => {
    console.log('response', response);
    return { success: true, data: response };
  }).catch(err => {
    console.log('ERROR', err);
    return { success: false, error: err };
  });
}
