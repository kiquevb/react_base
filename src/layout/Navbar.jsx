import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, ScrollArea } from "@mantine/core";

import Icons, { MyIcon } from "@infra/Icons";
import { useLayoutStore } from "@/store/layout.store";
import { paths, menu } from "@/navigation/navigation.exports";

import { useStyles } from "@layout/Styles/Navbar.styles";

const NavbarComponent = () => {
  const { classes, cx } = useStyles();
  const location = useLocation();

  const active = useMemo(() => location.pathname, [location.pathname]);

  const isOpen = useLayoutStore((state) => state.isNavbarOpen);
  const handleClose = useLayoutStore((state) => state.close);

  // Map elements from navigation/menu
  const links = menu.map((item, index) => (
    <p key={index} onClick={handleClose}>
      <Link
        className={cx(classes.link, {
          [classes.linkActive]: active.includes(item.path),
        })}
        to={item?.path}
      >
        {item?.icon && <item.icon className={classes.linkIcon} stroke={1.5} />}
        <span>{item?.label}</span>
      </Link>
    </p>
  ));

  return (
    <Navbar
      className={classes.navbar}
      width={{ xs: 220 }}
      hidden={!isOpen}
      hiddenBreakpoint="xs"
    >
      <Navbar.Section grow>
        <ScrollArea scrollHideDelay={200} offsetScrollbars={false}>
          {links}
        </ScrollArea>
      </Navbar.Section>

      <Navbar.Section>
        <Link to={paths.logout} className={classes.link}>
          <MyIcon
            icon={Icons.icon_logout}
            className={classes.linkIcon}
            stroke={1.5}
          />
          <span>{paths.names.logout}</span>
        </Link>
      </Navbar.Section>
    </Navbar>
  );
};

export default NavbarComponent;
