import React from 'react';

import '../styles/faqcard.scss';

import FaqItemsContainer from './FaqItemsContainer';
import FaqItem from '../components/UI/FaqItem';

import { faqItems } from '../../faqItems';

import illustrationMobile from '../images/illustration-woman-online-mobile.svg';
import illustrationDesktop from '../images/illustration-woman-online-desktop.svg';
import illustrationDesktopBox from '../images/illustration-box-desktop.svg';

import illustrationBoxShadow from '../images/bg-pattern-mobile.svg';
import illustrationBoxShadowDesktop from '../images/bg-pattern-desktop.svg';


function FaqCard() 
{
  return (
    <div className="FaqCard">
      <div className="BoxImage">
        <div className="BoxImage-Inner">
          <div className="BoxImage-Container">
            <img className="hidden-lg" src={illustrationMobile} alt="" />
            <img className="BoxImage-Inner-Shadow hidden-lg" src={illustrationBoxShadow} alt="" />
            <img className="hidden-xs" src={illustrationDesktop} alt="" />
          </div>
        </div>
        <div className="BoxImage-Shadow-Container">
          <img className="hidden-xs" src={illustrationBoxShadowDesktop} alt="" />
        </div>
        <div className="BoxImage-BoxIcon">
          <img className="hidden-xs" src={illustrationDesktopBox} alt="" />
        </div>
      </div>
      <div className="FaqCard-Container">
        <hgroup className="FaqCard-Header">
          <h1>FAQ</h1>
        </hgroup>
        <FaqItemsContainer>
          {faqItems.map(i => (
            <FaqItem key={i.id} title={i.title} desc={i.desc} active={i.active} />
          ))}
        </FaqItemsContainer>
      </div>
    </div>
  )
}


export default FaqCard;
