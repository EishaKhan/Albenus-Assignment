import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const UserView = () => {
const classes = useStyles();
const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        address: ""
      });

const { id } = useParams();
useEffect(() => {
    loadUser();
}, []);

const loadUser = async () => {
const res = await axios.get(`http://localhost:3001/users/${id}`);
setUser(res.data);
};

return(
    <div className="container py-4">
    <Link className="btn btn-info" to="/">
      back to Home
    </Link>
    <h1 className="display-4">Employee Id: {id}</h1>
    <hr />
    <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
          <div className={classes.demo}>
                <List >
                <ListItem>empId:  {user.id}</ListItem>
                <ListItem>Name:   {user.name}</ListItem>
                <ListItem>Email:  {user.email}</ListItem>
                <ListItem>Phone:   {user.phone}</ListItem>
                <ListItem>Address: {user.address}</ListItem>
            </List>
          </div>
        </Grid>
        </Grid>
  </div>
    )
}

export default UserView;