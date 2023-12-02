import React, { useState } from 'react';
import './Wheel.css';

const Wheel = () => {
  const [percentage, setPercentage] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const spinWheel = () => {
    if(!buttonClicked) {
      setSpinning(true);
      setTimeout(() => {
        const randomPercentage = Math.floor(Math.random() * 100) + 1;
        setPercentage(randomPercentage);
        setSpinning(false);
      }, 2000);
      setButtonClicked(true);
      setTimeout(() => {
        window.location.reload();
      }, 3500);

    }
   
  };

  return (
    <div className="wheel-container">
      <h1>Spin the Wheel of Discount!</h1>
      <div className="centered-wheel">
        <div className='wheel'>
        <img
          src={`${process.env.PUBLIC_URL}/spin wheel.webp`}
          alt="Spinning Wheel"
          className="spinning-wheel"
        />
        </div>
        <button
          className={`spin-button ${buttonClicked ? 'moved' : ''}`}
          onClick={spinWheel}
          disabled={spinning}
        >
          {buttonClicked ? '' : 'Spin'}
        </button>
        {percentage > 0 && <p class="dis">You've won {percentage}% discount!</p>}
      </div>
      
    </div>
  );
};

export default Wheel;
