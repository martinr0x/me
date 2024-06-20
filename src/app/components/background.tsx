import { useEffect } from 'react';

export default function Background(props: {
  workExpierence: any;
  workExpierenceActiveIndex: any;
}) {
  const { workExpierence, workExpierenceActiveIndex } = props;
  useEffect(() => {}, [workExpierenceActiveIndex]);
  return (
    <div id="background ">
      {workExpierence.map((step: any, index: number) => {
        if (step?.jobs) {
          return (
            <div
              className={
                'w-[100vw] p-8 sm:w-[40vw] sm:pb-[8vh] mb-[2vh]  duration-300 ' +
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
                <div className="text-sm font-inter font-medium uppercase text-blue">
                  {step.title}
                </div>
                {step.jobs.map((s: any) => (
                  <div className="mb-[2vh]" key={s.title}>
                    <div className="text-base sm:text-2xl font-inter font-semibold ">
                      {s.title}
                    </div>
                    <div className="normal-case">
                      {s.dateFrom} - {s.dateTo}{' '}
                    </div>
                    <div className="mb-6"></div>

                    <div className="font-raleway text-base">
                      {s.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        return (
          <div
            className={
              'w-[100vw] p-8 sm:w-[40vw] sm:pb-[8vh] mb-[2vh] duration-300 ' +
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
              <div className="text-sm font-inter font-medium uppercase text-blue">
                {step.title}
              </div>
              <div className="mb-6">
                {workExpierence[index]?.dateFrom} -{' '}
                {workExpierence[index]?.dateTo}
              </div>
              <div className="font-raleway text-base">{step.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
