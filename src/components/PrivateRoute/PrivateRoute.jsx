import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : history.push("/login")
      }
    />
  );
};

export default PrivateRoute;
