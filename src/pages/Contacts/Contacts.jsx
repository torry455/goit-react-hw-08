import { useState, useEffect } from "react";
import "../../App.css";

import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import NewModal from "../../components/Modal/Modal";
import { Toaster } from "react-hot-toast";

function Contacts() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id, setId] = useState("");

  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function isOpenModal(contact) {
    setId(contact);
    setModalIsOpen(true);
  }

  function close() {
    setModalIsOpen(false);
  }

  return (
    <div className="main">
      <div className="forms">
        <ContactForm />
        <SearchBox />
      </div>
      {isLoading && <Loader className="loader" />}
      <ContactList isOpen={isOpenModal} />
      <NewModal isOpen={modalIsOpen} onClose={close} contact={id} />
      <Toaster
        toastOptions={{
          className: "toaster",
        }}
        containerStyle={{
          top: 300,
        }}
      />
    </div>
  );
}

export default Contacts;
