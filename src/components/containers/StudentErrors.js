import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import { addStudentThunk } from '../../store/thunks';

class StudentErrors extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstnameError: "",
          lastnameError: "",
          emailError:"",
          gpaError:""
        };
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
  
      checkError = () => {
        let firstnameError = "";
        let lastnameError = "";
        let emailError= "";
        let gpaError= "";
        if (this.state.firstname===null){
          firstnameError= "Student must have first name"
        }
        if(this.state.lastname===null){
          lastnameError= "Student must have last name"
        }
        if(!this.state.email.includes("@")){
         emailError="Student must have a valid email"
        }
        if(this.state.gpa>4.0||this.state.gpa<0.0){
          gpaError="GPA must be between 0.0 and 4.0"
        }
        if(firstnameError||lastnameError||emailError||gpaError){
          this.setState({firstnameError, lastnameError, emailError, gpaError})
          return false;
        }
        return true;
      }
