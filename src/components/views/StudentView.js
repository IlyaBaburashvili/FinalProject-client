import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student, deleteStudent, editStudent} = props;

  if (student.campus===null) {
    return <div>      
      <h1>{student.firstname + " " + student.lastname}</h1>
    <div>
      <h3>Student not enrolled in any campus</h3>
      </div>
      <div>
          <h3>{"Email: " + student.email}</h3>
          </div>
        <div>
          <h3>{"GPA: " + student.gpa}</h3>
          </div>
        <center> <img src={student.imgURL} alt="Student Photo"/></center>
        <Link to={`/editstudent/${student.id}`}>
          <button onClick={() => editStudent(student)}>Edit</button>
          </Link>
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
        <Link to="/students">Return to Students List</Link>
    </div>
  }

  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <div key={student.campus.id}>
          <Link to={`/campus/${student.campus.id}`}>
            <h3>{"Campus: " + student.campus.name}</h3>
          </Link>
          </div>
        <div>
          <h3>{"Email: " + student.email}</h3>
          </div>
        <div>
          <h3>{"GPA: " + student.gpa?.toFixed(1)}</h3>
          </div>
        <center> <img src={student.imgURL} alt="Student Photo"/></center>
        <Link to={`/editstudent/${student.id}`}>
          <button onClick={() => editStudent(student)}>Edit</button>
          </Link>
          <br></br>
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
        <Link to="/students">Return to Students List</Link>
    </div>
  );

};

export default StudentView;