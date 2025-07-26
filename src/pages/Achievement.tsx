import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TimelineItem, { TimelineItemData } from '@/components/ui/TimelineItem';
import { ScrollArea } from '@/components/ui/scroll-area';

const Achievement = () => {
  useEffect(() => {
    document.title = "Bodhisattwa | Reviewer";
  }, []);

  const achievementData: TimelineItemData[] = [
    
    {
      id: "5",
      title: "Second International Conference on Advanced Network Technologies and Computational Intelligence (ICANTCI 2025)",
      company: "",
      period: "May 2025",
      description: "",
      link: "https://ca.chitkara.edu.in/icantci2025/"
    },
    {
      id: "99",
      title: "IEEE Transactions on Artificial Intelligence",
      company: "",
      period: "April 2025",
      description: "",
      link: "https://cis.ieee.org/publications/ieee-transactions-on-artificial-intelligence"
    },
    
    {
      id: "102",
      title: "2025 IEEE Gaming, Entertainment, and Media Conference (GEM)",
      company: "",
      period: "March 2025",
      description: "",
      link: "https://www.ieee-gem2025.org/"
    },
    {
      id: "103",
      title: "2025 IEEE International Conference on Consumer Electronics - Taiwan (ICCE-Taiwan)",
      company: "",
      period: "March 2025",
      description: "",
      link: "https://www.icce-tw.org/"
    },
    
  ];

  // Helper to parse "Month Year" to Date object
  const parsePeriodToDate = (period: string): Date => {
    const [monthStr, yearStr] = period.split(' ');
    const monthNames: { [key: string]: number } = {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11,
    };
    const month = monthNames[monthStr] ?? 0;
    const year = Number(yearStr);
    return new Date(year, month);
  };

  // Sort by period descending (most recent first)
  const sortedAchievements = [...achievementData].sort((a, b) => {
    return parsePeriodToDate(b.period).getTime() - parsePeriodToDate(a.period).getTime();
  });

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
                {sortedAchievements.map((item, index) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    isLast={index === sortedAchievements.length - 1}
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
