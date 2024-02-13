
const Information = ({infoClassName, ...infoStyle}) => {
    return(
        <div className={'information'} style={infoStyle}>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
        </div>
    )

}
export default Information