import React from "react"
import aboutImg1 from './about2.jpeg'
import handChocolate from './handChocolate.jpeg'
import "./AboutPage.css"

const AboutPage = () => {

    return (
        <>  
        <h1 className="about-header">About</h1>
        <br />
        <div id="about-page">
            
            <p className="f-paragraph">"SF’s most audacious chocolate shop" —Eater SF</p>
            <br />
            <p>BelChocolate is a modern online chocolate store offering distinct gourmet chocolate & sweet treats handmade in the heart of San Francisco.</p>
            <br />
            <p>Creativity is our main ingredient, from our mouth-melting <a href="/products/category/1">chocolate truffles</a>, to our deeply decadent <a href="/products/category/1">gourmet chocolate bars</a> and artful <a href="/products/category/3">chocolate gift boxes</a></p>
            <img id="about-img1" src={aboutImg1}></img>
            <p>We're passionate about creating decadent, deep-flavor experiences. Our curated treats take you and your loved ones many places; some new and inspiring, others nostalgic and comforting.</p>
            <br/>
            <p>We pride ourselves about being "on another level when it comes to outlandish treats, pushing flavor and design to an unmatched level", according to SF food journalist & poet Paolo Bicchieri.</p>
            <img id="hand-chocolate" src={handChocolate}></img>
            <br/>
            <p>Founded in 2020 by two best friends: Simon Brown, a staple San Francisco pastry chef and chocolatier, and Beau Monroe, an artist and designer who's previous work you see daily on your local store's shelves.</p>
            <br/>
            <br/>
            <p>Have a question? You may contact us at this <a href='mailto: hello@topogato.com'>Email</a></p>
            <br/>
            <br/>

        </div>
        </>
        
    )
}

export default AboutPage;