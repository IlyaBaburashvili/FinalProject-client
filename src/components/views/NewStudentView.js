import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';


const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
  
}));

const NewStudentView = (props) => {
  const [firstNameError, setFirstNameError]=useState(false)
  const [lastNameError, setLastNameError]=useState(false)
  const [gpaError, setGPAError]=useState(false)
  const [emailError, setEmailError]=useState(false)
  const { handleChange, handleSubmit, student } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            New Student
          </Typography>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
          <input type="text" name="firstname" onChange ={(e) => handleChange(e)} onBlur={(e) => {
            if(!e.target.value){
              setFirstNameError(true)
            }
          }} />
          {firstNameError && <div>First name cannot be null</div>}
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
          <input type="text" name="lastname" onChange={(e) => handleChange(e)} onBlur={(e) => {
            if(!e.target.value){
              setLastNameError(true)
            }
          }} />
          {lastNameError && <div>Last name cannot be null</div>}
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>campusId: </label>
          <input type="text" name="campusId" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
          <input type="text" name="email" onChange={(e) => handleChange(e)} onBlur={(e) => {
            if(!e.target.value.includes("@")){
              setEmailError(true)
            }
          }} />
          {emailError && <div>Email not valid</div>}
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Link to Student Photo: </label>
          <input type="text" name="imgURL" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
          <input type="number" name="gpa" step = "0.1" onChange={(e) => handleChange(e)} onBlur={(e) => {
            if(e.target.value<0||e.target.value>4){
              setGPAError(true)
            }
          }} />
          {gpaError && <div>GPA must be between 0.0 and 4.0</div>}
          <br/>
          <br/>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br/>
          <br/>
          <Link to="/students">Return to Students List</Link>
        </form>
        </div>
      </div>
    
  )
}

export default NewStudentView;