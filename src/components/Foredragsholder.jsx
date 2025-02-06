import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import videos from './Flemmings Foredragsholder.mp4'


const ForedragsholderContainer = styled.div`
.boks{
  margin: 35px;
} 
.video-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 35px;
    margin-top:35px;
    
} 
.video-container video{
    height: 410px;
    width: 100%;
    max-width: 1280px;
    box-shadow: 5px 5px 5px #0A265C;
    border-radius: 5px;
    background: #0A265C;
} 
 .txte{
   background: #0A265C;
   margin: 25px ;
   height: 55vh;
   border-radius: 5px;
   margin-right:25px;
    margin-left:25px;

 }
 .fore{
   padding-top: 30px;
   color: #ffffff;
   padding-left: 40px;
   font-size: 30px;
 }
 
 .on{
     text-align: left;  
     line-height: 1.5;
     font-size: 16px; 
     margin: 15px;
     padding-right: 25px;
     padding-left: 25px;
     padding-bottom: 25px;
     color: #ffffff;
 
 }
 
 .bte{
    
     background: #9E8948;
     text-align: center;
     align-items: center;
     padding: 15px 32px;
     width: 100%;
     font-weight: 600;
     font-size: 20px;
     text-decoration: none;
     color: #ffffff;
     margin-top: 70px;
 }
   
 .bte a{
   color: #ffffff;
   text-align: center;
 }
 @media (max-width: 768px) {
    .txte {
      height: auto;
    }
  
    .fore {
      font-size: 24px;
      padding-left: 20px;
    }
  
    .on {
      font-size: 14px;
      padding-right: 20px;
      padding-left: 20px;
      padding-bottom: 20px;
    }
  
    .bte {
      float: none;
      margin-top: 20px;
      margin-right: auto;
      margin-left: auto;
      margin-bottom: 20px;
      font-size: 16px;
      padding: 8px 0;
      
    }
    .video {
        margin: 0 100px;
    }
}



`

export default function Foredragsholder() {
  return (
    <> 
       <Header/>
       <ForedragsholderContainer>
            <section classn="boks">
                <div className="video-container">
                    <video  autoPlay >
                       <source src={videos} type="video/mp4" />
                    </video>
                </div>


                <div className="txte">
                    <h3 className="fore">Foredragsholder</h3>

                    <div className='on'>
                      <p>
                        Mine foredrag er tilpasset den virksomhed, skole, forening eller hvor det nu er, 
                        ud fra hvilket emne man ønsker at få belyst, inden for mindset. Det kunne f.eks. 
                        hvorfor nytårsforsæt ikke virker, eller hvorfor vores 5 sanser er både gode og kan 
                        være en hæmsko for os. Jeg leverer indholdet på en letforståelig og interaktiv måde,
                        jeg tager historier med ind fra eget liv og fra oplevelser. Det er meget vigtigt for
                        mig at folk der er til mine foredrag for noget brugbart med hjem, som de kan starte 
                        med at prøve af i deres eget liv. Kontakt mig på mail og lad os sammen finde det foredrag 
                        I har brug for.
 
                      </p>
                    </div>
                    <div className="bte">
                      Prisen efter aftalt 
                    </div>
            
                </div>
    
            </section>
          
        </ForedragsholderContainer>
       <Footer/>
    </>
  )
}
