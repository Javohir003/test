import { Outlet } from "react-router-dom"

function About() {
  return (
    <div className="container">
        <h1 className="py-5">About Page</h1>
        <hr />
        <div className="pt-5">
          <Outlet/>
        </div>
    </div>
  )
}

export default About