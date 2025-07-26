
export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  src: string;
}

// Sample gallery images
export const galleryImages: GalleryImage[] = [
  
  
  {
    id: "101",
    title: "Conference at JIS",
    description: "Presented a cutting-edge research paper on Lattice-based cryptography at the SSWC 2024 conference at JIS College of Engineering.",
    src: "/lovable-uploads/gallery/sswc.jpg"
  },
  {
    id: "101",
    title: "Conference at JIS",
    description: "Presented a cutting-edge research paper on Lattice-based cryptography at the SSWC 2024 conference at JIS College of Engineering.",
    src: "/lovable-uploads/gallery/Poster SSWC.jpg"
  },

  {
    id: "101",
    title: "Speech at Vidyamandira",
    description: "Delivered a speech on 'The Future of UAVs' at Vidyamandira College, Ramakrishna Mission.",
  
    src: "/lovable-uploads/gallery/Vidyamandira Presentation.jpg"
  }


  
];