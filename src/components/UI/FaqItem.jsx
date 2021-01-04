import React from 'react'

import '../../styles/faqitems.scss';

import arrowIcon from '../../images/icon-arrow-down.svg';


function FaqItem({ title, desc, active })
{
  let classActive = ''
  if (active) {
    classActive = 'active'
  }

  return (
    <li className="FaqItem">
      <div className="Item-Content">
        <p className={classActive}>{ title }</p>
        <p>{ desc }</p>
      </div>
      <div className="Item-Arrow">
        <img src={arrowIcon} alt="" />
      </div>
    </li>
  )
}

export default FaqItem;
