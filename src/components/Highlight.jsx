import Button from "./Button"
import ImageSelector from "./ImageSelector"
import Information from "./Information"
import displayImg from '../assets/displayImg.jpg'

const Highlight = ({highlightClassName, ...highlightStyle}) => {
    return(
        <section className={'highlight'} style={highlightStyle}>
            <div>
                <Information />
                <Button text={'Reserve a Table'} />
            </div>
            <div>
                <ImageSelector src={displayImg} alt={'display image'}/>
            </div>
        </section>
    )
}

export default Highlight