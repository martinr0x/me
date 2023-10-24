// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { workExpierenceSteps } from './background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ScrollStepper from './scroll-stepper';
import Nutshell from './nutshell';
import Contacts from './contacts';

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}

export function App() {
  const refIntro = useRef<HTMLDivElement>(null);
  const refContactMe = useRef<HTMLDivElement>(null);
  const isVisibleIntro = useOnScreen(refIntro);
  const isVisibleContactMe = useOnScreen(refContactMe);

  const scroll = (ref: any) => (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    ref.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  };

  return (
    <div className="w-screen h-screen snap-mandatory snap-y overflow-scroll antialiased">
      <div
        className={
          'w-screen fixed top-0 flex-row flex justify-end p-3 translate-x-1/2 blur-md transition-all duration-500 ' +
          (!isVisibleIntro && !isVisibleContactMe ? 'show' : '')
        }
      >
        <Contacts />
      </div>
      <div className="snap-always snap-start w-screen h-screen flex flex-col justify-center relative">
        <div className="w-screen h-screen flex flex-row justify-center ">
          <div className="max-w-screen-md flex flex-col justify-center">
            <div className="flex flex-row pb-24 ">
              <div className="flex-initial w-80 h-80 rounded-md">
                <img
                  className="hover:scale-105 transition duration-500 cursor-pointer object-cover rounded-full"
                  src="/me/portrait-martin.jpg"
                ></img>
              </div>

              <div className="pl-8 flex-1">
                <div
                  className="flex flex-row justify-start text-6xl font-semibold font-inter leading-[48px]"
                  ref={refIntro}
                >
                  <div className="typewriter ">Hi there,</div>
                  <div className="typewriter2">I'm Martin.</div>
                </div>
                <div className="pt-4 pb-4 font-normal text-[26px] font-inter leading-8 text-1">
                  My name is Martin Bogusz. I work as a software engineer.
                </div>
                <div className="pb-4 font-normal text-[18px] font-inter leading-7">
                  Since I was a kid I was facinated with all tech things. Fast
                  forward to today, this facination turned into a career. I love
                  solving hard problems and I am dedicated to build great
                  products that are used by millions. If you're curious to learn
                  more about who I am and delve into my technical background,
                  scroll further down this page.
                </div>
                <div>
                  <Contacts anchor="justify-left" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <button className="animate-bounce" onClick={scroll(refContactMe)}>
            <FontAwesomeIcon
              className="text-4xl text-primary"
              icon={faArrowDown}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>

      <div
        id="work"
        className={
          'snap-always snap-start w-screen h-screen justify-center flex flex-row '
        }
      >
        <ScrollStepper
          left={false}
          checked={true}
          visible={isVisibleIntro}
          title={'Work Expierence'}
          steps={workExpierenceSteps}
        />
      </div>
      <div
        className={
          'snap-always snap-start w-screen h-screen justify-center flex flex-row'
        }
      >
        <Nutshell />
      </div>
      <div className="snap-always snap-start w-screen h-screen flex flex-col justify-center">
        <div className="w-screen h-screen flex flex-row justify-center">
          <div className="max-w-screen-md flex flex-col justify-center">
            <div
              className="text-neutral-900 text-6xl font-semibold font-inter leading-[48px] text-center pb-6"
              ref={refContactMe}
            >
              Let's work together.
            </div>
            {/* <div className="pt-4 pb-4 text-5xl font-semibold font-inter leading-[48px] text-center">
              Contact Me
            </div> */}
            <Contacts />
          </div>
        </div>
        <div className="w-full flex flex-row justify-center text-neutral-700 font-inter text-sm">
          Made with Tailwind CSS & React
        </div>
        <div className="w-full flex flex-row justify-center font-inter text-sm  font-semibold">
          © 2023 All rights reserved. – Coded by Martin Bogusz
        </div>
      </div>
    </div>
  );
}

export default App;
