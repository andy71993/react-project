import ImageSelector from "./ImageSelector"
import logo from '../assets/Logo .svg'

const Header = ({className, imgStyle, imgClassName, ...style}) => {
    return(
        <header className={className} style={style}>
            <ImageSelector
                src={logo}
                alt={'logo'}
                imgStyle={imgStyle}
                imgClassName={imgClassName}
            />
        </header>

    )
}

export default Header