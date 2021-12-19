import PropTypes from "prop-types";
import { Link } from "react-router-dom";



const CampusView = (props) => {
  const {campus, deleteStudent, deleteCampus, editCampus} = props;
  if(!campus.students.length){
    return (
      <div>      
        <h1>{campus.name}</h1>
        <h2>{campus.address}</h2>
        <center> <img src={campus.imgURL} alt="Campus"/></center>
        <p>{campus.description}</p>
        <ul>
       <div>There are no students enrolled</div>
        </ul>
        <Link to={`/editcampus/${campus.id}`}>
            <button onClick={() => editCampus(campus)}>Edit</button>
            </Link>  
            <Link to={`/newstudent`}>
        <button>Add New Student</button>
        <br></br>
        <br></br>
      </Link> 
        <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>      
        <Link to="/campuses">Return to Campus List</Link>
      </div>
    );      
  }
  return (
    <div>      
      <h1>{campus.name}</h1>
      <h2>{campus.address}</h2>
      <center> <img src={campus.imgURL} alt="Campus"/></center>
      <p>{campus.description}</p>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <li key={student.id}>
          <Link to={`/student/${student.id}`}>{name}
          </Link>
          <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
          </li>
        );
      })}
      </ul>
      <Link to={`/editcampus/${campus.id}`}>
          <button onClick={() => editCampus(campus)}>Edit</button>
          </Link> 
          <Link to={`/newstudent`}>
        <button>Add New Student</button>
        <br></br>
        <br></br>
      </Link> 
      <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>      
      <Link to="/campuses">Return to Campus List</Link>
    </div>
  );

};

export default CampusView;