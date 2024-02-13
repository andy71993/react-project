import ImageSelector from "./ImageSelector"
import '../styleSheet/testimonyStyle.css'

const Testimony = ({testimonyClassName, rating, src, alt, review, name, ...testimonyStyle}) => {

    return(

        <div className={'testimony'} style={testimonyStyle}>
            <ImageSelector src={src} alt={alt}/>
            <h3>{name}</h3>
            <p>{rating}</p>
            <p>{review}</p>
        </div>
    )
}

export default Testimony

