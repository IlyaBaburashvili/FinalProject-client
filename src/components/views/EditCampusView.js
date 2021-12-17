import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';


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
  const {campus, handleChange, handleSubmit } = props;
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
          <input type="text" name="name" onChange ={(e) => handleChange(e)} defaultValue= {props.campus.name}/>
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Address: </label>
          <input type="text" name="address" onChange={(e) => handleChange(e)} defaultValue= {props.campus.address} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>campusId: </label>
          <input type="text" name="id" onChange={(e) => handleChange(e)} defaultValue= {props.campus.id}/>
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Description: </label>
          <input type="text" name="description" onChange={(e) => handleChange(e)} defaultValue= {props.campus.description}/>
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