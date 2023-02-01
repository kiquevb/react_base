import React from "react";
import {
  Burger,
  Header,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";

import {
  ThemeToggler,
  Blank,
  LanguageSelector,
} from "@/components/components.exports";
import { useLayoutStore } from "@/store/layout.store";

const HeaderComponent = () => {
  const theme = useMantineTheme();

  const open = useLayoutStore((state) => state.isNavbarOpen);
  const handleOpen = useLayoutStore((state) => state.toggle);

  return (
    <Header height={{ base: 50 }} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="xs" styles={{ display: "none" }}>
          <Burger
            opened={open}
            onClick={handleOpen}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <ThemeToggler />
        <Blank />
        <Text>Random games</Text>
        <Blank />
        <LanguageSelector />
      </div>
    </Header>
  );
};

export default HeaderComponent;
