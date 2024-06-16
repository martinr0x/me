import { RefObject, useEffect, useRef, useState } from 'react';
import { softwareEngineeringTerms, workExpierence } from './variables';
import Contacts from './contacts';
import LoadingScreen from './loadingScreen';
import CtaPage from './pages/ctaPage';
import AcademicsPage from './pages/academicsPage';
import Background from './components/background';

export function App() {
  const refBackgroundDot: RefObject<HTMLDivElement> = useRef(null);
  const refBackgroundTimeline: RefObject<HTMLDivElement> = useRef(null);

  const [workExpierenceActiveIndex, setWorkExpierenceActiveIndex] =
    useState(-1);
  const [dotVisible, setDotVisible] = useState(100);
  const [contactsVisible, setContactsVisible] = useState(false);

  const [visible, setVisible] = useState(false);
  let loaded = false;
  const setPageLoaded = () => {
    loaded = true;
    setVisible(true);
  };
  const handleScroll = (x: any) => {
    const yDot = refBackgroundDot.current?.getBoundingClientRect().y;
    const yLine = refBackgroundTimeline?.current?.getBoundingClientRect().y;
    const yHeight =
      refBackgroundTimeline?.current?.getBoundingClientRect().height;

    if (!yDot || !yLine || !yHeight) return;

    setWorkExpierenceActiveIndex(
      workExpierence.findIndex((_, index) => {
        const step = document.getElementById(`step-${index}`);
        if (!step) return false;
        const { y, height } = step.getBoundingClientRect();

        return yDot > y && yDot < y + height;
      })
    );

    setDotVisible(yLine + yHeight - yDot);
  };
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((o) => {
      setContactsVisible(!o[0].isIntersecting);
      setVisible(o[0].isIntersecting && loaded);
    }, options);

    observer.observe(document.getElementById('intro'));
    observer.observe(document.getElementById('call-to-action'));
  }, []);

  return (
    <div
      className="relative flex flex-col antialiased overflow-x-hidden"
      onScroll={handleScroll}
      onWheel={handleScroll}
    >
      <LoadingScreen
        words={softwareEngineeringTerms}
        setPageLoaded={setPageLoaded}
      />
      <div
        className={
          'fixed top-0 right-0 duration-300 m-4 z-[99] ' +
          (contactsVisible ? 'translate-x-0' : 'translate-x-48')
        }
      >
        <Contacts />
      </div>
      <div
        id="intro"
        className={'flex flex-row w-screen h-screen relative duration-200 '}
      >
        <div className="flex flex-row text-center justify-center flex-grow ">
          <div className="flex flex-col justify-between">
            <div className="mt-10 overflow-hidden">
              <div
                className={
                  ' flex flex-row justify-left font-inter text-base duration-500  ' +
                  (visible || '-translate-y-16')
                }
              >
                <button className="mr-8 font-bold">About me</button>
                <button
                  className="mr-8"
                  onClick={() => {
                    document.getElementById('step-0')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'end',
                      inline: 'nearest',
                    });
                    setWorkExpierenceActiveIndex(0);
                  }}
                >
                  Background
                </button>
                <button
                  className="mr-8"
                  onClick={() => {
                    document.getElementById('academia')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'end',
                      inline: 'nearest',
                    });
                  }}
                >
                  Academia
                </button>
                <button
                  className=""
                  onClick={() => {
                    document.getElementById('call-to-action')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'end',
                      inline: 'nearest',
                    });
                    setDotVisible(0);
                  }}
                >
                  Contact
                </button>
              </div>
            </div>
            <div className={'duration-100 pb-36 max-w-[440px]'}>
              <div className="overflow-hidden">
                <div
                  className={
                    'font-bold text-[86px] font-inter text-left mb-12 leading-[106px]'
                  }
                >
                  <div className="overflow-hidden">
                    <article
                      className={
                        ' duration-500 ' + (visible || '-translate-y-28')
                      }
                    >
                      {' '}
                      Hi there,
                    </article>
                  </div>
                  <div className="overflow-hidden">
                    <article
                      className={
                        'overflow-hidden duration-500 ' +
                        (visible || '-translate-y-28')
                      }
                    >
                      I'm Martin.
                    </article>
                  </div>
                </div>
              </div>

              <div className="text-left text-base leading-6 font-normal font-raleway overflow-hidden  ">
                <div className="overflow-hidden ">
                  <article
                    className={
                      'font-semibold duration-500 ' +
                      (visible || '-translate-y-10')
                    }
                  >
                    I am a software engineer.
                  </article>
                </div>

                <div className="overflow-hidden">
                  <article
                    className={'duration-500 ' + (visible || '-translate-y-10')}
                  >
                    Since I was a kid I was fascinated with all tech things.
                  </article>
                </div>
                <div className="overflow-hidden">
                  <article
                    className={'duration-500 ' + (visible || '-translate-y-10')}
                  >
                    Fast forward to today, this fascination turned into a
                    career.
                  </article>
                </div>

                <div className="overflow-hidden ">
                  <article
                    className={'duration-500 ' + (visible || '-translate-y-16')}
                  >
                    If you're curious to learn more about me, scroll further
                    down this page.
                  </article>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <div
                id="dot"
                className={
                  'fixed mt-[0px] -ml-[8px] left-[25%] rounded-full z-50 h-4 w-4 bg-blue -translate-y-[27vh] hover:bg-indigo-700 duration-100 '
                }
                style={{ opacity: dotVisible }}
                ref={refBackgroundDot}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-start duration-300 ">
          <div className="flex flex-col">
            <div
              className={
                'flex flex-col overflow-hidden duration-700 w-[50vw] h-[100vh] ' +
                (visible || '-translate-y-96')
              }
            >
              <img
                className={' cursor-pointer object-cover -translate-y-20'}
                src="/me/portrait-martin2.jpg"
              ></img>
            </div>
            {/* <div className="pl-16 mt-8 flex flex-row  font-inter text-base justify-center overflow-hidden">
              <a
                className={
                  'mr-8 pr-8 font-bold border-r-2 border-black duration-500 ease-in ' +
                  (visible || '-translate-y-10')
                }
              >
                Software Engineering
              </a>
              <a
                c
                className={
                  'mr-8 pr-8  border-r-2 border-black duration-500 ease-in ' +
                  (visible || '-translate-y-10')
                }
              >
                Performance
              </a>
              <a
                className={
                  'mr-8 duration-500 ease-in ' + (visible || '-translate-y-10')
                }
              >
                Security
              </a>
            </div> */}
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

          {/* <div className="font-raleway text-6xl w-full text-left">
            Background
          </div> */}
          {/* <div className="h-[20vh] min-h-[20vh]"></div> */}

          <Background
            workExpierenceActiveIndex={workExpierenceActiveIndex}
            workExpierence={workExpierence}
          />
          <div className="h-[20vh] min-h-[30vh]"></div>
        </div>
      </div>

      <AcademicsPage />
      <CtaPage />
      <div className="w-full flex flex-row justify-center text-neutral-700 font-inter text-sm">
        Made with Tailwind CSS & React
      </div>
      <div className="w-full flex flex-row justify-center font-raleway text-sm  font-semibold">
        © 2023 All rights reserved. – Coded by Martin Bogusz
      </div>
    </div>
  );
}

export default App;
