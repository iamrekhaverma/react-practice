import Axios from "axios";
const getUrl = (url) => {
  return process.env.REACT_APP_BACKEND_BASEURL + url;
};

class Service {
  getRequest = (url, params) => {
    return new Promise((resolve, reject) => {
      Axios.get(getUrl(url), params)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  postRequest = (url, obj) => {
    return new Promise((resolve, reject) => {
      Axios.post(getUrl(url), obj)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  putRequest = (url, obj) => {
    return new Promise((resolve, reject) => {
      Axios.put(getUrl(url), obj)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
}

export default new Service();
