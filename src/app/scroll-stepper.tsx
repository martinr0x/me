import {
  useRef,
  useState,
} from 'react';

export default function ScrollStepper({ steps }: any) {
  const scale = 2;
  const scrollMax = 1000;
  const threshold = 25;
  const scrollTotal = scale * scrollMax;
  const step = scrollTotal / steps.length;
  const itemsRef = useRef<Array<Element | null>>([]);
  const [pos, setPos] = useState(steps.map(() => scrollMax));
  const [active, setActive] = useState(steps.map(() => false));

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
  const onScroll = (e: { currentTarget: { scrollTop: number } }) => {
    const scrollPos = e.currentTarget.scrollTop;
    const npos = pos.map((_: any, i: number) => calcPos(scrollPos, i));

    setPos(npos);
    setActive(npos.map((s: number) => s === 0));
  };

  const line = (
    <div className="pl-[81px] -mt-2 -mb-2 flex-grow z-0">
      <div className="h-full border-l-2 border-gray"></div>
    </div>
  );

  return (
    <div
      className={
        ' flex flex-row justify-center font-inter w-screen overflow-scroll'
      }
      onScroll={onScroll}
    >
      <div className="max-w-screen-sm w-screen">
        {steps.map((s: any, index: number) => (
          <div
            className={
              'flex-initial' +
              ` z-50 fixed top-1/3  left-[20%] duration-500 max-w-md ` +
              (active[index] ? 'text-black' : 'text-gray-500 blur-sm text-sm')
            }
            style={{
              transform: active[index]
                ? 'translateY(0)'
                : active[index + 1]
                ? 'translateY(-400px)'
                : 'translateY(400px)',
            }}
          >
            <div className=" text-xl font-semibold leading-7">{s.title}</div>
            <div className="pt-4 pb-8 font-normal text-base">
              {s.description}
            </div>
          </div>
        ))}
      </div>
      <div className="h-[350vh] flex flex-col justify-between ">
        {steps
          .map((s: any, index: number) => (
            <div className="flex">
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className={
                  ` z-50 fixed top-1/2 -translate-x-[1000px] ` +
                  (pos[index] == 0 ? '' : 'text-gray-500')
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
                      <div className="h-5 w-5 bg-indigo-700 rounded-2xl hover:bg-indigo-500"></div>
                    </div>
                    {/* <div className="ml-[9px] h-full border-l-2 border-gray"></div> */}
                  </div>
                  <div className="pl-3">
                    <div className="w-36 text-left text-blue-950 text-base font-medium leading-normal">
                      {s.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
          .map((s: any) => [line, s])
          .flat()}
      </div>
    </div>
  );
}
