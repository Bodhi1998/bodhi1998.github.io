
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TimelineItem, { TimelineItemData } from '@/components/ui/TimelineItem';
import { ScrollArea } from '@/components/ui/scroll-area';

const Achievement = () => {
  useEffect(() => {
    document.title = "Bodhisattwa | Reviewer";
  }, []);

  // Sample achievement data
  const achievementData: TimelineItemData[] = [
    
    {
      id: "3",
      title: "Deepfake Dilemma: A Review of GAN-Based Detection for Facial Manipulations",
      company: "Second International Conference on Advanced Network Technologies and Computational Intelligence (ICANTCI 2025)",
      period: "May 2025",
      description: "Reviewed a multiple research papers for the second International Conference on Advanced Network Technologies and Computational Intelligence (ICANTCI 2025).",
      link: "https://drive.google.com/file/d/1kKoz_tiVfzZChGRcJ62IDGUPHQb7GLe9/view?usp=drive_link"
    },
    {
      id: "4",
      title: "Survey of Blockchain Solutions to Mitigate Drug Counterfeiting in Supply Chains: Building Digital Trust and Governance",
      company: "Second International Conference on Advanced Network Technologies and Computational Intelligence (ICANTCI 2025)",
      period: "May 2025",
      description: "Reviewed a multiple research papers for the second International Conference on Advanced Network Technologies and Computational Intelligence (ICANTCI 2025).",
      link: "https://ca.chitkara.edu.in/icantci2025/"

    },
    
    
    {
      id: "5",
      title: "Anomaly Based IDS for Rescue Operations Using IoT Network",
      company: "Second International Conference on Advanced Network Technologies and Computational Intelligence (ICANTCI 2025)",
      period: "May 2025",
      description: "Reviewed multiple research papers for the Second International Conference on Advanced Network Technologies and Computational Intelligence (ICANTCI 2025).",
      link: "https://ca.chitkara.edu.in/icantci2025/"
    },
    {
      id: "99",
      title: "EncryptFlow: Efficient and Lossless Image Encryption Network Based on Normalizing Flows",
      company: "IEEE Transactions on Artificial Intelligence",
      period: "April 2025",
      description: "Reviewed a research paper for the IEEE Transactions on Artificial Intelligence journal.",
      link: "https://cis.ieee.org/publications/ieee-transactions-on-artificial-intelligence"
    },
    {
      id: "100",
      title: "Smart Skeletal Analysis for Elderly Exercise Assessment: a Human Factors Approach Based on Vivifrail Testing and Heart Rate Monitoring",
      company: "2025 IEEE Gaming, Entertainment, and Media Conference (GEM)",
      period: "March 2025",
      description: "Reviewed a research paper for the 2025 IEEE Gaming, Entertainment, and Media Conference (GEM).",
      link :"https://www.ieee-gem2025.org/"
    },
    {
      id: "101",
      title: "Predicting Maneuver Decisions in Rear-End Collisions Using Situational Awareness-Based Features",
      company: "2025 IEEE Gaming, Entertainment, and Media Conference (GEM)",
      period: "March 2025",
      description: "Reviewed a research paper for the 2025 IEEE Gaming, Entertainment, and Media Conference (GEM).",
      link: "https://www.ieee-gem2025.org/"
    },
    {
      id: "102",
      title: "Assessing Vibration Feedback Perceptibility in a Wearable Feedback System for Upper Back and Thigh Posture Correction",
      company: "2025 IEEE Gaming, Entertainment, and Media Conference (GEM)",
      period: "March 2025",
      description: "Reviewed a research paper for the 2025 IEEE Gaming, Entertainment, and Media Conference (GEM).",
      link: "https://www.ieee-gem2025.org/"
    },
    {
      id: "103",
      title: "Machine Learning-Based Classification of Umbilical Cord Blood Gas Using Fetal Heart Rate Variability",
      company: "2025 IEEE International Conference on Consumer Electronics - Taiwan (ICCE-Taiwan)",
      period: "March 2025",
      description: "Reviewed a research paper for the 2025 IEEE International Conference on Consumer Electronics - Taiwan (ICCE-Taiwan).",
      link: "https://www.icce-tw.org/"
    },
    {
      id: "104",
      title: " Research on Feature Extraction for Prediction of Dystocia in Cows Using Image Processing Technology",
      company: "2025 IEEE International Conference on Consumer Electronics - Taiwan (ICCE-Taiwan)",
      period: "March 2025",
      description: "Reviewed a research paper for the 2025 IEEE International Conference on Consumer Electronics - Taiwan (ICCE-Taiwan).",
      link: "https://www.icce-tw.org/"
    }
     
  ];
  
  return (
    <div className="page-transition-wrapper animate-page-in min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Reviewer</h1>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            
            <ScrollArea className="w-full overflow-x-auto">
               <div className="relative pl-6">
                 {achievementData.map((item, index) => (
                   <TimelineItem
                     key={item.id}
                     item={item}
                     isLast={index === achievementData.length - 1}
                   />
                 ))}
               </div>
             </ScrollArea>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Achievement;
