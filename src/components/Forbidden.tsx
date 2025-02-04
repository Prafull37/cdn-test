import { Link } from "react-router-dom"

const Forbidden = () => {
  return (
    <div>
      <h1>403 - Forbidden</h1>
      <p>Sorry, you don't have permission to access this page.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  )
}

export default Forbidden 