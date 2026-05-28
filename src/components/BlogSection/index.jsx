
import './style.css';
import blogImg4 from "../../assets/images/later-release-banner.jpg";
import blogImg1 from "../../assets/images/ollama-banner.jpg";
import blogImg2 from "../../assets/images/release-banner.jpg";
import blogImg3 from "../../assets/images/claude-banner.jpg";
import calendarIcon from "../../assets/icons/calendar-icon.svg"


export default function BlogSection() {
  const posts = [
    {
      img: blogImg1,
      title: "Kali & LLM: Completely local with Ollama & 5ire",
      desc: "We are extending our LLM-driven Kali series, where natural language replaces manual command input. This time however, we are doing everything locally and offline. We are using our own hardware and not relying on any 3rd party services/SaaS.",
      date: "Tuesday, 10 March 2026" 
    },
    {
      img: blogImg2 ,
      title: "Kali Linux 2026.1 Release (2026 Theme & BackTrack Mode)",
      desc: "New year, new release - Kali 2026.1 is here! There is everything from a fresh coat of paint to a nod to our roots, with normal ongoing improvements. Building on from December’s 2025.4, the summary of the changelog:",
      date: "Tuesday, 24 March 2026"
    },
    {
      img: blogImg3,
      title: "Kali & LLM: macOS with Claude Desktop & Anthropic Sonnet LLM",
      desc: "This post will focus on an alternative method of using Kali Linux, moving beyond direct terminal command execution. Instead, we will leverage a Large Language Model (LLM) to translate “natural language” descriptions of desired actions into technical commands.",
      date: "Wednesday, 25 February 2026"
    },
    {
      img:  blogImg4  ,
      title: "Kali Linux 2025.4 Release (Desktop Environments, Wayland & Halloween Mode)",
      desc: "Say hello to Kali Linux 2025.4! Expect updated tools, performance tweaks, and improved support - no fluff, just the essentials.",
      date: "Wednesday, 25 February 2026"
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2 className="blog-subtitle">ACCESS OUR BLOG NOW</h2>
        <h1 className="blog-title">Fresh news for you.</h1>
      </div>

      <div className="blog-grid">
        {posts.map((post, index) => (
          <div key={index} className="card-blog">
            <img className="blog-img" src={post.img} alt=""/>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-desc">{post.desc}</p>
            <div className="date-wrapper">
              <img className="calendar-img" src={calendarIcon} alt="" />
            <p className="blog-date">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}