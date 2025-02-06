import React  from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import citat1 from './Albert einstein.png'
import citat2 from './At elske sig selv er en livslang romance.png'
import citat3 from './Beslutsom fantasi.png'
import citat4 from './Den største afstand.png'
import citat5 from './FB_IMG_1509540944283.jpg'
import citat6 from './Elsk mennesker, brug penge.png'
import citat7 from './Gave.png'
import citat8 from './gaven.png'
import citat9 from './Gør noget aktivt for at få det godt.png'
import citat10 from './Kontrol.png'
import citat11 from './Menneskets sind kan opnå hvad det vil.png'
import citat12 from './Mod.png'
import citat13 from './Nutrition.png'
import citat14 from './start i dag.png'
import citat15 from './Syn, men ingen vision.png'
import citat16 from './Tiltro og frygt.png'
import citat17 from './Tro og frygt.png'
import citat18 from './Wayne Dyer.png'
import citat19 from './Dine tanker skaber dine resultater (003).png'
import citat20 from './images[21].jpg'
import citat21 from './images.jpg'

const CitaterContainer = styled.div`

.row{
    background: #ffffff;
    margin: 35px;
}
.column {
    float: left;
    width: 33.33%;
    padding: 5px;
   
}
.column img{
    border: 20px solid #0A265C;
    cursor: pointer;
}
.row::after {
    content: "";
    clear: both;
    display: table;
}  


`
export default function Citater() {
    const handleImageClick = (event) => {
        event.target.classList.toggle('expanded');
      };
    
      const handleDownloadClick = (event) => {
        const imageSrc = event.target.parentNode.href;
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = imageSrc.substring(imageSrc.lastIndexOf('/') + 1);
        link.click();
      };
    
  return (
    <>
       <Header/>
       <CitaterContainer>
            <div className="row">
                <div className="column">
                    <a href={citat1} download>
                        <img src={citat1} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>
                <div className="column">
                    <a href={citat2} download>
                        <img src={citat2} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>
                <div className="column">
                    <a href={citat3} download>
                        <img src={citat3} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>

                <div className="column">
                    <a href={citat4} download>
                        <img src={citat4} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>

                <div className="column">
                    <a href={citat5} download>
                        <img src={citat5} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>
    
                <div className="column">
                    <a href={citat6} download>
                        <img src={citat6} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>
    
                <div className="column">
                    <a href={citat7} download>
                        <img src={citat7} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>
    
                <div className="column">
                    <a href={citat8} download>
                        <img src={citat8} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>
    
    
                <div className="column">
                    <a href={citat9} download>
                        <img src={citat9} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>
    
                <div className="column">
                    <a href={citat10} download>
                        <img src={citat10} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>
    
                <div className="column">
                    <a href={citat11} download>
                        <img src={citat11} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>
    
                <div className="column">
                    <a href={citat12} download>
                        <img src={citat12} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>
    
                <div className="column">
                    <a href={citat13} download>
                        <img src={citat13} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>
    
                <div className="column">
                    <a href={citat14} download>
                        <img src={citat14} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>
    
                <div className="column">
                    <a href={citat15} download>
                        <img src={citat15} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>
    
                <div className="column">
                    <a href={citat16} download>
                        <img src={citat16} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>
    
                <div className="column">
                    <a href={citat17} download>
                        <img src={citat17} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>
    
                <div className="column">
                    <a href={citat18} download>
                        <img src={citat18} alt="" style={{ width: '100%' }} onClick={handleImageClick} />
                    </a>
                </div>

            </div>
       </CitaterContainer>
        <Footer/>
    </>
  )
}
