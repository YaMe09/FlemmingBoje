import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import {facebook2} from 'react-icons-kit/icomoon/facebook2';
import {instagram} from 'react-icons-kit/icomoon/instagram';
import {youtube} from 'react-icons-kit/icomoon/youtube';
import {linkedin} from 'react-icons-kit/icomoon/linkedin';
import copy from './copy.svg';

const FooterContainer = styled.footer`
  * {
    background: #0A265C;
    margin:0;
  }
  
  .fot {
    color: #9E8948;
    text-align: center;
    align-items: center;
    font-size: 20px;
    padding-top: 15px;
    padding-bottom:5px;
    line-height: 2rem;
  }
  
  .wrapper {
    display: flex;
    justify-content: center;
    
  }
  
  .icon {
    display: flex;
    align-items: center;
    margin-left:15px;
  }
  
  .icon a {
    
    align-items: center;
    justify-content: center;
  }
  
  .tooltip {
    position: relative;
    display: inline-block;
  }
  
  .fot img {
    width: 30px;
    height: 30px;
   margin-right: 5px;
  }
  
  .tooltip img {
    width: 30px;

  }
  
  .tooltip:before {
    content: "";
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    padding: 5px;
    background-color: #000;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    pointer-events: none;
  }
  
  .tooltip:hover:before {
    opacity: 1;
  }
  
  .cir {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  
`;
const SocialMediaLink = styled.a`
  justify-content: center;
  align-items: center;
  color: #9E8948;
  margin-right:20px;
  margin-top:10px;
  
`;
const SocialMediaLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0; 
`;
const Tooltip = styled.span`
  position: relative;
  display: inline-block;

  &:before {
    content: "";
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    padding: 5px;
    background-color: #000;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    pointer-events: none;
  }

  &:hover:before {
    opacity: 1;
  }
`;


export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <div className='fot'>
          Medlem af Køge Golfklubserhervsnetværk<br/>
          Medlem af Netvaerk Køge<br/>
          CVR nu: 43056530<br/>
          Følge os på 
          
          <div className="wrapper">
            <div className="icon">
              <SocialMediaLink target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/groups/791969714836536">
                <Tooltip>
                  <Icon icon={facebook2} size={30} />
                </Tooltip>
              </SocialMediaLink>
  
              <SocialMediaLink target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/life_is_thedream/">
                <Tooltip>
                  <Icon icon={instagram} size={30} />
                </Tooltip>
              </SocialMediaLink>
  
              <SocialMediaLink target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/flemming-boje-aps/">
                <Tooltip>
                  <Icon icon={linkedin} size={30} />
                </Tooltip>
              </SocialMediaLink>
  
              <SocialMediaLink target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCOWwUZf4T4IU69ux77mB62A">
                <Tooltip>
                  <Icon icon={youtube} size={30}  />
                </Tooltip>
              </SocialMediaLink>
            </div>
          </div>
  
          <div className='fot'><p className="fot">
            <img src={copy} alt="copy icon"/>2024 Flemming Boje </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}