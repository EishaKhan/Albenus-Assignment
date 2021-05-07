import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tablehead:{
        color: '#FFFFFF',
        backgroundColor: '#17a2b8',
    },
    tablerow:{
        fontWeight: 'bold',
        color:'white',
    },
    button1:{
      margin: theme.spacing(1),
      textDecoration:"none",
      backgroundColor: '#17a2b8',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#17a2b8',
      }
    },
    button2: {
      margin: theme.spacing(1),
      backgroundColor:'#fff',
      borderColor:"none",
    },
   
    button3:{
      margin: theme.spacing(1),
      borderColor:"#c62828",
      textDecoration:"none",
      backgroundColor: '#c62828',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#e53935',
        color: '#3c52b2',
      }
    },
  }));

const Home = () => {
const [users , setUsers] = useState([]);

useEffect(()=> {
    loadUsers();
}, []);

const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data.reverse());
};

const deleteUser = async id => {
  if (window.confirm("Press a button!")) {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  } else {
    alert("User not deleted !")
  }
  };

const formData = (id) =>{
  console.log("UserId",id)
}
const classes = useStyles();
    return(
        <div className="container">
            <div className="py-4">
            <h1 style={{color:"	#4d99b3 ",}}>
            Users Details
            </h1>
            </div>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead >
                <TableRow className={classes.tablehead} >
                  <TableCell className={classes.tablerow}>id</TableCell>
                  <TableCell className={classes.tablerow} align="right">Name</TableCell>
                  <TableCell className={classes.tablerow} align="right">Email</TableCell>
                  <TableCell className={classes.tablerow} align="right">Phone</TableCell>
                  <TableCell className={classes.tablerow} align="right">Address</TableCell>
                  <TableCell className={classes.tablerow} align="right"></TableCell>
                  <TableCell className={classes.tablerow} align="right" >Action</TableCell>
                  <TableCell className={classes.tablerow} align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
        {
            users.map((user, index) => (
            <TableRow key={index+1}>
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">{user.address}</TableCell> 
            <TableCell align="right">
            <Button  className={classes.button1} variant="contained">
            <Link to={`/users/${user.id}`}  style={{textDecoration:"none",color:'white'}}>View </Link>
            </Button>
            </TableCell>
            <TableCell align="right">
            <Button className={classes.button2}
            onClick={e => formData(user.id)}
            variant="contained" >
            <Link to={`/users/edit/${user.id}`} style={{textDecoration:"none"}}>
                Edit
            </Link>
            </Button>
            </TableCell>
            <TableCell align="right">
            <Button  className={classes.button3} variant="contained">
            <Link onClick={() => deleteUser(user.id)} style={{textDecoration:"none",color:'white'}}>  
            Delete
            </Link>          
            </Button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
}

export default Home;