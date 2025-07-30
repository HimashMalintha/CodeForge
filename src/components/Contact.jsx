const Contact = () => (
  <section
    style={{
      backgroundColor: '#F5F1FF',
      padding: '3rem 2rem',
      fontFamily: 'Inter, sans-serif',
    }}
  >
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}
    >
      {/* Left content */}
      <div>
        <h2
          style={{
            color: '#873BFF',
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
          }}
        >
          Contact Me
        </h2>
        <p
          style={{
            color: '#5D5D5D',
            fontSize: '0.9rem',
            margin: 0,
          }}
        >
          Get in touch with me for any enquiries and questions
        </p>
      </div>

      {/* Email button */}
      <a
        href="mailto:hello@andrewwills.me"
        style={{
          backgroundColor: '#7A20FF',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '9999px',
          textDecoration: 'none',
          fontSize: '0.95rem',
          fontWeight: '500',
        }}
      >
        hello@andrewwills.me
      </a>
    </div>
  </section>
);

export default Contact;
