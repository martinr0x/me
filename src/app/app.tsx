// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import Stepper from './stepper';
import { backgroundSteps, workExpierenceSteps } from './background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faMeta,
} from '@fortawesome/free-brands-svg-icons';

export function App() {
  const refWorkExpierence = useRef<HTMLDivElement>(null);
  const refBackground = useRef<HTMLDivElement>(null);

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
              <div className="pt-4 pb-3 font-normal text-base font-inter leading-6 text-intro ">
                I'm all about exploring the wonders of technology, especially
                when it comes to IT security. Keeping data safe and secure is my
                top priority, and I'm excited to share the latest insights with
                you. Distributed computing also fuels my curiosity. I love
                delving into the world of parallel processing and making the
                most out of interconnected systems.
              </div>
              <div className="">
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

      <div className="snap-always snap-start w-screen h-screen flex flex-row justify-center">
        <div className="max-w-screen-md flex flex-col justify-center font-inter">
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
