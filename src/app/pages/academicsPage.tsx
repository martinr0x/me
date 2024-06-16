import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AcademicsPage() {
  return (
    <div
      className="flex flex-col justify-center align-middle w-screen bg-white text-white snap-center"
      id="academia"
    >
      <div className="flex flex-row justify-center align-middle w-screen h-[50vh] bg-blue text-white">
        <div className="flex flex-col justify-center max-w-[80%]">
          <div className="grid grid-flow-row  grid-cols-3 grid-rows-1 gap-x-16">
            {/* <div></div>
            <div className="font-raleway text-6xl w-full text-left row-span-1">
              Academia
            </div>
            <div></div> */}
            <div className="row-span-2 col-span-1">
              <div className="text-white text-2xl font-inter font-semibold pb-5">
                Master
                <div className="text-white font-normal text-base pt-1">
                  2022 - 2019 |{' '}
                  <a className="font-semibold">TUM, Munich, Bavaria</a>
                </div>
              </div>
              <div className="text-base leading-6 font-normal font-raleway">
                Focus on IT Security, Software Engineering and High Performance
                Computing. Wrote my master’s thesis about “Secure, decentralized
                trust establishment in self-sovereign identity(SSI) systems.” at
                the Fraunhofer Institute for Applied and Integrated Security
                (AISEC)
              </div>
            </div>
            <div className="row-span-2 col-span-1">
              <div className="text-white text-2xl font-inter font-semibold pb-5">
                Bachelor
                <div className="text-white font-normal text-base pt-1">
                  2019 - 2016 |{' '}
                  <a className="font-semibold">TUM, Munich, Bavaria</a>
                </div>
              </div>
              <div className="text-base leading-6 font-normal font-raleway">
                Minor in Economics. Focus on IT Security and AI. Bachelor’s
                thesis “Exploring Modern Runtime Systems for the SWE-Framework”.
              </div>
            </div>
            <div className="row-span-2 col-span-1">
              <div className="text-white text-2xl font-inter font-semibold pb-5">
                Research
                <div className="text-white font-normal text-base pt-1">
                  2019 - 2020 |{' '}
                  <a className="font-semibold">TUM, Munich, Bavaria</a>
                </div>
              </div>
              <div className="text-base leading-6 font-normal font-raleway">
                Worked on parallel computing approaches for high performance
                applications. The results were published in the 2020 IEEE/ACM
                3rd Annual Parallel Applications Workshop.{' '}
              </div>
              <a href="https://ieeexplore.ieee.org/document/9307099">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
