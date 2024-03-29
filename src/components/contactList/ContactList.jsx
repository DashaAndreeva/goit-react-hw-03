import css from "./ContactList.module.css";
import Contact from "../contact/Contact";

export default function ContactList({
  contacts,
  filteredContacts,
  deleteContact,
}) {
  const displayedContacts = filteredContacts ? filteredContacts : contacts;

  return (
    <div className={css["container-contacts"]}>
      {displayedContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          id={id}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
}
