import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView';
import { editStudentThunk, fetchStudentThunk } from '../../store/thunks';


class EditStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          id: props.id,
          firstname: props.firstname, 
          lastname: props.lastname, 
          campusId: props.campusId, 
          email: props.email,
          imgURL: props.imgURL,
          gpa: props.gpa,
          redirect: false, 
          redirectId: null,
        };
    }

    componentDidMount() {
      this.props.fetchStudent(this.props.match.params.id); 

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
      if (this.props.firstname===null){
        firstnameError= "Student must have first name"
      }
      if(this.props.lastname===null){
        lastnameError= "Student must have last name"
      }
      if(this.props.email===null){
       emailError="Student must have a valid email"
      }
      if(this.state.gpa>4.0||this.state.gpa<0.0){
        gpaError="GPA must be between 0.0 and 4.0"
      }
      if(firstnameError||lastnameError||emailError||gpaError){
        return false;
      }
      return true;
    }

    handleSubmit = async event => {
        event.preventDefault();
        const checkErrors=this.checkError()
        if(checkErrors){
          let student = {
              id: Number(this.props.match.params.id),
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              campusId: this.state.campusId,
              email: this.state.email,
              gpa: Number(this.state.gpa).toFixed(1)
          };
          console.log(student.gpa)


          this.props.editStudent(student);

          this.setState({
            firstname: "", 
            lastname: "", 
            campusId: null, 
            email: "",
            imgURL: "",
            gpa: null, 
            firstnameError: "",
            lastnameError: "",
            emailError:"",
            gpaError:"",
            redirect: true, 
            redirectId: this.props.id
          });
        }
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/students/`}/>)
        }
        return (
          <EditStudentView 
            student={this.props.student}
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch) => {
    return({
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
        editStudent: (student) => dispatch(editStudentThunk(student)),
    })
}

export default connect(mapState, mapDispatch)(EditStudentContainer);