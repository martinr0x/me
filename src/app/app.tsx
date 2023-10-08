// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { workExpierenceSteps } from './background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ScrollStepper from './scroll-stepper';
import Nutshell from './nutshell';

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
  const refBackground = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(refIntro);

  const scroll = (ref: any) => (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    ref.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  };

  return (
    <div className="w-screen h-screen snap-mandatory snap-y overflow-scroll">
      <div
        className={
          'w-screen fixed top-0 flex-row flex justify-end p-3 translate-x-1/2 blur-md transition-all duration-500 ' +
          (!isVisible ? 'show' : '')
        }
      >
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
        <div className="w-screen h-screen flex flex-row justify-center">
          <div className="max-w-screen-md flex flex-col justify-center">
            <div className="flex flex-row pb-24 ">
              <div className="flex-initial w-80 h-80 rounded-md">
                <img
                  className="hover:scale-105 transition duration-500 cursor-pointer object-cover rounded-full"
                  src="portrait-martin.jpg"
                ></img>
              </div>

              <div className="pl-8 flex-1">
                <div className="flex flex-row justify-start text-neutral-900 text-6xl font-semibold font-inter leading-[48px]" ref={refIntro} >
                  <div className="typewriter ">
                    Hi there, 
                  </div>
                  <div className="typewriter2">
                    I'm Martin.
                  </div>
                </div>
                <div className="pt-4 pb-4 font-normal text-[22px] font-inter leading-9 text-1">
                    My name is Martin Bogusz. I work as a software engineer at Celonis.
                </div>
                <div className="pb-4 font-normal text-base font-inter leading-6">
                  Since I was a kid I was facinated with all tech things. Fast
                  forward to today, this facination turned into a career. I love solving hard
                  problems and I am dedicated to build great products that are
                  used by millions. If you're curious to learn more about who I
                  am and delve into my technical background, scroll further down
                  this page.
                </div>
                <div>
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
                  <a href="https://twitter.com/martinbogusz">
                    <FontAwesomeIcon
                      className="text-4xl pr-3 text-primary hover:text-indigo-700"
                      icon={faTwitter}
                    ></FontAwesomeIcon>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen flex flex-row justify-center">
          <div className="max-w-screen-md flex flex-col justify-center">
            <button className="animate-bounce" onClick={scroll(refBackground)}>
              <FontAwesomeIcon
                className="text-4xl text-primary"
                icon={faArrowDown}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="snap-always snap-start w-screen h-screen flex flex-row justify-center " >
        <div className={"max-w-screen-md flex flex-col justify-center font-inter opacity-0 blur-md translate-x-full transition-all duration-700 "+ (!isVisible || "show")}>
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
        <div className={"max-w-screen-md flex flex-col justify-center font-inter -translate-x-full opacity-0 blur-md transition-all duration-700 "+ (!isVisible2 || "show")}>
          <Stepper
            left={false}
            checked={true}
            onToggle={scroll(refBackground)}
            topRef={refWorkExpierence}
            title={'Work Expierence'}
            steps={workExpierenceSteps}
          />
        </div>
      </div> */}

      <div
        id="work"
        className={
          'snap-always snap-start w-screen h-screen justify-center flex flex-row '
        }
        ref={refBackground}
      >
        <ScrollStepper
          left={false}
          checked={true}
          visible={isVisible}
          title={'Work Expierence'}
          steps={workExpierenceSteps}
        />
      </div>
      <div
        className={
          'snap-always snap-start w-screen h-screen justify-center flex flex-row'
        }
      >
        <Nutshell/>
      </div>
      <div
        className={
          'snap-always snap-start w-screen h-screen justify-center flex flex-row'
        }
      >
        <div className="flex flex-col justify-center w-full max-w-screen-lg">
          <div className="text-neutral-900 text-6xl text-center font-semibold font-inter leading-[48px] mb-8">
            In a Nutshell
          </div>
          <div className="flex flex-row justify-between">
            <div className="w-[311px]">
              <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                Software Engineering
              </div>
              Contributed and developed multiple frontend & backend services at
              Celonis, qbound and Oregano systems. <br></br>
              Created performance oriented and parallel solutions for HPC
              clusters.
            </div>
            <div className="w-[311px]">
              <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                IT Security
              </div>
              Designed and implemented a secure application for qbound.
              Participated in multiple CTFs and achieved second place out of 77
              teams in the Developer Student Club Munich CTF. Implemented a
              trust framework on top of the GNUnet open source project as part
              of my master’s thesis.
            </div>
            <div className="w-[311px]">
              <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                Performance
              </div>
              Co-founded and leading the Munich Handstand Society, a community
              with over 100 members.
            </div>
          </div>
        </div>
      </div>
      <div className="snap-always snap-start w-screen h-screen flex flex-col justify-center">
        <div className="w-screen h-screen flex flex-row justify-center">
          <div className="max-w-screen-md flex flex-col justify-center">
            <div className="text-neutral-900 text-6xl font-semibold font-inter leading-[48px] text-center">
              Let's work together. 
            </div>
            <div className="pt-4 text-6xl font-semibold font-inter leading-[48px] text-center text-blue">
              Contact Me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
