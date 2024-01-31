import { useEffect, useState } from 'react';
import FormattedTime from './components/FormattedTime/FormattedTime';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import './styles/global.scss';

const App = () => {

const [currentTime, setCurrentTime] = useState(0);
const [intervalId, setIntervalId] = useState(null);
  
useEffect(() => {

  return () => {
    clearInterval(intervalId);
  };
}, [intervalId]);

const startTimer = () => {

  if (!intervalId) {
    const id = setInterval(() => {
      setCurrentTime((prevTime) => prevTime + 100);
    }, 100);

    setIntervalId(id);
  }
};

const stopTimer = () => {
  if (intervalId) {
    clearInterval(intervalId);
    setIntervalId(null);
  }
};

const resetTimer = () => {
  setCurrentTime(0);
};

  return (
    <Container>
        <FormattedTime time={currentTime} />
        <Button type="button" onClick={startTimer}>Start</Button>
        <Button type="button" onClick={stopTimer}>Stop</Button>
        <Button type="button" onClick={resetTimer}>Reset</Button>
    </Container>
  );
}

export default App;
