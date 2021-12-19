import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCampusView from '../views/NewCampusView';
import { addCampusThunk } from '../../store/thunks';


class NewCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: "", 
          id: null, 
          description: "",
          imgURL: "",
          address: "",
          redirect: false, 
          redirectId: null
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    checkError = () => {
      let nameError = "";
      let addressError= "";
      let idError= "";
      let descriptionError= "";
      if (this.state.name===""){
        nameError= "Campus mst have name"
      }
      if(this.state.address===""){
        addressError= "Campus must have address"
      }
      if(this.state.id===null){
        idError="Campus must have id"
      }
      if(this.state.description===""){
        descriptionError="Campus must have description"
      }
      if(nameError||addressError||idError||descriptionError){
        return false;
      }
      return true;
    }

    handleSubmit = async event => {
        event.preventDefault();
        const checkErrors=this.checkError()
        console.log(this.checkErrors)
        if(checkErrors){
          let campus = {
              name: this.state.name,
              id: this.state.id,
              description: this.state.description,
              address: this.state.address,
          };
          
          let newCampus = await this.props.addCampus(campus);

          this.setState({
            name: "", 
            address: "", 
            id: null, 
            description: "", 
            redirect: true, 
            redirectId: newCampus.id
        });
      }
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
        }
        return (
          <NewCampusView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
    })
}

export default connect(null, mapDispatch)(NewCampusContainer);