import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '62ch',
    },
  },
}));

const EditUser = () => {
  const classes = useStyles();
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const { name, email, phone, address } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const formData = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    alert("User data Updated !")
    history.push("/");
  }
  const onSubmit = async e => {
    console.log("UserId")
  };

  // const onSubmit = async e => {
  //   e.preventDefault();
  //   await axios.put(`http://localhost:3001/users/${id}`, user);
  //   alert("User data Updated !")
  //   history.push("/");
  // };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };
  return (
    <div>
    <Container  maxWidth="sm" style={{boxShadow: '2px 2px  3px'}}>
        <h2 className="text-center mb-4">Edit A User</h2>
        <form className={classes.root}  onSubmit={e => onSubmit(e)}>
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Enter Your Employee-Id "
            rowsMax={4}
            name="id"
            value={id}
            onChange={e => onInputChange(e)}
            variant="outlined"
            required
          />
        </div>
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Enter Your Name"
            rowsMax={4}
            name="name"
            value={name}
            onChange={e => onInputChange(e)}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Enter Your Email"
            rowsMax={4}
            name="email"
            value={email}
            onChange={e => onInputChange(e)}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Enter Your Number"
            rowsMax={4}
            name="phone"
            value={phone}
            onChange={e => onInputChange(e)}
            variant="outlined"
          />
        </div>
       <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Enter Your Address"
            rowsMax={4}
            name="address"
            value={address}
            onChange={e => onInputChange(e)}
            variant="outlined"
          />
        </div>
        <Button 
        type="submit"
        onClick={e => formData(e)}
        variant="contained" 
        style={{
        marginBottom:'20px',
        boxShadow: 'none',
        backgroundColor: '#17a2b8',
       }}>
        User Update
        </Button>
        </form>
        </Container>
      </div>
  )
};

export default EditUser;