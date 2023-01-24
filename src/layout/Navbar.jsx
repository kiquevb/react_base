import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, ScrollArea } from "@mantine/core";

import Icons, { MyIcon } from "@infra/Icons";
import { store_navbar_open } from "@layout/layout.store";
import { paths, menu } from "@/navigation/navigation.exports";

import { useStyles } from "@layout/Styles/Navbar.styles";

const NavbarComponent = () => {
  const { classes, cx } = useStyles();
  const open = useSelector(store_navbar_open);
  const location = useLocation();

  const active = useMemo(() => location.pathname, [location.pathname]);

  // Map elements from navigation/menu
  const links = menu.map((item, index) => (
    <p key={index}>
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
      hidden={!open}
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
