
export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  category: 'achievement' | 'publication' | 'submission' | 'career' | 'general' | 'accepted';
  link?: string; // Added optional link field
}

// Sample news data
export const newsData: NewsItem[] = [
  {
    id: "news-99",
    title: "Conference paper published in 22nd OCIT 2024,SRM University AP",
    date: "2025-04-29",
    summary: "Energy-Efficient UAV Path Planning Using PSO-ABC Algorithm in Obstacle-Rich Environments",
    content: "We're pleased to announce that our latest research paper has been published in IEEE Xplore following its successful presentation at the 22nd OITS International Conference on Information Technology (OCIT 2024). This publication represents both recognition of our team's innovative approach and adds to our institution's growing research portfolio. The paper addresses key challenges in the field of complex UAV Path Planning and proposes novel  ABC-PSO Hybrid solutions that have potential applications across multiple domains. Congratulations to all team members who contributed to this achievement.",
    category: "achievement",
    link: "https://ieeexplore.ieee.org/abstract/document/10973692",
  },
  {
    id: "news-100",
    title: "Research paper accepted in CICBA 2025, Jadavpur University, India",
    date: "2025-03-31",
    summary: "Next-Gen Secure UAV: Leveraging Hyperelliptic Curves and Particle Swarm Optimization.",
    content: "This study proposes a lightweight cryptographic framework for UAV communication, integrating Hyperelliptic Curve Cryptography (HECC) and Particle Swarm Optimization (PSO). Using genus-2 curves over a 256-bit prime field, it enables secure Diffie-Hellman key exchange with AES encryption and SHA3-256. PSO optimizes key length, AES size, and rotation intervals, adapting to network conditions. A dynamic key rotation manager enhances resilience against attacks like MITM and brute-force. Results show improved entropy and security, offering an efficient solution for UAV-Ground Control Station communication.",
    category: "accepted",
  },
  {
    id: "news-101",
    title: "Conference Paper Published in SSWC 2024,JIS College of Engineering",
    date: "2025-04-18",
    summary: "Quantum-Resistant Lattice-Based Cryptography for UAV Networks",
    content: "Quantum-Resistant Lattice-Based Cryptography, designed especially for secure communication in networks of Unmanned Aerial Vehicles (UAVs). The integrity and security of data must be guaranteed since UAVs are becoming increasingly prevalent in both military and civilian applications. Quantum computing poses an immediate challenge to traditional cryptography. The proposed Quantum-Resistant Lattice-Based Cryptography architecture guarantees secure communication with little computational expense over previous works by using the resilience of lattice-based encryption against quantum assaults. The proposed work also provides the groundwork for trustworthy communication among UAVs via the use of encryption and lattice-based key exchange protocols by optimizing cryptographic processes while addressing UAV network restrictions. Finally, thorough assessments confirm the present work’s effectiveness, guaranteeing stakeholders safe and essential UAV operations. ",
    category: "achievement",
    link: "https://link.springer.com/chapter/10.1007/978-981-96-1348-9_38"
  },
  {
    id: "news-102",
    title: "Published My First Research Work as proceedings of Conference",
    date: "2025-01-15",
    summary: "Enhanced UAV Tracking through Multi-Sensor Fusion and Extended Kalman Filtering",
    content: "My Contribution to this work was in the Writing Part of the paper and making Presentation.\n     This work proposes a UAV tracking method using multi-sensor fusion and an Extended Kalman Filter (EKF). Combining RF, radar, audio, and optical data, the EKF improves tracking accuracy by 12.5% over optical sensors alone, reducing error to 0.07m. Real-time visualization and adaptive noise handling highlight its potential for surveillance, rescue, and air traffic applications. ",
    category: "publication",
    link: "https://dblp.org/rec/conf/dosier/BaidyaMMDSC24.html"
  }

];