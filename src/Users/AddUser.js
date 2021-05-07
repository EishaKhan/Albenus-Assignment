import React, {useState} from 'react';
import {useHistory}from "react-router-dom";
import axios from 'axios';
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

const AddUser = () => {
  const classes = useStyles();
  let history = useHistory();
  const [ user , setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: ""
});

const[error, setError] = useState("");

const {  id, name, email, phone, address } = user;
const onInputChange = e =>{
    setUser({...user , [e.target.name]: e.target.value})
};

const onSubmit = async e => {
  console.log("UserId")
};
const formData = async e => {
  console.log("Data:", user)
  e.preventDefault();
  setError("");
  const reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if(id===""){
    alert("Please Enter your Id")
  }
  else if(name===""){
    alert("Please Enter your Name")
  }
  else if(email===""){
    alert("Please Enter your Email")
  }
  else if(reg.test(email)===false){
    alert("Invalid Email Address")
  }
  else if(phone===""){
    alert("Please Enter your Mobile Number")
  }
  else if ( phone.trim().length < 10) {
     alert("Mobilenumber must be 10 digits");
  }
  else if ( phone.trim().length > 12) {
     alert("Invalid mobile number");
  }
  else if(address===""){
    alert("Please Enter your Address")
  }
  else{
  await axios.post("http://localhost:3001/users" , user);
  alert("User Added succesfully !")
  history.push("/");
  }
}
    return(
      <div>
      <Container  maxWidth="sm" style={{boxShadow: '2px 2px  3px'}}>
      <h2 className="text-center mt-4  mb-4">Add User</h2>
      <form className={classes.root}  onSubmit={e => onSubmit(e)}>
        <div>
          <TextField
            required = {true}
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
            required
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
            required
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
            required
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
            required
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
        Add Users
        </Button>
      </form>
      </Container>
      </div>
    )
}

export default AddUser;