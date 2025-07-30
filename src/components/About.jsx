import React from 'react';

const About = () => (
  <section
    style={{
      padding: '4rem 2rem',
      backgroundColor: '#F5F0FF',
      fontFamily: 'Inter, sans-serif',
    }}
  >
    <div
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
      }}
    >
      {/* Left Column */}
      <div style={{ flex: '0 0 340px' }}>
        <h2
          style={{
            color: '#7A00F7',
            fontSize: '1.85rem',
            fontWeight: 700,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            lineHeight: '2rem',
          }}
        >
          <span style={{ fontSize: '1.4rem' }}>✨</span> Why Hire me?
        </h2>

        <img
          src="/assets/developer-photo.png"
          alt="Developer"
          style={{
            width: '100%',
            height: '400px', // 🔽 Smaller height
            objectFit: 'cover',
            borderRadius: '1rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        />
      </div>

      {/* Right Column */}
      <div style={{ flex: '1 1 500px', maxWidth: '500px' }}>
        {/* Slight vertical spacing above paragraph */}
        <div style={{ marginTop: '1.5rem' }}>
          <p
            style={{
              fontSize: '0.95rem',
              color: '#333',
              lineHeight: '1.5rem',
              marginBottom: '1.4rem',
            }}
          >
            MERN stack developer. Pixel-perfect thinker. I turn coffee into code and ideas into sleek, functional web apps.
            Based in Sri Lanka — building fast, learning faster.
          </p>
        </div>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            marginBottom: '2rem',
            fontSize: '0.9rem',
            color: '#222',
            lineHeight: '1.7rem',
          }}
        >
          {[ 
            'Web Dev for 5+ Years',
            'Problem Solver',
            'MERN Stack Specialist',
            'UI/UX Focused Development',
            "Team Player with a Builder's Mindset",
            'Bug Hunter by Nature',
            'API Integration Ninja',
            'Security-Conscious Developer',
          ].map((item, idx) => (
            <li
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span style={{ color: '#7A00F7', fontWeight: 600 }}>↳</span> {item}
            </li>
          ))}
        </ul>

        <a
          href="mailto:hello@andrewwills.me"
          style={{
            display: 'inline-block',
            padding: '0.45rem 1.3rem',
            borderRadius: '999px',
            border: '2px solid #7A00F7',
            color: '#7A00F7',
            backgroundColor: '#fff',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 600,
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#7A00F7';
            e.target.style.color = '#fff';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#fff';
            e.target.style.color = '#7A00F7';
          }}
        >
          Hit Me Up <span style={{ marginLeft: '0.4rem' }}>➜</span>
        </a>
      </div>
    </div>
  </section>
);

export default About;
