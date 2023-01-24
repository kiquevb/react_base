import { toast } from "react-toastify";

const Alert = (function () {
  const info = (message) => {
    toast.info(message);
  };

  const success = (message) => {
    alert(`Success! ${message}`);
  };

  const error = (message) => {
    alert(`Error! ${message}`);
  };

  return {
    success,
    error,
    info,
  };
})();

export default Alert;
