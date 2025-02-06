import React, {useState} from 'react'
import styled from 'styled-components'
import logo from './Flemming logo.png'


const HeaderContainer = styled.header`
*,
*::before,
*::after {
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: 'Kreon', serif;
  text-decoration: none;
}

.book-btn {
  background-color: #9E8948;
  padding: 13px 25px;
  text-align: center;
  border-radius: 10px;
  margin-top: 40px;
  font-size: 20px;
  cursor: pointer;
}

.book-btn a {
  color: #ffffff;
}

.desktop {
  display: flex;
  background: #0A265C;
  justify-content: space-between;
  align-items: center;

}

.desktop img {
    width: 100%;
    height: 110px;
    float: right;
    margin-right:10px;
}


.navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 35px;
    height: 100px;
    width: 100%;
    margin-right: 24px;
}

.navbar li,
.navbar a {
  list-style: none;
  color: #9E8948;
  font-size: 20px;
  font-weight: 500;
}

.navbar li,
.navbar a:hover,
.navbar .btn,
.book-btn a:hover {
  color: #ffffff;
}

.book-btn {
  margin-top: 0;
}

#list{
  height: 340px;
  padding-left: 50px;
}

li{
  
  margin-bottom: 6px;
  list-style: none;
}
.li .book-btn #bn{
  font-size: 16px;
  text-align: center;
  justify-content: center;
  
  
}
.Mobil li a{
    color: #9E8948;
    font-size: 16px;
    margin-left: 25px;
    text-align: center;  
}
.Mobil li #bn{
  color: #ffffff;
  text-align: center;
  margin:0;
 
}
.list-style.visible{
    background: #0A265C;
  
}

  /* CSS for mobil */
  @media (max-width: 767px) {
    .desktop {
      display: none;
      justify-content: space-between;
      align-items: center;
      text-align: center;
    }
  
    .mobile {
      display: block;
    }
  
    .menu {
      cursor: pointer;
      padding: 10px;
      background: #0A265C;
      
    }
  
    .menu-bar {
      display: block;
      width: 25px;
      height: 3px;
      background-color: #9E8948;
      margin-bottom: 5px;
     margin-left: 25px;
    }
    
  
    .list-style {
      display: none;
    }
  
    .list-style.visible {
      display: block;
    }
    .book-btn {
        background-color: #9E8948;
        color: #0A265C;
        width: 95px;
        height: 35px;
        text-align: center;
        align-items: center;
        margin-left: 15px;
  
        text-decoration: none;  
    }
    .book-btn #bn{
        margin:0;
        font-size: 16px;
        text-align: center;
       text-decoration: none;
       
    }
  }
  
  /* CSS for desktop */
  @media (min-width: 768px) {
    
    .desktop img {
        width: 100%;
        height: 110px;
        float: right;
    }
    
    .mobile {
      display: none;
    }
  
    .navbar {
      display: flex;
      align-items: center;
    }
  
  
  
    .navbar li:last-child {
      margin-right: 0;
    }
  }
  @media (min-width: 768px) and (max-width: 819px) {
    .desktop {
      display: none;
    }
   
    .mobile {
      display: block;
    }
    .menu {
      cursor: pointer;
      padding: 10px;
      background: #0A265C;
      
    }
  
    .menu-bar {
      display: block;
      width: 25px;
      height: 3px;
      background-color: #9E8948;
      margin-bottom: 5px;
     margin-left: 25px;
    }
    
  
    .list-style {
      display: none;
    }
  
    .list-style.visible {
      display: block;
    }
    .book-btn {
        background-color: #9E8948;
        color: #0A265C;
        width: 95px;
        height: 35px;
        text-align: center;
        align-items: center;
        margin-left: 15px;
        margin-top: 5px;
        text-decoration: none;  
    }
    .li .book-btn #bn{
        font-size: 16px;
        text-align: center;
        algin-items:center;
       text-decoration: none;
    }
  }
  
  @media (min-width: 820px) and (max-width: 911px) {
    .desktop {
      display: none;
    }
  
    .mobile {
      display: block;
    }
    .menu {
      cursor: pointer;
      padding: 10px;
      background: #0A265C;
      
    }
  
    .menu-bar {
      display: block;
      width: 25px;
      height: 3px;
      background-color: #9E8948;
      margin-bottom: 5px;
     margin-left: 25px;
    }
    
  
    .list-style {
      display: none;
    }
  
    .list-style.visible {
      display: block;
    }
    .book-btn {
        background-color: #9E8948;
        color: #0A265C;
        width: 95px;
        height: 35px;
        text-align: center;
        align-items: center;
        margin-left: 15px;
        margin-top: 5px;
        text-decoration: none;  
    }
    .li .book-btn #bn{
        font-size: 16px;
        text-align: center;
       justify-content: center;
       text-decoration: none;
    }
  }
  
  @media (min-width: 912px) and (max-width: 852px) {
    .desktop {
      display: none;
    }
  
    .mobile {
      display: block;
    }
    .menu {
      cursor: pointer;
      padding: 10px;
      background: #0A265C;
      
    }
  
    .menu-bar {
      display: block;
      width: 25px;
      height: 3px;
      background-color: #9E8948;
      margin-bottom: 5px;
     margin-left: 25px;
    }
    
  
    .list-style {
      display: none;
    }
  
    .list-style.visible {
      display: block;
    }
    .book-btn {
        background-color: #9E8948;
        color: #0A265C;
        width: 95px;
        height: 35px;
        text-align: center;
        align-items: center;
        margin-left: 15px;
        margin-top: 5px;
        text-decoration: none;  
    }
    .li .book-btn #bn{
        font-size: 16px;
        text-align: center;
       justify-content: center;
       text-decoration: none;
    }
    
  }
  @media (min-width: 1024px) {
    .desktop img {
      width: 100%;
      height: 110px;
      float: right;
    }
    
    .mobile {
      display: none;
    }
  
    .navbar {
      display: flex;
      align-items: center;
    }
  
    .navbar li:last-child {
      margin-right: 0;
    }
  }
  
  @media (min-width: 912px) {
    .desktop img {
      width: 100%;
      height: 110px;
      float: right;
    }
    
    .mobile {
      display: none;
    }
  
    .navbar {
      display: flex;
      align-items: center;
    }
  
    .navbar li:last-child {
      margin-right: 0;
    }
  }
  
  @media (min-width: 1280px) {
    .desktop img {
      width: 100%;
      height: 110px;
      float: right;
    }
    
    .mobile {
      display: none;
    }
  
    .navbar {
      display: flex;
      align-items: center;
    }
  
    .navbar li:last-child {
      margin-right: 0;
    }
  }
  
`

export default function Header() {
      const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    
      const handleMenuClick = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
      };
      
      
        return (
          <HeaderContainer>
            <nav>
              <div className="mobile">
                <div className="menu" id="menu" onClick={handleMenuClick}>
                  <span className="menu-bar"></span>
                  <span className="menu-bar"></span>
                  <span className="menu-bar"></span>
                </div>
                <div
                  className={`list-style ${isMobileMenuOpen ? 'visible' : 'hidden'}`}
                  id="list"
                >
                  <ul class="Mobil">
            <li><a href="/">Forside</a></li>
            <li><a href="/tilbyder">Tilbyder</a></li>
            <li><a href="/foredragsholder">Foredragsholder</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/citater">Citater</a></li>
            <li><a href="/omflemming">Om Flemming</a></li>
            <li><a href="https://www.google.com/search?q=flemming+boje+aps&oq=flemming+boje+&gs_lcrp=EgZjaHJvbWUqCAgCEAAYFhgeMgoIABBFGBYYHhg5MgcIARAAGIAEMggIAhAAGBYYHjIGCAMQRRg9MgYIBBBFGDwyBggFEEUYPdIBCjExMDE5ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8">Anmeldelse</a></li>
            <li><a href="/kontak">Kontakt</a></li>
            <li><a href="/logind">Log ind</a></li>
            <li class="book-btn">
              <a id="bn"  href="https://calendly.com/flemmingboje/30min">Book</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="desktop">
        <a href="/"><img src={logo} alt="Flemming Boje" /></a>
        <ul class="navbar">
          <li><a href="/">Forside</a></li>
          <li><a href="/tilbyder">Tilbyder</a></li>
          <li><a href="/foredragsholder">Foredragsholder</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/citater">Citater</a></li>
          <li><a href="/omflemming">Om Flemming</a></li>
          <li><a href="https://www.google.com/search?q=flemming+boje+aps&oq=flemming+boje+&gs_lcrp=EgZjaHJvbWUqCAgCEAAYFhgeMgoIABBFGBYYHhg5MgcIARAAGIAEMggIAhAAGBYYHjIGCAMQRRg9MgYIBBBFGDwyBggFEEUYPdIBCjExMDE5ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8">Anmeldelse</a></li>
          <li><a href="/kontak">Kontakt</a></li>
          <li><a href="/logind">Log ind</a></li>
          <li class="book-btn">
            <a class="btn" href="https://calendly.com/flemmingboje/30min">Book et opkald</a>
          </li>
        </ul>
      </div>
    </nav>
    </HeaderContainer>
  )
}
