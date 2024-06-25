import React, { useState, useRef } from 'react';
import './projectCards.css';
import tbLogo from '../../assets/tbLogo.png';
import benlabs from '../../assets/benlabs.png';
import benimg from '../../assets/benImg.jpg'
import tbRedesign from '../../assets/tbRedesign.webp'
import vacanze from '../../assets/vacanze.png'
import stripe from '../../assets/stripe.png'
import score from '../../assets/score.png'
import ai from '../../assets/ai.png'
import googleMap from '../../assets/googleMap.png'
import info from '../../assets/info.png';
import vacanzeBig from '../../assets/Dark-preview.png'
import guideFull from '../../assets/guideFull.png'

type CardProps = {
  company: string,
  position: string,
  description: string,
  graphic: string,
  details: string
}
let imgSrc: string;
let graphicSrc: string;
export const ProjectCards: React.FC<CardProps> = ({ company, position, description, graphic, details }) => {

  let backside = useRef<HTMLDivElement>(null);
  let toolWrap = useRef<HTMLDivElement>(null);
  let frontSide = useRef<HTMLDivElement>(null);
  let backX = useRef<HTMLButtonElement>(null);
  let cardWrap = useRef<HTMLDivElement>(null);

  let handleFlip = () => {
    
    cardWrap.current?.classList.add('spin')
    if(backside.current?.classList.contains('hidden')){
      setTimeout(() => {
        backside.current?.classList.remove('hidden')
        backside.current?.classList.add('visibleCard')
        frontSide.current?.classList.add('hidden')
        frontSide.current?.classList.remove('visibleCard')
      }, 500);
    } else {
      setTimeout(() => {
        backside.current?.classList.add('hidden')
        backside.current?.classList.remove('visibleCard')
        frontSide.current?.classList.remove('hidden')
        frontSide.current?.classList.add('visibleCard')
      }, 500);
    }
    setTimeout(() => {
      cardWrap.current?.classList.remove('spin')
    }, 1000);
    
  }
  
  switch(company){
    case 'TubeBuddy':
      imgSrc = tbLogo;
      break;
    case 'BENlabs':
      imgSrc = benlabs;
      break;
    case 'Vacanze':
      imgSrc = vacanze;
      break;
  } 
  switch(graphic){
    case 'tbRedesign':
      graphicSrc = tbRedesign;
      break;
    case 'benRedesign':
      graphicSrc =  benimg;
      break;
    case 'stripe':
      graphicSrc = stripe;
      break;
    case 'score':
      graphicSrc = score;
      break;
    case 'ai':
      graphicSrc = ai;
      break;
    case 'googleMap':
      graphicSrc = googleMap;
      break;
    case 'vacanzeBeach':
      graphicSrc = vacanzeBig;
      break;
    case 'guideFull':
      graphicSrc = guideFull;
      break;
  } 
  
  return (
  <div ref={cardWrap} className='cardWrap onTop'>
    
    <section className='cardContainer'>
    <article ref={frontSide}>
    
      <header>
        <div ref={toolWrap} onClick={handleFlip} className='toolWrap'>
        <img className='infoImg' src={ info } />
        </div> 
        <h1 className='cardContainerH1'>
          { company }
          <br />
          <p>{ position }</p>
        </h1>
        <img className='logoImg' src={ imgSrc }/>
      </header>
      <section dangerouslySetInnerHTML={{ __html: description }}>
        
      </section>
      <img className='graphic' src={graphicSrc} />
    </article>
    <footer ref={ backside } className='hidden footer'>
      <div>
      <button ref={ backX } onClick={handleFlip}>X</button>
      <p dangerouslySetInnerHTML={{ __html: details }}></p>
      <img className='footerlogoImg' src={ imgSrc }/>
      <h1 className='footerH1'>
          { company }
          <br />
          <p>{ position }</p>
        </h1>
      </div>
    </footer>
    </section>
  </div>
)};