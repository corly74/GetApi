import axios from "axios";

const apiClient = url => {

    const instance = axios.create({
      baseURL: url,
      headers: {
        'Content-Type': 'application/json',
        'ck':'PK4KHAFS0PYC13YU1U',
        
      },
      timeout: 300000,
    });
    return instance;
  };

;

  const get = (path, parameters = {}) => {
    const client = apiClient(path);
    return client
      .get(path, { params: parameters })
      .catch(error => {
        
        return error.message;
      })
      .then(response => response);
  };
  
  export const ApiFunction = {
    get,
   
  };
  
