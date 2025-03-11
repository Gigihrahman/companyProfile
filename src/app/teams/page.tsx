"use client";

import CardMember from "@/components/CardMember";
import type { Metadata } from "next";
import React, { useState, useEffect } from "react";
export const metadata: Metadata = {
  title: "Team Page Ngado Kado",
  description: "Beberapa pegawai serta pemilik toko",
};

// Define interfaces for the API response
interface RandomUserName {
  first: string;
  last: string;
  title: string;
}

interface RandomUserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface RandomUserResult {
  name: RandomUserName;
  email: string;
  phone: string;
  picture: RandomUserPicture;
}

interface RandomUserResponse {
  results: RandomUserResult[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

// Interface for our team member format
export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
}

const positions: string[] = [
  "CEO & Founder",
  "CTO",
  "Lead Designer",
  "Senior Developer",
  "Marketing Director",
  "Product Manager",
  "UX Designer",
  "Frontend Developer",
  "Backend Developer",
  "Content Strategist",
  "Customer Success Manager",
  "HR Director",
];

const bios: string[] = [
  "Has over 15 years of experience in the industry and leads our company vision and strategy.",
  "Oversees all technical aspects of the company and ensures we stay at the cutting edge.",
  "Brings creative vision to life with exceptional design skills and attention to detail.",
  "Full-stack developer with expertise in building scalable and efficient applications.",
  "Leads our marketing efforts with innovative strategies that drive growth and engagement.",
  "Ensures our products meet customer needs while aligning with our business objectives.",
  "Creates intuitive and beautiful user experiences that delight our customers.",
  "Passionate about crafting responsive interfaces with modern web technologies.",
  "Architect of our robust backend systems that power our applications.",
  "Develops compelling content that resonates with our audience and drives engagement.",
  "Dedicated to ensuring our customers get the most value from our products.",
  "Builds and nurtures our company culture and talent acquisition strategy.",
];

const TeamPages: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMembers = async (): Promise<void> => {
      try {
        setLoading(true);
        // Fetch 6 random users
        const response = await fetch("https://randomuser.me/api/?results=6");

        if (!response.ok) {
          throw new Error("Failed to fetch team members");
        }

        const data: RandomUserResponse = await response.json();

        // Transform the random user data into our team member format
        const formattedTeamMembers: TeamMember[] = data.results.map(
          (user, index) => ({
            name: `${user.name.first} ${user.name.last}`,
            position: positions[index % positions.length],
            bio: bios[index % bios.length],
            image: user.picture.large,
            email: user.email,
            phone: user.phone,
          })
        );

        setTeamMembers(formattedTeamMembers);
        setLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return (
      <div className="container py-12 px-4 mx-auto text-center">
        <p className="text-xl">Loading team members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-12 px-4 mx-auto text-center">
        <p className="text-xl text-red-500">Error: {error}</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container py-12 px-4 mx-auto bg-[#FEFBF0]">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Meet our talented team of professionals who are dedicated to
          delivering exceptional results.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <CardMember key={index} teamMember={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamPages;
