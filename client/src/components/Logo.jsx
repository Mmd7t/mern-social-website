import React from "react";
import { Typography, Grid } from "@mui/material";

const Logo = ({ sx, variant = "h3" }) => {
  return (
    <Grid sx={sx}>
      <Typography
        variant={variant}
        component="span"
        color="primary"
        fontWeight={700}
        sx={{ textDecoration: "none" }}
      >
        Socia
      </Typography>
      <Typography
        variant={variant}
        component="span"
        color="secondary"
        fontWeight={700}
        sx={{ textDecoration: "none" }}
      >
        X
      </Typography>
    </Grid>
  );
};

export default Logo;
