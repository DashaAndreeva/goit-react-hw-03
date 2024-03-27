import css from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa";

export default function Contact({ name, number }) {
  return (
    <div className={css["container-contact"]}>
      <div className={css["contact-info"]}>
        <div>
          <FaUser /> {name}
        </div>
        <div>
          <FaPhone /> {number}
        </div>
      </div>
      <button className={css["btn-delete"]}>Delete</button>
    </div>
  );
}
