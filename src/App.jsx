const asset = (name) => `/assets/${name}`;

const whatsappMessage =
  'Olá, vim do Google e quero saber mais sobre os procedimentos na Nabeauty!';
const whatsappUrl = `https://api.whatsapp.com/send?phone=5563981161643&text=${encodeURIComponent(
  whatsappMessage,
)}`;

const mapsUrl = 'https://share.google/Nk3rk5ag7DfiyCXNV';
const instagramUrl = 'https://www.instagram.com/nabeauty.palmas/';

const procedures = [
  {
    title: 'Flow Lash Lifting',
    image: 'flow-lash-lifting.jpg',
    description:
      'Curvatura e alinhamento dos cílios, trabalhando somente com os próprios fios da cliente, sem a necessidade de extensões.',
  },
  {
    title: 'Flow Brows',
    image: 'flow-brows.jpg',
    description:
      'Nanopigmentação ultra-realista. Fios extremamente finos, desenhados estrategicamente para acompanhar direção e movimento natural das sobrancelhas.',
  },
  {
    title: 'Flow Lips',
    image: 'flow-lips.jpeg',
    description:
      'Nanopigmentação labial com efeito natural, proporcionando um efeito de cor saudável e uniforme.',
  },
];

const services = [
  'Flow Sensory',
  'Flow Design',
  'Coloração de Sobrancelhas',
  'Flow Up',
  'Flow Lash Lifting',
  'Dermaplaning',
  'Derma Brows',
  'Flow Brows',
  'Pump Lips',
  'Flow Lips',
  'Shine Face',
  'Glass Skin',
  'Flow Peel',
  'Flow Removal',
  'Epilação Facial e Buço',
  'Flow Teen',
];

const ambienceImages = [
  'ambiente-01.jpg',
  'ambiente-02.jpg',
  'ambiente-03.jpg',
  'ambiente-04.jpg',
];

const resultImages = [
  'resultado-01.jpg',
  'resultado-02.jpg',
  'resultado-03.jpg',
  'resultado-04.jpg',
  'resultado-05.jpg',
  'resultado-06.jpg',
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16 3.2A12.7 12.7 0 0 0 5 22.25L3.3 28.8l6.7-1.57A12.72 12.72 0 1 0 16 3.2Zm0 22.85c-2.03 0-3.91-.6-5.5-1.65l-.39-.25-3.96.93 1-3.84-.26-.4a10.14 10.14 0 1 1 9.1 5.21Zm5.56-7.58c-.3-.15-1.8-.9-2.08-1-.28-.1-.49-.15-.7.15-.2.3-.8 1-.98 1.2-.18.2-.36.23-.67.08-.3-.15-1.28-.47-2.45-1.5-.9-.8-1.52-1.8-1.7-2.1-.18-.3-.02-.47.14-.62.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.54-.08-.15-.7-1.68-.95-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.53.08-.8.38-.28.3-1.06 1.04-1.06 2.53s1.08 2.93 1.23 3.13c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.8-.74 2.05-1.45.25-.72.25-1.33.18-1.45-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2.3a7.1 7.1 0 0 0-7.1 7.1c0 5.1 7.1 12.3 7.1 12.3s7.1-7.2 7.1-12.3A7.1 7.1 0 0 0 12 2.3Zm0 9.8a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.7 2.2h8.6a5.5 5.5 0 0 1 5.5 5.5v8.6a5.5 5.5 0 0 1-5.5 5.5H7.7a5.5 5.5 0 0 1-5.5-5.5V7.7a5.5 5.5 0 0 1 5.5-5.5Zm8.6 17.6a3.5 3.5 0 0 0 3.5-3.5V7.7a3.5 3.5 0 0 0-3.5-3.5H7.7a3.5 3.5 0 0 0-3.5 3.5v8.6a3.5 3.5 0 0 0 3.5 3.5h8.6ZM12 7.1A4.9 4.9 0 1 1 12 17a4.9 4.9 0 0 1 0-9.9Zm0 7.8a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.8Zm5.1-8.3a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
    </svg>
  );
}

function WhatsAppButton({ className = '' }) {
  return (
    <a
      className={`whatsapp-button ${className}`}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
    >
      <WhatsAppIcon />
      <span>Agendar Avaliação</span>
    </a>
  );
}

function App() {
  return (
    <main>
      <section className="hero">
        <video
          className="hero-video"
          src={asset('hero-bg.mp4')}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="hero-overlay" />
        <div className="hero-glow one" />
        <div className="hero-glow two" />

        <div className="hero-content section-shell">
          <div className="eyebrow">Nabeauty Palmas</div>
          <h1>
            Viva um momento só seu, cuidando da sua beleza com técnicas
            exclusivas criadas pela{' '}
            <span className="headline-highlight">Natalia Beauty</span>!
          </h1>
          <p>
            Transformamos cada visita em uma experiência memorável com beleza e
            bem-estar autênticos.
          </p>

          <div className="hero-actions">
            <WhatsAppButton />
            <a
              className="location-card"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir localização da Nabeauty Palmas no Google Maps"
            >
              <img src={asset('fachada.png')} alt="Fachada da Nabeauty Palmas" />
              <span>
                <strong>
                  Conheça nossa unidade em Palmas
                  <PinIcon />
                </strong>
                <small>Toque para ver a localização</small>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="section-shell procedures-section">
        <div className="section-heading">
          <span>Procedimentos</span>
          <h2>Conheça alguns procedimentos da Nabeauty</h2>
        </div>

        <div className="procedure-grid">
          {procedures.map((procedure) => (
            <article className="procedure-card" key={procedure.title}>
              <img src={asset(procedure.image)} alt={procedure.title} />
              <div>
                <h3>{procedure.title}</h3>
                <p>{procedure.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell service-section">
        <div className="service-showcase">
          <div className="section-heading">
            <h2>Uma vitrine completa para realçar sua naturalidade</h2>
          </div>
          <div className="service-tags">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell ambience-section">
        <div className="section-heading">
          <span>Acolhimento</span>
          <h2>Ambiente pensado para o seu bem-estar</h2>
        </div>
        <div className="ambience-grid">
          {ambienceImages.map((image, index) => (
            <img
              key={image}
              className={`ambience-${index + 1}`}
              src={asset(image)}
              alt={`Ambiente Nabeauty Palmas ${index + 1}`}
            />
          ))}
        </div>
        <WhatsAppButton className="centered-button" />
      </section>

      <section className="experience-section">
        <div className="section-shell">
          <div className="section-heading">
            <span>Experiências</span>
          <h2>Quer ver de pertinho algumas experiências aqui na Nabeauty?</h2>
          </div>

          <div className="video-grid">
            <video src={asset('experiencia-01.mp4')} autoPlay muted loop playsInline />
            <video src={asset('experiencia-02.mp4')} autoPlay muted loop playsInline />
          </div>

          <div className="section-heading results-heading">
            <span>Resultados</span>
            <h2>Mais que resultados reais, naturalidade em cada detalhe</h2>
          </div>

          <div className="results-collage">
            {resultImages.map((image, index) => (
              <img
                key={image}
                className={`result result-${index + 1}`}
                src={asset(image)}
                alt={`Resultado Nabeauty Palmas ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell location-section">
        <div className="section-heading">
          <span>Localização</span>
          <h2>Estamos te esperando em Palmas</h2>
        </div>
        <div className="map-frame">
          <iframe
            title="Mapa Nabeauty Palmas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.7075360032677!2d-48.3420187!3d-10.2043888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933b3599fe35d2d1%3A0xf6eb2ecca23d2b9!2sNabeauty%20-%20Palmas%20-%20Sobrancelhas%2C%20L%C3%A1bios%20e%20Pele!5e0!3m2!1spt-BR!2sbr!4v1782249542653!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>

      <footer className="footer">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir Instagram da Nabeauty Palmas"
        >
          <InstagramIcon />
        </a>
        <p>Copyright © 2025 Nabeauty Palmas | Todos os Direitos Reservados.</p>
      </footer>
    </main>
  );
}

export default App;
