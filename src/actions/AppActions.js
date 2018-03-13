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
  },

  saveContact: contact => {
    ContactsAPI.saveContact(
      'https://jsonplaceholder.typicode.com/users',
      contact
    )
      .then(contact => {
        AppDispatcher.dispatch({
          actionType: AppConstants.RECIEVE_CONTACT,
          contact: contact
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: AppConstants.RECIEVE_CONTACT_ERROR,
          message: message
        });
      });
  },

  deleteContact: id => {
    ContactsAPI.deleteContact(
      'https://jsonplaceholder.typicode.com/users/' + id
    )
      .then(contact => {
        AppDispatcher.dispatch({
          actionType: AppConstants.DELETE_CONTACT,
          id: id
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: AppConstants.DELETE_CONTACT_ERROR,
          message: message
        });
      });
  }
};

