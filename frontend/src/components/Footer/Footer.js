import './Footer.css';
import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";



const Footer = () => {
    return (
        <>
            <div className="footer-icons">
                <a href="https://www.linkedin.com/feed/"><AiOutlineLinkedin id="linkdin-icon"/></a>
                <a href="https://github.com/zoumus"><AiFillGithub id="github-icon"/></a>
            </div>
        </>
    )
}

export default Footer;