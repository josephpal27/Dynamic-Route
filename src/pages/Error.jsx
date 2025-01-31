import { Link } from "react-router-dom"


function Error() {
  return (
    <div>
      <div className="container">
        <div className="box">
          <h2>PAGE NOT FOUND</h2>
          <Link to='/'><button className="btn">Go to Home Page</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Error

