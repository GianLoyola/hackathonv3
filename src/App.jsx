import { useEffect, useState } from 'react'
import universidadCampusImg from './img/Universidad politécnica Campus.png'
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
import mentoresImg from './img/mentores.png'
import participantesImg from './img/participantes.png'

const FORM_URL = 'https://forms.gle/yMK3W1WfEqrdeSLv8'
const LEGAL_URL = '/legal.html#terminos'

const socialLinks = [
  { label: '@hackflow_', shortLabel: 'Instagram', href: 'https://www.instagram.com/hackflow_/', icon: 'bi-instagram', external: true },
  { label: 'Hackflow', shortLabel: 'Facebook', href: 'https://web.facebook.com/people/Hackflow/61593293588545/', icon: 'bi-facebook', external: true },
  { label: 'giandev312@gmail.com', shortLabel: 'Correo', href: 'mailto:giandev312@gmail.com', icon: 'bi-envelope-fill', external: false },
]

const navLinks = [
  { label: 'El evento', href: '#evento' },
  { label: 'Organización', href: '#comite' },
  { label: 'Participantes', href: '#participantes' },
  { label: 'Temáticas', href: '#tematicas' },
  { label: 'Cronograma', href: '#cronograma' },
  { label: 'Reglas', href: '#reglas' },
]

const timelineDays = [
  {
    label: 'Día 1',
    date: '19 de noviembre',
    shortDate: '19 NOV',
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
    date: '20 de noviembre',
    shortDate: '20 NOV',
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
    date: '21 de noviembre',
    shortDate: '21 NOV',
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
    accent: '#42c7ff',
    secondary: '#3977ff',
    glow: 'rgba(55, 157, 255, .28)',
  },
  {
    firstName: 'Armando',
    lastName: 'Campos',
    role: 'Tech Lead',
    facts: ['Desarrollador Fullstack Senior', 'Arquitecto de Infraestructura', 'Cloud · Oracle'],
    quoteBefore: 'La tecnología cobra valor cuando se convierte en ',
    quoteAccent: 'soluciones que abren camino.',
    image: armandoImg,
    accent: '#c15cff',
    secondary: '#7847ff',
    glow: 'rgba(168, 76, 255, .3)',
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

const participantTypes = {
  participants: {
    label: 'Participantes',
    age: '15 a 25 años',
    image: participantesImg,
    icon: 'users',
    lead: 'Construyen el proyecto y toman todas las decisiones finales de su solución.',
    details: [
      'La inscripción se realiza de manera individual mediante el formulario oficial.',
      'La organización asignará a cada persona a un equipo con perfiles complementarios.',
      'Cada equipo tendrá un mínimo de 3 y un máximo de 4 participantes.',
      'El equipo mantiene la autonomía completa sobre el rumbo y las decisiones de su proyecto.',
    ],
  },
  mentors: {
    label: 'Mentores',
    age: '20 a 29 años',
    image: mentoresImg,
    icon: 'spark',
    lead: 'Acompañan, hacen preguntas y orientan al equipo durante el proceso.',
    details: [
      'También completan el formulario y son asignados por la organización.',
      'Cada equipo podrá contar con un máximo de 2 mentores.',
      'Su función es exclusivamente de orientación técnica, estratégica o metodológica.',
      'No participan en las decisiones finales ni deciden por las y los participantes.',
    ],
  },
}

const rules = [
  { icon: 'code', title: 'Código durante la hackathon', text: 'El código deberá desarrollarse durante el evento. Los commits podrán ser revisados.' },
  { icon: 'calendar', title: 'Asistencia obligatoria', text: 'Las y los participantes deberán asistir a las tres jornadas para recibir su certificado.' },
  { icon: 'users', title: 'Equipos de 3 o 4 integrantes', text: 'Cada equipo tendrá hasta 4 participantes y podrá competir con un mínimo de 3. Los mentores no forman parte de este límite.' },
  { icon: 'clipboard', title: 'Inscripción individual', text: 'Las personas se inscriben sin equipo. La organización conformará todos los equipos.' },
  { icon: 'mentor', title: 'Hasta 2 mentores', text: 'Cada equipo podrá tener hasta 2 mentores. Su función es orientar; no podrán tomar decisiones críticas sobre el proyecto.' },
  { icon: 'laptop', title: 'Tecnologías e IA', text: 'El uso de tecnologías e inteligencia artificial está permitido. No será obligatorio declarar su uso.' },
  { icon: 'bulb', title: 'Originalidad', text: 'No podrá presentarse el mismo tipo de proyecto que otro equipo, aunque se utilicen tecnologías o funcionalidades diferentes.' },
  { icon: 'shield', title: 'Propiedad intelectual', text: 'Los proyectos serán de acceso abierto y gratuito, salvo que el equipo decida establecer una condición diferente.' },
]

const disqualifications = [
  { icon: 'file', title: 'Plagio o apropiación', text: 'Copiar, robar o presentar como propio el proyecto, código, diseño o idea desarrollada por otro equipo.' },
  { icon: 'laptop', title: 'Interferencia malintencionada', text: 'Bloquear, sabotear, acceder sin permiso o perjudicar el trabajo de otro equipo.' },
  { icon: 'id', title: 'Información falsa', text: 'Suplantar identidades o proporcionar datos falsos durante la inscripción, participación o evaluación.' },
  { icon: 'cube', title: 'Proyecto previo', text: 'Presentar como nuevo un producto terminado antes de la hackathon o incumplir la regla de desarrollo durante el evento.' },
  { icon: 'users', title: 'Conducta grave', text: 'Realizar actos de acoso, discriminación, amenazas, agresiones o faltas graves contra otras personas.' },
  { icon: 'alert', title: 'Incumplimiento', text: 'Desobedecer reiteradamente las indicaciones de seguridad, organización o entrega del proyecto.' },
]

const coexistenceRules = [
  { icon: 'users', title: 'Trato respetuoso', text: 'Escuchar y comunicarse con respeto, incluso cuando existan diferencias.' },
  { icon: 'heart', title: 'Espacio inclusivo', text: 'No se permitirán burlas, discriminación, hostigamiento ni lenguaje ofensivo.' },
  { icon: 'handshake', title: 'Trabajo colaborativo', text: 'Respetar los aportes, responsabilidades y decisiones acordadas dentro del equipo.' },
  { icon: 'leaf', title: 'Cuidado del espacio', text: 'Utilizar responsablemente las instalaciones, equipos y recursos de la sede.' },
  { icon: 'message', title: 'Comunicación responsable', text: 'Informar al comité organizador cualquier incidente o situación que afecte la convivencia.' },
]

const criteria = [
  { icon: 'target', title: 'Impacto y viabilidad', value: 20, text: 'Se evaluará la relevancia del problema, la utilidad de la solución y su viabilidad de implementación.' },
  { icon: 'code', title: 'Funcionalidad e implementación', value: 20, text: 'Se evaluará el funcionamiento del MVP, la calidad de la ejecución y la integración de sus componentes.' },
  { icon: 'bulb', title: 'Innovación', value: 15, text: 'Se valorará la originalidad de la propuesta y su capacidad para diferenciarse de soluciones existentes.' },
  { icon: 'layout', title: 'Diseño y experiencia de usuario', value: 15, text: 'Se evaluarán la claridad, usabilidad, accesibilidad y coherencia de la experiencia.' },
  { icon: 'mic', title: 'Presentación y defensa técnica', value: 30, text: 'Se evaluará la claridad del pitch, la demostración del producto y la capacidad del equipo para sustentar sus decisiones.' },
]

const deliverables = [
  { icon: 'rocket', title: 'MVP funcional', text: 'Presentación de un Producto Mínimo Viable que permita comprender y comprobar la solución propuesta.' },
  { icon: 'code', title: 'Enlace del repositorio', text: 'Compartir el enlace del repositorio para que el jurado pueda revisar y probar el proyecto.' },
  { icon: 'file', title: 'Documentación breve', text: 'Incluir una explicación concisa del problema, la solución, el funcionamiento y la estructura del proyecto.' },
  { icon: 'demo', title: 'Demostración del producto', text: 'Realizar una demostración clara de las principales funcionalidades desarrolladas.' },
  { icon: 'tools', title: 'Tecnologías y herramientas', text: 'Indicar los lenguajes, frameworks, servicios, plataformas y demás herramientas utilizadas.' },
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
    clipboard: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V2h6v2M8 9h8M8 13h8M8 17h5" /></>,
    mentor: <><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a6 6 0 0 1 12 0v2M18 8v6M15 11h6" /></>,
    laptop: <><rect x="4" y="4" width="16" height="12" rx="2" /><path d="M2 20h20M9 20v-1h6v1" /></>,
    bulb: <><path d="M9 18h6M10 22h4M8.5 14.5A7 7 0 1 1 15.5 14.5c-.9.7-1.5 1.6-1.5 2.5h-4c0-.9-.6-1.8-1.5-2.5Z" /></>,
    file: <><path d="M6 2h8l4 4v16H6z" /><path d="M14 2v5h5M9 12h6M9 16h6" /></>,
    id: <><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8" cy="11" r="2" /><path d="M5.5 16c.7-2.2 4.3-2.2 5 0M14 10h4M14 14h4" /></>,
    cube: <><path d="m12 2 8 4.5v10L12 22l-8-5.5v-10L12 2Z" /><path d="m4 6.5 8 5 8-5M12 11.5V22" /></>,
    alert: <><path d="M12 3 2.5 20h19L12 3Z" /><path d="M12 9v5M12 17h.01" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />,
    handshake: <><path d="m8 12 3 3a2 2 0 0 0 3 0l5-5" /><path d="m2 9 4-4 4 2 2-1 4 1 6 5-4 4M6 13l3 3M9 16l2 2" /></>,
    leaf: <><path d="M20 4C10 4 5 9 5 16c7 0 12-5 15-12Z" /><path d="M4 21c2-6 6-9 12-12" /></>,
    message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />,
    rocket: <><path d="M4.5 16.5 3 21l4.5-1.5M9 15l-4-4 4-4c3.5-3.5 7-4 12-4 0 5-.5 8.5-4 12l-4 4-4-4Z" /><circle cx="15" cy="9" r="2" /></>,
    demo: <><rect x="3" y="3" width="18" height="14" rx="2" /><path d="m10 8 5 3-5 3V8ZM8 21h8M12 17v4" /></>,
    tools: <><path d="m14 6 4-4 4 4-4 4M11 9l-7 7-2 6 6-2 7-7" /><path d="m14 14 6 6" /></>,
    trophy: <><path d="M8 4h8v5a4 4 0 0 1-8 0V4ZM9 20h6M12 13v7" /><path d="M8 6H4v2a4 4 0 0 0 4 4M16 6h4v2a4 4 0 0 1-4 4" /></>,
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

function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`} aria-label="Redes sociales y contacto">
      {socialLinks.map((social) => (
        <a
          href={social.href}
          key={social.href}
          aria-label={`${social.shortLabel}: ${social.label}`}
          target={social.external ? '_blank' : undefined}
          rel={social.external ? 'noreferrer' : undefined}
        >
          <i className={`bi ${social.icon}`} aria-hidden="true" />
          <span>{social.label}</span>
        </a>
      ))}
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
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=14&color=0b1023&bgcolor=ffffff&data=${encodeURIComponent(FORM_URL)}`
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
        <div className="hero-layout">
          <div className="hero-message">
            <p className="hero-kicker">HackFlow Hackathon 2026</p>
            <h1>Ideas que fluyen.<br /><span>Soluciones que <br />transforman.</span></h1>
            <p className="hero-copy">Tres jornadas presenciales para transformar retos reales en propuestas de impacto, conectar talentos diversos y crear soluciones tecnológicas con propósito colectivo.</p>
            <div className="hero-date-block">
              <div className="hero-rule" aria-hidden="true"><span /></div>
              <p className="hero-date"><Icon name="calendar" size={17} /> 19 al 21 de noviembre de 2026</p>
            </div>
            <div className="hero-actions">
              <button className="button button--primary" type="button" onClick={onRegister}>Quiero participar <Icon name="arrow" size={18} /></button>
              <a className="button button--ghost" href="#cronograma">Ver cronograma <Icon name="chevron" size={18} /></a>
            </div>
          </div>
          <div className="hero-register-column">
            <a className="hero-qr" href={FORM_URL} target="_blank" rel="noreferrer" aria-label="Abrir el formulario de inscripción">
              <span className="hero-qr__status"><i /> Inscripciones abiertas</span>
              <div className="hero-qr__image"><img src={qrUrl} alt="Código QR para abrir el formulario de inscripción" /></div>
              <strong>Escanea y únete ahora</strong>
              <small>La participación es gratuita</small>
              <span className="hero-qr__link">Abrir formulario <Icon name="arrow" size={15} /></span>
            </a>
            <p className="hero-socials-label">Conecta con HackFlow</p>
            <SocialLinks className="hero-socials" />
          </div>
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
            lead="HackFlow Hackathon 2026 reúne a jóvenes de 15 a 29 años que quieren construir, aprender y colaborar alrededor de retos que importan."
          />
          <p className="event-description">Tres jornadas gratuitas en la Universidad Politécnica del Perú para crear MVPs funcionales, compartir conocimiento y transformar buenas ideas en soluciones con propósito.</p>
          <div className="event-meta" aria-label="Detalles del evento">
            <div className="event-meta__venue"><Icon name="pin" /><span><strong>Universidad Politécnica del Perú</strong>Jr. Pedro Ruiz Gallo 251, Pueblo Libre</span></div>
            <div><Icon name="clock" /><span><strong>Horario</strong>4:00 p. m. a 10:00 p. m.</span></div>
            <div><Icon name="users" /><span><strong>Edades</strong>15 a 29 años</span></div>
            <div><Icon name="spark" /><span><strong>Participación</strong>Gratuita</span></div>
          </div>
        </div>
        <div className="event-visual event-visual--photo">
          <img src={universidadCampusImg} alt="Campus de la Universidad Politécnica del Perú, sede de HackFlow 2026" />
          <div className="event-photo-caption">
            <span><Icon name="pin" size={20} /></span>
            <div><strong>Sede oficial</strong><small>Universidad Politécnica del Perú</small></div>
          </div>
          <div className="event-photo-signal" aria-hidden="true"><i /><i /><i /><span /></div>
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
        <SectionHeading eyebrow="03 · Roles de la hackathon" title="Cuatro perfiles," highlight="una misma dirección." lead="Cada equipo reúne entre 3 y 4 participantes con habilidades complementarias." />
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

function ParticipantTypes() {
  const [selected, setSelected] = useState(null)
  const active = selected ? participantTypes[selected] : null
  return (
    <section id="participantes" className={`participant-types section-space ${selected ? 'has-selection' : ''}`}>
      <div className="container">
        <SectionHeading eyebrow="04 · Tipo de participantes" title="Elige cómo quieres" highlight="ser parte." lead="Dos formas de vivir HackFlow, con responsabilidades distintas y un mismo propósito: ayudar a que las ideas avancen." />
        <div className="participant-experience">
          <div className="participant-choice" aria-label="Tipos de participación">
            {Object.entries(participantTypes).map(([key, type]) => {
              if (selected && selected !== key) return null
              return (
                <button
                  className={`participant-card participant-card--${key} ${selected === key ? 'is-selected' : ''}`}
                  type="button"
                  key={key}
                  aria-pressed={selected === key}
                  onClick={() => setSelected(key)}
                >
                  <img src={type.image} alt="" />
                  <span className="participant-card__shade" />
                  <span className="participant-card__content">
                    <span className="participant-card__age">{type.age}</span>
                    <strong>{type.label}</strong>
                    <span className="participant-card__action">Conocer el sistema <Icon name="arrow" size={17} /></span>
                  </span>
                </button>
              )
            })}
          </div>
          {active && (
            <article className="participant-detail" key={selected} aria-live="polite">
              <div className="participant-detail__head">
                <span><Icon name={active.icon} size={24} /></span>
                <button type="button" onClick={() => setSelected(null)}>Ver ambas opciones <Icon name="close" size={15} /></button>
              </div>
              <p className="eyebrow">Sistema de {active.label.toLowerCase()}</p>
              <h3>{active.label}</h3>
              <p className="participant-detail__lead">{active.lead}</p>
              <ul>{active.details.map((detail) => <li key={detail}><i><Icon name="arrow" size={14} /></i>{detail}</li>)}</ul>
              <button className="button button--primary" type="button" onClick={() => window.open(FORM_URL, '_blank', 'noopener,noreferrer')}>Ir al formulario <Icon name="arrow" size={17} /></button>
            </article>
          )}
        </div>
        {!selected && <p className="participant-hint"><Icon name="arrow" size={15} /> Selecciona una tarjeta para conocer todos los detalles</p>}
      </div>
    </section>
  )
}

function Themes() {
  return (
    <section id="tematicas" className="themes section-space">
      <div className="container">
        <SectionHeading eyebrow="05 · Retos con propósito" title="Temáticas del" highlight="Hackathon" lead="Todos los proyectos deben enmarcarse en una de estas tres temáticas oficiales." />
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
        <SectionHeading eyebrow="06 · Modalidad y cronograma" title="Tres jornadas para" highlight="crear y presentar." lead="Encuéntranos de 4:00 p. m. a 10:00 p. m. en la Universidad Politécnica del Perú." />
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
  return (
    <section id="reglas" className="rules section-space">
      <div className="container">
        <SectionHeading eyebrow="07 · Reglas de participación" title="Reglas claras para" highlight="crear en equipo." lead="Ocho acuerdos esenciales para competir de forma justa y concentrarnos en construir durante las tres jornadas." />
        <div className="rules-grid rules-grid--eight">
          {rules.map((rule, index) => (
            <article className="rule-card" key={rule.title}>
              <div className="rule-card__top"><div className="rule-icon"><Icon name={rule.icon} size={24} /></div><span className="rule-no">{String(index + 1).padStart(2, '0')}</span></div>
              <h3>{rule.title}</h3>
              <p>{rule.text}</p>
            </article>
          ))}
        </div>
        <aside className="free-theme"><Icon name="bulb" size={28} /><strong>Temática libre</strong><span>Cada equipo podrá elegir libremente la temática de su proyecto.</span></aside>
        <div className="legal-shortcuts" aria-label="Documentos legales">
          <p>Documentos legales</p>
          <a href="/legal.html#terminos" target="_blank" rel="noreferrer"><Icon name="file" /> Términos y condiciones</a>
          <a href="/legal.html#privacidad" target="_blank" rel="noreferrer"><Icon name="shield" /> Política de privacidad</a>
          <a href="/legal.html#conducta" target="_blank" rel="noreferrer"><Icon name="users" /> Código de conducta</a>
          <a href="/legal.html#autorizacion" target="_blank" rel="noreferrer"><Icon name="clipboard" /> Autorización para menores</a>
        </div>
      </div>
    </section>
  )
}

function Integrity() {
  return (
    <section id="integridad" className="integrity-section section-space">
      <div className="container">
        <SectionHeading eyebrow="08 · Integridad y convivencia" title="Competimos con talento." highlight="Convivimos con respeto." lead="Cuidar a las personas, el trabajo ajeno y el espacio compartido es una condición esencial de HackFlow." />
        <div className="integrity-block">
          <div className="integrity-title"><span><Icon name="alert" size={25} /></span><div><p>Causales de</p><h3>descalificación</h3></div></div>
          <div className="disqualification-grid">
            {disqualifications.map((item, index) => (
              <article key={item.title}>
                <span className="integrity-number">{String(index + 1).padStart(2, '0')}</span>
                <i><Icon name={item.icon} size={24} /></i>
                <div><h4>{item.title}</h4><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
        <div className="coexistence-block">
          <p className="eyebrow">Respeto y convivencia</p>
          <div className="coexistence-grid">
            {coexistenceRules.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <i><Icon name={item.icon} size={23} /></i>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EvaluationCriteria() {
  return (
    <section id="criterios" className="criteria-section section-space">
      <div className="container">
        <SectionHeading eyebrow="09 · Criterios de evaluación" title="Cada punto suma." highlight="El conjunto gana." lead="El jurado calificará los proyectos sobre un total de 100%, con especial atención a la presentación y la defensa técnica." />
        <div className="criteria-total"><span>Evaluación total</span><strong>100%</strong><i /></div>
        <div className="criteria-grid criteria-grid--five">
          {criteria.map((criterion, index) => (
            <article className="criterion-card" key={criterion.title}>
              <div className="criterion-top"><span><Icon name={criterion.icon} size={25} /></span><small>0{index + 1}</small></div>
              <strong className="criterion-value">{criterion.value}<i>%</i></strong>
              <h3>{criterion.title}</h3>
              <p>{criterion.text}</p>
              <div className="criterion-bar"><i style={{ width: `${criterion.value * 3.2}%` }} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Deliverables() {
  return (
    <section id="entregables" className="deliverables section-space">
      <div className="deliverables-orb" aria-hidden="true" />
      <div className="container">
        <SectionHeading eyebrow="10 · Entrega del proyecto" title="Cinco entregables." highlight="Una solución lista para demostrar." lead="Cada equipo deberá presentar estos elementos para la evaluación final de su proyecto." />
        <div className="deliverable-panel">
          <Circuit className="deliverable-circuit deliverable-circuit--top" />
          <Circuit className="deliverable-circuit deliverable-circuit--bottom" />
          <span className="deliverable-dots deliverable-dots--one" aria-hidden="true" />
          <span className="deliverable-dots deliverable-dots--two" aria-hidden="true" />
          <div className="deliverable-flow">
            {deliverables.map((item, index) => (
              <article className={`deliverable-item deliverable-item--${index % 2 ? 'right' : 'left'}`} key={item.title}>
                <div className="deliverable-copy">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div className="deliverable-node"><Icon name={item.icon} size={25} /></div>
              </article>
            ))}
          </div>
          <aside className="final-delivery"><span><Icon name="trophy" size={30} /></span><div><strong>Entrega final</strong><p>Los cinco elementos deberán estar disponibles durante la presentación y evaluación del proyecto.</p></div></aside>
        </div>
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
          <p><Icon name="calendar" size={17} /> 19 — 21 noviembre</p>
          <p><Icon name="pin" size={17} /> Universidad Politécnica del Perú</p>
          <p><Icon name="users" size={17} /> Equipos de 3 a 4 participantes</p>
          <SocialLinks className="footer-socials" />
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
        <ParticipantTypes />
        <Themes />
        <Schedule />
        <Rules />
        <Integrity />
        <EvaluationCriteria />
        <Deliverables />
      </main>
      <Footer onRegister={openRegistration} />
      {registrationOpen && <RegistrationModal onClose={() => setRegistrationOpen(false)} />}
    </>
  )
}
