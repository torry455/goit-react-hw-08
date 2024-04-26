import { useState, useEffect, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Register from "./pages/Registration/Registration";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./routes/PrivateRoute";
import RestrictedRoute from "./routes/RestrictedRoute";
import { useLocation } from "react-router-dom";
import Loader from "./components/Loader/Loader";

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  const location = useLocation();

  const link = location.pathname;

  const dispatch = useDispatch();

  const [locationLink, setTheLink] = useState("");

  useEffect(() => {
    dispatch(refreshUser()), setTheLink(link);
  }, [dispatch, link]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <main>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<Home />} className="header" />
            <Route path="contacts" element={<Contacts />} className="header" />
          </Route>
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo={locationLink}>
                <Login />
              </RestrictedRoute>
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo={locationLink}>
                <Register />
              </RestrictedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
