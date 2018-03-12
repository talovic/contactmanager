import request from 'superagent/lib/client';

export default {
  getContacts: url => {
    return new Promise((resolve, reject) => {
      request.get(url).end((err, response) => {
        if (err) reject(err);
        resolve(JSON.parse(response.text));
      });
    });
  },
  saveContact: (url, contact) => {
    return new Promise((resolve, reject) => {
      request
        .post(url)
        .send(contact)
        .end((err, response) => {
          if (err) reject(err);
          resolve(JSON.parse(response.text));
        });
    });
  }
};

