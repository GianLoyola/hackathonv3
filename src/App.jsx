import { useEffect, useState } from 'react'
import hackathonJovenesImg from './img/hackathonJovenes.png'
import gianImg from './img/gian-cutout.png'
import armandoImg from './img/armando-cutout.png'
import juanImg from './img/juan-cutout.png'
import desarrolloImg from './img/desarrollo.png'
import disenoImg from './img/diseño.png'
import negocioImg from './img/negocio.png'
import dataImg from './img/data.png'
import seguridadImg from './img/seguridad.png'
import educacionImg from './img/educacion.png'
import participacionImg from './img/participacion.png'

const FORM_URL = 'https://forms.gle/iD2AjxwsqNqMRWN68'
const LEGAL_URL = '/legal.html#terminos'

const navLinks = [
  { label: 'El evento', href: '#evento' },
  { label: 'Comité', href: '#comite' },
  { label: 'Roles', href: '#roles' },
  { label: 'Temáticas', href: '#tematicas' },
  { label: 'Cronograma', href: '#cronograma' },
  { label: 'Reglas', href: '#reglas' },
]

const timelineDays = [
  {
    label: 'Día 1',
    date: '22 de octubre',
    shortDate: '22 OCT',
    focus: 'Apertura e ideación',
    events: [
      ['16:00', 'Apertura', 'Casa Joven'],
      ['16:15', 'Apertura técnica', 'Comité organizador'],
      ['16:30', 'Ponencia', 'Inspiración y contexto'],
      ['17:30', 'Tiempo de programación', 'Inicio de desarrollo'],
      ['19:30', 'Activación', 'Dinámica presencial'],
      ['20:00', 'Coffee break', 'Pausa y conexión'],
      ['20:30', 'Taller', 'Aprendizaje aplicado'],
      ['21:30', 'Despedida', 'Cierre de jornada'],
    ],
  },
  {
    label: 'Día 2',
    date: '23 de octubre',
    shortDate: '23 OCT',
    focus: 'Construcción y mentoría',
    events: [
      ['16:00', 'Bienvenida', 'Inicio de jornada'],
      ['16:15', 'Ponencia', 'Perspectiva experta'],
      ['17:15', 'Tiempo de programación', 'Construcción del MVP'],
      ['19:15', 'Activación', 'Dinámica presencial'],
      ['19:45', 'Coffee break', 'Pausa y conexión'],
      ['20:15', 'Taller', 'Mejora de la solución'],
      ['21:15', 'Cierre de jornada', 'Preparación para el día final'],
    ],
  },
  {
    label: 'Día 3',
    date: '24 de octubre',
    shortDate: '24 OCT',
    focus: 'Presentación y reconocimiento',
    events: [
      ['16:00', 'Bienvenida', 'Inicio de jornada'],
      ['16:15', 'Ponencia', 'Últimos aprendizajes'],
      ['17:00', 'Tiempo de programación', 'Cierre de solución'],
      ['18:30', 'Activación', 'Dinámica presencial'],
      ['19:00', 'Coffee break', 'Pausa y conexión'],
      ['19:15', 'Presentación de proyectos', 'Pitch y demo'],
      ['20:45', 'Evaluación del jurado', 'Revisión final'],
      ['21:45', 'Resultado final', 'Anuncio del proyecto ganador'],
    ],
  },
]

const committee = [
  {
    firstName: 'Giancarlos',
    lastName: 'Loyola',
    role: 'Coordinador General',
    facts: ['Desarrollador Fullstack'],
    quoteBefore: 'Cuando las ideas se coordinan con propósito, ',
    quoteAccent: 'el impacto se multiplica.',
    image: gianImg,
    accent: '#00e5c2',
    secondary: '#008bff',
    glow: 'rgba(0, 229, 194, .2)',
  },
  {
    firstName: 'Armando',
    lastName: 'Campos',
    role: 'Tech Lead',
    facts: ['Desarrollador Fullstack Senior', 'Arquitecto de Infraestructura', 'Cloud · Oracle'],
    quoteBefore: 'La tecnología cobra valor cuando se convierte en ',
    quoteAccent: 'soluciones que abren camino.',
    image: armandoImg,
    accent: '#a44cff',
    secondary: '#00b8ff',
    glow: 'rgba(164, 76, 255, .2)',
  },
  {
    firstName: 'Juan',
    lastName: 'Taype',
    role: 'Subcoordinador de Operaciones',
    facts: ['Desarrollador Fullstack'],
    quoteBefore: 'La ',
    quoteAccent: 'excelencia operativa',
    quoteAfter: ' es el puente entre una gran idea y un gran resultado.',
    image: juanImg,
    accent: '#00e5c2',
    secondary: '#4effb1',
    glow: 'rgba(0, 229, 194, .2)',
  },
]

const roles = [
  { icon: 'code', name: 'Desarrollo', number: '01', image: desarrolloImg, copy: 'Da vida a la solución: producto digital, arquitectura e integraciones que funcionan.', skills: ['Frontend y backend', 'APIs e integraciones', 'Bases de datos', 'Control de versiones'] },
  { icon: 'spark', name: 'Diseño UI/UX', number: '02', image: disenoImg, copy: 'Convierte necesidades reales en una experiencia clara, accesible y deseable.', skills: ['Investigación', 'Figma y prototipado', 'Design systems', 'Pruebas de usabilidad'] },
  { icon: 'chart', name: 'Negocio', number: '03', image: negocioImg, copy: 'Conecta el reto con una propuesta de valor, impacto y una narrativa convincente.', skills: ['Modelo de negocio', 'Análisis de mercado', 'Pitch', 'Liderazgo'] },
  { icon: 'server', name: 'Data', number: '04', image: dataImg, copy: 'Transforma información en decisiones, indicadores y oportunidades para la solución.', skills: ['Análisis de datos', 'Visualización', 'Métricas', 'Estrategia basada en evidencia'] },
]

const themes = [
  { tag: 'Temática 01', name: 'Seguridad ciudadana', text: 'Soluciones digitales para prevención, respuesta y colaboración ciudadana.', image: seguridadImg },
  { tag: 'Temática 02', name: 'Educación', text: 'Experiencias que amplíen las oportunidades de aprender, innovar y crecer.', image: educacionImg },
  { tag: 'Temática 03', name: 'Participación ciudadana', text: 'Herramientas para dialogar, proponer y decidir colectivamente.', image: participacionImg },
]

const rules = [
  { icon: 'repository', title: 'Repositorios controlados', text: 'La organización proveerá los repositorios de GitHub. Solo se evaluará el código alojado en ellos.' },
  { icon: 'scan', title: 'Trazabilidad del trabajo', text: 'Los commits y pull requests se monitorearán y aceptarán dentro de los horarios de cada jornada.' },
  { icon: 'spark', title: 'Uso responsable de IA', text: 'La inteligencia artificial puede usarse como apoyo para acelerar el desarrollo y aprendizaje.' },
  { icon: 'unlock', title: 'Licencia del proyecto', text: 'El proyecto ganador será de código abierto, salvo una licencia definida por su equipo al finalizar.' },
]

const criteria = [
  { icon: 'target', title: 'Impacto y viabilidad', value: 30, text: 'Problema relevante y posibilidad real de implementación.' },
  { icon: 'spark', title: 'Innovación y creatividad', value: 25, text: 'Enfoque novedoso frente a las alternativas existentes.' },
  { icon: 'layout', title: 'Diseño y experiencia', value: 25, text: 'Interfaz intuitiva, clara y útil para sus usuarios.' },
  { icon: 'mic', title: 'Defensa técnica', value: 20, text: 'Dominio del código, decisiones y propuesta presentada.' },
]

function Icon({ name, size = 20, stroke = 1.8 }) {
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    code: <><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m14 5-4 14" /></>,
    server: <><rect x="3" y="4" width="18" height="6" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" /><path d="M7 7h.01M7 17h.01" /></>,
    spark: <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" />,
    chart: <><path d="M4 19V5" /><path d="M4 19h16" /><path d="m7 15 4-4 3 2 5-6" /></>,
    shield: <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" /><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="9.5" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16.5 3.13a4 4 0 0 1 0 7.75" /></>,
    repository: <><path d="M5 3h14v18H5z" /><path d="M8 7h8M8 11h8M8 15h5" /></>,
    scan: <><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" /><path d="M7 12h10" /></>,
    unlock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 7.4-2.1" /></>,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="m16.5 7.5 4-4M16.5 3.5h4v4" /></>,
    layout: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 9v11" /></>,
    mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  }
  return <svg {...props}>{paths[name] || paths.spark}</svg>
}

function Circuit({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 240 140" fill="none" aria-hidden="true">
      <path d="M0 28h74l24 24h72l24-24h46" />
      <path d="M94 0v31m62 21v42h84" />
      <circle cx="74" cy="28" r="4" />
      <circle cx="156" cy="52" r="4" />
      <circle cx="194" cy="28" r="4" />
      <circle cx="156" cy="94" r="4" />
    </svg>
  )
}

function BrandLogo({ tone = 'color', size = 220, className = '' }) {
  const imageWidth = Math.round(size * 1.075)
  return (
    <span className={`brand-logo ${className}`} style={{ width: size, height: Math.round(size * 0.35) }}>
      <img
        src={tone === 'white' ? '/brand/logo-white.png' : '/brand/logo-color.png'}
        alt="HackFlow Hackathon 2026"
        style={{ width: imageWidth, left: -Math.round(size * 0.038), top: -Math.round(size * 0.36) }}
      />
    </span>
  )
}

function SectionHeading({ eyebrow, title, highlight, lead, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title} {highlight && <span>{highlight}</span>}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  )
}

function Header({ onRegister }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="header-logo" href="#inicio" aria-label="HackFlow, inicio" onClick={closeMenu}>
          <BrandLogo tone="white" size={190} />
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <a href={LEGAL_URL} target="_blank" rel="noreferrer">Términos y condiciones</a>
        </nav>
        <button className="header-register" type="button" onClick={onRegister}>Inscríbete <Icon name="arrow" size={16} /></button>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>
          <Icon name={open ? 'close' : 'menu'} size={23} />
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Navegación móvil">
          {navLinks.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
          <a href={LEGAL_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>Términos y condiciones</a>
          <button type="button" onClick={() => { closeMenu(); onRegister() }}>Inscríbete <Icon name="arrow" size={16} /></button>
        </nav>
      )}
    </header>
  )
}

function Hero({ onRegister }) {
  return (
    <section id="inicio" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb--one" aria-hidden="true" />
      <div className="hero-orb hero-orb--two" aria-hidden="true" />
      <div className="hero-trace hero-trace--top" aria-hidden="true"><span /><span /><span /></div>
      <div className="hero-flow" aria-hidden="true">
        <svg viewBox="0 0 720 620" fill="none">
          <path d="M730 64C503 30 438 148 512 238c82 100 6 188-190 174C122 398 70 501-3 623" />
          <path d="M745 110c-203-30-267 68-189 153 95 102 16 230-170 208C181 449 118 537 32 641" />
          <path d="M754 158c-162-10-221 87-140 169 85 87 23 231-145 237C269 570 200 603 128 658" />
          <path d="M730 213c-105 10-137 90-81 151 66 71 41 190-83 230-105 34-166 60-214 109" />
        </svg>
      </div>
      <div className="container hero-content">
        <p className="hero-kicker">HackFlow Hackathon 2026</p>
        <h1>Ideas que fluyen.<br /><span>Soluciones que transforman.</span></h1>
        <p className="hero-copy">Tres jornadas presenciales para transformar retos reales en propuestas de impacto, conectar talentos diversos y crear soluciones tecnológicas con propósito colectivo para nuestra comunidad.</p>
        <div className="hero-date-block">
          <div className="hero-rule" aria-hidden="true"><span /></div>
          <p className="hero-date"><Icon name="calendar" size={17} /> 22 al 24 de octubre de 2026</p>
        </div>
        <div className="hero-actions">
          <button className="button button--primary" type="button" onClick={onRegister}>Inscríbete <Icon name="arrow" size={18} /></button>
          <a className="button button--ghost" href="#cronograma">Ver cronograma <Icon name="chevron" size={18} /></a>
        </div>
      </div>
    </section>
  )
}

function EventIntro() {
  return (
    <section id="evento" className="event section-space">
      <div className="container event-grid">
        <div>
          <SectionHeading
            eyebrow="01 · El evento"
            title="Donde las ideas"
            highlight="encuentran movimiento."
            lead="HackFlow Hackathon 2026 reúne a personas que quieren construir, aprender y colaborar alrededor de retos que importan."
          />
          <p className="event-description">Una experiencia tecnológica intensiva, presencial y sin fines de lucro para crear MVPs funcionales, compartir conocimiento y transformar buenas ideas en soluciones con propósito.</p>
          <div className="event-meta" aria-label="Detalles del evento">
            <div><Icon name="pin" /><span><strong>Formato</strong>Presencial</span></div>
            <div><Icon name="users" /><span><strong>Equipos</strong>4 personas</span></div>
            <div><Icon name="clock" /><span><strong>Jornadas</strong>6 horas cada una</span></div>
          </div>
        </div>
        <div className="event-visual event-visual--photo">
          <img src={hackathonJovenesImg} alt="Jóvenes colaborando alrededor de una mesa de trabajo" />
        </div>
      </div>
    </section>
  )
}

function Committee() {
  const [activeIndex, setActiveIndex] = useState(0)
  const previousIndex = (activeIndex - 1 + committee.length) % committee.length
  const nextIndex = (activeIndex + 1) % committee.length
  const move = (direction) => setActiveIndex((current) => (current + direction + committee.length) % committee.length)

  return (
    <section id="comite" className="committee section-space">
      <div className="committee-grid-overlay" aria-hidden="true" />
      <div className="container committee-content">
        <SectionHeading eyebrow="02 · Organización" title="Comité" highlight="organizativo" lead="Las personas que articulan cada detalle para que las ideas puedan avanzar." align="center" />
        <div className="committee-slider" aria-roledescription="carrusel">
          <div className="committee-stage">
            {committee.map((member, index) => {
              const state = index === activeIndex ? 'active' : index === previousIndex ? 'previous' : index === nextIndex ? 'next' : ''
              const fullName = `${member.firstName} ${member.lastName}`
              return (
                <button
                  className={`committee-slide committee-slide--${state}`}
                  key={member.lastName}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={state === 'active' ? `${fullName}, perfil activo` : `Ver perfil de ${fullName}`}
                  aria-current={state === 'active' ? 'true' : undefined}
                  tabIndex={state === 'active' ? 0 : -1}
                  style={{ '--member-accent': member.accent, '--member-secondary': member.secondary, '--member-glow': member.glow }}
                >
                  <div className="committee-feature-card">
                    <span className="committee-dots committee-dots--top" aria-hidden="true" />
                    <span className="committee-dots committee-dots--bottom" aria-hidden="true" />
                    <Circuit className="committee-circuit committee-circuit--top" />
                    <Circuit className="committee-circuit committee-circuit--bottom" />
                    <div className="committee-feature-card__copy">
                      <p className="committee-badge"><Icon name="users" size={18} /> Comité organizativo</p>
                      <h3 className="committee-name"><span>{member.firstName}</span><strong>{member.lastName}</strong></h3>
                      <div className="committee-route" aria-hidden="true"><i /><i /><i /><span /></div>
                      <p className="committee-role">{member.role}</p>
                      <ul className="committee-facts">{member.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
                      <blockquote>
                        <span>{member.quoteBefore}</span><strong>{member.quoteAccent}</strong>{member.quoteAfter && <span>{member.quoteAfter}</span>}
                      </blockquote>
                    </div>
                    <figure className="committee-feature-card__portrait">
                      <span className="portrait-halo portrait-halo--outer" aria-hidden="true" />
                      <span className="portrait-halo portrait-halo--inner" aria-hidden="true" />
                      <span className="portrait-orbit portrait-orbit--solid" aria-hidden="true" />
                      <span className="portrait-orbit portrait-orbit--dash" aria-hidden="true" />
                      <img src={member.image} alt={state === 'active' ? fullName : ''} />
                    </figure>
                    <span className="committee-wave" aria-hidden="true" />
                  </div>
                </button>
              )
            })}
          </div>
          <div className="committee-slider__footer">
            <p className="committee-index" aria-live="polite">Integrante {String(activeIndex + 1).padStart(2, '0')} / {String(committee.length).padStart(2, '0')}</p>
            <div className="committee-controls">
              <button type="button" onClick={() => move(-1)} aria-label="Ver integrante anterior"><Icon name="chevron" size={19} /></button>
              <button type="button" onClick={() => move(1)} aria-label="Ver siguiente integrante"><Icon name="chevron" size={19} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Roles() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = roles[activeIndex]
  const move = (direction) => setActiveIndex((current) => (current + direction + roles.length) % roles.length)

  return (
    <section id="roles" className="roles section-space">
      <div className="container">
        <SectionHeading eyebrow="03 · Roles de la hackathon" title="Cuatro perfiles," highlight="una misma dirección." lead="Cada equipo está conformado por 4 personas con habilidades complementarias." />
        <div className="roles-slider">
          <div className="roles-slider__rail" role="tablist" aria-label="Roles de la hackathon" aria-orientation="vertical">
            {roles.map((role, index) => (
              <button
                className="role-tab"
                key={role.name}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-controls="role-panel"
                onClick={() => setActiveIndex(index)}
              >
                <span>{role.number}</span><strong>{role.name}</strong>
              </button>
            ))}
          </div>
          <div className="roles-slider__visual" aria-hidden="true">
            <div className="roles-slider__glow" />
            <img key={active.name} src={active.image} alt="" />
          </div>
          <article className="roles-slider__details" id="role-panel" role="tabpanel" key={active.name}>
            <div className="role-details__head"><p>Perfil {active.number}</p><span><Icon name={active.icon} size={23} /></span></div>
            <h3>{active.name}</h3>
            <p>{active.copy}</p>
            <ul>{active.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            <div className="role-details__controls">
              <button type="button" onClick={() => move(-1)} aria-label="Perfil anterior"><Icon name="chevron" size={18} /></button>
              <span>{active.number} / 04</span>
              <button type="button" onClick={() => move(1)} aria-label="Siguiente perfil"><Icon name="chevron" size={18} /></button>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function Themes() {
  return (
    <section id="tematicas" className="themes section-space">
      <div className="container">
        <SectionHeading eyebrow="04 · Retos con propósito" title="Temáticas del" highlight="Hackathon" lead="Todos los proyectos deben enmarcarse en una de estas tres temáticas oficiales." />
        <div className="theme-grid">
          {themes.map((theme) => (
            <article className="theme-card" key={theme.name}>
              <img className="theme-card__image" src={theme.image} alt="" />
              <div className="theme-card__content">
                <p className="theme-tag">{theme.tag}</p>
                <h3>{theme.name}</h3>
                <p>{theme.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Schedule() {
  const [activeDay, setActiveDay] = useState(0)
  const day = timelineDays[activeDay]
  return (
    <section id="cronograma" className="schedule section-space">
      <div className="container">
        <SectionHeading eyebrow="05 · Presencial" title="Modalidad y" highlight="cronograma" lead="Tres jornadas presenciales para idear, desarrollar y presentar soluciones." />
        <div className="schedule-summary"><span><i /> Modalidad presencial</span><span><i /> 3 jornadas intensivas</span><span><i /> 6 horas por jornada</span></div>
        <div className="schedule-layout">
          <div className="day-selector" role="tablist" aria-label="Días del cronograma">
            {timelineDays.map((item, index) => (
              <button key={item.label} className={activeDay === index ? 'is-active' : ''} type="button" role="tab" aria-selected={activeDay === index} onClick={() => setActiveDay(index)}>
                <span>{item.label}</span><strong>{item.shortDate}</strong><Icon name="chevron" size={18} />
              </button>
            ))}
          </div>
          <div className="timeline-panel" role="tabpanel" aria-label={`${day.label}, ${day.date}`}>
            <div className="timeline-panel__head">
              <div><p>{day.label}</p><h3>{day.date}</h3></div>
              <span>{day.focus}</span>
            </div>
            <ol className="timeline">
              {day.events.map(([time, title, detail], index) => (
                <li key={`${time}-${title}`}>
                  <time>{time}</time>
                  <span className="timeline-node"><i /></span>
                  <div><strong>{title}</strong><small>{detail}</small></div>
                  <b>{String(index + 1).padStart(2, '0')}</b>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

function Rules() {
  const [tab, setTab] = useState('rules')
  const showingRules = tab === 'rules'
  return (
    <section id="reglas" className="rules section-space">
      <div className="container">
        <SectionHeading eyebrow="06 · Transparencia y calidad" title="Reglas y criterios de" highlight="evaluación" lead="Un marco claro para asegurar una competencia justa, rigurosa y enfocada en el impacto." />
        <div className="rules-tabs" role="tablist" aria-label="Reglas y criterios">
          <button type="button" role="tab" aria-selected={showingRules} className={showingRules ? 'is-active' : ''} onClick={() => setTab('rules')}>Reglas de desarrollo</button>
          <button type="button" role="tab" aria-selected={!showingRules} className={!showingRules ? 'is-active' : ''} onClick={() => setTab('criteria')}>Criterios de evaluación</button>
        </div>
        {showingRules ? (
          <div className="rules-grid">
            {rules.map((rule, index) => (
              <article className="rule-card" key={rule.title}>
                <div className="rule-icon"><Icon name={rule.icon} size={23} /></div>
                <span className="rule-no">0{index + 1}</span>
                <h3>{rule.title}</h3>
                <p>{rule.text}</p>
              </article>
            ))}
            <aside className="integrity-note"><Icon name="shield" size={28} /><p>La integridad técnica y la trazabilidad del trabajo colaborativo son parte esencial de la experiencia HackFlow.</p></aside>
          </div>
        ) : (
          <div className="criteria-grid">
            {criteria.map((criterion) => (
              <article className="criterion-card" key={criterion.title}>
                <div className="criterion-top"><span><Icon name={criterion.icon} size={23} /></span><strong>{criterion.value}%</strong></div>
                <h3>{criterion.title}</h3>
                <p>{criterion.text}</p>
                <div className="criterion-bar"><i style={{ width: `${criterion.value}%` }} /></div>
              </article>
            ))}
            <aside className="evaluation-note"><Icon name="mic" size={23} /><p>Un MVP bien enfocado, explicado con claridad y defendido con criterio puede marcar la diferencia.</p></aside>
          </div>
        )}
      </div>
    </section>
  )
}

function Footer({ onRegister }) {
  const legalLinks = [
    { label: 'Términos y condiciones', href: '/legal.html#terminos' },
    { label: 'Política de privacidad', href: '/legal.html#privacidad' },
    { label: 'Código de conducta', href: '/legal.html#conducta' },
  ]
  return (
    <footer className="footer">
      <div className="footer-flow" aria-hidden="true"><span /><span /><span /></div>
      <div className="container footer-main">
        <div className="footer-brand">
          <BrandLogo tone="white" size={238} />
          <p>Ideas que fluyen.<br /><span>Soluciones que transforman.</span></p>
          <button type="button" className="button button--primary" onClick={onRegister}>Inscríbete <Icon name="arrow" size={18} /></button>
        </div>
        <div className="footer-links">
          <p className="footer-label">Secciones</p>
          <div className="footer-links__columns">
            <ul>{navLinks.slice(0, 3).map((link) => <li key={link.href}><a href={link.href}>{link.label}<Icon name="arrow" size={14} /></a></li>)}</ul>
            <ul>{navLinks.slice(3).map((link) => <li key={link.href}><a href={link.href}>{link.label}<Icon name="arrow" size={14} /></a></li>)}{legalLinks.map((link) => <li key={link.href}><a href={link.href} target="_blank" rel="noreferrer">{link.label}<Icon name="arrow" size={14} /></a></li>)}</ul>
          </div>
        </div>
        <div className="footer-event">
          <p className="footer-label">HackFlow 2026</p>
          <p><Icon name="calendar" size={17} /> 22 — 24 octubre</p>
          <p><Icon name="pin" size={17} /> Modalidad presencial</p>
          <p><Icon name="users" size={17} /> Equipos de 4 personas</p>
          <a href="https://www.hackflow.dev" target="_blank" rel="noreferrer">hackflow.dev <Icon name="arrow" size={15} /></a>
        </div>
      </div>
      <div className="container footer-bottom"><p>© 2026 HackFlow Hackathon. Todos los derechos reservados.</p><span>FLUJO · CONEXIÓN · TRANSFORMACIÓN</span></div>
    </footer>
  )
}

function RegistrationModal({ onClose }) {
  const openExternal = (url) => {
    const tab = window.open(url, '_blank')
    if (tab) tab.opener = null
  }
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="registration-modal" role="dialog" aria-modal="true" aria-labelledby="registration-title">
        <button className="modal-close" type="button" aria-label="Cerrar" onClick={onClose}><Icon name="close" size={20} /></button>
        <div className="modal-symbol"><Icon name="book" size={30} /></div>
        <p className="eyebrow">Antes de continuar</p>
        <h2 id="registration-title">¿Ya leíste los términos y condiciones?</h2>
        <p>Queremos que cada persona participante conozca las reglas que guían la experiencia HackFlow.</p>
        <div className="modal-actions">
          <button type="button" className="button button--primary" onClick={() => { onClose(); openExternal(FORM_URL) }}>Sí, continuar <Icon name="arrow" size={18} /></button>
          <button type="button" className="button button--outline" onClick={() => { onClose(); openExternal(LEGAL_URL) }}>No, quiero leerlos</button>
        </div>
      </section>
    </div>
  )
}

export default function App() {
  const [registrationOpen, setRegistrationOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === 'Escape') setRegistrationOpen(false) }
    window.addEventListener('keydown', onKeyDown)
    if (registrationOpen) document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.style.overflow = '' }
  }, [registrationOpen])

  const openRegistration = () => setRegistrationOpen(true)
  return (
    <>
      <Header onRegister={openRegistration} />
      <main>
        <Hero onRegister={openRegistration} />
        <EventIntro />
        <Committee />
        <Roles />
        <Themes />
        <Schedule />
        <Rules />
      </main>
      <Footer onRegister={openRegistration} />
      {registrationOpen && <RegistrationModal onClose={() => setRegistrationOpen(false)} />}
    </>
  )
}
