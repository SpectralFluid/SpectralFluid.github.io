import { ArrowRight, ArrowUpRight, BookOpen, Code2, Cpu, Layers3, Orbit, Waves } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    name: 'Tarang.jl',
    type: 'PDE framework',
    description: 'A high-performance spectral and pseudo-spectral PDE solver with natural mathematical syntax across CPUs, GPUs, and distributed clusters.',
    tags: ['Fourier', 'Chebyshev', 'GPU', 'MPI'],
    source: 'https://github.com/subhk/Tarang.jl',
    docs: 'https://subhk.github.io/Tarang.jl/stable/',
    icon: Waves,
  },
  {
    name: 'SHTnsKit.jl',
    type: 'Transform library',
    description: 'Pure-Julia spherical harmonic transforms with scalar and vector analysis, multithreading, and distributed-memory parallelism.',
    tags: ['Spherical harmonics', 'Pure Julia', 'MPI'],
    source: 'https://github.com/subhk/SHTnsKit.jl',
    docs: 'https://subhk.github.io/SHTnsKit.jl/',
    icon: Orbit,
  },
  {
    name: 'GeoDynamo.jl',
    type: 'Geophysical solver',
    description: 'A Julia solver for rotating convection and self-consistent dynamos in spherical shells and full balls.',
    tags: ['MHD', 'Rotating flows', 'Spherical domains'],
    source: 'https://github.com/subhk/GeoDynamo.jl',
    icon: Layers3,
  },
  {
    name: 'BiGSTARS.jl',
    type: 'Stability analysis',
    description: 'Bi-global linear stability analysis for geophysical flows using Chebyshev–Fourier spectral collocation.',
    tags: ['Eigenproblems', 'Collocation', 'Geophysical flows'],
    source: 'https://github.com/subhk/BiGSTARS.jl',
    docs: 'https://subhk.github.io/BiGSTARS.jl/stable/',
    icon: Cpu,
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="SpectralFluid home">
            <Image src="/spectralfluid-logo-v2.png" alt="" width={38} height={38} />
            <span>SpectralFluid</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#projects">Software</a>
            <a href="#science">Science</a>
            <a href="#about">About</a>
            <a className="github-link" href="https://github.com/subhk/SpectralFluid.github.io"><Code2 size={16} aria-hidden="true" /> GitHub</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="overline">An open-source Julia ecosystem</p>
            <h1>Spectral methods for fluid dynamics</h1>
            <p className="hero-lead">Fast, readable tools for partial differential equations, spherical harmonic transforms, stability analysis, and geophysical flow.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore the software <ArrowRight size={17} aria-hidden="true" /></a>
              <a className="text-link" href="https://github.com/subhk/SpectralFluid.github.io">Browse the source <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="equation-card" aria-label="Pseudo-spectral method summary">
            <span>pseudo-spectral form</span>
            <p>∂ₜu = 𝓛(u) + 𝓕⁻¹[𝓝(û)]</p>
            <div><small>physical space</small><i aria-hidden="true">⇄</i><small>spectral space</small></div>
          </div>
        </section>

        <div className="facts" aria-label="Core capabilities">
          <span>Fourier · Chebyshev · Spherical harmonics</span>
          <span>CPU · GPU · MPI</span>
          <span>Open source · Julia</span>
        </div>

        <section className="section software" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="section-number">01</p>
            <div><p className="overline">Software</p><h2 id="projects-title">A family of numerical tools</h2><p className="section-intro">Each package is useful on its own. Together they cover the path from spectral transforms to complete fluid solvers.</p></div>
          </div>
          <div className="project-list">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="project-row" key={project.name}>
                  <div className="project-identity"><span className="project-icon"><Icon size={22} aria-hidden="true" /></span><div><h3>{project.name}</h3><span>{project.type}</span></div></div>
                  <div className="project-details"><p>{project.description}</p><ul className="tag-list" aria-label={`${project.name} capabilities`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
                  <div className="project-links">
                    {project.docs && <a href={project.docs}><BookOpen size={16} aria-hidden="true" /> Docs</a>}
                    <a href={project.source}><Code2 size={16} aria-hidden="true" /> Source</a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section science" id="science" aria-labelledby="science-title">
          <div className="section-heading">
            <p className="section-number">02</p>
            <div><p className="overline">Science</p><h2 id="science-title">Fields, flows, and modes</h2><p className="section-intro">Spectral representations expose the structure of a field while retaining the accuracy needed for serious computation.</p></div>
          </div>
          <div className="figure-grid">
            <figure>
              <Image src="/illustrations/perpetual-ocean.png" alt="Ocean-current streamlines forming eddies south of Africa" width={1280} height={640} sizes="(max-width: 760px) 100vw, 58vw" />
              <figcaption><strong>Ocean circulation.</strong> Fine vortical structures embedded within a planetary-scale flow.<small>NASA Scientific Visualization Studio · <a href="https://svs.gsfc.nasa.gov/5505/">source</a></small></figcaption>
            </figure>
            <figure>
              <Image src="/illustrations/spherical-harmonics.png" alt="Rows of blue and gold lobes representing real spherical harmonic modes" width={1600} height={900} sizes="(max-width: 760px) 100vw, 42vw" />
              <figcaption><strong>Spherical harmonics.</strong> Global fields decomposed into an orthogonal basis of modes.<small>Inigo Quilez / Wikimedia Commons · <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a></small></figcaption>
            </figure>
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="section-heading"><p className="section-number">03</p><div><p className="overline">Approach</p><h2 id="about-title">Research software you can inspect</h2></div></div>
          <div className="about-grid">
            <p>SpectralFluid develops numerical software close to the mathematics: explicit algorithms, composable Julia interfaces, and parallel execution paths that scale from a laptop to a cluster.</p>
            <ul>
              <li><strong>Spectral accuracy</strong><span>for smooth multiscale physics</span></li>
              <li><strong>Parallel by design</strong><span>across CPUs, GPUs, and MPI</span></li>
              <li><strong>Reproducible methods</strong><span>with open code and documentation</span></li>
            </ul>
          </div>
        </section>

        <section className="closing-panel">
          <div><p className="overline">Open research software</p><h2>Read the code. Reproduce the method. Build the next solver.</h2></div>
          <a className="button button-primary" href="https://github.com/subhk/SpectralFluid.github.io">Visit GitHub <ArrowUpRight size={17} aria-hidden="true" /></a>
        </section>
      </main>

      <footer><div className="footer-inner"><a className="brand footer-brand" href="#top"><Image src="/spectralfluid-logo-v2.png" alt="" width={32} height={32} /><span>SpectralFluid</span></a><p>Open-source spectral methods for fluid dynamics in Julia.</p><a href="https://github.com/subhk">Subhajit Kar</a></div></footer>
    </div>
  );
}
