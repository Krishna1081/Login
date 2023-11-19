import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
function Home(){
    return (
    <div className="container mt-5">
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Success!</h4>
        <p>Your action was successful.</p>
        <hr />
        <p className="mb-0">Thank you for using our service.</p>
        <br></br>
        <Link type="button" className="btn btn-success" to="/login">Go Back</Link>
      </div>
    </div>
  );
}
export default Home;