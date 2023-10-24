import { useState } from 'react';
import PrimaryButton from './components/atoms/button/primary';

export default function ScrollStepper({ steps, title }: any) {
  const threshold = 20;
  const maxTranslatePos = 1000;
  const [pos, setPos] = useState(steps.map(() => maxTranslatePos));
  const [activeIndex, setActiveIndex] = useState(-1);

  const calcPos = (step: number, scrollPos: number, index: number) => {
   
    const current = step * index ;
    scrollPos -= current;
    let pos =  (step - scrollPos);
    const noScroll = (step * 2)- threshold;
    if (scrollPos >= noScroll && index !== steps.length-1) {
      pos =  (noScroll - scrollPos);
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
  const onScroll = (e: React.UIEvent<HTMLElement>
  ) => {
    const scrollPos = e.currentTarget.scrollTop;
    const scrollMax =
      e.currentTarget.scrollHeight - e.currentTarget.clientHeight;
      const step = scrollMax / (steps.length+1);
    const npos = pos.map((_: unknown, i: number) =>
      calcPos(step, scrollPos, i)
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
      <div
        className={
          'flex flex-row justify-center font-inter w-screen h-full overflow-scroll scroll-smooth'
        }
        onScroll={onScroll}
      >
        <div className="h-[800vh] w-full max-w-screen-lg relative">
          <div
            className={
              'w-full justify-center flex flex-row  duration-700 sticky top-1/2 ' +
              (pos[0] > threshold ? 'text-neutral-900' : '-translate-y-40 text-neutral-100')
            }
          >
            <div className="text-6xl font-semibold font-inter leading-[48px]">
              {title}
            </div>
          </div>
          {steps.map((s: any, index: number) => (
            <div
              key={index}
              className={
                'z-50 sticky top-[45%] duration-500 max-w-lg ' +
                (index === activeIndex
                  ? 'text-black'
                  : 'text-gray-600 blur-sm ')
              }
              style={{
                transform: `translateY(${getTranslation(
                  index,
                  activeIndex
                )}px)`,
                opacity: pos[index] !== 0 ? 0 : 1,
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
          {steps.map((s: any, index: number) => (
            <div
              key={index}
              className={
                ' z-50 sticky top-[55%]' +
                (pos[index] === 0 ? '' : ' text-gray-500')
              }
              style={{
                transform: `translateY(${pos[index]}px)`,
                opacity: pos[index] > 300 || pos[index] < -300 ? 1 : 1,
              }}
            >
              <div className={'flex flex-row justify-end'}>
                <div className="flex flex-row group justify-between">
                  <div
                    className={
                      'w-[40px] text-right text-base font-medium leading-normal duration-200 ' +
                      (pos[index] === 0
                        ? '-translate-x-0'
                        : 'translate-x-[55px]')
                    }
                  >
                    {s.dateFrom}
                  </div>
                  <div
                    className={
                      'pl-1 pr-1 duration-100 ' +
                      (pos[index] === 0 ? 'visible' : 'invisible')
                    }
                  >
                    -
                  </div>
                  <div
                    className={
                      `w-[40px] text-right text-base font-medium leading-normal  ` +
                      (pos[index] === 0 ? 'visible' : 'invisible')
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
    </div>
  );
}
