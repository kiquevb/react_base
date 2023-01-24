import React from "react";
import {
  Burger,
  Header,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";

import { ThemeToggler, Blank } from "@/components/components.exports";
import { store_navbar_open, toggle_navbar_open } from "@layout/layout.store";

const HeaderComponent = () => {
  const theme = useMantineTheme();

  const open = useSelector(store_navbar_open);
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(toggle_navbar_open());

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
      </div>
    </Header>
  );
};

export default HeaderComponent;
