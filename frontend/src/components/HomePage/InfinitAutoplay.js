import './InfinitAutoplay.css';
import play1 from './images/autoplay/1613664400723.jpeg'
import play2 from './images/autoplay/color.jpeg'
import play3 from './images/autoplay/chocolate_truffles_.webp'
import play4 from './images/autoplay/gourmet_chocolate_truffles_stack.webp'
import play5 from './images/autoplay/Gourmet_Vegan.webp'
import play6 from './images/autoplay/th.jpeg'
import play7 from './images/autoplay/thh.jpeg'
import play8 from './images/autoplay/thth.jpeg'
import play9 from './images/autoplay/bar.webp'
import play10 from './images/autoplay/card.jpeg'


const InfinitAutoplay = () => {
    return (
        <div className="sliderr">
            <h1>Follow @BelChocolate on instagram</h1>
            <div className="slide-track">
                <div className="slide">
                    <img src={play1} height="100" alt="" />
                </div>
                <div className="slide">
                    <img src={play2} height="100" alt="" />
                </div>
                <div className="slide">
                    <img src={play3} height="100" alt="" />
                </div>
                <div className="slide">
                    <img src={play4} height="100" alt="" />
                </div>
                <div className="slide">
                    <img src={play5} height="100" alt="" />
                </div>
                <div className="slide">
                    <img src={play6} height="100" alt="" />
                </div>
                <div className="slide">
                    <img src={play7} height="100" alt="" />
                </div>
                <div className="slide">
                    <img src={play8} height="100" width="250" alt="" />
                </div>
                <div className="slide">
                    <img src={play9} height="100" alt="" />
                </div>
                <div className="slide">
                    <img src={play10} height="100" alt="" />
                </div>
            </div>
    </div>
    )
}
export default InfinitAutoplay;




