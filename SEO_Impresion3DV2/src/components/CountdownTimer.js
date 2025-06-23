// src/components/CountdownTimer.js
import { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};
    
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown-container">
      <div className="countdown-item">
        <div className="countdown-value">{timeLeft.days || '0'}</div>
        <div className="countdown-label">Días</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{timeLeft.hours || '0'}</div>
        <div className="countdown-label">Horas</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{timeLeft.minutes || '0'}</div>
        <div className="countdown-label">Min</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{timeLeft.seconds || '0'}</div>
        <div className="countdown-label">Seg</div>
      </div>
    </div>
  );
};

export default CountdownTimer;