import { useMantineColorScheme } from "@mantine/core";
import React, { useMemo } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AlertWrapper = ({ children }) => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMemo(
    () => (colorScheme === "dark" ? "light" : "dark"),
    [colorScheme]
  );

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
      {children}
    </>
  );
};

export default AlertWrapper;
