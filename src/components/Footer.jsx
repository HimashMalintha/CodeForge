const Footer = () => (
  <footer
    style={{
      backgroundColor: '#873BFF',
      color: 'white',
      padding: '1.5rem 2rem',
      fontFamily: 'Inter, sans-serif',
    }}
  >
    {/* Top Row */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.75rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <span>
        Feel free to Contact Me{' '}
        <a
          href="mailto:hello@andrewwills.me"
          style={{ color: 'white', textDecoration: 'underline' }}
        >
          hello@andrewwills.me
        </a>
      </span>
      <span>Colombo, Sri Lanka - 2025</span>
    </div>

    {/* Center Name */}
    <h1
      style={{
        textAlign: 'center',
        fontSize: '4.5rem',
        fontWeight: 'bold',
        margin: '2rem 0',
        lineHeight: '1',
      }}
    >
      andrew wills
    </h1>

    {/* Bottom Row */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.75rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <span>
        © 2025 Modern portfolio design by{' '}
        <a
          href="#"
          style={{ color: 'white', textDecoration: 'underline' }}
        >
          CodeForge
        </a>
      </span>
      <a
        href="#"
        style={{ color: 'white', textDecoration: 'none' }}
      >
        Privacy Policy
      </a>
    </div>
  </footer>
);

export default Footer;
