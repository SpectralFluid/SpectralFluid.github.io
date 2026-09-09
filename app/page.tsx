import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Cpu,
  Layers3,
  Orbit,
  Waves,
} from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    name: 'Tarang.jl',
    type: 'PDE framework',
    description:
      'A high-performance spectral and pseudo-spectral PDE solver with natural mathematical syntax across CPUs, GPUs, and distributed clusters.',
    tags: ['Fourier', 'Chebyshev', 'GPU', 'MPI'],
    source: 'https://github.com/subhk/Tarang.jl',
    docs: 'https://subhk.github.io/Tarang.jl/stable/',
    accent: 'cyan',
    icon: Waves,
  },
  {
    name: 'SHTnsKit.jl',
    type: 'Transform library',
    description:
      'Pure-Julia spherical harmonic transforms with scalar and vector analysis, multithreading, and distributed-memory parallelism.',
    tags: ['Spherical harmonics', 'Pure Julia', 'MPI'],
    source: 'https://github.com/subhk/SHTnsKit.jl',
    docs: 'https://subhk.github.io/SHTnsKit.jl/',
    accent: 'violet',
    icon: Orbit,
  },
  {
    name: 'GeoDynamo.jl',
    type: 'Geophysical solver',
    description:
      'A Julia solver for rotating convection and self-consistent dynamos in spherical shells and full balls.',
    tags: ['MHD', 'Rotating flows', 'Spherical domains'],
    source: 'https://github.com/subhk/GeoDynamo.jl',
    accent: 'blue',
    icon: Layers3,
  },
  {
    name: 'BiGSTARS.jl',
    type: 'Stability analysis',
    description:
      'Bi-global linear stability analysis for geophysical flows using Chebyshev–Fourier spectral collocation.',
    tags: ['Eigenproblems', 'Collocation', 'Geophysical flows'],
    source: 'https://github.com/subhk/BiGSTARS.jl',
    docs: 'https://subhk.github.io/BiGSTARS.jl/stable/',
    accent: 'magenta',
    icon: Cpu,
  },
];

const principles = [
  {
    number: '01',
    title: 'Spectral accuracy',
    text: 'Fourier, Chebyshev, and spherical harmonic representations built for smooth multiscale physics.',
  },
  {
    number: '02',
    title: 'Parallel by design',
    text: 'Shared-memory, GPU, and MPI execution paths for workstations and distributed clusters.',
  },
  {
    number: '03',
    title: 'Composable Julia',
    text: 'Readable numerical abstractions that remain close to the mathematics and interoperate with Julia.',
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="SpectralFluid home">
          <Image src="/spectralfluid-logo-v2.png" alt="" width={44} height={44} />
          <span>SpectralFluid</span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#principles">Principles</a>
          <a
            className="nav-github"
            href="https://github.com/SpectralFluid"
            aria-label="SpectralFluid on GitHub"
          >
            <Code2 size={18} aria-hidden="true" />
            GitHub
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> Open-source scientific computing · Julia
            </p>
            <h1 id="hero-title">
              Spectral methods for fluid dynamics, <em>built to scale.</em>
            </h1>
            <p className="hero-lead">
              SpectralFluid brings together high-performance Julia tools for
              solving partial differential equations, spherical harmonic
              transforms, and geophysical flow.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore the projects <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/SpectralFluid"
              >
                <Code2 size={18} aria-hidden="true" /> View on GitHub
              </a>
            </div>
          </div>

          <div className="hero-mark" aria-hidden="true">
            <div className="spectral-orbit orbit-one" />
            <div className="spectral-orbit orbit-two" />
            <Image
              src="/spectralfluid-logo-v2.png"
              alt=""
              width={512}
              height={512}
              priority
            />
          </div>
        </section>

        <div className="capability-bar" aria-label="Core capabilities">
          <span><i className="dot dot-cyan" /> Spectral + pseudo-spectral</span>
          <span><i className="dot dot-violet" /> CPU · GPU · MPI</span>
          <span><i className="dot dot-blue" /> Open source</span>
        </div>

        <section className="projects section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="section-index">01 / Projects</p>
              <h2 id="projects-title">Tools for computational fluid dynamics</h2>
            </div>
            <p>
              From reusable transforms to complete PDE solvers, each project
              is developed for transparent methods and serious computation.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className={`project-card accent-${project.accent}`} key={project.name}>
                  <div className="project-topline">
                    <span className="project-icon"><Icon size={24} aria-hidden="true" /></span>
                    <span>{project.type}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="tag-list" aria-label={`${project.name} capabilities`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <div className="project-links">
                    <a href={project.source}>
                      <Code2 size={17} aria-hidden="true" /> Source
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                    {project.docs && (
                      <a href={project.docs}>
                        <BookOpen size={17} aria-hidden="true" /> Docs
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="principles section" id="principles" aria-labelledby="principles-title">
          <div className="section-heading compact">
            <div>
              <p className="section-index">02 / Principles</p>
              <h2 id="principles-title">Accuracy without sacrificing reach</h2>
            </div>
          </div>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-panel" aria-labelledby="closing-title">
          <p className="section-index">Open research software</p>
          <h2 id="closing-title">Read the code. Reproduce the method. Build the next solver.</h2>
          <a className="button button-light" href="https://github.com/SpectralFluid">
            Visit SpectralFluid on GitHub <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top">
          <Image src="/spectralfluid-logo-v2.png" alt="" width={36} height={36} />
          <span>SpectralFluid</span>
        </a>
        <p>High-performance spectral methods for fluid dynamics in Julia.</p>
        <a href="https://github.com/subhk">Created by Subhak</a>
      </footer>
    </div>
  );
}
