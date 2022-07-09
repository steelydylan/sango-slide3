import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


export const Sanko = ({ title, subtitle, url }) => (
    <a href={url} className="reference table" target="_blank">
      <span className="tbcell refttl">
        <FontAwesomeIcon icon={faBookmark} style={{ color: '#ffb36b' }} />
        <div>参考</div>
      </span>
      <span className="tbcell refcite">
        {title}
        <span>{subtitle}</span>
      </span>
    </a>
)
