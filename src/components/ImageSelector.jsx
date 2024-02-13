
const ImageSelector = ({src, alt, imgClassName, ...imgStyle}) => {
    return(
        <img src={src} alt={alt} className={imgClassName} style={imgStyle}/>
    )
}

export default ImageSelector