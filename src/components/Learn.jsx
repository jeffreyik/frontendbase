import image from '../assets/peep-46.svg'
import Card from './Card'
import { Courses } from '../data'

const Learn = () => {
  return (
    <section className="learn">
        <div className="container">
            <div className="card-container">
                {Courses.map(course => {
                  return <Card key={course.id} title={course.name} description={course.description} />
                })}
            </div>
            {/* <img src={image} alt="" /> */}
        </div>
    </section>
  )
}

export default Learn