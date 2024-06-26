import { faArrowDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export default function Background(props: {
  workExpierence: any;
  workExpierenceActiveIndex: any;
}) {
  const { workExpierence, workExpierenceActiveIndex } = props;

  useEffect(() => {}, [workExpierenceActiveIndex]);
  return (
    <div id="background " className="px-8 w-screen">
      {workExpierence.map((step: any, index: number) => {
        if (step?.jobs) {
          return (
            <div
              className={
                'w-full sm:w-[40vw] sm:pb-[8vh]  mb-16 sm:mb-[2vh]  duration-300 ' +
                (workExpierenceActiveIndex === index
                  ? 'opacity-100  blur-none  '
                  : 'sm:opacity-30 sm:blur-sm')
              }
              key={index}
              id={`step-${index}`}
            >
              <div className="">
                <div className="text-2xl sm:text-4xl font-inter font-semibold">
                  {step.company}
                </div>
                <div className="text-sm font-inter font-medium uppercase text-blue mb-4 sm:mb-10">
                  {step.title}
                </div>
                {step.jobs.map((s: any) => (
                  <div className="mb-4 sm:mb-10" key={s.title}>
                    <div className="text-base sm:text-2xl font-inter font-semibold mb-4">
                      {s.title} | {s.dateFrom} - {s.dateTo}{' '}
                    </div>
                    <div className="flex flex-row text-base font-raleway mb-1 flex-wrap">
                      {s.techstack.join(' \\ ')}
                    </div>
                    <details className="font-raleway text-base duration-500">
                      <summary className="h-full justify-center ">
                        <div className="font-semibold text-blue">
                          {' '}
                          Read More{' '}
                          <span>
                            <FontAwesomeIcon
                              className="text-base text-blue hover:text-indigo-700 duration-300 "
                              icon={faChevronDown}
                            ></FontAwesomeIcon>
                          </span>
                        </div>
                      </summary>
                      {s.description}
                    </details>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        return (
          <div
            className={
              'w-full sm:w-[40vw] sm:pb-[8vh]  mb-16 sm:mb[2vh] duration-300 ' +
              (workExpierenceActiveIndex === index
                ? 'opacity-100 blur-none  '
                : 'sm:opacity-30 sm:blur-sm')
            }
            key={index}
            id={`step-${index}`}
          >
            <div>
              <div className="text-2xl sm:text-4xl font-inter font-semibold">
                {step.company}
              </div>
              <div className="text-sm font-inter font-medium uppercase text-blue mb-4 sm:mb-10">
                {step.dateFrom} - {step.dateTo}{' '}
              </div>
              <div className="text-base sm:text-2xl font-inter font-semibold mb-4">
                {step.title}
              </div>

              <div className="flex flex-row text-base font-raleway mb-1">
                {step.techstack.join(' \\ ')}
              </div>
              <details className="font-raleway text-base duration-500">
                <summary className="h-full justify-center ">
                  <div className="font-semibold text-blue">
                    {' '}
                    Read More{' '}
                    <span>
                      <FontAwesomeIcon
                        className="text-base text-blue hover:text-indigo-700 duration-300 "
                        icon={faChevronDown}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                </summary>
                {step.description}
              </details>
            </div>
          </div>
        );
      })}
    </div>
  );
}
