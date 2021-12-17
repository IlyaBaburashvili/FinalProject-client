import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk,
  deleteStudentThunk, deleteCampusThunk, editCampusThunk } from "../../store/thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
  }

  render() {
    return (
      <CampusView 
        campus={this.props.campus}
        deleteStudent={this.props.deleteStudent}  
        deleteCampus=   {this.props.deleteCampus}  
        editCampus= {this.props.editCampus}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
    editCampus: (campus) => dispatch(editCampusThunk(campus))
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);