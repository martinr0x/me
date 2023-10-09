import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
export default function Nutshell() {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const [pos, setPos] = useState(0);
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
    setPos((scrollPos * 100) / scrollMax);
  };

  return (
    <div className="flex flex-col justify-center">
      <div
        className={
          'flex flex-row justify-center font-inter w-screen h-full overflow-scroll scroll-smooth snap-y'
        }
        onScroll={onScroll}
      >
        <div className="h-[800vh] w-full max-w-screen-lg relative">

          <div
            className={
              'w-full justify-center flex flex-row  duration-1000 sticky top-1/2 ' +
              (pos > 0 ? '-translate-y-20' : '')
            }
          >
            <div className="text-neutral-900 text-6xl font-semibold font-inter">
              In a Nutshell
            </div>
          </div>
          <div
            className={
              'w-full justify-center flex flex-row sticky top-1/2 duration-1000 ' +
              (pos === 0 ? 'translate-x-[100vw]' : '')
            }
          >
            <div
              className={
                'flex flex-col w-full duration-1000 ' +
                (pos > 50 ? ' -translate-x-[100vw]' : '')
              }
            >
              <div className="text-neutral-900 text-gray-500 text-4xl font-semibold font-inter leading-[48px] text-center">
                Academia
              </div>
              <div className="text-center mb-6">
                I have studied at TUM for 5 years. I finished both master and
                bachelor and published 1 Paper.{' '}
                <a href="https://ieeexplore.ieee.org/document/9307099">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>

              <div className="flex flex-row justify-between">
                <div
                  className={
                    'w-[45%] duration-1000 delay-500 ' +
                    (pos ===0   ? 'translate-y-[100vh]' : '')
                  }
                >
                  <div className="text-neutral-900 text-xl font-semibold font-inter">
                    TUM Master
                    <div className="text-neutral-500 font-normal text-sm">
                      {' '}
                      2022 - 2019
                    </div>
                  </div>
                  Focus on IT Security, Software Engineering and High
                  Performance Computing. Final Grade: 1.9 Master’s thesis
                  “Secure, decentralized trust establishment in self-sovereign
                  identity(SSI) systems.”
                </div>
                <div
                  className={
                    'w-[45%] duration-1000 delay-700 ' +
                    (pos == 0 ? 'translate-y-[100vh]' : '')
                  }
                >
                  <div className="text-neutral-900 text-xl font-semibold font-inter">
                    TUM Bachelor
                    <div className="text-neutral-500 font-normal text-sm">
                      {' '}
                      2019 - 2016
                    </div>
                  </div>
                  Minor in Economics. Focus on IT Security and AI. Final Grade:
                  2.6 Bachelor’s thesis “Exploring Modern Runtime Systems for
                  the SWE-Framework”.
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex flex-col justify-between sticky top-1/2 duration-1000 ' +
              (pos < 50 ? 'translate-x-[200vh]' : '')
            }
          >
            <div className="text-neutral-900 text-4xl font-semibold font-inter leading-[48px] text-center">
                Professional
              </div>
            <div className="text-center mb-6">
              I have studied at TUM for 5 years. I finished both master and
              bachelor and published 1 Paper.{' '}
              <a href="https://ieeexplore.ieee.org/document/9307099">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
            <div className="flex flex-row justify-between">
              <div className={"w-[311px] duration-1000 delay-300 "+    (pos < 50 ? 'translate-y-[100vh]' : '') }>
                <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                  Software Engineering
                </div>
                Contributed and developed multiple frontend & backend services
                at Celonis, qbound and Oregano systems. <br></br>
                Created performance oriented and parallel solutions for HPC
                clusters.
              </div>
              <div className={"w-[311px] duration-1000 delay-500 "+    (pos < 50 ? 'translate-y-[100vh]' : '') }>
                <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                  IT Security
                </div>
                Designed and implemented a secure application for qbound.
                Participated in multiple CTFs and achieved second place out of
                77 teams in the Developer Student Club Munich CTF. Implemented a
                trust framework on top of the GNUnet open source project as part
                of my master’s thesis.
              </div>
              <div className={"w-[311px] duration-1000 delay-700 "+    (pos < 50 ? 'translate-y-[100vh]' : '') }>
                <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                  Teamwork & Leadership
                </div>
                Co-founded and leading the Munich Handstand Society, a community
                with over 100 members.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
