import { title } from 'process';

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
    jobs: [
      {
        title: 'Core Engine Performance',
        dateFrom: 'Oct 2023',
        dateTo: 'now',
        techstack: [],
        location: 'Munich, Germany',
        description: (
          <ul className="">
            <li>
              Addressing performance challenges across all layers of a
              proprietary in-memory analytical database (OLAP), with a primary
              focus on data sharding and horizontal scaling to meet growing data
              demands. My daily work includes root cause & algorithmic analysis,
              debugging and micro optimizations. Contributed to building a
              micro-benchmarking infrastructure to detect regressions. Achieved
              a 90% reduction in allocation time by efficiently allocating large
              arrays on NUMA systems.
            </li>
          </ul>
        ),
      },
      {
        title: 'Identity Management',
        dateFrom: '2022',
        dateTo: 'Oct 2023',
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
          <ul className="">
            <li>
              Engineered and designed a robust system to facilitate scalable and
              secure platform integration via OAuth2. Following its successful
              launch, I provided guidance to several teams on adopting the new
              system for product development. This initiative notably enhanced
              the customer and developer experience, rendering application
              integrations more scalable, secure, and enterprise-ready.
            </li>
            <li>
              Contributed to enhancing the system's reliability and stability by
              undertaking various projects and initiatives. Achieved a 90%
              reduction in p90 latency for the API gateway by implementing a
              series of optimizations and performance improvements.
            </li>
          </ul>
        ),
      },
    ],
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
      <ul className="">
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
      <ul className="">
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
      <ul className="">
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
