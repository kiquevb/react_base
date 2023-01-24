import React, { useState } from "react";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";

import my_theme from "@infra/Theme";

const ThemeWrapper = ({ children }) => {
  const [colorScheme, setColorScheme] = useState(my_theme.cs.light);

  const toggleColorScheme = (value) =>
    setColorScheme(
      value ||
        (colorScheme === my_theme.cs.dark
          ? my_theme.cs.light
          : my_theme.cs.dark)
    );

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default ThemeWrapper;
