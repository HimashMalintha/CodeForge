import React from 'react';

const Skills = () => {
  const skillList = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Vue.js',
    'Tailwind CSS', 'SASS/SCSS', 'jQuery', 'Node.js', 'Express.js', 'PHP',
    'Python', 'Ruby on Rails', 'SQL', 'Firebase', 'Docker',
  ];

  return (
    <section
      style={{
        padding: '5rem 2rem',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Inter, sans-serif',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <h2
        style={{
          color: '#7A00F7',
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '2.5rem',
        }}
      >
        My Skills
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem 1.25rem', // More horizontal and vertical gap
        }}
      >
        {skillList.map((skill, index) => (
          <span
            key={index}
            style={{
              padding: '0.6rem 1.4rem', // Larger padding for each badge
              backgroundColor: '#F0E8FF',
              borderRadius: '10px',
              fontSize: '1rem',
              color: '#333',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
