import { RefObject, useEffect, useMemo, useRef, useState } from 'react';

function useOnScreen(ref: any, index: number) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        {
          rootMargin: '-50% 0px -50% 0px',
        }
      ),
    [ref.current[index]]
  );

  useEffect(() => {
    const curr = ref?.current[index];
    if (curr) return;
    observer.observe(curr);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}

export default function ScrollStepper({ steps }: any) {
  const itemsRef = useRef<Array<Element | null>>([]);
  const [isIntersecting, setIntersecting] = useState(steps.map(() => false));
  let oldState: any[]= [];
  const sticky: any = (i: number) =>
    isIntersecting[i] && !isIntersecting[i + 1];
  useEffect(() => {
    console.log("hier")
    itemsRef.current = itemsRef.current.slice(0, steps.length);
    const observers = steps.map(
      (s: any, i: number) =>
        new IntersectionObserver(
          ([entry]) => {
            console.log(isIntersecting);
            console.log("Old" + oldState);
            
            setIntersecting((state: any) => {
              // console.log(isIntersecting[i]);
              const newState = state.map((v: any, s: number) =>
                i === s ? isIntersecting[i] || entry.isIntersecting : v
              );
              console.log(newState);
              if(!oldState[i])
              oldState = [...newState];
              return state.map((v: any, s: number) =>
                i === s ? oldState[i] || entry.isIntersecting : v
              );
            });
          },
          {
            rootMargin: '-50% 0px -30% 0px',
          }
        )
    );
    observers.forEach((ob: any, i: number) => ob.observe(itemsRef.current[i]));
  }, []);

  const line = (
    <div className="pl-[81px] -mt-2 -mb-2 flex-grow z-0">
      <div className="h-full border-l-2 border-gray"></div>
    </div>
  );

  return (
    <div className="h-[200vh] flex flex-col justify-between test12">
      {isIntersecting[0] && !isIntersecting[1] && (
        <div className={'flex flex-row fixed top-1/2 z-40'}>
          <div>
            <div className="w-[56px] text-right text-blue-950 text-base font-medium leading-normal">
              {'2022'}
            </div>
          </div>
          <div className="pl-4 flex flex-col justify-center z-10">
            <div className="h-4 w-5 flex flex-row justify-center align-middle">
              <div className="h-5 w-5 bg-indigo-700 rounded-2xl hover:bg-indigo-500"></div>
            </div>
          </div>
          <div className="pl-3">
            <div className="w-36 text-left text-blue-950 text-base font-medium leading-normal">
              {'test'}
            </div>
          </div>
        </div>
      )}
      <div className="fixed top-1/4">{isIntersecting.join(' ')}</div>
      {/* <div className="intersector fixed top-1/2 bg-slate-600">
        {' '}
        {'intersector' + isIntersecting}
      </div> */}
      {steps
        .map((s: any, index: number) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className=""
          >
            <div
              className={
                'flex flex-row ' +
                (isIntersecting[index] && !isIntersecting[index + 1]
                  ? 'invisible'
                  : '')
              }
            >
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
        ))
        .map((s: any) => [line, s])
        .flat()}
    </div>
  );
}
