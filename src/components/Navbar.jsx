import CTAbtn from "./CTAbtn"

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="logo">Frontendbase</div>
            <div className="nav-items">
                <a href="#">Home</a>
                <a href="#">Free Course</a>
                <a href="#">Free Resources</a>
            </div>
            <CTAbtn text="Start Learning" />
        </div>
    </nav>
  )
}

export default Navbar