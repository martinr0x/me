import { useEffect } from 'react';

export default function Background(props) {
  const { workExpierence, workExpierenceActiveIndex } = props;
  useEffect(() => {}, [workExpierenceActiveIndex]);
  return (
    <>
      {workExpierence.map((step, index) => {
        if (step?.jobs) {
          return (
            <div
              className={
                'background-item w-[800px] pb-[8vh] mb-[2vh] duration-300 ' +
                (workExpierenceActiveIndex === index
                  ? 'opacity-100  translate-x-7 blur-none  '
                  : 'opacity-30  blur-sm')
              }
              key={index}
              id={`step-${index}`}
            >
              <div className="">
                <div className="text-4xl font-inter font-semibold">
                  {step.company}
                </div>
                <div className="text-sm font-inter font-medium uppercase text-blue mb-5">
                  {step.title}
                </div>
                {step.jobs.map((s) => (
                  <div className="mb-[2vh]" key={s.title}>
                    <div className="text-2xl font-inter font-semibold ">
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
              'background-item w-[800px] pb-[8vh] mb-[2vh] duration-300 ' +
              (workExpierenceActiveIndex === index
                ? 'opacity-100  translate-x-7 blur-none  '
                : 'opacity-30  blur-sm')
            }
            key={index}
            id={`step-${index}`}
          >
            <div>
              <div className="text-4xl font-inter font-semibold">
                {step.company}
              </div>
              <div className="text-sm font-inter font-medium uppercase text-blue mb-5">
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
    </>
  );
}
