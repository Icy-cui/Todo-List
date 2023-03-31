import React from 'react';
import './Watermark.css';

const Watermark = ({ text }) => {
  return (
    <div className="watermark-container">
      <div className="watermark">{text}</div>
    </div>
  );
};

export default Watermark;
