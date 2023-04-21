import Navbar from "components/Navbar/Navbar";
import React from "react";
import { Grid, Paper, Container } from "@mui/material";
import PostForm from "components/PostForm/PostForm";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" fixed sx={{ mt: 1.5 }}>
        <Grid container gap={2}>
          <Grid xs>
            <Paper>xs</Paper>
          </Grid>
          <Grid xs={6}>
            <PostForm />
          </Grid>
          <Grid xs>
            <Paper>xs</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
