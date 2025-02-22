import { Link, Outlet } from "react-router-dom"


function NavbarLayout() {
  return (
    <div>
        <header className="container">
            <nav className="flex justify-between items-center py-4 bg-slate-300">
                <Link to={"/"}><h1>Logo</h1></Link>
                <ul className="flex items-center gap-9">
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                </ul>
                <button>Send</button>
            </nav>
        </header>
        <main><Outlet/></main>
        <footer></footer>
    </div>
  )
}

export default NavbarLayout