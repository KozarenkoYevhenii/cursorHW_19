import React, { Component } from "react";
import Contact from "../Contact/Contact";
import "./Contacts.css";

const CONTACTS = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

class Contacts extends Component {
  state = {
    contacts: [...CONTACTS],
    filteredContacts: [...CONTACTS],
    search: "",
  };
  handleSearchChange = (e) => {
    const currentInput = e.target.value;
    this.setState({
      search: currentInput,
      filteredContacts: this.state.contacts.filter((contact) =>
        contact.lastName
          .toLocaleLowerCase()
          .includes(currentInput.toLocaleLowerCase()) || contact.firstName
          .toLocaleLowerCase()
          .includes(currentInput.toLocaleLowerCase())
      ),
    });
  };
  render() {
    return (
      <div>
        <div className="search">
          <label>
            Search:{" "}
            <input
              className="input"
              type="text"
              value={this.state.search}
              onChange={this.handleSearchChange}
            ></input>
          </label>
        </div>
        <div>
          {this.state.filteredContacts.map((contact) => (
            <Contact contact={contact} />
          ))}
        </div>
      </div>
    );
  }
}

export default Contacts;
