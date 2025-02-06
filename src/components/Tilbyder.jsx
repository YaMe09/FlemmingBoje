import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import Coach from './Online coaching.png'
import Forløb from './Online forløb.png'
import video from './Online Coach & online forløb.mp4'

const TilbyderContainer = styled.div`
.line {
  margin: 35px;
}
.video-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 35px;
    
    
} 
.video-container video{
    height: 410px;
    width: 100%;
    max-width: 1280px;
    box-shadow: 5px 5px 5px #0A265C;
    border-radius: 5px;
    background: #0A265C;
} 
.boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-right:15px;
    margin-left:15px;
  }
  
  .box {
    background: #0A265C;
    border-radius: 5px;
    margin-bottom: 35px;
    margin-top: 15px;
    flex-basis: 100%;
    max-width: 100%;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
  
  }
  
  .box img {
    width: 80%;
    height: auto;
    margin: 35px;
  }
  
  span {
    font-size: 20px;
    color: #ffffff;
  }
  
  .box .txt {
    text-align: left;
  }
  
  .ons {
    line-height: 1.5;
    font-size: 16px;
    margin: 25px;
    
    color: #ffffff;
  }
  
  .bt{
    background: #9E8948;
    text-align: center;
    align-items: center;
    padding: 15px 32px;
    font-weight: 600;
    font-size: 20px;
    text-decoration: none;
    color: #ffffff;
    margin-top: auto;
    margin-bottom:25px;
    width: 100%;
    }
    .bt1{
    background: #9E8948;
    text-align: center;
    align-items: center;
    padding: 15px 32px;
    font-weight: 600;
    font-size: 20px;
    text-decoration: none;
    color: #ffffff;
    width: 100%;
    margin-top: auto;
    margin-bottom:25px;
  
    }
  
  
  
  .bt a, .bt1 a, .bte a {
    color: #ffffff;
    text-decoration: none;
  }
  


@media (min-width: 768px) {
    
    .box {
        flex-basis: calc(50% - 20px);
        max-width: calc(50% - 20px);
    }
      
   
    .video {
        margin: 0 100px;
    }
    
}
@media (max-width: 480px) {
    .box {
      flex-basis: 100%;
      max-width: 100%;
    }
  } 

`

export default function Tilbyder() {
  return (
    <>
    <Header/>
    <TilbyderContainer>
        <section className="line">
           <div className="video-container">
               
                <video  autoPlay >
                  <source src={video} type="video/mp4" />
                </video>
            </div>

            <div className="boxes">
               <div className="box">
                   <img src={Coach}/>
              
                   <span><h2>Online  Coaching</h2></span>
                   <div className="txt">
                        <p className="ons">
                          Jeg tilbyder online coaching, det vil sige det er nemt og fleksibilitet for dig.  
                          Og ikke nogen bekymringer om afstand og rejsetid. Gennem virtuelle møder hjælper 
                          jeg dig til at finde frem til din udfordring eller blokering, gennem god spørgeteknik
                          samt at lytte til både det der bliver sagt og det der ikke bliver sagt. Uanset om 
                          det er personlig- eller karriereudfordringer. Jeg er her for at hjælpe dig til at 
                          få ro og balance så du kan udleve dit potentiale. Sammen kan vi styrke dit liv og 
                          nå dine ønskede resultater. Du har mulighed for at booke en afklaringssamtale med 
                          mig på en halv time helt gratis. Jeg ser frem til at være din coach på rejsen mod 
                          din personlige vækst og trivsel.
 
                        </p>
                    </div>
                    <div className="bt1">
                      Prisen efter aftalt
                    </div>
    
                </div>  
                <div className="box">
                    <img src={Forløb}/>
                    <span><h2>Online  Forløb</h2></span>
   
                    <div className="txt">
                        <p className="ons">
                          Mit online forløb er et 10 moduls forløb, et modul hver uge, der er læsestof, 
                          der er videoer der vil være øvelser og der er selvfølgelige en ugentlig time Q/A.
                          Det er alt det jeg har lært og selv brugt i mit liv der er kogt sammen til disse 
                          10 moduler. Forløbet er der rigtig meget læring og erfaring i. Forløbet hedder ”Rejsen 
                          til succes” og det er en rejse du vil blive ved med at være på, når du først kommer i gang, 
                          og rejsen stopper aldrig. Få styring i dit liv, nå til dine mål og få hovedrollen i dit
                          eget liv. Der er kun to retninger i livet vækst eller … Alt vokser eller dør. Book en 
                          afklaringssamtale helt gratis. Og lad os sammen hjælpe dig til dit mål.   
                        </p>
                    </div>
   
                    <div className="bt">
                      Prisen efter aftalt
                    </div>
                </div>
        
            </div>
        </section>
    </TilbyderContainer>
    <Footer/>
    </>
  )
}
