import { Ref, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from './components/atoms/button/primary';
export default function Nutshell() {
  const [count, setCount] = useState(0);

  let wheelEventEndTimeout: any;
  let countReal = 0;
  let lastDir = 0;
  const lastCount = 6;
  const cbRef: Ref<HTMLDivElement> = useRef(null);

  const onWheel = (e: WheelEvent) => {
    const dir = e.deltaY > 0 ? 1 : -1;
    const countActual = countReal + dir;
    if (lastDir !== dir && countActual === -1) return;
    if (lastDir !== dir && countActual === 4) {
      return;
    }
    if (countActual + dir < lastCount && countActual >= -1) {
      e.preventDefault();
    } else {
      return;
    }

    if (lastDir !== dir) {
      lastDir = dir;
      countReal += lastDir;
      countReal = Math.max(countReal, 0);
      setCount(countReal);
    }
    clearTimeout(wheelEventEndTimeout);
    wheelEventEndTimeout = setTimeout(() => {
      lastDir = 0;
    }, 100);
  };

  useEffect(() => {
    if (!cbRef.current) return;
    cbRef.current?.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      cbRef.current?.removeEventListener('wheel', onWheel);
    };
  }, []);
  return (
    <div className="flex flex-col justify-center">
      {count}
      <div
        className={
          'flex flex-row justify-center font-inter w-screen h-full overflow-y-hidden overflow-x-hidden scroll-smooth snap-y snap-mandatory'
        }
        ref={cbRef}
      >
        <div className="h-[100vh] w-full relative">
          <div
            className={
              'w-full justify-center flex flex-row flex-initial duration-700 sticky top-1/2 ' +
              (count > 0 ? '-translate-y-40' : '')
            }
          >
            <div
              className={
                'text-6xl font-semibold font-inter duration-1000 ' +
                (count > 0 ? 'text-neutral-100' : 'text-neutral-900 ')
              }
            >
              In a Nutshell
            </div>
          </div>
          <div
            className="w-[300vw] h-[100vh] flex flex-row overflow-y-hidden duration-[800ms]"
            style={{
              transform: `translateX(${(1 - Math.min(count, 3)) * 100}vw)`,
            }}
          >
            <div className={'w-[100vw] flex flex-row justify-center'}>
              <div
                className={
                  'flex flex-col justify-center align-middle w-full max-w-screen-lg duration-1000 '
                }
              >
                <div className="text-neutral-900 text-4xl font-semibold font-inter leading-[48px] text-center">
                  Academia
                </div>
                <div className="text-center mb-6"></div>

                <div className="grid grid-flow-col justify-between">
                  <div
                    className={
                      'grid-1 duration-1000 delay-500 ' +
                      (count === 1 ? '' : 'translate-y-[100vh]')
                    }
                  >
                    <div className="text-neutral-900 text-xl font-semibold font-inter">
                      Master
                      <div className="text-neutral-500 font-normal text-sm">
                        {' '}
                        2022 - 2019
                      </div>
                    </div>
                    Focus on IT Security, Software Engineering and High
                    Performance Computing. Wrote my master’s thesis about
                    “Secure, decentralized trust establishment in self-sovereign
                    identity(SSI) systems.” at the Fraunhofer Institute for
                    Applied and Integrated Security (AISEC)
                  </div>
                  <div
                    className={
                      'grid-1 duration-1000 delay-700 ' +
                      (count === 1 ? '' : 'translate-y-[100vh]')
                    }
                  >
                    <div className="text-neutral-900 text-xl font-semibold font-inter">
                      Bachelor
                      <div className="text-neutral-500 font-normal text-sm">
                        {' '}
                        2019 - 2016
                      </div>
                    </div>
                    Minor in Economics. Focus on IT Security and AI. Bachelor’s
                    thesis “Exploring Modern Runtime Systems for the
                    SWE-Framework”.
                  </div>
                  <div
                    className={
                      'grid-1 duration-1000 delay-[900ms] ' +
                      (count === 1 ? '' : 'translate-y-[100vh]')
                    }
                  >
                    <div className="text-neutral-900 text-xl font-semibold font-inter">
                      Research
                      <div className="text-neutral-500 font-normal text-sm">
                        {' '}
                        2019 - 2020
                      </div>
                    </div>
                    Worked on parallel computing approaches for high performance
                    applications. The results were published in the 2020
                    IEEE/ACM 3rd Annual Parallel Applications Workshop.{' '}
                    <a href="https://ieeexplore.ieee.org/document/9307099">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-row justify-center w-[100vw]">
              <div
                className={
                  'flex flex-col justify-center align-middle w-full max-w-screen-lg '
                }
              >
                <div className={'flex flex-col w-full'}>
                  <div className="text-neutral-900 text-4xl font-semibold font-inter leading-[48px] text-center">
                    Skills
                  </div>
                  <div className={'text-center mb-6 '}>
                    I gained expierences on all levels of abstraction in
                    software engineering. <br></br>
                    This enables me to fully understand software systems which
                    results in more reliable, secure and scalable products.
                  </div>
                  <div className="justify-center flex flex-row duration-1000">
                    <div className="grid grid-flow-col max-w-screen-lg w-screen">
                      <div
                        className={
                          'grid-1 pr-4 delay-700 duration-1000 ' +
                          (count === 2 ? '' : 'translate-y-[200vh]')
                        }
                      >
                        <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                          Languages
                        </div>
                        {['C++', 'Java', 'GoLang', 'Python', 'JavaScript'].map(
                          (e) => (
                            <PrimaryButton>{e}</PrimaryButton>
                          )
                        )}
                      </div>
                      <div
                        className={
                          'grid-1 pr-4 delay-500 duration-1000 ' +
                          (count === 2 ? '' : 'translate-y-[200vh]')
                        }
                      >
                        <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                          Backend
                        </div>
                        {[
                          'Spring',
                          'Node.js',
                          'Kubernetes',
                          'Microservices',
                          'Networking',
                          'gRPC',
                          'SQL',
                          'MongoDB',
                          'Optimization',
                          'Benchmarking',
                        ].map((e) => (
                          <PrimaryButton>{e}</PrimaryButton>
                        ))}
                      </div>
                      <div
                        className={
                          'grid-1 pr-4 delay-300 duration-1000 ' +
                          (count === 2 ? '' : 'translate-y-[200vh]')
                        }
                      >
                        <div>
                          <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                            Frontend
                          </div>
                          {['TypeScript', 'CSS', 'React', 'Angular'].map(
                            (e) => (
                              <PrimaryButton>{e}</PrimaryButton>
                            )
                          )}
                        </div>
                      </div>
                      <div
                        className={
                          'grid-1 pr-4 delay-100 duration-1000 ' +
                          (count === 2 ? '' : 'translate-y-[200vh]')
                        }
                      >
                        <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                          Tools & Frameworks
                        </div>
                        {['ArgoCD', 'Datadog', 'Git', 'GitHub'].map((e) => (
                          <PrimaryButton>{e}</PrimaryButton>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-row justify-center w-[100vw]">
              <div
                className={
                  'flex flex-col justify-center align-middle w-full max-w-screen-lg '
                }
              >
                <div className={'flex flex-col w-full'}>
                  <div className="text-neutral-900 text-4xl font-semibold font-inter leading-[48px] text-center">
                    Professional
                  </div>
                  <div className={'text-center mb-6 '}>
                    I gained expierences on all levels of abstraction in
                    software engineering. <br></br>
                    This enables me to fully understand software systems which
                    results in more reliable, secure and scalable products.
                  </div>
                  <div className="justify-center flex flex-row">
                    <div className="grid grid-flow-col max-w-screen-lg w-screen">
                      <div
                        className={
                          'grid-1 pr-4 duration-1000 delay-500 ' +
                          (count === 3 ? '' : 'translate-y-[200vh]')
                        }
                      >
                        <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                          Software Engineering
                        </div>
                        I successfuly built and launched reliable applications
                        at Celonis, qbound and Oregano. I worked on scaling and
                        securing systems at Celonis and TUM. Drove design
                        decisions and collaborated with stakeholders to build
                        better products.
                        <br></br>
                      </div>
                      <div
                        className={
                          'grid-1 pr-4 duration-1000 delay-700 ' +
                          (count === 3 ? '' : 'translate-y-[200vh]')
                        }
                      >
                        <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                          IT Security
                        </div>
                        Designed and implemented a secure application for
                        qbound. Worked with multiple teams at Celonis, guiding
                        them on how to build secure intergrations. Participated
                        in multiple CTFs and achieved second place in the
                        Developer Student Club Munich CTF.
                      </div>
                      <div
                        className={
                          'grid-1 pr-4 duration-1000 delay-1000 ' +
                          (count === 3 ? '' : 'translate-y-[200vh]')
                        }
                      >
                        <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                          Teamwork & Leadership
                        </div>
                        Engineering is nothing without people. I worked together
                        with multiple teams and individuals. With clear
                        communication and expectations we were able to
                        consistently deliver with quality and on time.
                        <br></br>
                        Co-founded and leading the Munich Handstand Society, a
                        community with over 100 members.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
