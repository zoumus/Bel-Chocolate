import './HomePage.css';
import eater from './images/TextCarausel/eater_sf_best_chocolate.png'
import forbes from './images/TextCarausel/forbes_logo.png'
import newyork from './images/TextCarausel/new_york_magazine.png'
import sfchronicle from './images/TextCarausel/sf_chronicle.png'

const TextCarausel = () => {
    return (
      <div className="content-slider">
        <div className="slider">
            <div className="mask">
                <ul>
                    <li className="anim1">
                    <div className="quote">"Immensely Pleasing Gifts"</div>
                    <div className="source"><img src={newyork}alt="ny-logo" /></div>
                    </li>
                    <li className="anim2">
                    <div className="quote">"As visually appeling as they are delicious"</div>
                    <div className="source"><img src={forbes}alt="forbes-logo" /></div>
                    </li>
                    <li className="anim3">
                    <div className="quote">"Stunningly artistic & delicious chocolates in creative flavor combos"</div>
                    <div className="source"><img src={sfchronicle}alt="sf-logo" /></div>
                    </li>
                    <li className="anim4">
                    <div className="quote">"Confections that will blow your mind"</div>
                    <div className="source"><img src={eater}alt="eater-logo" /></div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    )
}
export default TextCarausel;
