import Auth from "@/infrastructure/Auth";
import paths from "@/navigation/paths";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const LogoutView = () => {
  const history = useHistory();

  useEffect(() => {
    Auth.logout();
    history.push(paths.login);
  }, [history]);

  return null;
};

export default LogoutView;
