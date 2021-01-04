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
          <img src={illustrationMobile} alt="" />
          <img className="BoxImage-Inner-Shadow" src={illustrationBoxShadow} alt="" />
        </div>
      </div>
      <hgroup className="FaqCard-Header">
        <h1 className="text-center">FAQ</h1>
      </hgroup>
      <FaqItemsContainer>
        {faqItems.map(i => (
          <FaqItem key={i.id} title={i.title} desc={i.desc} active={i.active} />
        ))}
      </FaqItemsContainer>
    </div>
  )
}


export default FaqCard;
