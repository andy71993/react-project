import Nav from "./Nav"
import ImageSelector from "./ImageSelector"
import ma1 from '../assets/ma1.jpg'

const ContactSec = ({...style}) => {
    return(
    <div className="contactSec" style={style}>
        <div className="contactCont">
            <div>
            <ImageSelector src={ma1} alt={'mario and adrain'}/>
            </div>
            <div>
                <h3>Doormat Navigation</h3>
                <Nav />
            </div>
            <div>
                <h3>Contact</h3>
                <p>Address</p>
                <p>Email</p>
                <p>Phone number</p>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>WhatsApp</p>
            </div>
        </div>
    </div>

    )
}

export default ContactSec
