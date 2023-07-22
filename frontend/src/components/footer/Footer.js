import React from 'react'
import instagramm from '../../assets/img/Instagramm.png'
import twitter from '../../assets/img/pngegg (1).png'
import facebook from '../../assets/img/pngegg (2).png'



function Footer() {
  return (
      <>
      
       <footer className="footer">
        <div className="container">
            <div className="footer__inner">
                <div className="footer__author">Автор сайта:<br/>
                    Бородинов Николай Владимирович</div>

                <div className="footer__year">2023г.</div>
                <div className="footer__social">
                    <img src={facebook} alt="" className="footer__social-img"/>
                    <img src={twitter} alt="" className="footer__social-img"/>
                    <img src={instagramm} alt="" className="footer__social-img"/>
                </div>
            </div>
            </div>
    </footer>
 
      </> 
    
  
 
  )
}

export default Footer