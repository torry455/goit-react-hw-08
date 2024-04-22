import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { apiGetContacts } from "./redux/contactsOps";
// import ScrollUp from "./components/ScrollUp/ScrollUp";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(apiGetContacts());
  // }, [dispatch]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <RestrictedRoute
            path="/register"
            component={RegistrationPage}
            restricted
          />
          <RestrictedRoute path="/login" component={LoginPage} restricted />
          <PrivateRoute path="/contacts" component={ContactsPage} />
        </Switch>
      </Router>

      <div className="container">
        <h1 className="phonebook-list">Phonebook</h1>
        {/* <ScrollUp /> */}
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
};

export default App;
