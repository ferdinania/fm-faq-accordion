import React from 'react'

import '../../styles/faqitems.scss';

import arrowIcon from '../../images/icon-arrow-down.svg';


function FaqItem({ title, desc, active, clicked })
{
  let classActive = ''
  if (active) {
    classActive = 'active'
  }

  return (
    <li className="FaqItem" onClick={clicked}>
      <div className="Item-Content">
        <p className={classActive}>{ title }</p>
        {active && <p>{ desc }</p>}
      </div>
      <div className="Item-Arrow">
        <img className={active ? 'rotateUp' : ''} src={arrowIcon} alt="" />
      </div>
    </li>
  )
}

export default FaqItem;
