import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({ component: Component, restricted, ...rest }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn && restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default RestrictedRoute;
