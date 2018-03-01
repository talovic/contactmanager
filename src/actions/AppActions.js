import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import ContactsAPI from '../utils/ContactsAPI';

export default {
  recieveContacts: () => {
    ContactsAPI.getContacts('https://jsonplaceholder.typicode.com/users')
      .then(contacts => {
        AppDispatcher.dispatch({
          actionType: AppConstants.RECIEVE_CONTACTS,
          contacts: contacts
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: AppConstants.RECIEVE_CONTACTS_ERROR,
          message: message
        });
      });
  }
};

