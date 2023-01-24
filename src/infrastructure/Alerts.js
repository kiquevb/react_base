const Alert = (function () {
  const success = (message) => {
    alert(`Success! ${message}`);
  };

  const error = (message) => {
    alert(`Error! ${message}`);
  };

  return {
    success,
    error,
  };
})();

export default Alert;
