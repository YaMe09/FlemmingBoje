import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import flemming from './Flemmingbaggrund.png'

const ForsideContainer = styled.div`
*,
*::before,
*::after {
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: 'Kreon', serif;
  text-decoration: none;
}
.container {
  position: relative;
  width: 100%;
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${flemming});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.ani{
  font-size: 42px;
  margin-left: 5px;
  color: #0A265C;
  text-shadow: 0 0 7px rgba(255,255,255,.3), 0 0 3px rgba(255,255,255,.3);
}
.animation {
  height:50px;
  overflow:hidden;
  font-size: 36px;
  margin-left: 5px;
  padding-top: 40px;
  padding-bottom: 40px;
  color: #0A265C;
}

.animation > div > div {
  padding: 0.35rem 0.45rem;
  height:1.81rem;
  margin-bottom: 2.81rem;
  display:inline-block;
}

.animation div:first-child {
  animation: text-animation 8s infinite;
}



@keyframes text-animation {
  0% {margin-top: 0;}
  10% {margin-top: 0;}
  20% {margin-top: -5.62rem;}
  30% {margin-top: -5.62rem;}
  40% {margin-top: -11.24rem;}
  60% {margin-top: -11.24rem;}
  70% {margin-top: -5.62rem;}
  80% {margin-top: -5.62rem;}
  90% {margin-top: 0;}
  100% {margin-top: 0;}
}

.botton {
  margin-top: 200px;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom:15px;
}

.bot {
  display: inline;
  background-color: #9E8948;
  box-shadow: 3px 3px 3px #ffffff;
  padding: 15px 32px;
  color: #0A265C;
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  flex-shrink: 0;
  margin: 10px;
  
}


/* Forside */
@media screen and (max-width: 768px) {
  .animation, .ani, 
  .animation > div > div  {
    display:none;
  }

  
  .botton {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
  
}

@media screen and (max-width: 480px) {
  .animation, .ani, 
  .animation > div > div {
    display:none;
  }
  .botton {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
  }
}
@media screen and (max-width: 375px),
       screen and (max-width: 390px),
       screen and (max-width: 412px),
       screen and (max-width: 414px),
       screen and (max-width: 430px) {
        
        .animation, .ani, 
        .animation > div > div {
          display:none;
        }
        .botton {
          display: flex;
          flex-direction: column; 
        }
        
        .bot {
          font-size: 16px;
        }
}
@media screen and (max-width: 768px) {
  .button {
    margin-bottom: 15px; /* Juster afstanden fra bunden af skærmen */
  }
}

@media screen and (max-width: 480px) {
  .button {
    margin-bottom: 15px; /* Juster afstanden fra bunden af skærmen */
  }
  
}

@media screen and (max-width: 375px) {
  .button {
    margin-bottom: 15px; /* Juster afstanden fra bunden af skærmen */
  }
}

@media screen and (max-width: 390px) {
  .button {
    margin-bottom: 15px; /* Juster afstanden fra bunden af skærmen */
  }
}

@media screen and (max-width: 412px) {
  .button {
    margin-bottom: 15px; /* Juster afstanden fra bunden af skærmen */
  }
}

@media screen and (max-width: 414px) {
  .button {
    margin-bottom: 15px; /* Juster afstanden fra bunden af skærmen */
  }
}

@media screen and (max-width: 430px) {
  .button {
    margin-bottom: 15px; /* Juster afstanden fra bunden af skærmen */
  }
}

@media screen and (max-width: 360px) {
  .button {
    margin-bottom: 15px; /* Juster afstanden fra bunden af skærmen */
  }
}

@media screen and (max-width: 820px) {
  .button {
    margin-bottom: 15px; /* Juster afstanden fra bunden af skærmen */
  }
}

@media screen and (max-width: 280px) {
  .button {
    margin-bottom: 15px; /* Juster afstanden fra bunden af skærmen */
  }
}



`

export default function Forside() {
  return (
    <>
    <Header/>
    <ForsideContainer>
        <div className="container">
          
          <div className='ani'><p className='ani'>Velkommen til</p></div>
          <section class="animation">
            <div class="first"><div>Flemming Boje </div></div>
            <div class="second"><div>Her kan du Opdag</div></div>
            <div class="third"><div>din vej til succes.</div></div>
          </section>
       

          <div className="botton">
            <a className="bot" href="https://calendly.com/flemmingboje/30min">Book en session</a>
            <a className="bot" href="mailto:kontakt@flemmingBoje.dk" target="_blank">Skriv til os</a>
          </div>
        </div>

    </ForsideContainer>
    <Footer/>
    </>
  )
}
