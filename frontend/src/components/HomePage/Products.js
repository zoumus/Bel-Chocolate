import './HomePage.css';
import  trufflePicture from "./images/chocPictures/truffle.webp"
import  boxPicture from "./images/chocPictures/box.webp"
import  barPicture from "./images/chocPictures/bar.webp"

const Products = () => {
    return (
        <>
            <div className='home-products'>
                <div className="right">
                <img src={ trufflePicture } alt="yummy chocolate" ></img>
                </div>
                <div className="text-desc">
                    <h1>Dark Chocolate Truffles</h1>
                    <p>Curated assortments of dark chocolate truffles with rich, mouth-melting fillings.</p>
                    <button>SHOP TRUFFLES</button>
                </div>
            </div>

            <div className='home-products'>
                <div className="right">
                <img src={ boxPicture } alt="yummy chocolate" ></img>
                </div>
                
                <div className="text-desc">
                    <h1>Chocolate Gift Boxes</h1>
                    <p>Curated assortments of treats with vivid flavor profiles & eye candy that can't be found elsewhere.</p>
                    <button>SHOP BOXES</button>
                </div>
            </div>

            <div className='home-products'>
                <div className="right">
                <img src={ barPicture } alt="yummy chocolate" ></img>
                </div>
                <div className="text-desc">
                    <h1>Gourmet Chocolate Bars</h1>
                    <p>Handmade chocolate bars with deeply decadent fillings. Artfully painted with cocoa butter.</p>
                    <button>SHOP BARS</button>
                </div>
            </div>
        </>
    )
}
export default Products;