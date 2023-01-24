import React from "react";
import { AppShell } from "@mantine/core";

import Content from "@layout/Content";
import Navbar from "@layout/Navbar";
import Header from "@layout/Header";

const Main = () => {
  return (
    <AppShell navbar={<Navbar />} header={<Header />}>
      <Content />
    </AppShell>
  );
};

export default Main;
