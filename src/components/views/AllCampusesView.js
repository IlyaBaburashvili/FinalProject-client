import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const {deleteCampus} = props;
  if (!props.allCampuses.length) {
    return <div>There are no campuses.
    <div>
    <div>
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
      </div>
    <Link to="/">Return to Home</Link>
    </div>
  </div>
  }

  return (
    <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{campus.description}</p>
         <button onClick={() => deleteCampus(campus.id)}>Delete</button> 
        </div>
      ))}
      <div>
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
      </div>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;