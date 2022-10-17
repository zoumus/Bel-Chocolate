import './Footer.scss';
import React from 'react';
import { useLocation } from 'react-router-dom';


const Footer = () => {
    const location = useLocation();

    const foot_footer = () =>{
        if (location.pathname === "/"){
            return "brown"
        } else {
            return 'yellow'
        }
   }
    return (
        <div id="main-footer" className={foot_footer()}>
            <div className='main-footer-content'>
                <p className='footer-subheading'>Contact:</p>
                <a className="social-link" href="https://github.com/zoumus" target="_blank">
                <i className="fab fa-github"></i>
                <p className="social-link-label"> Github</p></a>
                <a className="social-link" href="https://www.linkedin.com/in/zuzu-chaoui-302134249/" target="_blank">
                <i className="fab fa-linkedin"></i>
                <p className="social-link-label"> LinkedIn</p></a>
                <a className="social-link" href="https://angel.co/u/zuzu-chaoui" target="_blank">
                <i className="fab fa-angellist"></i>
                <p className="social-link-label"> AngelList</p></a>
                <a className="social-link" href="https://angel.co/u/zuzu-chaoui" target="_blank">
                <i className="fas fa-folder-open"></i>
                <p className="social-link-label"> Portfolio</p></a>
                <a className="social-link" href="mailto:zehourchaoui@gmail.com" target="_blank">
                <i className="fas fa-envelope"></i>
                <p className="social-link-label"> Email</p></a>
            </div>
            
        </div>
    )
}
export default Footer;