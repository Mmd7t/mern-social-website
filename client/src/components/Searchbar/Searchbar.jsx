import React from "react";
import FlexBetween from "components/FlexBetween";
import { IconButton, InputBase, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { Search } from "@mui/icons-material";

const Searchbar = () => {
  const mode = useSelector((state) => state.globalReducer.mode);
  const theme = useTheme();

  return (
    <FlexBetween>
      <InputBase
        sx={{
          mr: 1,
          p: 1,
          pl: 2,
          width: "24rem",
          borderRadius: "10px",
          backgroundColor:
            mode === "dark" ? "#222222" : `${theme.palette.background.default}`,
        }}
        placeholder="Search"
      />
      <IconButton
        type="button"
        sx={{
          backgroundColor:
            mode === "dark" ? "#222222" : `${theme.palette.primary.main}`,
          borderRadius: "10px",
          p: 1.5,
        }}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </FlexBetween>
  );
};

export default Searchbar;
