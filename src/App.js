import React, { useEffect, useState } from "react";

import Posts from "./components/posts/Posts";
import Form from "./components/form/Form";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";

import { getPosts } from "./actions/posts";
const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src="" alt="" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
