import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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

const EditCampusView = (props) => {
  const [campusNameError, setCampusNameError]=useState(false)
  const [addressError, setAddressError]=useState(false)
  const [descriptionError, setDescriptionError]=useState(false)
  const {handleChange, handleSubmit, campus } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            Edit Campus
          </Typography>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Campus Name: </label>
          <input type="text" name="name" onChange ={(e) => handleChange(e)} defaultValue= {props.campus.name} onBlur={(e) =>{
            if(!e.target.value){
              setCampusNameError(true)
            }
          }} />
          {campusNameError && <div>Campus name cannot be null</div>}
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Address: </label>
          <input type="text" name="address" onChange={(e) => handleChange(e)} defaultValue= {props.campus.address} onBlur={(e) =>{
            if(!e.target.value){
              setAddressError(true)
            }
          }} />
          {addressError && <div>Campus must have address</div>}
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>campusId: </label>
          <input type="text" name="id" onChange={(e) => handleChange(e)} defaultValue= {props.campus.id} onBlur={(e) =>{
            if(!e.target.value){
              setDescriptionError(true)
            }
          }} />
          {descriptionError && <div>Campus must have an ID</div>}
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Image URL: </label>
          <input type="text" name="description" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Description: </label>
          <input type="text" name="description" onChange={(e) => handleChange(e)} defaultValue= {props.campus.description} onBlur={(e) =>{
            if(!e.target.value){
              setDescriptionError(true)
            }
          }} />
          {descriptionError && <div>Campus must have description</div>}
          <br/>
          <br/>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br/>
          <br/>
        </form>
        </div>
      </div>
    
  )
}

export default EditCampusView;