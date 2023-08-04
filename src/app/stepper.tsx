import { RefObject, useEffect, useMemo, useRef, useState } from 'react';

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
export default function Stepper({
  left,
  checked,
  onToggle,
  topRef,
  title,
  steps,
}: any) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div ref={topRef}>
      <div className={'transition delay-900 blur-none '}>
        <div className="flex flex-row">
          <div
            className="text-neutral-900 text-5xl font-semibold leading-10 pb-10 flex"
            ref={ref}
          >
            {title}
          </div>
          <div className="pl-4 flex-grow text-right h-20">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={checked}
                onClick={onToggle}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>

        <div>
          {steps.map((s: any) => (
            <div
              className={
                'flex ' + (left ? 'flex-row-reverse text-right' : null)
              }
            >
              <div className="flex-initial">
                <div className="text-black text-xl font-semibold leading-7">
                  {s.title}
                </div>
                <div className="pt-4 pb-8 text-neutral-500 font-normal text-base">
                  {s.description}
                </div>
              </div>

              <div className={'flex flex-row grow ' + (left ? 'pr-8' : 'pl-8')}>
                <div>
                  <div className="text-right text-blue-950 text-base font-medium leading-normal">
                    {s.date}
                  </div>
                </div>
                <div className="pl-4">
                  <div  className="h-4 w-5 flex flex-row justify-center align-middle">

                  <div className="h-4 w-4 bg-indigo-700 rounded-2xl hover:bg-indigo-500"></div>
                  </div>
                  <div className="ml-[9px] h-full border-l-2 border-gray"></div>
                </div>
                <div className="pl-3">
                  <div className="w-36 text-left text-blue-950 text-base font-medium leading-normal">
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
