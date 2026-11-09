import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  Globe2,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";
import TechOrb from "@/components/tech-orb";
import MobileNav from "@/components/mobile-nav";

const projects = [
  {
    id: "01",
    label: "AUTOMAÇÃO & DOCUMENTOS",
    title: "CentralPDF",
    desc: "Uma ferramenta para simplificar o tratamento de documentos: organização de imagens, numeração de páginas, edição e exportação de PDFs.",
    tags: ["Python", "PDF", "Automação"],
    theme: "pdf",
    image: "/projects/centralpdf.png",
  },
  {
    id: "02",
    label: "SOFTWARE DESKTOP",
    title: "NotManager",
    desc: "Gerenciamento de notificações, anexos, imagens e histórico em uma aplicação desktop pensada para uma rotina operacional real.",
    tags: ["Python", "PySide6", "SQLite"],
    theme: "manager",
    image: "/projects/notmanager.png",
  },
  {
    id: "03",
    label: "WEB & EXPERIÊNCIAS",
    title: "Sites empresariais",
    desc: "Presença digital sob medida para empresas, com interfaces responsivas, identidade visual e foco em comunicação clara.",
    tags: ["Next.js", "Web", "UI"],
    theme: "web",
    image: "/projects/sites.png",
  },
];

const services = [
  {
    icon: Braces,
    title: "Desenvolvimento Python",
    description: "Aplicações e ferramentas customizadas para necessidades específicas de pessoas e empresas.",
  },
  {
    icon: Workflow,
    title: "Automação de processos",
    description: "Menos tarefas repetitivas e mais eficiência por meio de fluxos, scripts e integrações.",
  },
  {
    icon: Globe2,
    title: "Desenvolvimento web",
    description: "Websites e interfaces digitais modernos, responsivos e pensados para o seu negócio.",
  },
  {
    icon: Network,
    title: "Soluções de TI",
    description: "Experiência prática em redes, monitoramento e infraestrutura para entender o ambiente como um todo.",
  },
];

const stacks = [
  {
    label: "DESENVOLVIMENTO",
    items: ["Python", "TypeScript", "Next.js", "React", "SQL", "PySide6"],
  },
  {
    label: "INFRAESTRUTURA",
    items: ["Linux", "Redes TCP/IP", "VLAN", "GPON", "VPN", "Virtualização"],
  },
  {
    label: "FERRAMENTAS",
    items: ["Git", "Docker", "Zabbix", "Grafana", "VS Code", "APIs REST"],
  },
];

export default function Home() {
  return (
    <main id="inicio">
      <div className="page-glow" aria-hidden="true" />

      <header className="site-header">
        <div className="wrap header-inner">
          <a href="#inicio" className="brand" aria-label="Felipe Ostetti Ferri - início">
            <span className="brand-icon">
              F<span>.</span>
            </span>
            <span className="brand-name">
              FELIPE <b>OSTETTI FERRI</b>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#projetos">Projetos</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#experiencia">Experiência</a>
          </nav>

          <a
            href="https://wa.me/5544997560454?text=Ol%C3%A1%2C%20Felipe%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="nav-contact"
          >
            Vamos conversar <ArrowUpRight size={15} />
          </a>
          <MobileNav />
        </div>
      </header>

      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" /> DESENVOLVIMENTO • AUTOMAÇÃO • TECNOLOGIA
          </div>
          <div className="hero-kicker">
            OLÁ, EU SOU FELIPE OSTETTI FERRI <span>↘</span>
          </div>
          <h1 id="hero-title">
            Tecnologia
            <br />
            que <em>resolve.</em>
            <br />
            Software que
            <br />
            <em>entrega.</em>
          </h1>
          <p>
            Desenvolvo sistemas, automações e soluções digitais que transformam
            desafios técnicos em resultados concretos.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projetos">
              Explorar projetos <ArrowUpRight size={17} />
            </a>
            <a className="btn btn-outline" href="#contato">
              Entre em contato <ArrowRight size={17} />
            </a>
          </div>
          <div className="hero-foot">
            <span className="hero-line" />
            <span>PYTHON / SOFTWARE / INFRAESTRUTURA</span>
          </div>
        </div>
        <div className="hero-art">
          <TechOrb />
        </div>
        <a href="#projetos" className="scroll-indicator">
          <ArrowDownRight size={17} /> SCROLL TO EXPLORE
        </a>
      </section>

      <div className="ticker">
        <div className="wrap ticker-inner">
          <span>PYTHON DEVELOPMENT</span>
          <span className="ticker-star">✳</span>
          <span>AUTOMAÇÃO INTELIGENTE</span>
          <span className="ticker-star">✳</span>
          <span>WEB EXPERIENCES</span>
          <span className="ticker-star">✳</span>
          <span>INFRAESTRUTURA & REDES</span>
        </div>
      </div>

      <section id="projetos" className="section projects-section wrap">
        <div className="section-head">
          <div>
            <div className="section-label">
              <span>01</span> / TRABALHOS SELECIONADOS
            </div>
            <h2>
              Projetos que saem
              <br />
              do <em>papel.</em>
            </h2>
          </div>
          <p>
            Projetos desenvolvidos para resolver problemas do mundo real, do
            processamento de documentos a experiências digitais.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card project-${project.theme}`} key={project.id}>
              <div className="project-visual">
                <img
                  src={project.image}
                  className="project-image"
                  alt={`Ilustração conceitual da interface de ${project.title}`}
                  loading="lazy"
                />
                <div className="project-number">{project.id} / 03</div>
              </div>
              <div className="project-meta">
                <span>{project.label}</span>
                <span>
                  <Sparkles size={14} /> PROJETO REAL
                </span>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="section-end-note">
          <span>
            <Check size={14} /> Projetos desenvolvidos por mim. As imagens são
            ilustrações conceituais das interfaces.
          </span>
        </div>
      </section>

      <section id="servicos" className="section services-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="section-label">
                <span>02</span> / O QUE EU FAÇO
              </div>
              <h2>
                Soluções para
                <br />
                desafios <em>reais.</em>
              </h2>
            </div>
            <p>
              Da ideia à implementação: tecnologia aplicada com clareza,
              planejamento e foco naquilo que realmente importa.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-card-top">
                  <service.icon size={25} strokeWidth={1.6} />
                  <span>0{index + 1}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="section about-section wrap">
        <div className="about-aside">
          <div className="section-label">
            <span>03</span> / SOBRE MIM
          </div>
          <div className="about-tile about-photo">
          <img
            src="/Perfil.png"
            alt="Felipe Ostetti Ferri"
            className="profile-image"
          />

          <div className="photo-overlay" />

          <span className="tile-coordinate">
            FELIPE OSTETTI FERRI / MARINGÁ, PR
          </span>
        </div>
        </div>

        <div className="about-copy">
          <span className="mini-kicker">DESENVOLVEDOR & PROFISSIONAL DE TI</span>
          <h2>
            Curiosidade técnica.
            <br />
            <em>Visão prática.</em>
          </h2>
          <p>
            Sou Felipe Ostetti Ferri, formado em Análise e Desenvolvimento de
            Sistemas e pós-graduado em Desenvolvimento com Python.
          </p>
          <p>
            Minha trajetória une desenvolvimento de software à experiência prática
            em infraestrutura, redes, monitoramento e diagnóstico de problemas.
            Essa combinação me ajuda a enxergar a solução completa — não apenas o código.
          </p>
          <p>
            Gosto de transformar processos complexos em ferramentas simples,
            confiáveis e úteis para pessoas e empresas.
          </p>
          <div className="about-points">
            <div>
              <Code2 size={18} />
              <span>Desenvolvimento orientado a problemas</span>
            </div>
            <div>
              <ShieldCheck size={18} />
              <span>Experiência em ambientes reais de TI</span>
            </div>
            <div>
              <Cpu size={18} />
              <span>Aprendizado e evolução contínuos</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="section experience-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="section-label">
                <span>04</span> / CONHECIMENTO TÉCNICO
              </div>
              <h2>
                Ferramentas são meios.
                <br />
                <em>Resolver é o objetivo.</em>
              </h2>
            </div>
            <p>
              Uma base técnica construída entre desenvolvimento, infraestrutura
              e operações.
            </p>
          </div>

          <div className="stack-grid">
            {stacks.map((stack, index) => (
              <div className="stack-card" key={stack.label}>
                <div className="stack-title">
                  <span>{`0${index + 1}`}</span> {stack.label}
                </div>
                <div className="stack-items">
                  {stack.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="education">
            <div className="education-label">
              <Boxes size={20} />
              <span>FORMAÇÃO</span>
            </div>
            <div>
              <strong>Análise e Desenvolvimento de Sistemas</strong>
              <small>Graduação concluída</small>
            </div>
            <div>
              <strong>Desenvolvimento com Python</strong>
              <small>Pós-graduação concluída</small>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="contact-section wrap">
        <div className="contact-frame">
          <div className="contact-aura" />
          <div className="section-label">
            <span>05</span> / VAMOS CONVERSAR
          </div>
          <div className="contact-body">
            <div>
              <span className="contact-kicker">
                <span className="pulse" /> ABERTO A CONVERSAS E OPORTUNIDADES
              </span>
              <h2>
                Tem um desafio?
                <br />
                <em>Vamos resolver.</em>
              </h2>
              <p>
                Seja para desenvolver uma solução, automatizar um processo ou
                conversar sobre oportunidades profissionais, será um prazer
                conhecer sua ideia.
              </p>
            </div>
            <a
              className="contact-big-link"
              href="https://wa.me/5544997560454?text=Ol%C3%A1%2C%20Felipe%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noreferrer"
              aria-label="Conversar com Felipe pelo WhatsApp"
            >
              <ArrowUpRight size={38} />
            </a>
          </div>
          <div className="contact-bottom">
            <span>ENTRE EM CONTATO PELO WHATSAPP</span>
            <a
              href="https://wa.me/5544997560454?text=Ol%C3%A1%2C%20Felipe%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noreferrer"
            >
              Conversar no WhatsApp <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-top">
          <a href="#inicio" className="footer-brand">
            F<span>.</span>
          </a>
          <div>
            <strong>FELIPE OSTETTI FERRI</strong>
            <span>Desenvolvimento • Automação • Tecnologia</span>
          </div>
          <a href="#inicio" className="back-top">Voltar ao topo ↑</a>
        </div>
        <div className="wrap footer-bottom">
          <span>
            © {new Date().getFullYear()} Felipe Ostetti Ferri. Todos os direitos reservados.
          </span>
          <span>PROJETADO COM INTENÇÃO. DESENVOLVIDO COM CÓDIGO.</span>
        </div>
      </footer>
    </main>
  );
}
