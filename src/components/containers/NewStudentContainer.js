import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import { addStudentThunk } from '../../store/thunks';

class NewStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "", 
          campusId: null, 
          email: "",
          imgURL: "",
          gpa: null,
          redirect: false, 
          redirectId: null,
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    /*checkError = () => {
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
    }*/

    handleSubmit = async event => {
        event.preventDefault();
        //const checkErrors=this.checkError()
        //if(checkErrors){
          let student = {
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              campusId: this.state.campusId,
              email: this.state.email,
              gpa: this.state.gpa
          };
          
          let newStudent = await this.props.addStudent(student);

          
          //console.log("student", newStudent)

          this.setState({
            firstname: "", 
            lastname: "", 
            campusId: null, 
            email: "",
            imgURL: "",
            gpa: null, 
            redirect: true, 
            redirectId: newStudent.id
          });
        //}
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/student/${this.state.redirectId}`}/>)
        }
        return (
          <NewStudentView 
            student={this.props.student}
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}   
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addStudent: (student) => dispatch(addStudentThunk(student)),
    })
}

export default connect(null, mapDispatch)(NewStudentContainer);