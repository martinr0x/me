import { useEffect, useState } from 'react';

export default function LoadingScreen(props) {
  const { words, setVisible } = props;
  const [counter, setCounter] = useState(0);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((c) => {
        if (c >= 100) {
          clearInterval(intervalId);
          setTimeout(() => setVisible(true), 600);
        }
        const count = Math.min(100, c + randomNumber(1, 4));

        return count;
      });

      const rnd = randomNumber(0, words.length);

      document.getElementById(`test-${rnd}`)?.classList.add('vibrate');
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={
        'fixed w-screen h-screen flex flex-row flex-wrap p-20 justify-between z-[9999] bg-white delay-500 duration-500 ease-in ' +
        (counter < 100 || 'opacity-0')
      }
    >
      <div
        className={
          ' flex flex-row flex-wrap duration-500 ease-out ' +
          (counter < 100 || ' delay-200 opacity-0')
        }
      >
        {words.map((w, index) => (
          <div
            id={`test-${index}`}
            className={
              'p-2 text-4xl font-raleway duration-500 ease-in text-gray-200 '
            }
            key={index}
          >
            {w}
          </div>
        ))}
      </div>

      <div className="fixed left-1/2 top-1/2 z-30 bg-white rounded-full h-64 w-64 font-inter  text-center flex justify-center items-center -mt-32 -ml-32 text-2xl">
        {counter}%
      </div>
    </div>
  );
}
