import React from "react"
import topoAbout from './aboutImages/about-topo.webp'
import zuzuAbout from './aboutImages/zuzu.jpg'
import zuzuChoc from './aboutImages/zuzuzuzu.jpg'
import "./AboutPage.css"

const AboutPage = () => {

    return (
        <>  
            <div className="zuzu-topo" id="topo-about">
                <div><img src={topoAbout} alt=""/></div>
                <div className="about">
                    <h1 className="about-header">SF’s most audacious chocolate shop</h1>
                    <h2 className="about-desc">Topogato is a modern online chocolate store offering distinct gourmet chocolate & sweet treats handmade in the heart of San Francisco. Creativity is our main ingredient, from our mouth-melting chocolate truffles, to our deeply decadent gourmet chocolate bars and artful chocolate gift boxes.</h2>
                </div>
            </div>

            <div className="zuzu-topo" id="zuzu-about">
                <div><img src={zuzuAbout} alt=""/></div>
                <div className="about">
                    <h1 className="about-header">Chocolate Lover</h1>
                    <div className="about-desc">Yes I'm a chocolate lover, Who doesn’t love chocolate? Chocolate is so good that sometimes it’s hard to find the right words to describe your favourite chocolate.
                    <br></br>
                    Hey, I'm Zuzu  and I'm a full-stack software engineer with experience in Javascript, React, Redux, Node, Ruby on Rails, and PostgreSQL.
                    <br></br>
                    I chose to clone this website particularly for it's clean, modern, and easily navigatable layout.</div>
                </div>
            </div>

            <div className='chocolate-hand'><img src={zuzuChoc} alt=""/></div>

            
        </>
        
    )
}

export default AboutPage;