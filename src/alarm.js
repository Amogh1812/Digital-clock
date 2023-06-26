import React, { useState, useEffect } from 'react';

const AlarmClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [alarmTime, setAlarmTime] = useState('');
  const [isAlarmOn, setIsAlarmOn] = useState(false);
  const [isAlarmPlaying, setIsAlarmPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleAlarmChange = (event) => {
    setAlarmTime(event.target.value);
  };

  const handleAlarmToggle = () => {
    setIsAlarmOn(!isAlarmOn);
  };

  useEffect(() => {
    if (isAlarmOn) {
      const alarm = new Date();
      const [hours, minutes] = alarmTime.split(':');
      alarm.setHours(parseInt(hours));
      alarm.setMinutes(parseInt(minutes));

      const checkAlarm = setInterval(() => {
        const currentTime = new Date();
        if (currentTime.getHours() === alarm.getHours() && currentTime.getMinutes() === alarm.getMinutes()) {
          setIsAlarmOn(false);
          clearInterval(checkAlarm);
          setIsAlarmPlaying(true);
        }
      }, 1000);

      return () => {
        clearInterval(checkAlarm);
      };
    }
  }, [isAlarmOn, alarmTime]);

  useEffect(() => {
    if (isAlarmPlaying) {
      const alarmAudio = new Audio('alarm-clock.mp3'); // Replace with the path to your alarm sound file
      alarmAudio.play();
      setAudio(alarmAudio);
    }
  }, [isAlarmPlaying]);

  const handleStopAlarm = () => {
    setIsAlarmPlaying(false);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <div>
      <h1>Alarm Clock</h1>
      <p>Current Time: {time}</p>
      <div>
        <label htmlFor="alarmTime">Set Alarm: </label>
        <input type="time" id="alarmTime" value={alarmTime} onChange={handleAlarmChange} />
        <button onClick={handleAlarmToggle}>{isAlarmOn ? 'Turn Off Alarm' : 'Turn On Alarm'}</button>
      </div>
      {isAlarmPlaying && (
        <div>
          <p>Alarm is ringing!</p>
          <button onClick={handleStopAlarm}>Stop Alarm</button>
        </div>
      )}
    </div>
  );
};

export default AlarmClock;
