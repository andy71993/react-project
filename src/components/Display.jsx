import Card from "./Card"
import displayImg from '../assets/displayImg.jpg'

const Display = ({displayClassName, ...dispalyStyle}) => {
    return(
        <section className="display">
            <div className="cont">
                <Card
                    src={displayImg}
                    alt={'food img'}
                    title={'Greek Salad'}
                    price={'$13.99'}
                    description={'Test your React application by running it locally and checking how it renders on different devices and screen sizes. You can also use browser developer tools to '}
                />
                <Card
                    src={displayImg}
                    alt={'food img'}
                    title={'Greek Salad'}
                    price={'$13.99'}
                    description={'Test your React application by running it locally and checking how it renders on different devices and screen sizes. You can also use browser developer tools to '}
                />
                <Card
                    src={displayImg}
                    alt={'food img'}
                    title={'Greek Salad'}
                    price={'$13.99'}
                    description={'Test your React application by running it locally and checking how it renders on different devices and screen sizes. You can also use browser developer tools to '}
                />
            </div>
        </section>
    )
}

export default Display