import React from 'react';

export const LinkImage = ({ image, url, text }) => {
  return (<div className="grid">
    <div className="column">
      <a href={url}>
        <img src={image} />
      </a>
    </div>
    <div className="column">
      <div className="balloon">
        {text}
      </div>
    </div>
  </div>)
}
