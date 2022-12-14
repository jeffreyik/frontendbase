import CTAbtn from "./CTAbtn"
import heroImg from "../assets/hero-img.svg"

const Hero = () => {
  return (
    <header className="hero-section">
        <div className="container">
            <div className="hero-text">
                <h1>Free Learning Resources for Frontend Developers 💙</h1>
                <p>We want to help you get better at frontend development by providing you with free resources and courses. We also understand the struggle being faced when looking for best courses</p>
                <CTAbtn text="Start Learning" />
            </div>
            <div className="hero-img">
              <img src={heroImg} alt="" />
            </div>
        </div>
    </header>
  )
}

export default Hero