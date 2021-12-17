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
      console.log(this.props.student);

    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }


    handleSubmit = async event => {
        event.preventDefault();
        console.log(event.target)
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