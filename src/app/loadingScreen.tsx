import { useEffect, useState } from 'react';

export default function LoadingScreen(props: {
  words: any;
  setPageLoaded: any;
}) {
  const { words, setPageLoaded } = props;

  const [counter, setCounter] = useState(0);

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((c) => {
        if (c >= 100) {
          clearInterval(intervalId);
          setTimeout(() => {
            document.getElementById('loading-screen')?.classList.add('hidden');
            setPageLoaded(true);
          }, 800);
        }
        const count = Math.min(100, c + randomNumber(1, 4));

        return count;
      });

      const rnd = randomNumber(0, words.length);

      document.getElementById(`word-${rnd}`)?.classList.add('vibrate');
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id={'loading-screen'}
      className={
        'fixed w-screen h-screen flex flex-row flex-wrap p-10 justify-between z-[99] bg-white delay-500 duration-500 ease-in overflow-y-hidden' +
        (counter < 100 || 'opacity-0')
      }
    >
      <div
        className={
          ' flex flex-row flex-wrap duration-500 ease-out ' +
          (counter < 100 || ' delay-200 opacity-0')
        }
      >
        {words.map((w: string, index: number) => (
          <div
            id={`word-${index}`}
            className={
              'p-2 text-xl font-raleway duration-500 ease-in text-white'
            }
            key={index}
          >
            {w}
          </div>
        ))}
      </div>

      <div className="fixed top-1/2 left-1/2 -ml-16 -mt-16 h-32 w-32 bg-white rounded-full font-inter font-semibold text-center z-[999] flex justify-center items-center text-3xl">
        {counter}%
      </div>
    </div>
  );
}
