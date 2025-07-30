const Testimonials = () => (
    <section
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#f4f0ff',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          color: '#873BFF',
          fontSize: '2.625rem', // 42px
          fontFamily: 'Inter',
          fontWeight: '600',
          lineHeight: '1.1',
          marginBottom: '2rem',
        }}
      >
        What my clients say
      </h2>
  
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          color: '#4F4F4F',
          fontSize: '1rem',
          fontFamily: 'Inter',
          lineHeight: '1.6',
        }}
      >
        <p>
          &quot;It was a fantastic experience working with Andrew Wills. His
          technical skills and deep understanding of user-centered design made all
          the difference in our project. He consistently went above and beyond to
          deliver clean, intuitive solutions. Highly recommended!&quot;
        </p>
  
        <p
          style={{
            marginTop: '1rem',
            fontWeight: '600',
            color: '#A173FF',
          }}
        >
          — Sarah Mitchell, Senior UX Designer
        </p>
      </div>
    </section>
  );
  
  export default Testimonials;
  