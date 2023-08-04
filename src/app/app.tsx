// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import Stepper from './stepper';
import { backgroundSteps, workExpierenceSteps } from './background';

function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    [ref]
  );

  useEffect(() => {
    if (!ref?.current) return;
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}
export function App() {
  const refWorkExpierence = useRef<HTMLDivElement>(null);
  const refBackground = useRef<HTMLDivElement>(null);

  const [background, setBackground] = useState(false);
  const toggleBackground = () => {
    setBackground(!background);
  };
  const isVisible = (ref: RefObject<HTMLElement>) => useOnScreen(ref);
  const scroll = (ref: any) => (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    ref.current?.scrollIntoView({ block: 'nearest' });
  };

  return (
    <div className="w-screen h-screen snap-mandatory snap-y overflow-scroll">
      {/* <div className="flex justify-center pt-5 pb-10">
          <div className="w-[284px] h-10 px-6 py-2 bg-white rounded-3xl shadow border border-zinc-100 justify-start items-start gap-8 inline-flex">
            <div className="text-indigo-600 text-base font-medium leading-normal">
              About me
            </div>
            <div className="text-blue-950 text-base font-medium leading-normal">
              Projects
            </div>
            <div className="text-blue-950 text-base font-medium leading-normal">
              Blog
            </div>
          </div>
        </div>
        <div></div> */}
      <div className="snap-always snap-start w-screen h-screen flex flex-row justify-center">
        <div className="max-w-screen-md flex flex-col justify-center">
          <div className="flex flex-row pb-24 ">
            <div className="flex-initial w-80 h-80">
              <img className="" src="portrait-martin.jpg"></img>
            </div>
            <div className="pl-8 flex-1">
              <div className="text-neutral-900 text-6xl font-semibold font-inter leading-[48px]">
                Hi there, I’m Martin.
              </div>
              <div className="pt-4 font-normal text-base font-inter">
                I'm all about exploring the wonders of technology, especially
                when it comes to IT security. Keeping data safe and secure is my
                top priority, and I'm excited to share the latest insights with
                you. Distributed computing also fuels my curiosity. I love
                delving into the world of parallel processing and making the
                most out of interconnected systems.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="snap-always snap-start w-screen h-screen flex flex-row justify-center">
        <div className="max-w-screen-md flex flex-col justify-center font-inter">
          <Stepper
            left={true}
            checked={background}
            onToggle={scroll(refWorkExpierence)}
            topRef={refBackground}
            title={'Background'}
            steps={backgroundSteps}
          />
        </div>
      </div>
      <div className="snap-always snap-start w-screen h-screen flex flex-row justify-center">
        <div className="max-w-screen-md flex flex-col justify-center">
          <Stepper
            left={false}
            checked={true}
            onToggle={scroll(refBackground)}
            topRef={refWorkExpierence}
            title={'Work Expierence'}
            steps={workExpierenceSteps}

          />
        </div>
      </div>
    </div>
  );
}

export default App;
