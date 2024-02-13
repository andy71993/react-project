import Testimony from "./Testimony.jsx"
import ma1 from '../assets/ma1.jpg'

const Testimonials = ({testimonialsClassName, ...testimonialsStyle}) => {
    return(
        <section className={'testimonials'} style={testimonialsStyle}>
            <Testimony src={ma1} rating={'⭐⭐️⭐️⭐️⭐️️'} name={'Andy'} review={'some text goes here'} />
            <Testimony src={ma1} rating={'⭐⭐️⭐️⭐️⭐️️'} name={'Andy'} review={'some text goes here'} />
            <Testimony src={ma1} rating={'⭐⭐️⭐️⭐️⭐️️'} name={'Andy'} review={'some text goes here'} />
            <Testimony src={ma1} rating={'⭐⭐️⭐️⭐️⭐️️'} name={'Andy'} review={'some text goes here'} />
        </section>
    )

}

export default Testimonials