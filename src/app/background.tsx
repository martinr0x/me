export const backgroundSteps = [
  {
    title: 'Highschool',
    date: '2015',
    location: 'Vienna, Austria',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    title: 'Bachelor',
    date: '2020',
    location: 'Munich, Germany',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    title: 'Master',
    date: '2022',
    location: 'Munich, Germany',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
];

export const workExpierenceSteps = [
  {
    company: 'Celonis',
    title: 'Software Engineer',
    dateFrom: '2022',
    dateTo: 'now',
    techstack: [
      'Java',
      'Spring',
      'Postgres',
      'Kubernetes',
      'OAuth2',
      'Microservices',
    ],
    location: 'Munich, Germany',
    description: (
      <ul className=" pl-5">
        <li>
          Engineered and designed a robust system to facilitate scalable and
          secure platform integration via OAuth2. Following its successful
          launch, I provided guidance to several teams on adopting the new
          system for product development. This initiative notably enhanced the
          customer and developer experience, rendering application integrations
          more scalable, secure, and enterprise-ready.
        </li>
        <li>
          Contributed to enhancing the system's reliability and stability by
          undertaking various projects and initiatives. Achieved a 90% reduction
          in p90 latency for the API gateway by implementing a series of
          optimizations and performance improvements.
        </li>
      </ul>
    ),
  },

  {
    company: 'qbound',
    title: 'Student Software Engineer',
    techstack: [
      'JavaScript',
      'React',
      'Redux',
      'Node.js',
      'MongoDB',
      'GoLang',
      'gRPC',
      'WireGuard',
    ],

    dateFrom: '2020',
    dateTo: '2021',
    location: 'Munich, Germany',
    description: (
      <ul className=" pl-5">
        <li>
          Developed a web application for managing and monitoring internal
          resources and services, resulting in a 30% reduction in downtime and
          increased scalability for the overall system.
        </li>
        <li>
          Designed and implemented a native, platform-independent client that
          provided secure and authenticated access for IoT devices. This
          architecture improved the system's performance and reliability.
        </li>
      </ul>
    ),
  },
  {
    title: 'Research Assistant',
    company: 'Technical University Munich',
    techstack: ['C/C++', 'Python', 'Boost', 'MPI', 'HPX', 'OpenMP'],

    dateFrom: '2019',
    dateTo: '2020',
    location: 'Munich, Germany',
    description: (
      <ul className=" pl-5">
        <li>
          Designed and integrated parallel solutions for compute-intensive
          simulation applications. Evaluated the resulting performance benefits
          and scaling capabilities on a cluster of Many-Core CPUs.
        </li>
        <li>
          Published the results in the 2020 IEEE/ACM 3rd Annual Parallel
          Applications Workshop: Alternatives To MPI+X (PAW-ATM).
        </li>
      </ul>
    ),
  },
  {
    title: 'Student Software Engineer',
    company: 'Oregano Systems',
    techstack: ['C/C++', 'JavaScript', 'PHP', 'Angular.js'],

    dateFrom: '2017',
    dateTo: '2019',
    location: 'Munich, Germany',
    description: (
      <ul className=" pl-5">
        <li>
          Created a web application for real time monitoring and configuration
          of clock synchronization hardware.
        </li>
        <li>
          This enabled the replacement of the native legacy application with an
          easily deployable web based solution.
        </li>
      </ul>
    ),
  },
];
