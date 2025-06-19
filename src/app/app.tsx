import { RefObject, useEffect, useRef, useState, useCallback } from 'react';
import { softwareEngineeringTerms, workExpierence } from './variables';
import Contacts from './contacts';
import LoadingScreen from './loadingScreen';
import CtaPage from './pages/ctaPage';
import AcademicsPage from './pages/academicsPage';
import Background from './components/background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function App() {
  const refBackgroundDot: RefObject<HTMLDivElement> = useRef(null);
  const refBackgroundTimeline: RefObject<HTMLDivElement> = useRef(null);
  const [workExpierenceActiveIndex, setWorkExpierenceActiveIndex] =
    useState(-1);
  const [dotVisible, setDotVisible] = useState(100);
  const [contactsVisible, setContactsVisible] = useState(false);
  const [timeline, setTimeline] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);
  let loaded = false;
  const setPageLoaded = () => {
    loaded = true;
    setVisible(true);
    setScrollLocked(false);
  };
  const handleScroll = (x: any) => {
    const yDot = refBackgroundDot.current?.getBoundingClientRect().y;
    if (!yDot) return;

    const rect = refBackgroundTimeline.current?.getBoundingClientRect();
    if (!rect || !yDot) return;

    const { y: yLine, height: yHeight } = rect;
      
    const newWorkExpierenceActiveIndex = workExpierence.findIndex((_, index) => {
      const step = document.getElementById(`step-${index}`);
      if (!step) return false;
      const { y, height } = step.getBoundingClientRect();

      return yDot > y && yDot < y + height;
    });

    if (newWorkExpierenceActiveIndex !== workExpierenceActiveIndex) {
      setWorkExpierenceActiveIndex(newWorkExpierenceActiveIndex);
    } 
    
    const newTimeline = Math.abs(yLine - yDot) > 10;
    if (timeline !== newTimeline) {
      setTimeline(newTimeline);
    }
    if (dotVisible !== yLine + yHeight - yDot) {
      setDotVisible(yLine + yHeight - yDot);
    }
  };
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((o) => {
      setContactsVisible(!o[0].isIntersecting);
      setVisible(o[0].isIntersecting && loaded);
      const dialog: any = document.getElementById('mobile-menu');
      dialog.open = dialog.open && o[0].isIntersecting;
    }, options);
    const intro = document.getElementById('intro');
    const cta = document.getElementById('call-to-action');

    if (intro && cta) {
      observer.observe(intro);
      observer.observe(cta);
    }
  }, []);
  const resetMobileDialog = () => {
    const dialog: any = document.getElementById('mobile-menu');
    dialog.open = false;
  };

  // Navigation handlers (memoized)
  const handleAboutMeClick = useCallback(() => {}, []);

  const handleBackgroundClick = useCallback(() => {
    resetMobileDialog();
    document.getElementById('step-0')?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
    setWorkExpierenceActiveIndex(0);
  }, [resetMobileDialog]);

  const handleAcademiaClick = useCallback(() => {
    resetMobileDialog();
    document.getElementById('academia')?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }, [resetMobileDialog]);

  const handleContactClick = useCallback(() => {
    resetMobileDialog();
    document.getElementById('call-to-action')?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
    setDotVisible(0);
  }, [resetMobileDialog]);

  // Desktop nav handlers (no resetMobileDialog)
  const handleBackgroundClickDesktop = useCallback(() => {
    document.getElementById('step-0')?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
    setWorkExpierenceActiveIndex(0);
  }, []);

  const handleAcademiaClickDesktop = useCallback(() => {
    document.getElementById('academia')?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }, []);

  const handleContactClickDesktop = useCallback(() => {
    document.getElementById('call-to-action')?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
    setDotVisible(0);
  }, []);

  return (
    <div
      className={
        'relative flex flex-col antialiased overflow-x-hidden ' +
        (!scrollLocked || 'max-h-screen overflow-y-hidden')
      }
      onScroll={handleScroll}
      onWheel={handleScroll}
    >
      <LoadingScreen
        words={softwareEngineeringTerms}
        setPageLoaded={setPageLoaded}
      />
      <div
        className={
          'fixed top-0 right-0 duration-300 py-2 px-4 z-[99] w-full sm:w-0 flex flex-row-reverse ' +
          (contactsVisible
            ? 'translate-x-0 bg-white sm:bg-transparent'
            : 'translate-x-[100vw]')
        }
      >
        <Contacts />
      </div>
      <div
        id="intro"
        className={
          'flex flex-row w-screen h-screen relative duration-200 flex-wrap '
        }
      >
        <div className="flex flex-row text-center justify-center flex-grow  max-w-[100vw] w-[100vw] sm:w-[50vw]">
          <div className="flex flex-col justify-between  ">
            <details
              id="mobile-menu"
              className="font-raleway text-base px-4 py-2 bg-white w-screen duration-500 ease-out sm:hidden"
            >
              <summary className="justify-center ">
                <div className="font-semibold text-white text-right">
                  <span>
                    <FontAwesomeIcon
                      className="text-xl text-blue duration-300 "
                      icon={faBars}
                    ></FontAwesomeIcon>
                  </span>
                </div>
              </summary>
              <div className="flex flex-col mb-6 text-white">
                <button className="font-bold mb-1" onClick={handleAboutMeClick}>About me</button>
                <button className="mb-1" onClick={handleBackgroundClick}>Background</button>
                <button className="mb-1" onClick={handleAcademiaClick}>Academia</button>
                <button onClick={handleContactClick}>Contact</button>
              </div>
            </details>

            <div className="mt-10 overflow-hidden hidden sm:block">
              <div
                className={
                  ' flex flex-row justify-left font-inter text-base duration-500  ' +
                  (visible || '-translate-y-16')
                }
              >
                <button className="mr-8 font-bold" onClick={handleAboutMeClick}>About me</button>
                <button className="mr-8" onClick={handleBackgroundClickDesktop}>Background</button>
                <button className="mr-8" onClick={handleAcademiaClickDesktop}>Academia</button>
                <button className="" onClick={handleContactClickDesktop}>Contact</button>
              </div>
            </div>
            <div
              className={
                'duration-100 px-8 pb-8 pt-8 sm:pt-0 sm:px-0 sm:pb-36 max-w-[440px]'
              }
            >
              <div className="overflow-hidden">
                <div
                  className={
                    'font-bold text-[46px] sm:text-[86px] font-inter text-left mb-4 sm:mb-12 leading-[66px] sm:leading-[106px]'
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
                  'fixed mt-[0px] -ml-[8px] left-[25%] rounded-full z-50 h-4 w-4 bg-blue -translate-y-[27vh] hover:bg-indigo-700 duration-100 hidden sm:block '
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
                'flex flex-col overflow-hidden duration-700  w-[100vw] sm:w-[50vw] h-[100vh] ' +
                (visible || '-translate-y-96')
              }
            >
              <img
                className={'cursor-pointer object-cover'}
                src="/portrait-martin2.jpg"
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
      <div className="flex flex-row w-screen h-full">
        <div
          className={
            'sticky top-0 left-[25%] -mt-[30vh] -translate-x-10 font-inter uppercase font-semibold'
          }
        >
          <div className="overflow-hidden hidden sm:block">
            <div
              className={
                'duration-500 ' +
                (!timeline ? '-translate-y-10' : 'translate-y-0')
              }
            >
              Timeline
            </div>
          </div>
        </div>
        <div
          className="sticky bottom-0 border-r-[1px] border-black left-[25%] pb-24 -mt-[27vh] z-20 pb-72 hidden sm:block"
          ref={refBackgroundTimeline}
        ></div>

        <div className="min-w-[35%] hidden sm:block"></div>
        <div className="flex flex-col">
          <div className="h-[20vh] min-h-[30vh]"></div>
          <Background
            workExpierenceActiveIndex={workExpierenceActiveIndex}
            workExpierence={workExpierence}
          />
          <div className="h-[20vh] min-h-[10vh] hidden sm:block"></div>
        </div>
      </div>

      <AcademicsPage />
      <CtaPage />
      <div className="w-full flex flex-row justify-center text-neutral-700 font-raleway text-sm">
        Made with Tailwind CSS & React
      </div>
      <div className="w-full flex flex-row justify-center font-raleway text-sm  font-normal">
        © 2023 All rights reserved. – Coded by Martin Bogusz
      </div>
    </div>
  );
}

export default App;
