import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <h1 className="main-title">My Learning Journey</h1>
          <p className="subtitle">Building, Breaking, and the Future of AI-Powered Learning</p>
          <div className="intro-box">
            <p className="intro-text">
              <strong>Hi, I'm Humphrey 👋</strong>
            </p>
            <p className="intro-text">
              I'm a CS student who learns best by building real systems. From managing production 
              infrastructure in my home lab to building database systems for real users, I've discovered 
              that the best learning happens when you're solving actual problems.
            </p>
            <p className="intro-text">
              Here's my journey and why I'm excited about OpenSesame's mission.
            </p>
          </div>
          <div className="scroll-indicator">
            <span>Scroll to explore →</span>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="foundation-section">
        <div className="container">
          <div className="card blue-card">
            <h2>🎓 The Foundation</h2>
            <ul>
              <li>Started CS coursework: Data Structures, Architecture, Cryptography</li>
              <li>Realized lectures gave me theory, but I needed context</li>
              <li>Discovered I learn best by building and breaking things</li>
            </ul>
            <div className="insight-box">
              <strong>Key Insight:</strong> "I don't just want to know HOW something works—I want to 
              understand it deeply enough to fix it when it breaks."
            </div>
          </div>
        </div>
      </section>

      {/* Home Lab Section */}
      <section className="homelab-section">
        <div className="container">
          <div className="card green-card">
            <h2>🏗️ Going Beyond the Classroom</h2>
            <h3>My Home Lab</h3>
            <ul>
              <li>Built Proxmox virtualization server for hands-on infrastructure learning</li>
              <li>Deployed MariaDB with Tailscale for secure remote access</li>
              <li>Shared database access with friends (production-grade thinking)</li>
              <li>Solved real problems: disk management, networking, security</li>
            </ul>
          </div>

          <div className="diagram-box">
            <div className="diagram">
              <div className="diagram-node">Proxmox Host</div>
              <div className="diagram-arrow">↓</div>
              <div className="diagram-row">
                <div className="diagram-node">VM: MariaDB</div>
                <div className="diagram-arrow">↔</div>
                <div className="diagram-node">Tailscale Network</div>
                <div className="diagram-arrow">↔</div>
                <div className="diagram-node">Friends' Access</div>
              </div>
              <div className="diagram-arrow">↓</div>
              <div className="diagram-node">Other VMs/Containers</div>
            </div>
          </div>

          <div className="learning-outcomes">
            <div className="outcome-card">🔧 Learned: Networking & security through real constraints</div>
            <div className="outcome-card">💡 Learned: Troubleshooting is a skill built through repetition</div>
            <div className="outcome-card">🎯 Learned: Production-grade thinking—uptime matters</div>
          </div>

          <div className="connection-box orange-box">
            <strong>💭 OpenSesame Connection:</strong>
            <p>
              This experience showed me that the best learning happens when solving REAL problems, 
              not just completing exercises—which is exactly what OpenSesame enables at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Team Projects Section */}
      <section className="projects-section">
        <div className="container">
          <div className="card green-card">
            <h2>👥 Real Projects, Real Teams</h2>
            <h3>Database Semester Project: Movie Theater Chain Management System</h3>
            <ul>
              <li><strong>Role:</strong> Member 3 on 3-person team</li>
              <li><strong>My modules:</strong> Customer & Ticketing systems</li>
              <li><strong>Tech stack:</strong> React, TypeScript, MariaDB</li>
              <li><strong>Responsibilities:</strong> CRUD operations, authentication UI, database design</li>
            </ul>
          </div>

          <div className="diagram-box">
            <div className="system-diagram">
              <div className="tier">
                <div className="tier-node main">React Frontend</div>
                <div className="tier-children">
                  <div className="tier-node small">Customer UI</div>
                  <div className="tier-node small">Ticketing UI</div>
                </div>
              </div>
              <div className="tier-arrow">↔</div>
              <div className="tier">
                <div className="tier-node main">API Layer</div>
              </div>
              <div className="tier-arrow">↔</div>
              <div className="tier">
                <div className="tier-node main">MariaDB</div>
                <div className="tier-children">
                  <div className="tier-node small">Customer Tables</div>
                  <div className="tier-node small">Ticket Tables</div>
                </div>
              </div>
            </div>
          </div>

          <div className="learning-outcomes">
            <div className="outcome-card">Git workflows & code reviews with real teammates</div>
            <div className="outcome-card">Balancing frontend (React) with backend (MariaDB) thinking</div>
            <div className="outcome-card">Async communication and project coordination</div>
          </div>

          <div className="connection-box orange-box">
            <strong>💭 OpenSesame Connection:</strong>
            <p>
              Knowledge-sharing is as important as technical skills. OpenSesame facilitates this 
              collaborative learning worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Theory to Practice Section */}
      <section className="theory-section">
        <div className="container">
          <div className="card blue-card">
            <h2>📚 Theory → Practice</h2>
            <p><strong>Technical Depth Through Coursework:</strong></p>
            <ul>
              <li>Cryptography (MA464): RSA, elliptic curves, real-world security</li>
              <li>Computer Architecture: Pipeline optimization, performance analysis</li>
              <li>Data Structures: AVL trees, HashMaps in production code</li>
              <li>MIPS Assembly: Low-level programming understanding</li>
            </ul>
          </div>

          <div className="insight-box">
            <strong>The Gap:</strong> Courses gave me theory. Projects gave me context. This gap is 
            what OpenSesame bridges—connecting abstract knowledge to practical application.
          </div>
        </div>
      </section>

      {/* AI & Future Section */}
      <section className="ai-section">
        <div className="container">
          <div className="card yellow-card">
            <h2>🤖 AI & The Future of Learning</h2>
            <p className="section-subtitle">Where I See the Opportunity</p>
          </div>

          <div className="ideas-grid">
            <div className="idea-card">
              <div className="idea-icon">🔧</div>
              <h3>AI-Powered Lab Assistants</h3>
              <div className="idea-section">
                <strong>The Problem:</strong>
                <p>When I was troubleshooting my Proxmox disk issues at 2 AM, I cycled through generic 
                Stack Overflow answers that didn't fit my specific setup.</p>
              </div>
              <div className="idea-section">
                <strong>The Vision:</strong>
                <p>Context-aware AI that understands YOUR infrastructure, YOUR error logs, YOUR constraints—and 
                suggests targeted solutions.</p>
              </div>
              <div className="idea-section">
                <strong>Impact:</strong>
                <p>Reduces frustration and accelerates learning in technical domains where context matters.</p>
              </div>
            </div>

            <div className="idea-card">
              <div className="idea-icon">🎯</div>
              <h3>Adaptive Technical Curriculum</h3>
              <div className="idea-section">
                <strong>The Problem:</strong>
                <p>My cryptography course was paced for the average student. Some topics clicked immediately; 
                others needed more time.</p>
              </div>
              <div className="idea-section">
                <strong>The Vision:</strong>
                <p>AI adjusts problem difficulty and depth in real-time based on how quickly you're grasping 
                concepts. Speed up where you're strong, slow down where you need support.</p>
              </div>
              <div className="idea-section">
                <strong>Impact:</strong>
                <p>Personalized learning at scale—everyone learns at their optimal pace.</p>
              </div>
            </div>

            <div className="idea-card">
              <div className="idea-icon">💻</div>
              <h3>Intelligent Code Review for Learners</h3>
              <div className="idea-section">
                <strong>The Problem:</strong>
                <p>In my database project, I learned best practices through trial and error. Contextual 
                guidance would've accelerated my learning.</p>
              </div>
              <div className="idea-section">
                <strong>The Vision:</strong>
                <p>AI suggests design patterns, performance optimizations, and best practices contextually—not 
                just linting, but teaching WHY.</p>
              </div>
              <div className="idea-section">
                <strong>Impact:</strong>
                <p>Faster skill development with scaffolded support, without replacing human mentorship.</p>
              </div>
            </div>
          </div>

          <div className="connection-box orange-box big-callout">
            <h3>🎯 Why OpenSesame?</h3>
            <p>
              OpenSesame sits at the intersection of content curation and AI-powered personalization. 
              That's exactly where I want to contribute—building tools that meet learners where they are 
              and adapt to how they learn best.
            </p>
            <p>
              <strong>The opportunity:</strong> Using AI not to replace human learning, but to make it more 
              accessible, adaptive, and effective.
            </p>
          </div>
        </div>
      </section>

      {/* What I Bring Section */}
      <section className="strengths-section">
        <div className="container">
          <div className="section-header">
            <h2>💪 What I Bring to OpenSesame</h2>
          </div>

          <div className="strengths-grid">
            <div className="strength-card">
              <div className="strength-icon">📚</div>
              <h4>Full-Stack Thinking</h4>
              <p>Comfortable from React frontends → database optimization → infrastructure management</p>
            </div>

            <div className="strength-card">
              <div className="strength-icon">⚙️</div>
              <h4>Systems Mindset</h4>
              <p>I think about scalability, reliability, and maintainability—not just features</p>
            </div>

            <div className="strength-card">
              <div className="strength-icon">🚀</div>
              <h4>Self-Directed Learning</h4>
              <p>I don't wait for coursework—I build and break things to understand them</p>
            </div>

            <div className="strength-card">
              <div className="strength-icon">🤝</div>
              <h4>Collaborative Experience</h4>
              <p>Team projects taught me to balance autonomy with communication. Ready for pair programming!</p>
            </div>

            <div className="strength-card full-width">
              <div className="strength-icon">🔍</div>
              <h4>Problem-Solving Resilience</h4>
              <p>Home lab mishaps taught me to debug methodically and document solutions</p>
            </div>
          </div>

          <div className="final-statement">
            I bring practical DevOps thinking, fresh perspectives on AI-powered learning from a student's 
            viewpoint, and a passion for building tools that help people grow their skills.
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-card">
            <h2>Thanks for exploring my journey! 🙏</h2>
            <p className="contact-text">
              I'd love to discuss how I can contribute to OpenSesame's mission of transforming 
              workforce development.
            </p>
            <div className="contact-links">
              <p>📧 hboahen1s@semo.edu</p>
              <p>💼 linkedin.com/in/humphreyboahen/</p>
              <p>💻 github.com/Hboahen42</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;