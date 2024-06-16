import { title } from 'process';

export const softwareEngineeringTerms = [
  // Distributed Systems
  'distributed systems',
  'consensus algorithm',
  'CAP theorem',
  'Paxos',
  'Raft',
  'Zookeeper',
  'distributed hash table',
  'chord protocol',
  'eventual consistency',
  'replication',
  'leader election',
  'quorum',
  'sharding',
  'partitioning',
  'vector clocks',
  'Gossip protocol',
  'distributed ledger',
  'blockchain',
  'Byzantine fault tolerance',
  'tolerant systems',
  'message passing',
  'remote procedure call',
  'actor model',
  'microservices',
  'service discovery',
  'consistency models',
  'concurrent computing',
  'map-reduce',
  'Hadoop',
  'Spark',
  'distributed database',
  'data replication',
  'fault tolerance',
  'network partitioning',
  'latency',
  'throughput',
  'availability',
  'data consistency',
  'network topology',
  'distributed computing',
  'stateful service',
  'stateless service',
  'service mesh',
  'load balancing',
  'event-driven architecture',

  // Performance Engineering
  'performance engineering',
  'profiling',
  'benchmarking',
  'latency',
  'throughput',
  'scalability',
  'load balancing',
  'load testing',
  'stress testing',
  'bottleneck',
  'optimization',
  'performance tuning',
  'caching',
  'buffering',
  'pipeline',
  'parallel computing',
  'concurrency',
  'multithreading',
  'thread pool',
  'garbage collection',
  'heap memory',
  'stack memory',
  'resource allocation',
  'JIT compilation',
  'performance monitoring',
  "Amdahl's Law",
  "Gustafson's Law",
  'queueing theory',
  'response time',
  'time complexity',
  'space complexity',
  'algorithmic efficiency',
  'resource utilization',
  'profiling tools',
  'execution time',
  'latency optimization',
  'memory leak',
  'deadlock',
  'thread contention',
  'I/O bound',
  'CPU bound',
  'performance bottleneck',
  'throughput optimization',

  // AI
  'artificial intelligence',
  'machine learning',
  'deep learning',
  'neural networks',
  'natural language processing',
  'computer vision',
  'reinforcement learning',
  'supervised learning',
  'unsupervised learning',
  'semi-supervised learning',
  'support vector machine',
  'decision tree',
  'random forest',
  'k-means clustering',
  'principal component analysis',
  'feature extraction',
  'feature selection',
  'gradient descent',
  'backpropagation',
  'convolutional neural network',
  'recurrent neural network',
  'long short-term memory',
  'transformer model',
  'attention mechanism',
  'GAN',
  'autoencoder',
  'Bayesian network',
  'Markov decision process',
  'Q-learning',
  'Monte Carlo method',
  'ensemble learning',
  'boosting',
  'bagging',
  'fuzzy logic',
  'heuristic search',
  'genetic algorithm',
  'AI ethics',
  'explainable AI',
  'AI bias',
  'data preprocessing',
  'model evaluation',
  'cross-validation',
  'hyperparameter tuning',
  'model deployment',
  'AI pipeline',

  // CI/CD
  'continuous integration',
  'continuous delivery',
  'continuous deployment',
  'CI/CD pipeline',
  'Jenkins',
  'Travis CI',
  'CircleCI',
  'GitLab CI',
  'Bamboo',
  'Buildkite',
  'automated testing',
  'unit testing',
  'integration testing',
  'deployment automation',
  'infrastructure as code',
  'version control',
  'Git',
  'Mercurial',
  'Subversion',
  'build automation',
  'Docker',
  'Kubernetes',
  'Ansible',
  'Terraform',
  'Puppet',
  'Chef',
  'Vagrant',
  'artifact repository',
  'Nexus',
  'Artifactory',
  'SonarQube',
  'static code analysis',
  'code coverage',
  'feature flag',
  'blue-green deployment',
  'canary deployment',
  'rollback',
  'monitoring',
  'alerting',
  'logging',
  'CI/CD tools',
  'pipeline as code',
  'deployment strategy',
  'test automation',
  'build status',
  'release management',
  'DevOps',

  // Cloud Computing
  'cloud computing',
  'virtualization',
  'IaaS',
  'PaaS',
  'SaaS',
  'serverless computing',
  'containerization',
  'Docker',
  'Kubernetes',
  'cloud storage',
  'cloud migration',
  'elasticity',
  'scalability',
  'load balancer',
  'auto-scaling',
  'cloud orchestration',
  'multi-cloud',
  'hybrid cloud',
  'public cloud',
  'private cloud',
  'cloud security',
  'disaster recovery',
  'CDN',
  'API gateway',
  'cloud-native',
  'cloud infrastructure',
  'FaaS',
  'cloud service model',
  'cloud deployment model',
  'cloud provider',
  'AWS',
  'Azure',
  'Google Cloud Platform',
  'OpenStack',
  'VMware',
  'Hyper-V',
  'cloud backup',
  'cloud monitoring',
  'cloud automation',
  'cloud governance',
  'cost management',
  'cloud compliance',
  'cloud networking',
  'cloud storage services',
  'object storage',
  'block storage',
  'file storage',
  'cloud databases',
  'cloud data warehouse',
  'big data',
  'data lake',
];

export const workExpierence = [
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
              proprietary analytical database (OLAP), with primary focus on
              horizontal scaling to meet growing data demands and performance
              monitoring. My daily work includes root cause and algorithmic
              analysis, debugging, and micro-optimizations.
            </li>
            <li>
              I contributed to building a micro-benchmarking infrastructure to
              detect regressions and implemented several optimizations that
              resulted in up to 50x performance improvements.
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
    company: 'qbound (acquired by trusteq)',
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
