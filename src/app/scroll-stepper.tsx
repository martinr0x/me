import { Socket } from 'dgram';
import { useEffect, useRef, useState } from 'react';
import PrimaryButton from './components/atoms/button/primary';

export default function ScrollStepper({ steps, title, topRef, visible }: any) {
  const threshold = 25;
  const maxTranslatePos = 2000;
  const [pos, setPos] = useState(steps.map(() => maxTranslatePos));
  const [activeIndex, setActiveIndex] = useState(-1);

  const calcPos = (scrollMax: number, scrollPos: number, index: number) => {
    const step = (scrollMax + threshold) / (steps.length + 1);
    const current = step * (index + 1);

    let pos = (maxTranslatePos * (current - scrollPos)) / current;
    const noScroll = step * (index + 2) - threshold;

    if (scrollPos >= noScroll) {
      pos = (maxTranslatePos * (noScroll - scrollPos)) / current;
    } else {
      pos = Math.max(0, pos);
    }

    return pos;
  };

  const getTranslation = (index: number, activeIndex: number) => {
    if (activeIndex === index) return 0;
    if (activeIndex - 1 === index) return -400;
    if (activeIndex > index) return -800;
    if (activeIndex + 1 === index) return 400;
    return 800;
  };
  const onScroll = (e: {
    currentTarget: {
      clientHeight: any;
      scrollHeight: any;
      scrollTop: number;
    };
  }) => {
    const scrollPos = e.currentTarget.scrollTop;
    const scrollMax =
      e.currentTarget.scrollHeight - e.currentTarget.clientHeight;
    const npos = pos.map((_: unknown, i: number) =>
      calcPos(scrollMax, scrollPos, i)
    );

    setPos(npos);
    setActiveIndex(
      pos
        .map((x: number) => (x < threshold && x > -threshold ? 0 : x))
        .indexOf(0)
    );
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row w-screen justify-center ">
        <div className="max-w-screen-md w-screen text-neutral-900 text-5xl font-semibold leading-10 pb-10">
          {title}
        </div>
      </div>
      <div
        className={
          'flex flex-row justify-center font-inter w-screen h-1/2 overflow-scroll ' +
          (visible ? 'visible' : 'duration-75 invisible')
        }
        onScroll={onScroll}
      >
        <div className="h-[280vh] w-full max-w-screen-md border-r-2">
          {steps.map((s: any, index: number) => (
            <div
              key={index}
              className={
                'z-50 fixed top-[40%] duration-500 max-w-lg ' +
                (index === activeIndex
                  ? 'text-black'
                  : 'text-gray-600 blur-sm ')
              }
              style={{
                transform: `translateY(${getTranslation(
                  index,
                  activeIndex
                )}px)`,
                opacity: pos[index] > 300 || pos[index] < -300 ? 0 : 1,
              }}
            >
              <div className="text-xl font-semibold leading-7">{s.title}</div>
              <div className="flex flex-row flex-wrap py-2">
                {s.techstack.map((t: any) => (
                  <PrimaryButton key={t}> {t}</PrimaryButton>
                ))}{' '}
              </div>
              <div className="py-2 font-normal text-base">{s.description}</div>
            </div>
          ))}
        </div>
        <div className="">
          {steps.map((s: any, index: number) => (
            <div
              key={index}
              className={
                '-ml-[114px] z-50 fixed top-1/2' +
                (pos[index] === 0 ? '' : ' text-gray-500')
              }
              style={{
                transform: `translateY(${pos[index]}px)`,
                opacity: pos[index] > 300 || pos[index] < -300 ? 1 : 1,
              }}
            >
              <div className={'flex flex-row'}>
                <div className="flex flex-row group justify-between">
                  <div
                    className={
                      'w-[40px] text-right text-base font-medium leading-normal translate-x-[55px] duration-200 ' +
                      (index === activeIndex
                        ? '-translate-x-0'
                        : '')
                    }
                  >
                    {s.dateFrom}
                  </div>
                  <div
                    className={
                      'pl-1 pr-1 duration-100 ' +
                      (index === activeIndex ? 'visible' : 'invisible')
                    }
                  >
                    -
                  </div>
                  <div
                    className={
                      `w-[40px] text-right text-base font-medium leading-normal duration-100 ` +
                      (index === activeIndex ? 'visible' : 'invisible')
                    }
                  >
                    {s.dateTo}
                  </div>
                </div>
                <div className="pl-3 flex flex-col justify-center z-10">
                  <div className="h-3 w-3 flex flex-row justify-center align-middle">
                    <div
                      className={
                        'h-3 w-3 rounded-2xl  bg-indigo-700 hover:bg-indigo-500 ' +
                        (pos[index] === 0 || 'bg-indigo-300')
                      }
                    ></div>
                  </div>
                </div>
                <div className="pl-3">
                  <div className="w-36 text-left text-base font-medium leading-normal">
                    {s.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-20" ref={topRef}></div>
    </div>
  );
}
