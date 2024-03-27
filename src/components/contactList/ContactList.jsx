import css from "./ContactList.module.css";
import Contact from "../contact/Contact";

export default function ContactList({ contacts, filteredContacts }) {
  const displayedContacts = filteredContacts ? filteredContacts : contacts;

  return (
    <div className={css["container-contacts"]}>
      {displayedContacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          id={contact.id}
          number={contact.number}
        />
      ))}
    </div>
  );
}
