import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView';
import { addCampusThunk, editCampusThunk, fetchCampusThunk } from '../../store/thunks';


class EditCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: props.name, 
          id: props.id, 
          imgURL: props.imgURL,
          description: props.description,
          address: props.address,
          redirect: false, 
          redirectId: null
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let campus = {
            name: this.state.name,
            id: Number(this.props.match.params.id),
            description: this.state.description,
            address: this.state.address,
        };
        
        this.props.editCampus(campus);

        this.setState({
          name: "", 
          address: "", 
          id: null, 
          imgURL: "",
          description: "", 
          redirect: true, 
          redirectId: this.props.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/campuses/`}/>)
        }
        return (
          <EditCampusView 
          campus={this.props.campus}
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
    return({
      fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
        editCampus: (campus) => dispatch(editCampusThunk(campus)),
    })
}

export default connect(mapState, mapDispatch)(EditCampusContainer);