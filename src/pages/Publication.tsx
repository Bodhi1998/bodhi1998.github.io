
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: 'journal' | 'conference' | 'book' | 'chapter';
  doi?: string;
  link?: string;
}

// You need to change in Resume for Publiccation Type also.............

const Publication = () => {
  useEffect(() => {
    document.title = "Bodhisattwa | Publications";
  }, []);

  const [filter, setFilter] = useState<string | null>(null);

  // Sample publications data
  const publicationsData: Publication[] = [
    // {
    //   id: "1",
    //   title: "Advanced Techniques in Natural Language Processing for Social Media Analysis",
    //   authors: "Doe, J., Smith, A., & Johnson, B.",
    //   venue: "Journal of Computational Linguistics",
    //   year: "2023",
    //   type: "journal",
    //   doi: "10.1234/jcl.2023.1234",
    //   link: "https://example.com/publication1"
    // },
    // {
    //   id: "2",
    //   title: "A Novel Approach to Real-time Object Detection in Low-Resource Environments",
    //   authors: "Doe, J., Williams, C., & Brown, D.",
    //   venue: "International Conference on Computer Vision (ICCV)",
    //   year: "2022",
    //   type: "conference",
    //   link: "https://example.com/publication2"
    // },
    // {
    //   id: "3",
    //   title: "Blockchain Technologies: Applications and Future Directions",
    //   authors: "Garcia, E., Doe, J., & Lee, M.",
    //   venue: "Springer Publishing",
    //   year: "2022",
    //   type: "book",
    //   doi: "10.5678/sp.2022.5678"
    // },
    // {
    //   id: "4",
    //   title: "Privacy-Preserving Machine Learning: Methods and Applications",
    //   authors: "Doe, J., Anderson, R.",
    //   venue: "Handbook of Artificial Intelligence in Healthcare",
    //   year: "2021",
    //   type: "chapter",
    //   doi: "10.9101/ai.2021.9101"
    // },
    // {
    //   id: "5",
    //   title: "Efficient Deep Learning Architectures for Edge Computing",
    //   authors: "Doe, J., Singh, P., & Thomas, L.",
    //   venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    //   year: "2021",
    //   type: "journal",
    //   doi: "10.1121/ieee.2021.1121",
    //   link: "https://example.com/publication5"
    // },
    { id: "8",
      title :"Cutting-Edge Innovations: The Future of AGI Drones in Climate Change",
      authors: "Bodhisattwa Baidya, Atanu Mondal",
      venue:"Artificial General Intelligence-Based Drones for Climate Change",
      year: "2025",
      type: "chapter",
      link: "https://www.igi-global.com/chapter/cutting-edge-innovations/377195",
      doi: "10.4018/979-8-3693-6457-4.ch011"

    },
    {
      id: "7",
      title: "Quantum Lattice: Securing UAV Swarms in the Post-Quantum Era.",
      authors: "Bodhisattwa Baidya, Atanu Mondal, Sheela Hundekari, Inam Ullah Khan, Prajwalasimha S. N, Keshav Kaushik",
      venue: "2nd International Conference on Pervasive Computing Advances and Applications (PerCAA-2024), IET ",
      year: "2025",
      type: "conference",
      link :"https://digital-library.theiet.org/doi/10.1049/icp.2025.0766",
      doi :"10.1049/icp.2025.0766"
    },
    {
      id: "6",
      title: "Agamographs using Rubiks Cubes : Morphing Images through Strategic Mosaic Arrangements",
      authors: "Arkopal Das, Sarbajit Manna, Bodhisattwa Baidya, Satish Anamalamudi",
      venue: "22nd OITS International Conference on Information Technology (OCIT 2024). IEEE ",
      year: "2025",
      type: "conference",
      link :"https://ieeexplore.ieee.org/abstract/document/10973731",
      doi :"10.1109/OCIT65031.2024.00138"

    },

    {
      id: "5",
      title: "Energy-Efficient UAV Path Planning using PSO-ABC algorithm in Obstacle-Rich Environments",
      authors: "Bodhisattwa Baidya, Atanu Mondal, Sankha Mallick, Satish Anamalamudi",
      venue: "22nd OITS International Conference on Information Technology (OCIT 2024). IEEE ",
      year: "2025",
      type: "conference",
      link:"https://ieeexplore.ieee.org/abstract/document/10973692",
      doi: "10.1109/OCIT65031.2024.00043"

    },

    {
      id: "4",
      title: "Quantum-Resistant UAV System Using Lattice-Based Key Agreement Protocol",
      authors: "Bodhisattwa Baidya et al.",
      venue: "4th International Conference on Advances in Communication Technologies and Computer Engineering (ICACTCE’24), Springer(Accepted • 2024)",
      year: "2025",
      type: "conference"
    },
    {
      id: "3",
      title: "Quantum-Resistant Lattice-Based Cryptography for Secure UAV Communications",
      authors: "Bodhisattwa Baidya, Atanu Mondal",
      venue: "SSWC2024: International Conference on Smart Systems and Wireless Communication",
      year: "2025",
      type: "conference",
      link: "https://link.springer.com/chapter/10.1007/978-981-96-1348-9_38",
      doi: "10.1007/978-981-96-1348-9_38"
    },
    {
      id: "2",
      title: "Enhanced UAV Tracking through Multi-Sensor Fusion and Extended Kalman Filtering",
      authors: "Bodhisattwa Baidya, Atanu Mondal, Sarbajit Manna, Gourab Das, Anirban Santra, Arkaprava Chakraborty",
      venue: "The 2024 Sixth Doctoral Symposium on Intelligence Enabled Research (DoSIER 2024)",
      year: "2024",
      type: "conference",
      link: "https://dblp.org/rec/conf/dosier/BaidyaMMDSC24.html"
    },
    
    {
      id: "1",
      title: "An Efficient Path Selection in Software Defined UAV Network",
      authors: "Bodhisattwa Baidya, Binu P.K.",
      venue: "2023 14th International Conference on Computing Communication and Networking Technologies (ICCCNT)",
      year: "2023",
      type: "conference",
      link: "https://ieeexplore.ieee.org/abstract/document/10307901",
      doi: "10.1109/ICCCNT56998.2023.10307901"
    },
    
  ];
  
  const publicationTypes = [
    { id: 'journal', label: 'Journal Articles' },
    { id: 'conference', label: 'Conference Papers' },
    { id: 'book', label: 'Books' },
    { id: 'chapter', label: 'Book Chapters' }
  ];
  
 // Sort publications by ID in descending order
 const sortedPublications = [...publicationsData].sort((a, b) => 
  parseInt(b.id) - parseInt(a.id)
);

  const filteredPublications = filter
  ?sortedPublications.filter(pub => pub.type === filter)
  : sortedPublications;
  
  
  return (
    <div className="page-transition-wrapper animate-page-in min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Publications</h1>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            
            {/* Filter buttons - Made horizontally scrollable on mobile */}
            <div className="mb-8 overflow-x-auto pb-2 scrollbar-none">
              <div className="flex space-x-2 min-w-max">
                <button
                  onClick={() => setFilter(null)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    filter === null
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-foreground/80"
                  }`}
                >
                  All Publications
                </button>
                
                {publicationTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFilter(type.id as 'journal' | 'conference' | 'book' | 'chapter')}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      filter === type.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80 text-foreground/80"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Publications list */}
            <div className="space-y-6">
              {filteredPublications.map((pub) => (
                <div key={pub.id} className="glass-panel p-5 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">{pub.title}</h3>
                  <p className="text-primary/90 text-sm mb-1">{pub.authors}</p>
                  <p className="text-foreground/70 text-sm mb-1">
                    <span className="font-medium">{pub.venue}</span>, {pub.year}
                  </p>
                  <div className="flex mt-3 items-center gap-3">
                    <span 
                      className={cn(
                        "text-xs px-2 py-1 rounded-full",
                        pub.type === 'journal' ? "bg-primary/20 text-primary" :
                        pub.type === 'conference' ? "bg-secondary text-foreground/90" :
                        pub.type === 'book' ? "bg-muted text-foreground/70" :
                        "bg-primary/10 text-primary/80"
                      )}
                    >
                      {
                        pub.type === 'journal' ? 'Journal Article' :
                        pub.type === 'conference' ? 'Conference Paper' :
                        pub.type === 'book' ? 'Book' : 'Book Chapter'
                      }
                    </span>
                    
                    {pub.doi && (
                      <a 
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary/80 hover:text-primary transition-colors"
                      >
                        DOI: {pub.doi}
                      </a>
                    )}
                    
                    {pub.link && (
                      <a 
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary/80 hover:text-primary transition-colors"
                      >
                        View Publication
                      </a>
                    )}
                  </div>
                </div>
              ))}
              
              {filteredPublications.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-foreground/70">No publications found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Publication;
