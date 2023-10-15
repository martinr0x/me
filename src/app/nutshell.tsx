import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from './components/atoms/button/primary';
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
              'w-full justify-center flex flex-row flex-initial duration-700 sticky top-1/2 overflow-hidden ' + (pos > 0? "-translate-y-40":"")
            }
          >
            <div className={"text-6xl font-semibold font-inter duration-1000 "  + (pos > 0? "text-neutral-100":"text-neutral-900 ")} >
              In a Nutshell
            </div>
          </div>
          <div
            className={
              'w-full justify-center flex flex-row sticky top-[45%] duration-1000 ' +
              (pos === 0 ? 'translate-x-[100vw]' : '')
            }
          >
            <div
              className={
                'flex flex-col w-full duration-1000 ' +
                (pos > 50 ? ' -translate-x-[100vw]' : '')
              }
            >
              <div className="text-neutral-900 text-4xl font-semibold font-inter leading-[48px] text-center">
                Academia
              </div>
              <div className="text-center mb-6">
              </div>

              <div className="flex flex-row justify-between">
                <div
                  className={
                    'w-[45%] duration-1000 delay-500 ' +
                    (pos ===0   ? 'translate-y-[100vh]' : '')
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
                  identity(SSI) systems.” at the Fraunhofer Institute for Applied and Integrated Security (AISEC)
                </div>
                <div
                  className={
                    'w-[45%] duration-1000 delay-700 ' +
                    (pos == 0 ? 'translate-y-[100vh]' : '')
                  }
                >
                  <div className="text-neutral-900 text-xl font-semibold font-inter">
                    Bachelor
                    <div className="text-neutral-500 font-normal text-sm">
                      {' '}
                      2019 - 2016
                    </div>
                  </div>
                  Minor in Economics. Focus on IT Security and AI. Bachelor’s thesis “Exploring Modern Runtime Systems for
                  the SWE-Framework”.
                </div>
                <div
                  className={
                    'w-[45%] duration-1000 delay-[900ms] ' +
                    (pos == 0 ? 'translate-y-[100vh]' : '')
                  }
                >
                  <div className="text-neutral-900 text-xl font-semibold font-inter">
                    Research
                    <div className="text-neutral-500 font-normal text-sm">
                      {' '}
                      2019 - 2020
                    </div>
                  </div>
                  Worked on parallel computing approaches for high performance applications. The results were published in the 2020 IEEE/ACM 3rd Annual Parallel Applications Workshop.  <a href="https://ieeexplore.ieee.org/document/9307099">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'flex flex-col justify-between sticky top-[45%] duration-1000 ' +
              (pos < 50 ? 'translate-x-[200vh]' : '')
            }
          >
            <div className="text-neutral-900 text-4xl font-semibold font-inter leading-[48px] text-center">
                Professional
              </div>
            <div className="text-center mb-6">
             I gained expierences on all levels of abstraction in software engineering. <br></br>
             This enables me to fully understand software systems which results in more reliable, secure and scalable products.
            </div>
            <div className="flex flex-row justify-between">
              <div className={"w-[311px] duration-1000 "+    (pos < 70 ? 'translate-y-[100vh]' : '') }>
                <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                  Backend
                </div>
                {["C++",
                "Java" ,
               "GoLang",
                "Spring",
                "Node.js",
                "Kubernetes",
                "Microservices" ,
                "Networking",
               "gRPC",
                "SQL",
                "MongoDB",
                "Datastructures",
                "Optimization" ,
                "Benchmarking"].map(e =>  <PrimaryButton>{e}</PrimaryButton>)} 
              </div>
              <div className={"w-[311px] duration-1000 "+    ( pos < 70 ? 'translate-y-[100vh]' : '') }>
                <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                  Frontend
                </div>
                {["TypeScript",
                "CSS" ,
               "React",
                "Redux",
                "Angular"].map(e =>  <PrimaryButton>{e}</PrimaryButton>)}
              
              </div>
              <div className={"w-[311px] duration-1000 "+    ( pos < 70 ? 'translate-y-[100vh]' : '') }>
                <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                  Tools & Frameworks
                </div>
                {["ArgoCD",
               "Datadog",
                "Git", "GitHub"].map(e =>  <PrimaryButton>{e}</PrimaryButton>)}
            
              </div>
            </div>
            <div className={"flex flex-row justify-between "+ (pos > 70?"":"")}>
              <div className={"w-[311px] duration-1000 "+    (pos < 50 || pos > 90 ? 'delay-300 translate-y-[100vh]' : '') }>
                <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                  Software Engineering
                </div>
                I built distributed, scalable and secure services at Celonis. 
                Drove product development from start to general availability at Celonis, qbound and Oregano systems. <br></br>
              </div>
              <div className={"w-[311px] duration-1000 delay-500 "+    (pos < 50|| pos > 90  ? 'translate-y-[100vh]' : '') }>
                <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                  IT Security
                </div>
                Designed and implemented a secure application for qbound.
                Worked with multiple teams at Celonis, guiding them on how to build secure intergrations.
                Participated in multiple CTFs and achieved second place in the Developer Student Club Munich CTF. 
              </div>
              <div className={"w-[311px] duration-1000 delay-700 "+    (pos < 50 || pos > 90   ? 'translate-y-[100vh]' : '') }>
                <div className="text-neutral-900 text-3xl font-semibold font-inter leading-[48px] ">
                  Teamwork & Leadership
                </div>
                 I worked with multiple teams to enable scalable and secure plattform integration at Celonis.
                <br></br>
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
