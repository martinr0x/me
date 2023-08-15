import { useRef, useState } from 'react';

export default function ScrollStepper({ steps, title, topRef }: any) {
  const scale = 3;
  const scrollMax = 1000;
  const threshold = 25;
  const scrollTotal = scale * scrollMax;
  const step = scrollTotal / steps.length;
  const itemsRef = useRef<Array<Element | null>>([]);
  const [pos, setPos] = useState(steps.map(() => scrollMax));
  const [activeIndex, setActiveIndex] = useState(-1);

  const calcPos = (scrollPos: number, index: number) => {
    const current = step * (index + 1);

    let pos = (scrollTotal * (current - scrollPos)) / current;
    const noScroll = step * (index + 2) - threshold;

    if (scrollPos >= noScroll) {
      pos = (scrollTotal * (noScroll - scrollPos)) / current;
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
  const onScroll = (e: { currentTarget: { scrollTop: number } }) => {
    const scrollPos = e.currentTarget.scrollTop;
    const npos = pos.map((_: unknown, i: number) => calcPos(scrollPos, i));

    setPos(npos);
    setActiveIndex(pos.indexOf(0));
  };

  const line = (
    <div className="pl-[81px] -mt-2 -mb-2 flex-grow z-0">
      <div className="h-full border-l-2 border-gray"></div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center" ref={topRef}>
      <div className="flex flex-row w-screen justify-center">
        <div className="max-w-screen-md w-screen text-neutral-900 text-5xl font-semibold leading-10 pb-10">
          {title}
        </div>
      </div>
      <div
        className={
          'flex flex-row justify-center font-inter w-screen h-1/2 overflow-scroll'
        }
        onScroll={onScroll}
      >
        <div className="max-w-screen-sm w-screen " >
          {steps.map((s: any, index: number) => (
            <div
              className={
                'z-50 fixed top-1/3  left-[23%] duration-500 max-w-md ' +
                (index == activeIndex ? 'text-black' : 'text-gray-600 blur-sm ')
              }
              style={{
                transform: `translateY(${getTranslation(
                  index,
                  activeIndex
                )}px)`,
              }}
            >
              <div className="text-xl font-semibold leading-7">{s.title}</div>
              <div className="pt-4 pb-8 font-normal text-base">
                {s.description}
              </div>
            </div>
          ))}
        </div>
        <div className="h-[500vh] flex flex-col justify-between ">
          {line}
          {steps.map((s: any, index: number) => (
            <div className="flex">
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className={
                  'z-50 fixed top-1/2' +
                  (pos[index] === 0 ? '' : ' text-gray-500')
                }
                style={{ transform: `translateY(${pos[index]}px)` }}
              >
                <div className={'flex flex-row '}>
                  <div>
                    <div className="w-[56px] text-right text-blue-950 text-base font-medium leading-normal">
                      {s.date}
                    </div>
                  </div>
                  <div className="pl-4 flex flex-col justify-center z-10">
                    <div className="h-4 w-5 flex flex-row justify-center align-middle">
                      <div
                        className={
                          'h-5 w-5 rounded-2xl  bg-indigo-700 hover:bg-indigo-500 ' +
                          (pos[index] === 0 || 'bg-indigo-300 ')
                        }
                      ></div>
                    </div>
                  </div>
                  <div className="pl-3">
                    <div className="w-36 text-left text-blue-950 text-base font-medium leading-normal">
                      {s.location}
                    </div>
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
