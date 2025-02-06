import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import videoes from './Om Flemming.mp4'

const OmflemmingContainer = styled.div`
.om{
    margin:35px;
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
.Omflemming {
    background: #0A265C;
    border-radius: 4px;
    width: 100%;
    
  }
h1 {
    padding-top: 30px;
    color: #ffffff;
    font-size: 30px;
    text-align: left;
    padding-left: 35px;
}
  
.tekst {
    font-size: 16px;
    margin-bottom: 35px;
    padding: 35px;
    color: #ffffff;
    height: 100%;
    width: auto;
}
  
@media (max-width: 768px) and (max-width: 820px), (min-width: 853px), (max-width: 912px){
    .Omflemming {
      
      width: auto;
    }
    
    h1 {
      font-size: 24px;
      padding-left: 20px;
    }
    
    .tekst {
      font-size: 14px;
      padding: 20px;
    }
}
@media (min-width: 1280px) {
    .Omeflemming {
      max-width: 1280px;
      margin-right: auto;
      margin-left: auto;
    }
  }

`
export default function Omflemming() {
  return (
    <>
        <Header/>
        <OmflemmingContainer>

            <section className="om">
                <div className="video-container">
                    <video  autoPlay >
                       <source src={videoes} type="video/mp4" />
                    </video>
                </div>
         
                <div className="Omflemming">
                    <span><h1>Hvem er Flemming Boje</h1></span>
                    <div className='tekst'>
                      <p>
                       Jeg har studeret personlig udvikling siden 1990, og i 2019 begyndte jeg min rejse indenfor mindset, gennem en del forløb hos nogle af verdens bedste inden for mindset og mindset coaching. Jeg har en uddannelse som elektriker og efterfølgende elinstallatør, jeg har været selvstændig i mange år, jeg har haft job som afdelingsleder, sælger, rådgiver. Jeg blev meget nysgerrig på hvorfor der var nogle ting der blev ved med ikke at lykkes for mig, og andre ting der lykkes. Jeg lærte hvad der skulle til for at lykkes med de ting jeg ønsker at lykkes med. Så som din coach om det er som en til en coaching eller i forløb, har jeg en kæmpe erfaring fra livet, som leder, som selvstændig plus en masse andet. Jeg kan hjælpe dig til ikke at blive stressramt, jeg kan hjælpe dig til at få livsbalance, jeg kan lære dig at tage hovedrollen i dit liv, og ikke leve en birolle som størstedelen gør. Jeg ved, hvordan det er at føle sig utilfreds med sine resultater i livet, være klar til forandring, men samtidig føle sig forvirret omkring, hvordan man skal nå derhen, hvor man virkelig gerne vil hen.
                       Det var lige præcis mig – på et tidspunkt følte jeg, at mit liv blev styret af en anden person, jeg levede ikke autentisk i harmoni med mine inderste ønsker. Jeg var fuldstændig indhyllet i en virkelig usund mentalitet, og jeg havde for vane at søge validering udenfor mig selv.
                       Min intuition sagde mig, at der var en nemmere vej for mig. Så jeg tog på en mission for at finde den…
                       Nu underviser jeg i netop det materiale, der har givet mig mulighed for at være en integreret del af opbygningen af en succesfuld virksomhed på under to år, samtidig med at jeg skaber mere frihed og fleksibilitet i mit liv end nogensinde før!
                       Book en gratis afklaringssamtale med mig, og lade os se om vi kan flytte dig i den retning du gerne vil.
 
                      </p>
                    </div>
                </div>
             </section>
     


       </OmflemmingContainer>
       <Footer/>
    
    
    
    </>
  )
}
