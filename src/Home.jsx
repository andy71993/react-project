import Display from "./components/Display"
import Highlight from "./components/Highlight"
import Testimonials from "./components/Testimonials"
import Button from './components/Button'

const Home = ({className, ...spreadStyle}) => {
    return(
        <main>
            <Highlight />
            <div className="weekSpecial">
                <div>
                    <h2>This week specials</h2>
                </div>
                <div>
                    <Button text={'Order Online'}/>
                </div>
            </div>
            <Display />
            <Testimonials />
        </main>
    )
}

export default Home