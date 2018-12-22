import {authorisationService} from './auth';

// const INNOVATION_URL = 'https://3ygoxmajhe.execute-api.eu-west-1.amazonaws.com/v1/refinery-data';
// const INNOVATION_API_KEY = 'zssuaZf5B52fDFtgV5Z8E8KWyYgmR1oJa2oQ6Q32';

const DEV_URL = 'https://3lzga8lt4i.execute-api.us-east-1.amazonaws.com/v1/refinery-data';
const DEV_API_KEY = 'zssuaZf5B52fDFtgV5Z8E8KWyYgmR1oJa2oQ6Q32';

const URL = DEV_URL;
const KEY = DEV_API_KEY;

export const refineryService = {
  getRefineryList: async function(status, runs) {

    authorisationService.connection = 'dev';
    let token = await authorisationService.getAuthToken();
    return fetch(`${URL}/location?perPage=5000`, { headers: {
        "x-api-key":KEY,
        "Authorization": token
      }})
      .then(res => res.json())
      .then(data => {
        return data.data.map(refinery => {
          let [country, city, name] = refinery.refinery.split(" | ");
          return ({
            ...refinery,
            name: name,
            city: city,
            country: country
          })
        });
      });
  }
}
