import React from "react";
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


const Contact = () => {
const classes = useStyles();
  return(
    <div>
    <Container  maxWidth="sm" style={{boxShadow: '2px 2px  3px'}}>
    <h2 className="text-center mt-4  mb-4">Contact Form</h2>
    <form className={classes.root}>
      <div>
        <TextField
          required = {true}
          id="outlined-multiline-flexible"
          label="Enter Your Name "
          rowsMax={4}
          variant="outlined"
          required
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Enter Your Email"
          rowsMax={4}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Enter Your Password"
          rowsMax={4}
          variant="outlined"
        />
      </div>
       <Button 
      type="submit"
      variant="contained" 
      style={{  
      marginBottom:'20px',
      boxShadow: 'none',
      backgroundColor: '#17a2b8',
      }}>
    Submit
      </Button>
    </form>
    </Container>
    </div>
  )
};

export default Contact;
