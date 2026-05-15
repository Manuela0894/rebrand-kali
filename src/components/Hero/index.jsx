const Hero = () => {
  return (
    
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "160px 100px",
        color: "white",
        width: "351"
      }}
    >
      <h1 style={{ 
        fontSize: "64px", 
        marginBottom: "16px",
        color: "#D1E5F9",
        width: "800px",
        lineHeight: 1.3,
        fontWeight:600,

       }}>
       The most advanced Penetration Testing Distribution
      </h1>
      <p style={{ width: "1000px",
        fontWeight: "300px",
        fontSize: "24px",
       }}>
        Kali Linux is an open-source, Debian-based Linux distribution geared  towards various information security tasks, such as Penetration Testing, Security Research, Computer Forensics and Reverse Engineering
      </p>
    </section>
  );
};

export default Hero;