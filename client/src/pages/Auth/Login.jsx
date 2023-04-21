import React from "react";
import { TextField, Button } from "@mui/material";

const Login = () => {
  return (
    <form
      autoComplete="off"
      noValidate
      method="post"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <TextField name="email" label="Email" fullWidth />
      <TextField name="password" label="Password" fullWidth />
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        fullWidth
        sx={{ my: 3 }}
        onClick={() => {}}
      >
        Submit
      </Button>
    </form>
  );
};

export default Login;
