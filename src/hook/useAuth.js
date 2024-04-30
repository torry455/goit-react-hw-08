import { useSelector } from "react-redux";
import {
  selectToken,
  selectIsRefreshing,
  selectUser,
  selectIsLoggedIn,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    token,
  };
};