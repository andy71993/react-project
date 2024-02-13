import ImageSelector from "./ImageSelector"
import '../styleSheet/display.css'

const Card = ({src, alt, title, price, description, cardClassName, ...cardStyle}) => {
    return(
        <div className={'card'} style={cardStyle}>
            <ImageSelector src={src} alt={alt}/>
            <div>
                <span>{title}</span>
                <span>{price}</span>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <span>Order for delivery</span>
                <span>🚚</span>
            </div>
        </div>
    )

}

export default Card