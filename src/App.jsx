import { useState } from "react";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";
import ContactForm from "./components/contactForm/ContactForm";
import "./App.css";

function App() {
  const initialInfo = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [inputValue, setInputValue] = useState("");

  const filteredContacts = initialInfo.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox inputValue={inputValue} setInputValue={setInputValue} />
        <ContactList
          contacts={initialInfo}
          filteredContacts={filteredContacts}
        />
      </div>
    </>
  );
}

export default App;
