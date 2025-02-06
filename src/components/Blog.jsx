import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import imag1 from './Flemming Blog.png';
import imag2 from './1.png';
import imag3 from './2.png';
import imag4 from './3.png';
import imag5 from './4.png';
import imag6 from './5.png';
import imag7 from './6.png';

const BlogContainer = styled.div`
  .slider {
    background: #0A265C;
    margin: 35px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  } 
  
  .image-slider {
    width: 80%;
    height: 80%;
    background-size: 100% 100%;
    box-shadow: 20px 20px 10px #C1C5C3;
  }

  .sliderimg {
    width: 100%;
    height: 100%;
    object-fit: fit;
  }
`;

const images = [imag1, imag2, imag3, imag4, imag5, imag6,imag7];

export default function Blog() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header/>
      <BlogContainer>
        <section className="slider">
          <div className="image-slider">
            <img src={images[currentImage]} alt="Slideshow" className="sliderimg" />
          </div>
        </section>
      </BlogContainer>
      <Footer/>
    </>
  );
}