import { useEffect, useState } from 'react';

export default function LoadingScreen(props) {
  const { words } = props;
  const [counter, setCounter] = useState(0);
  const [highlight, setHighlight] = useState(words.map(() => false));
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((c) => Math.floor(c + 4 * Math.random()));
      if (counter > 100) {
        clearInterval(intervalId);
      }
      const rnd = randomNumber(0, words.length);
      console.log(rnd);
      const h = [...highlight];
      h[rnd] = !h[rnd];
      setHighlight(h);
      document.getElementById(`test-${rnd}`)?.classList.add('vibrate');
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={
        'w-screen h-screen flex flex-row flex-wrap p-20 justify-between delay-500 ' +
        (counter < 120 || 'hidden')
      }
    >
      {highlight.map((w, index) => (
        <div
          id={`test-${index}`}
          className={
            'p-4 text-4xl font-raleway duration-300 ease-in ' +
            (counter < 100 ||
              `${index % 2 ? '-translate-x-[100vw]' : 'translate-x-[100vw]'}`)
          }
          key={index}
        >
          {words[index]}
        </div>
      ))}

      <div className="fixed left-1/2 top-1/2">{counter}</div>
    </div>
  );
}
