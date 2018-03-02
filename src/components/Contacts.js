import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import ContactListItem from './ContactListItem';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

function getContactListItem(contact) {
  return <ContactListItem key={contact.id} contact={contact} />;
}

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    AppStore.addChangeListener(this.onChange);
  }

  componentDidMount() {
    AppActions.recieveContacts();
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState(
      {
        contacts: AppStore.getContacts()
      },
      function() {
        //console.log(this.state);
      }
    );
  }

  render() {
    let contactListItems;
    if (this.state.contacts) {
      contactListItems = this.state.contacts.map(contact =>
        getContactListItem(contact)
      );
    }
    return (
      <div>
        <ListGroup>{contactListItems}</ListGroup>
      </div>
    );
  }
}

export default Contacts;

