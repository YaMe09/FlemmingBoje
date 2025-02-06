import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import facebook from'./facebook.svg'
import instagram from './instagram.svg'
import linked from './linkedin.svg'
import youtube from './youtube.svg'

const KontakContainer = styled.div`
.kontakt {
    background: #ffffff;
  }
  
.info {
    
    margin-top: 35px;
    margin-bottom: 35px;
    margin-left: 450px;
    margin-right: 450px;
    display: flex;
    flex-direction: column;
}
  
.information {
    background: #ffffff;
    border: 25px solid #0A265C;
    width: 650px;
    margin-top: 35px;
    margin-bottom: 35px;
    padding-left:110px;
   
    padding-top: 15px;
    padding-bottom: 35px;
    color: #0A265C;
    
    
}

.social-icons{
    background: #ffffff;
    width: 650px;
    border: 25px solid #0A265C;
    margin-top: 25px;
    margin-bottom: 35px;
    padding-left: 80px;
    padding-top: 15px;
    padding-bottom: 35px;
}
.image-text-container {
   
    align-items: center;
    text-align: center;
    justify-content: space-between;
}
  
.image-text-container img {
    
    height: 35px;
}
.op{
   
    margin-left: 65px;
    font-size: 30px;
    margin-bottom: 25px;
    color: #0A265C;
}
.op1{
   
    margin-left: 103px;
    font-size: 30px;
    margin-bottom: 25px;
    color: #0A265C;
}
.tooltipe {
   
    top: 0;  
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
  
  
.tooltipe::before {
   
    content: "";
    height: 8px;
    width: 8px;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.tooltipe img{
   margin: 15px;
    height: 80px;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    box-shadow: 2px 2px 2px #0A265C;
}
  
.facebook:hover,
.facebook:hover .tooltipe,
.facebook:hover .tooltipe::before {
    background: #1877f2;
    color: #ffffff;
}
.linkedin:hover,
.linkedin:hover .tooltipe,
.linkedin:hover .tooltipe::before {
    background: #222222;
    color: #ffffff;
}
.instagram:hover,
.instagram:hover .tooltipe,
.instagram:hover .tooltipe::before {
    background: #e4405f;
    color: #ffffff;
}
  
.youtube:hover,
.youtube:hover .tooltipe,
.youtube:hover .tooltipe::before {
    background: #cd201f;
    color: #ffffff;
}
.in {
    font-size: 24px;
    text-align: left;
    color: #0A265C;
    
  }

@media (max-width: 768px) {
    .info {
      margin-left: 20px;
      margin-right: 20px;
    }
    
    .information,
    .social-icons {
      border-width: 15px;
      padding: 10px;
      max-width: 100%;
    }
}
`
export default function Kontakt() {
  return (
    <>
        <Header/>
        <KontakContainer>
            <section className="kontakt">
                <div className="info">
        
                    <div className="information">
                        <h1 className="op">Kontaktoplysning</h1>
                        <div className="image-text-container">
                            <a href="tel:+4560967557">
                                <p className="in">+4560967557</p>
                            </a>
                            
                        </div>
              
                        <div className="image-text-container">
                            <a href="mailto:flemming@flemmingboje.dk" target="_blank">
                                <p className="in">flemming@flemmingboje.dk</p>
                            </a>
                        </div>    
                        <div className="image-text-container"> 
                            <a href="https://flemmingboje.dk/" target="_blank">
                                <p className="in">flemmingboje.dk</p>
                            </a>
                        </div>  
                        <div className="image-text-container">
                            <a href="medlem" target="_blank"></a>
                            <p className="in">Medlem af Køge Golfklubserhervsnetværk<br/>
                               Medlem af Netvaerk Køge
                            </p>
                        </div>
                    </div>
    
        
                    <div className="social-icons">
                        <h1 className="op1">Du kan følge os på</h1>
                        <a target="_blank" href="https://www.facebook.com/groups/791969714836536">
                            <span class="tooltipe">
                            <img src={facebook} alt="Facebook Foto"/></span>
                        </a>
          
                        <a target="_blank" href="https://www.instagram.com/life_is_thedream/">
                            <span className="tooltipe">
                            <img src={instagram} alt="Instagram Foto"/></span>
                        </a>
       
                        <a href="https://www.linkedin.com/company/flemming-boje-aps/">
                            <span className="tooltipe">
                            <img src={linked} alt="LinkedIn Foto"/></span>
                        </a>
          
                        <a target="_blank" href="https://www.youtube.com/channel/UCOWwUZf4T4IU69ux77mB62A">
                            <span className="tooltipe">
                            <img src={youtube} alt="Youtube Foto"/></span>
                        </a>
          
                    </div>
                </div>
            </section>
        </KontakContainer>
        <Footer/>


    </>
  )
}
