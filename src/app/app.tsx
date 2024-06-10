import { RefObject, useRef, useState } from 'react';
import { computerScienceWords, workExpierenceSteps } from './background';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Contacts from './contacts';
import LoadingScreen from './loadingScreen';

export function App() {
  const refBackgroundDot: RefObject<HTMLDivElement> = useRef(null);
  const refBackgroundTimeline: RefObject<HTMLDivElement> = useRef(null);
  const refCallToActionPage: RefObject<HTMLDivElement> = useRef(null);

  const [active, setActive] = useState(-1);
  const [dotVisible, setDotVisible] = useState(100);
  const [contactsVisible, setContactsVisible] = useState(false);
  const [diff, setDiff] = useState(0);

  const handleScroll = (x: any) => {
    const yDot = refBackgroundDot.current?.getBoundingClientRect().y;
    const yLine = refBackgroundTimeline?.current?.getBoundingClientRect().y;
    const yHeight =
      refBackgroundTimeline?.current?.getBoundingClientRect().height;
    const yHeightCallToAction =
      refCallToActionPage?.current?.getBoundingClientRect().height;

    setContactsVisible(
      (diff < 300 ? 1 : Math.max(0, 100 - (diff - 300)) / 100) === 0
    );

    if (!yDot || !yLine || !yHeight) return;
    const yFirstPage = refBackgroundTimeline.current
      ? refBackgroundTimeline.current.getBoundingClientRect().y
      : 0;
    setDiff(Math.abs(yDot - yFirstPage));
    setActive(
      workExpierenceSteps.findIndex((_, index) => {
        const step = document.getElementById(`step-${index}`);
        if (!step) return false;
        const { y, height } = step.getBoundingClientRect();

        return yDot > y && yDot < y + height;
      })
    );

    setDotVisible(yLine + yHeight - yDot);
  };

  const renderWorksteps = (workExpierenceSteps) => {
    return workExpierenceSteps.map((step, index) => {
      if (step?.jobs) {
        return (
          <div
            className={
              'w-[800px] pb-[8vh] mb-[2vh] duration-300 ' +
              (active === index
                ? 'opacity-100  translate-x-7 blur-none  '
                : 'opacity-30  blur-sm')
            }
            key={index}
            id={`step-${index}`}
          >
            <div className="">
              <div className="text-4xl font-inter font-semibold">
                {step.company}
              </div>
              <div className="text-2xl font-inter font-semibold  uppercase text-blue mb-5">
                {step.title}
              </div>
              {step.jobs.map((s) => (
                <div className="mb-[2vh]">
                  <div className="text-2xl font-inter font-semibold uppercase ">
                    {s.title}
                  </div>
                  <div className="normal-case">
                    {s.dateFrom} - {s.dateTo}{' '}
                  </div>
                  <div className="mb-6"></div>

                  <div className="font-raleway text-base">{s.description}</div>
                </div>
              ))}
            </div>
          </div>
        );
      }
      return (
        <div
          className={
            'w-[800px] pb-[8vh] mb-[2vh] duration-300 ' +
            (active === index
              ? 'opacity-100  translate-x-7 blur-none  '
              : 'opacity-30  blur-sm')
          }
          key={index}
          id={`step-${index}`}
        >
          <div>
            <div className="text-4xl font-inter font-semibold">
              {step.company}
            </div>
            <div className="text-2xl font-inter font-semibold  uppercase text-blue">
              {step.title}
            </div>
            <div className="mb-6">
              {workExpierenceSteps[index]?.dateFrom} -{' '}
              {workExpierenceSteps[index]?.dateTo}
            </div>
            <div className="font-raleway text-base">{step.description}</div>
          </div>
        </div>
      );
    });
  };
  return (
    <div
      className="relative flex flex-col antialiased overflow-x-hidden"
      onScroll={handleScroll}
      onWheel={handleScroll}
    >
      <LoadingScreen words={computerScienceWords} />
      <div
        className={
          'fixed top-0 right-0 duration-300 m-4 ' +
          (contactsVisible ? 'translate-x-0' : 'translate-x-48')
        }
      >
        <Contacts />
      </div>
      <div className={'flex flex-row w-screen h-screen relative duration-200 '}>
        <div className="flex flex-row text-center justify-center flex-grow ">
          <div className="flex flex-col justify-between">
            <div className="mt-10 flex flex-row justify-left font-inter text-base">
              <a className="mr-8 font-bold">About me</a>
              <a className="mr-8">Background</a>
              <a className="mr-8">Projects</a>
            </div>
            <div
              className={'duration-100 pb-36 max-w-[440px]'}
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
              <div
                className={
                  'fixed mt-[0px] -ml-[8px] left-[25%] rounded-full z-50 h-4 w-4 bg-blue -translate-y-[294px] hover:bg-indigo-700 duration-100 '
                }
                style={{ opacity: dotVisible }}
                ref={refBackgroundDot}
              ></div>
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
              className="w-[50vw] h-[90vh] cursor-pointer object-cover"
              src="/me/portrait-martin2.jpg"
              onLoad={() => console.log('loaded')}
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
          ref={refBackgroundTimeline}
        ></div>

        <div className="w-[35%]"></div>

        <div className="flex flex-col relative">
          <div className="h-[20vh] min-h-[30vh]"></div>
          {renderWorksteps(workExpierenceSteps)}
          <div className="h-[20vh] min-h-[30vh]"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center align-middle w-screen h-screen bg-white text-white snap-center">
        <div className="flex flex-row justify-center align-middle w-screen h-[50vh] bg-blue text-white">
          <div className="flex flex-col justify-center max-w-[80%]">
            <div className="grid grid-flow-row  grid-cols-3 grid-rows-3 gap-x-16">
              <div></div>
              <div className="font-raleway text-6xl w-full text-left row-span-1">
                Academia
              </div>
              <div></div>
              <div className="row-span-2 col-span-1">
                <div className="text-white text-2xl font-inter font-semibold pb-5">
                  Master
                  <div className="text-white font-normal text-base pt-1">
                    2022 - 2019 |{' '}
                    <a className="font-semibold">TUM, Munich, Bavaria</a>
                  </div>
                </div>
                <div className="text-base leading-6 font-normal font-raleway">
                  Focus on IT Security, Software Engineering and High
                  Performance Computing. Wrote my master’s thesis about “Secure,
                  decentralized trust establishment in self-sovereign
                  identity(SSI) systems.” at the Fraunhofer Institute for
                  Applied and Integrated Security (AISEC)
                </div>
              </div>
              <div className="row-span-2 col-span-1">
                <div className="text-white text-2xl font-inter font-semibold pb-5">
                  Bachelor
                  <div className="text-white font-normal text-base pt-1">
                    2019 - 2016 |{' '}
                    <a className="font-semibold">TUM, Munich, Bavaria</a>
                  </div>
                </div>
                <div className="text-base leading-6 font-normal font-raleway">
                  Minor in Economics. Focus on IT Security and AI. Bachelor’s
                  thesis “Exploring Modern Runtime Systems for the
                  SWE-Framework”.
                </div>
              </div>
              <div className="row-span-2 col-span-1">
                <div className="text-white text-2xl font-inter font-semibold pb-5">
                  Research
                  <div className="text-white font-normal text-base pt-1">
                    2019 - 2020 |{' '}
                    <a className="font-semibold">TUM, Munich, Bavaria</a>
                  </div>
                </div>
                <div className="text-base leading-6 font-normal font-raleway">
                  Worked on parallel computing approaches for high performance
                  applications. The results were published in the 2020 IEEE/ACM
                  3rd Annual Parallel Applications Workshop.{' '}
                </div>
                <a href="https://ieeexplore.ieee.org/document/9307099">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-screen h-screen flex flex-row justify-center"
        ref={refCallToActionPage}
      >
        <div className="max-w-screen-lg flex flex-col justify-center">
          <div className="font-bold text-[86px] font-inter text-left mb-12 leading-[106px]">
            Let's work together.
          </div>

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
