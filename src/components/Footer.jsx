import ImageSelector from "./ImageSelector"
import Information from "./Information"
import Nav from "./Nav"
import ma1 from '../assets/ma1.jpg'
import ma2 from '../assets/ma2.jpg'
import AboutSec from "./AboutSec"
import ContactSec from "./ContactSec"

const Footer = ({className, ...style}) => {
    return(
        <footer className={className} style={style}>
            <AboutSec />
            <ContactSec />
        </footer>
    )
}

export default Footer