import Information from "./Information";
import ma1 from '../assets/ma1.jpg'
import ma2 from '../assets/ma2.jpg'
import ImageSelector from "./ImageSelector";
import '../styleSheet/footer.css'

const AboutSec = ({...style}) => {
    return(
        <div style={style} className="aboutSec">
             <div>
                <Information />
             </div>
            <div>
                <ImageSelector src={ma1} alt={'mario and adrian image'} imgClassName='imgOne'/>
                <ImageSelector src={ma2} alt={'mario and adrian image'}/>
            </div>
        </div>
    )

}

export default AboutSec