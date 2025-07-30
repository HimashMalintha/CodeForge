import React from "react";

const Projects = () => (
  <section style={{ padding: '4rem 2rem', backgroundColor: '#F4F0FF' }}>
    <h2
      style={{
        textAlign: 'center',
        color: '#873BFF',
        fontSize: '42px',
        fontWeight: 600,
        fontFamily: "Inter, sans-serif",
        lineHeight: '46.2px',
        letterSpacing: '-0.5%',
        marginBottom: '3rem',
      }}
    >
      Project Highlights
    </h2>

    <div
      style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '2rem',
        padding: '0 2rem 1rem 4rem',
      }}
    >
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          style={{
            flex: '0 0 auto',
            width: '350px',
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h3
              style={{
                color: '#5D5D5D',
                fontSize: '1.5rem',
                fontWeight: '600',
                fontFamily: 'Inter,sans-serif',
              }}
            >
              Task Manager Web App
            </h3>
            <p
              style={{
                color: '#5D5D5D',
                margin: '1rem 0',
                fontFamily: 'Inter,sans-serif',
                fontSize: '0.95rem',
                textAlign: 'justify',
              }}
            >
              Built a task manager app allowing users to create, edit, delete, and categorize tasks
              with a drag-and-drop interface. Implemented user authentication and local storage.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={badgeStyle}>React.js</span>
              <span style={badgeStyle}>Node.js</span>
              <span style={badgeStyle}>Express.js</span>
              <span style={badgeStyle}>MongoDB</span>
            </div>
          </div>

          <img
            src="/assets/project-screenshot.png"
            alt="Task Manager Screenshot"
            style={{
              marginTop: '1.5rem',
              width: '100%',
              height: 'auto',
              borderRadius: '0.75rem',
            }}
          />
        </div>
      ))}
    </div>

    {/* Buttons aligned to the right */}
    <div style={{
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '2rem',
      paddingRight: '4rem',
      gap: '1rem',
    }}>
      <button style={navBtnStyleOutlined}>←</button>
      <button style={navBtnStyleFilled}>→</button>
    </div>
  </section>
);

const badgeStyle = {
  backgroundColor: '#A173FF',
  color: 'white',
  padding: '0.25rem 0.75rem',
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  fontFamily: 'Inter,sans-serif',
};

// Button Styles
const navBtnStyleFilled = {
  backgroundColor: '#873BFF',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  fontSize: '1.25rem',
  cursor: 'pointer',
};

const navBtnStyleOutlined = {
  backgroundColor: 'transparent',
  border: '2px solid #873BFF',
  color: '#873BFF',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  fontSize: '1.25rem',
  cursor: 'pointer',
};

export default Projects;
