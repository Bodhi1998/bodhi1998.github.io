import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TimelineItem, { TimelineItemData } from '@/components/ui/TimelineItem';
import { Download, Mail, MapPin, Phone, Github, Linkedin, Twitter, YoutubeIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Resume = () => {
  useEffect(() => {
    document.title = "Bodhisattwa | Resume";
  }, []);

  const fieldsOfInterest = [
    "AI",
    "Cryptography",
    "Drone Security",
    "Machine Learning",
    "Deep Learning",
    "UAV Security",
    "Internet of Things (IoT)",
  ];

  const experienceData: TimelineItemData[] = [
    {
      id: "1",
      title: "IEEE CTSoc MDA Technical Committee Member",
      company: <a href="https://ctsoc.ieee.org/technical/technical-committees/mda-tc.html?view=article&id=310:mda-tc-members&catid=21#:~:text=Bodhisattwa%20Baidya,Ramakrishna%20Mission%20Vidyamandira">IEEE CTSoc Machine learning, Deep learning and AI in CE (MDA) Technical Committee (TC)</a>,
      period: "2025 - Present",
      description: "Secure Data Dissemination in UAV."
    },
    {
      id: "2",
      title: "Member",
      company: "Internation al Association of Engineers (IAENG) - Hong Kong",
      period: "2024 - Present",
      description: "Member of IAENG, a global association of engineers and computer scientists."
    },
    {
      id: "3",
      title: "Mentor and Research Scientist",
      company: "AI- Explain You Science (AI-EYS)",
      period: "2024 - Present",
      description: "Mentoring students in AI and ML projects, guiding them through practical applications and research."
    },
    {
      id: "4",
      title: "Teaching Assistant",
      company: "Ramakrishna Mission Vidyamandira",
      period: "2024 - Present",
      description: "Assisting in teaching undergraduate courses, providing support to students in their academic journey."
    },
    {
      id: "5",
      title: "Drone Developer",
      company: "Qoptars Pvt. Ltd.",
      period: "2022 - Present",
      description: "Developing and testing drone technology for various applications, including surveillance and data collection."
    },
    {
      id: "6",
      title: "Summer Intern",
      company: "Oil and Natural Gas Corporation (ONGC)",
      period: "2019 - 3 Months",
      description: "Worked on a project related to data analysis and optimization in the oil and gas sector, gaining practical experience in the industry."
    }
    
  ];
  
  const educationData: TimelineItemData[] = [
    {
      id: "ed1",
      title: "PhD - Computer Science",
      company: <a href="https://vidyamandira.ac.in/">Ramakrishna Mission Vidyamandira, Belur Math , India</a>,
      period: "2024 - Present",
      description: "Secure Data Dissemination in UAV."
    },
    {
      id: "ed2",
      title: "Master of Computer Applications",
      company: <a href="https://www.amrita.edu/">Amrita Vishwa Vidyamandira, India</a> ,
      period: "2021 - 2023",
      description: "CGPA - 8.75"
    },
    {
      id: "ed3",
      title: "Bachelor of Computer Applications",
      company: <a href="https://www.ccsuniversity.ac.in/">Chaudhary Charan Singh University, India</a> ,
      period: "2017 - 2020",
      description: "Percentage - 61.58 %"
    },
  ];

  const publicationsData = [
    // {
    //   title: "Modern JavaScript Frameworks: A Comparative Analysis",
    //   journal: "Journal of Web Technologies",
    //   year: "2022",
    //   link: "#"
    // },
    
    {
      title: " An Efficient Path Selection in Software Defined UAV Network.",
      conference: "14th International Conference on Computing Communication and Networking Technologies (ICCCNT)",
      year: "2023",
      link: "https://dblp.org/rec/conf/dosier/BaidyaMMDSC24.html"
    },
    {
      title: "  Quantum-Resistant UAV System Using Lattice-Based Key Agreement Protocol",
      conference: " 4th International Conference on Advances in Communication Technologies and Computer Engineering (ICACTCE’24), Springer(Accepted)",
      year: "2024",
      link: "https://dblp.org/rec/conf/dosier/BaidyaMMDSC24.html"
    },
    {
      title: " Enhanced UAV Tracking through Multi-Sensor Fusion and Extended Kalman Filtering",
      conference: "Sixth Doctoral Symposium on Intelligence Enabled Research (DoSIER)",
      year: "2024",
      link: "https://dblp.org/rec/conf/dosier/BaidyaMMDSC24.html"
    },
    {
      title: " Quantum-Resistant Lattice-Based Cryptography for Secure UAV Communications",
      conference: "Smart Systems and Wireless Communication(SSWC2024), Springer(Accepted)",
      year: "2024",
      link: "https://dblp.org/rec/conf/dosier/BaidyaMMDSC24.html"
    },
    {
      title: " Quantum Lattice: Securing UAV Swarms in the Post-Quantum Era.",
      conference: "2nd International Conference on Pervasive Computing Advances and Applications (PerCAA-2024),IET(Accepeted)",
      year: "2024",
      link: "https://dblp.org/rec/conf/dosier/BaidyaMMDSC24.html"
    },
    {
      title: "  Energy-Efficient UAV Path Planning using PSO-ABC algorithm in Obstacle-Rich Environments",
      conference: " 22nd OITS International Conference on Information Technology (OCIT 2024).IEEE(Accepted",
      year: "2024",
      link: "https://dblp.org/rec/conf/dosier/BaidyaMMDSC24.html"
    },
    
  ];

  const awardsData = [
    {
      title: "Confererence Grant",
      organization: "Ramakrishna Mission Vidyamandira",
      year: "Mar 2025"
    },
   
  ];

  const projectsData = [
    {
      title: "HECC-PSO: Secure UAV Communication Cryptographic Framework",
      description: "Developed resilient cryptographic framework using HECC and PSO to optimize AES key management for UAVs.",
      link: "#"
    },
    {
      title: "HeartStack: A Multi-Layered Ensemble Model for Heart Disease Prediction",
      description: "Developed stacked ensemble model for precise heart disease prediction.",
      link: "#"
    },
    {
      title: "Academic Personal Website",
      description: "A customized academic personal website for mysel.",
      link: "#"
    }
  ];

  const volunteeringData = [
    {
      role: "Regular (Lifetime) Member",
      organization: "The International Society for Applied Computing (ISAC).",
      period: "2025 - Present",
      description: ""
    },
    
  ];

  const skillCategories = [
    {
      "name": "Programming Languages",
      "skills": ["Python", "C++", "MATLAB", "HTML5", "CSS3", "Assembly Language","JavaScript"]
    },
    {
      "name": "Frameworks & Libraries",
      "skills": ["Sklearn","Seaborn","Django", "Node.js"]
    },
    {
      "name": "Tools & Technologies",
      "skills": ["Google Colab","Git", "Firebase", "MySQL", "XAMPP", "ESP32", "Arduino"]
    },    
    {
      name: "Soft Skills",
      skills: ["Leadership", "Communication", "Problem-solving", "Team Collaboration", "Project Management", "Mentoring"]
    }
  ];

  
  
  const referencesData = [
    {
      name: "Inam Ullah Khan",
      title: "Postdoctoral Researcher",
      institution: "Multimedia University, Malaysia",
      email: "inamullahkhan@mmu.edu.my",
      phone: " "
    }
    
    
  ];
  
  return (
    <div className="page-transition-wrapper animate-page-in min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Bodhisattwa Baidya</h1>
                <h2 className="text-xl text-foreground/80 mb-4">Research Scholar</h2>
                
                <div className="space-y-2 text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>bodhisattwabaidya@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+91 905-1504-557</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Kolkata, India</span>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-4">
                  <a 
                    href="https://github.com/Bodhi1998" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/bodhisattwa-baidya/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://x.com/BodhisattwaBai2" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    aria-label="X (Twitter) Profile"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@bodhi27" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    aria-label="YouTube Channel"
                  >
                    <YoutubeIcon className="h-5 w-5" />
                  </a>


                  <a 
                    href="https://orcid.org/0009-0002-3663-4497" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    aria-label="ORCID Profile"
                  >
                    <div className="h-5 w-5 flex items-center justify-center text-xs font-bold">ID</div>
                  </a>
                  <a 
                    href="https://scholar.google.com/citations?user=IV97v-wAAAAJ&hl=en" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    aria-label="Google Scholar Profile"
                  >
                    <div className="h-5 w-5 flex items-center justify-center text-xs font-bold">GS</div>
                  </a>
                </div>
              </div>
              
              <a 
                href="/lovable-uploads/Bodhisattwa_Baidya_CV.pdf" 
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md flex items-center gap-2 hover:bg-primary/90 transition-colors self-start mt-2 md:mt-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Fields of Interest</h2>
              <div className="flex flex-wrap gap-3">
                {fieldsOfInterest.map((field, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-primary/5 font-medium text-primary rounded-lg"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              
              <div className="relative pl-6">
                {educationData.map((item, index) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    isLast={index === educationData.length - 1}
                  />
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Experience</h2>
              
              <div className="relative pl-6">
                {experienceData.map((item, index) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    isLast={index === experienceData.length - 1}
                  />
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Publications</h2>
              
              <div className="space-y-4">
                {publicationsData.map((pub, index) => (
                  <div key={index} className="glass-panel p-4 rounded-lg">
                    <h3 className="font-medium">{pub.title}</h3>
                    <p className="text-sm text-foreground/70">
                    {/* You need to change here to add the publication type. */}
                      {/* {pub.journal || pub.conference || pub.book} • {pub.year}    */}
                      {pub.conference} • {pub.year}
                    </p>
                    <a 
                      href={pub.link} 
                      className="text-sm text-primary hover:underline mt-1 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Publication
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            {/* <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                  <div key={index} className="glass-panel rounded-lg overflow-hidden">
                    <div className="px-5 py-3 border-b border-border">
                      <h3 className="font-medium">{category.name}</h3>
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className={cn(
                              "text-xs px-2 py-1 rounded-full",
                              skillIndex % 3 === 0 ? "bg-primary/20 text-primary" :
                              skillIndex % 3 === 1 ? "bg-secondary text-foreground/90" :
                              "bg-muted text-foreground/70"
                            )}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Awards</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {awardsData.map((award, index) => (
                  <div key={index} className="glass-panel p-4 rounded-lg">
                    <h3 className="font-medium">{award.title}</h3>
                    <p className="text-sm text-foreground/70">{award.organization} • {award.year}</p>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Selected Projects</h2>
              
              <div className="space-y-4">
                {projectsData.map((project, index) => (
                  <div key={index} className="glass-panel p-4 rounded-lg">
                    <h3 className="font-medium">{project.title}</h3>
                    <p className="text-sm text-foreground/70 mb-2">{project.description}</p>
                    <a 
                      href={project.link} 
                      className="text-sm text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Certifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">Supervised Machine Learning: Regression and Classification</h3>
                  <p className="text-sm text-foreground/70">DeepLearning.AI - Stanford | ONLINE • 2025</p>
                </div>
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">Next Generation Communication Technologies Using MATLAB Tools</h3>
                  <p className="text-sm text-foreground/70">Indian Institute of Information Technology Una • 2025</p>
                </div>
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">Problem Solving (Intermediate) Certificate</h3>
                  <p className="text-sm text-foreground/70">HackerRank • 2025</p>
                </div>
                
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Volunteering</h2>
              
              <div className="space-y-4">
                {volunteeringData.map((item, index) => (
                  <div key={index} className="glass-panel p-4 rounded-lg">
                    <h3 className="font-medium">{item.role}</h3>
                    <p className="text-sm font-medium text-primary/80">{item.organization}</p>
                    <p className="text-sm text-foreground/70">{item.period}</p>
                    <p className="text-sm mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Languages</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">English</h3>
                  <p className="text-sm text-foreground/70">Professional Proficiency</p>
                </div>
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">Hindi</h3>
                  <p className="text-sm text-foreground/70">Professional Proficiency</p>
                </div>
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="font-medium">Bengali</h3>
                  <p className="text-sm text-foreground/70">Native</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">References</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {referencesData.map((reference, index) => (
                  <div key={index} className="glass-panel p-4 rounded-lg">
                    <h3 className="font-medium">{reference.name}</h3>
                    <p className="text-sm text-foreground/80">{reference.title}</p>
                    <p className="text-sm text-foreground/70">{reference.institution}</p>
                    <div className="mt-2 space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 text-primary/80" />
                        <span>{reference.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-primary/80" />
                        <span>{reference.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;
