import './HomePage.css';
import eater from './images/TextCarausel/eater_sf_best_chocolate.png'
import forbes from './images/TextCarausel/forbes_logo.png'
import newyork from './images/TextCarausel/new_york_magazine.png'
import sfchronicle from './images/TextCarausel/sf_chronicle.png'

const TextCarausel = () => {
    return (
      <div class="content-slider">
        <div class="slider">
            <div class="mask">
                <ul>
                    <li class="anim1">
                    <div class="quote">"Immensely Pleasing Gifts"</div>
                    <div class="source"><img src={newyork}alt="ny-logo" /></div>
                    </li>
                    <li class="anim2">
                    <div class="quote">"As visually appeling as they are delicious"</div>
                    <div class="source"><img src={forbes}alt="forbes-logo" /></div>
                    </li>
                    <li class="anim3">
                    <div class="quote">"Stunningly artistic & delicious chocolates in creative flavor combos"</div>
                    <div class="source"><img src={sfchronicle}alt="sf-logo" /></div>
                    </li>
                    <li class="anim4">
                    <div class="quote">"Confections that will blow your mind"</div>
                    <div class="source"><img src={eater}alt="eater-logo" /></div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    )
}
export default TextCarausel;
