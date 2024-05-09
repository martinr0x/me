import { RefObject, useRef, useState } from 'react';
import { workExpierenceSteps } from './background';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Contacts from './contacts';

export function App() {
  const ref: RefObject<HTMLDivElement> = useRef(null);
  const ref2: RefObject<HTMLDivElement> = useRef(null);
  const [active, setActive] = useState(-1);
  const [visible, setVisible] = useState(workExpierenceSteps.map((x) => false));
  const [dotVisible, setDotVisible] = useState(100);
  const [diff, setDiff] = useState(0);

  const handleScroll = (x: any) => {
    const yDot = ref.current?.getBoundingClientRect().y;
    const yLine = ref2?.current?.getBoundingClientRect().y;
    const yHeight = ref2?.current?.getBoundingClientRect().height;

    if (!yDot || !yLine || !yHeight) return;
    const yFirstPage = ref2.current
      ? ref2.current.getBoundingClientRect().y
      : 0;
    console.log(Math.abs(yDot - yFirstPage));
    setDiff(Math.abs(yDot - yFirstPage));
    setActive(
      workExpierenceSteps.findIndex((_, index) => {
        const step = document.getElementById(`step-${index}`);
        if (!step) return false;
        const { y, height } = step.getBoundingClientRect();

        return yDot > y && yDot < y + height;
      })
    );

    setVisible(
      workExpierenceSteps.map((_, index) => {
        const step = document.getElementById(`step-${index}`);
        if (!step) return false;
        const { y } = step.getBoundingClientRect();
        return Math.abs(yDot - y) < 100 || yDot > y;
      })
    );
    console.log(yLine);
    setDotVisible(Math.min(yLine + yHeight - yDot));
  };
  return (
    <div
      className="flex flex-col antialiased overflow-x-hidden scroll-smooth"
      onScroll={handleScroll}
      onWheel={handleScroll}
    >
      <div className={'flex flex-row w-screen h-screen relative duration-200 '}>
        <div className="flex flex-row text-center justify-center flex-grow ">
          <div className="flex flex-col justify-between">
            <div className="mt-10 flex flex-row justify-left font-inter text-base">
              <a className="mr-8 font-bold">About me</a>
              <a className="mr-8">Background</a>
              <a className="mr-8">Projects</a>
            </div>
            <div
              className={'duration-100 '}
              style={{
                opacity: diff < 300 ? 1 : Math.max(0, 100 - (diff - 300)) / 100,
              }}
            >
              <div className="font-bold text-[86px] font-inter text-left mb-12 leading-[106px]">
                Hi there, <br></br>
                I'm Martin.
              </div>
              <div className="text-left text-base leading-6 font-normal font-raleway">
                <article className="font-semibold">
                  I am a software engineer.{' '}
                </article>
                Since I was a kid I was fascinated with all tech things.{' '}
                <br></br>
                Fast forward to today, this fascination turned into a career.
                <br></br>
                If you're curious to learn more about me, scroll further down
                this page.<br></br>
              </div>
            </div>
            <div className="flex flex-row justify-center">
              {/* <div
                className="fixed mt-[0px] -mr-[14px] rounded-full z-50 -translate-y-[294px]   left-[25%]  -translate-x-24 duration-300 "
                style={{
                  opacity: diff < 300 ? 0 : 1,
                }}
              >
                Background
              </div> */}
              <div
                className={
                  'fixed mt-[0px] -ml-[6px] left-[25%] rounded-full z-50 h-3 w-3 bg-blue -translate-y-[294px]  duration-100 '
                }
                style={{ opacity: dotVisible }}
                ref={ref}
              ></div>
              <div
                className={
                  'fixed mt-[0px]   left-[25%] -mr-[14px] rounded-full z-50 -translate-y-[294px] translate-x-14 font-inter'
                }
                style={{ opacity: active >= 0 ? 1 : 0 }}
              >
                {workExpierenceSteps[active]?.dateFrom} -{' '}
                {workExpierenceSteps[active]?.dateTo}
              </div>
              {/* <div className=" bottom-0 border-r-2 border-black h-full left-[30.6%] pb-24 -mt-72 z-20 pb-72"></div> */}
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-start">
          <div
            className={'duration-100 flex flex-col '}
            style={{
              opacity: diff < 300 ? 1 : Math.max(0, 100 - (diff - 300)) / 100,
            }}
          >
            <img
              className="w-[40vw] h-[80vh] cursor-pointer object-cover rounded-bl-[120px]"
              src="/me/portrait-martin2.jpg"
            ></img>
            <div className="pl-16 mt-8 flex flex-row  font-inter text-base justify-center">
              <a className="mr-8 pr-8 font-bold border-r-2 border-black">
                Software Engineering
              </a>
              <a className="mr-8 pr-8 marker: border-r-2 border-black">
                Performance
              </a>
              <a className="mr-8">Security</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-screen h-full relative">
        <div
          className="sticky bottom-0 border-r-[1px] border-black left-[25%] pb-24 -mt-[27vh] z-20 pb-72"
          ref={ref2}
        ></div>

        <div className="w-[35%]"></div>

        <div className="flex flex-col relative">
          <div className="h-[20vh] min-h-[30vh]"></div>
          <div className="sticky bottom-0 font-raleway text-6xl  mb-[10vh]">
            Background
          </div>
          {workExpierenceSteps.map((step, index) => (
            <div
              className={
                'w-[800px] mb-[10vh] duration-300 ' +
                (active === index
                  ? 'opacity-100  translate-x-7  '
                  : 'opacity-30')
                // +  (visible[index] ? ' opacity-100' : ' opacity-0')
              }
              key={index}
              id={`step-${index}`}
            >
              <div className="text-4xl font-inter font-semibold">
                {step.company}
              </div>
              <div className="text-2xl font-inter font-semibold mb-6 uppercase text-blue">
                {step.title}
              </div>
              {/* <div className="font-inter text-base text-gray-500 mb-6 ">
                {step.dateFrom} - {step.dateTo}
              </div> */}
              <div className="font-raleway text-base">{step.description}</div>
            </div>
          ))}
          <div className="h-[20vh] min-h-[20vh]"></div>
        </div>
      </div>
      <div className="flex flex-row justify-center align-middle w-screen h-screen">
        <div className="flex flex-col justify-center max-w-[80%]">
          <div className="font-raleway text-6xl mb-[10vh] w-full text-center">
            Academia
          </div>
          <div className="grid grid-flow-col justify-between gap-16">
            <div>
              <div className="text-neutral-900 text-xl font-semibold font-inter ">
                Master
                <div className="text-neutral-500 font-normal text-sm">
                  {' '}
                  2022 - 2019
                </div>
              </div>
              Focus on IT Security, Software Engineering and High Performance
              Computing. Wrote my master’s thesis about “Secure, decentralized
              trust establishment in self-sovereign identity(SSI) systems.” at
              the Fraunhofer Institute for Applied and Integrated Security
              (AISEC)
            </div>
            <div>
              <div className="text-neutral-900 text-xl font-semibold font-inter">
                Bachelor
                <div className="text-neutral-500 font-normal text-sm">
                  {' '}
                  2019 - 2016
                </div>
              </div>
              Minor in Economics. Focus on IT Security and AI. Bachelor’s thesis
              “Exploring Modern Runtime Systems for the SWE-Framework”.
            </div>
            <div>
              <div className="text-neutral-900 text-xl font-semibold font-inter">
                Research
                <div className="text-neutral-500 font-normal text-sm">
                  {' '}
                  2019 - 2020
                </div>
              </div>
              Worked on parallel computing approaches for high performance
              applications. The results were published in the 2020 IEEE/ACM 3rd
              Annual Parallel Applications Workshop.{' '}
              <a href="https://ieeexplore.ieee.org/document/9307099">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-screen"></div> */}
      <div className="w-screen h-screen flex flex-row justify-center">
        <div className="max-w-screen-lg flex flex-col justify-center">
          <div className="font-bold text-[86px] font-raleway mb-12 leading-[106px]">
            Let's work together.
          </div>
          {/* <div className="pt-4 pb-4 text-5xl font-semibold font-inter leading-[48px] text-center">
              Contact Me
            </div> */}
          <Contacts />
        </div>
      </div>
      <div className="w-full flex flex-row justify-center text-neutral-700 font-raleway text-sm">
        Made with Tailwind CSS & React
      </div>
      <div className="w-full flex flex-row justify-center font-raleway text-sm  font-semibold">
        © 2023 All rights reserved. – Coded by Martin Bogusz
      </div>
    </div>
  );
}

export default App;
