import css from "./Contact.module.css";
import { HiPhone } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import clsx from "clsx";

function Contact({ id, name, number, isOpen }) {
  const dispatch = useDispatch();
  const btnClass = clsx(css.btn, css.delete);

  return (
    <li className={css.ContactItem}>
      <p className={css.contacts}>
        <span className={css.span}>
          <HiUser className={css.icon} />
          {name}
        </span>
        <span className={css.span}>
          <HiPhone className={css.icon} />
          {number}
        </span>
      </p>
      <div className={btnClass}>
        <button
          className={css.btnDelete}
          onClick={() => dispatch(deleteContact(id))}
          type="button"
        >
          {"Delete"}
        </button>
        <button
          className={css.btnEdit}
          onClick={() => isOpen({ id, name, number })}
        >
          Edit
        </button>
      </div>
    </li>
  );
}

export default Contact;
