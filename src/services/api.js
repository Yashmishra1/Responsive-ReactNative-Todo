import axios from 'axios';
import  config from '../config';

const host = config.SERVER_HOST;
console.log("server",host);
const instance = axios.create({
  baseURL: 'https://api.github.com/',
});
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.common.Accept = 'application/json';

export const API = {
  Todo: {
    getList: async () => {
      return instance
        .get(config.TODO)
        .then(res => {
          return console.log(res);
        })
        .catch(err => {
          return err;
        });
    },
    getDetails : async () => {
      return instance
      .get(config.TODO_DETAILS)
      .then(res => {
        return console.log(res);
      })
      .catch(err => {
        return err;
      })
    }
  },
};
module.exports = API;
