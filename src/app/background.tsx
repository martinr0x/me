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
    title: 'Software Engineer @ Celonis',
    dateFrom: '2022',
    dateTo: 'now',
    techstack: [
      'Java',
      'Spring',
      'Postgres',
      'Kubernetes',
      'Datadog',
      'ArgoCD',
      'OAuth2',
      'Microservices',
    ],
    location: 'Munich, Germany',
    description: (
      <ul className="list-disc pl-5">
        <li>
          Successfully developed and deployed a user lifecycle management
          service (SCIM) that significantly improved customer experience by
          streamlining the integration of pre-existing user bases with the
          platform.
        </li>
        <li>
          Designed and constructed an OAuth 2.0 server, which enabled secure and
          industry-standard integration of third-party applications.
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
    title: 'Student Software Engineer @ qbound',
    techstack: [
      'React',
      'JavaScript',
      'Redux',
      'Node.js',
      'MongoDB',
      'GoLang',
      'gRPC',
    ],

    dateFrom: '2020',
    dateTo: '2021',
    location: 'Munich, Germany',
    description: (
      <ul className="list-disc pl-5">
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
    title: 'Research Assistant @ Technical University Munich',
    techstack: [
      'C/C++',
      'Python',
      'Boost',
      'MPI',
      'HPX',
      'Charm',
      'MPP',
      'OpenMP',
    ],

    dateFrom: '2019',
    dateTo: '2020',
    location: 'Munich, Germany',
    description: (
      <ul className="list-disc pl-5">
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
    title: 'Student Software Engineer @ Oregano Systems',
    techstack: ['C/C++', 'JavaScript', 'PHP', 'Angular.js'],

    dateFrom: '2019',
    dateTo: '2020',
    location: 'Munich, Germany',
    description: (
      <ul className="list-disc pl-5">
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
];
