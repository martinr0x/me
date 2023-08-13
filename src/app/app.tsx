// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import Stepper from './stepper';
import { backgroundSteps, workExpierenceSteps } from './background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ScrollStepper from './scroll-stepper';

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
  const ref = useRef<HTMLDivElement>(null);

  const isVisible = useOnScreen(refBackground);
  const isVisible2 = useOnScreen(refWorkExpierence);


  const scroll = (ref: any) => (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    ref.current?.scrollIntoView({ block: 'nearest', behavior:"smooth" });
  };

  return (
    <div className="w-screen h-screen snap-mandatory snap-y overflow-scroll">
           <div className={'w-screen fixed top-0 flex-row flex justify-end p-3 translate-x-1/2 blur-md transition-all duration-500 '+ (!
            (isVisible || isVisible2) || "translate-x-0 blur-0" )}>
        <a href="https://www.linkedin.com/in/martinbogusz/">
                  <FontAwesomeIcon
                    className="text-4xl pr-3 text-primary hover:text-indigo-700"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                </a>
                <a href="https://github.com/martinr0x">
                  <FontAwesomeIcon
                    className="text-4xl pr-3 text-primary hover:text-indigo-700"
                    icon={faGithub}
                  ></FontAwesomeIcon>
                </a>
        </div>
      <div className="snap-always snap-start w-screen h-screen flex flex-col justify-center">
     
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
        </div> */}
        <div></div>
        <div className="w-screen h-screen flex flex-row justify-center">
        <div className="max-w-screen-md flex flex-col justify-center">
          <div className="flex flex-row pb-24 ">
            <div className="flex-initial w-80 h-80">
              <img className="hover:scale-105 transition duration-500 cursor-pointer object-cover" src="portrait-martin.jpg" ></img>
            </div>

            <div className="pl-8 flex-1">
              <div className="flex flex-row justify-start">
                <div className="w-[50%] typewriter text-neutral-900 text-6xl font-semibold font-inter leading-[48px]">
                  Hi there,
                </div>
              </div>
              <div className="flex flex-row justify-start">
                <div className="typewriter2 text-neutral-900 text-6xl font-semibold font-inter leading-[48px]">
                  I'm <span>Martin</span>.
                </div>
                
              </div>
              <div className="pt-4 pb-3 font-normal text-base font-inter leading-6 text-intro text-1 ">
                I'm all about exploring the wonders of technology, especially
                when it comes to IT security. Keeping data safe and secure is my
                top priority, and I'm excited to share the latest insights with
                you. Distributed computing also fuels my curiosity. I love
                delving into the world of parallel processing and making the
                most out of interconnected systems.
              </div>
              <div className="text-intro">
                <a href="https://www.linkedin.com/in/martinbogusz/">
                  <FontAwesomeIcon
                    className="text-4xl pr-3 text-primary hover:text-indigo-700"
                    icon={faLinkedin}
                  ></FontAwesomeIcon>
                </a>
                <a href="https://github.com/martinr0x">
                  <FontAwesomeIcon
                    className="text-4xl pr-3 text-primary hover:text-indigo-700"
                    icon={faGithub}
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
        </div>

        </div>
        <div className='w-screen flex flex-row justify-center'>
        <div className="max-w-screen-md flex flex-col justify-center">
          <button className='animate-bounce' onClick={scroll(refBackground)}>
            <FontAwesomeIcon className='text-4xl text-primary' icon={faArrowDown} ></FontAwesomeIcon>
          </button>
        </div>
        </div>
      </div>

      <div className="snap-always snap-start w-screen h-screen flex flex-row justify-center " >
        <div className={"max-w-screen-md flex flex-col justify-center font-inter opacity-0 blur-md translate-x-full transition-all duration-700 "+ (!isVisible || "translate-x-0 blur-0 opacity-100")}>
          <Stepper
            left={true}
            checked={false}
            onToggle={scroll(refWorkExpierence)}
            topRef={refBackground}
            title={'Background'}
            steps={backgroundSteps}
          />
        </div>
      </div>
      <div className="snap-always snap-start w-screen h-screen flex flex-row justify-center">
        <div className={"max-w-screen-md flex flex-col justify-center font-inter -translate-x-full opacity-0 blur-md transition-all duration-700 "+ (!isVisible2 || "translate-x-0 blur-0 opacity-100")}>
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
      <div className="snap-start w-screen h-screen flex flex-row justify-center">
        <div className={" flex flex-row justify-center font-inter overflow-scroll  w-screen"}>
          <ScrollStepper
            left={false}
            checked={true}
            title={'Work Expierence'}
            steps={workExpierenceSteps}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
