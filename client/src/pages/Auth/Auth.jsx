import Navbar from "components/Navbar/Navbar";
import React, { useState } from "react";
import { Container, Grid, Paper, Button } from "@mui/material";
import Logo from "components/Logo";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Navbar />
      <Container maxWidth="sm" fixed sx={{ mt: 1.5 }}>
        <Grid>
          <Paper
            sx={{
              p: 2,
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Logo sx={{ mx: "auto", my: 4 }} variant="h1" />
            {isLogin ? <Login /> : <Signup />}
            <Button
              variant="text"
              color="primary"
              size="large"
              type="submit"
              fullWidth
              sx={{ mt: 1, mb: 3 }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin
                ? "Don't have an account? Signup"
                : "Already have an account? Login"}
            </Button>
          </Paper>
        </Grid>
      </Container>
    </>
  );
};

export default Auth;
