import React from "react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Icons, MyIcon } from "@infra/_exports";

const ThemeToggler = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <ActionIcon
      sx={(theme) => ({
        border: "none",
        backgroundImage: theme.fn.gradient(
          colorScheme === "dark"
            ? {
                from: "red",
                to: "yellow",
              }
            : {
                from: "blue",
                to: "dark",
              }
        ),
        color: theme.white,
      })}
      variant="light"
      onClick={() => toggleColorScheme()}
      size="md"
      radius="md"
    >
      {colorScheme === "dark" ? (
        <MyIcon icon={Icons.icon_sun} size={18} />
      ) : (
        <MyIcon icon={Icons.icon_moonStars} size={18} />
      )}
    </ActionIcon>
  );
};

export default ThemeToggler;
