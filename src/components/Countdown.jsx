import React, { useEffect, useState } from 'react';

// Countdown component: shows days, hours, minutes, seconds remaining until target date
// Props: targetDate (string or Date). If not provided default to Nov 7, 2025 (event date in repo).

const pad = (n) => String(n).padStart(2, '0');

const Countdown = ({ targetDate = '2025-11-07T00:00:00' }) => {
  const calculate = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = Math.max(0, target - now);

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds, totalSeconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculate());

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft(calculate());
    }, 1000);
    return () => clearInterval(t);
  }, [targetDate]);

  // If countdown finished, you might want to display something else
  if (timeLeft.totalSeconds <= 0) {
    return (
      <div className="inline-flex items-center gap-4 bg-white/5 glass-effect p-3 rounded-full">
        <span className="text-sm text-green-300 font-semibold">The event is live or has finished!</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-3 bg-white/5 glass-effect p-3 rounded-full text-center">
      <div className="px-3 py-2">
        <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
        <div className="text-xs text-gray-300">Days</div>
      </div>
      <div className="px-3 py-2">
        <div className="text-2xl font-bold text-white">{pad(timeLeft.hours)}</div>
        <div className="text-xs text-gray-300">Hours</div>
      </div>
      <div className="px-3 py-2">
        <div className="text-2xl font-bold text-white">{pad(timeLeft.minutes)}</div>
        <div className="text-xs text-gray-300">Minutes</div>
      </div>
      <div className="px-3 py-2">
        <div className="text-2xl font-bold text-white">{pad(timeLeft.seconds)}</div>
        <div className="text-xs text-gray-300">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
