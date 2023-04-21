import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  useMediaQuery,
  Button,
} from "@mui/material";

import {
  DarkMode,
  Search,
  Notifications,
  Menu,
  LightMode,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { MODE } from "utils/constants";
import Searchbar from "components/Searchbar/Searchbar";
import Logo from "components/Logo";

const Navbar = () => {
  const dispatch = useDispatch();
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  // const theme = useTheme();
  const mode = useSelector((state) => state.globalReducer.mode);

  //   const fullName = `${user.firstName} ${user.lastName}`;

  const toggleTheme = () => {
    if (mode === "light") {
      dispatch({ type: MODE, payload: "dark" });
    } else {
      dispatch({ type: MODE, payload: "light" });
    }
  };

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        {!isNonMobileScreen && (
          <IconButton
            size="large"
            aria-label="menu"
            color="default"
            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          >
            <Menu color="secondary" />
          </IconButton>
        )}
        <Logo />
        {isNonMobileScreen && (
          <>
            <Box flexGrow={1} />
            <Searchbar />
          </>
        )}
        <Box flexGrow={1} />
        {!isNonMobileScreen && (
          <IconButton size="large" aria-label="dark mode" color="default">
            <Search color="secondary" />
          </IconButton>
        )}

        <IconButton
          size="large"
          aria-label="dark mode"
          color="default"
          onClick={toggleTheme}
        >
          {mode === "light" ? (
            <DarkMode color="secondary" />
          ) : (
            <LightMode color="secondary" />
          )}
        </IconButton>
        <IconButton size="large" aria-label="dark mode" color="default">
          <Notifications color="secondary" />
        </IconButton>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          sx={{ ml: 1 }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
