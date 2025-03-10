import React from "react";
import Image from "next/image";
import { TeamMember } from "@/app/teams/page"; // Adjust the import path as needed

interface CardMemberProps {
  teamMember: TeamMember;
}

const CardMember: React.FC<CardMemberProps> = ({ teamMember }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-64 relative">
        <img
          src={teamMember.image}
          alt={teamMember.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{teamMember.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{teamMember.position}</p>
        <p className="text-gray-700 mb-4">{teamMember.bio}</p>

        {/* Contact information */}
        <div className="flex flex-col space-y-1 text-sm text-gray-600">
          {teamMember.email && (
            <a
              href={`mailto:${teamMember.email}`}
              className="hover:text-blue-600 truncate"
            >
              {teamMember.email}
            </a>
          )}
          {teamMember.phone && (
            <a href={`tel:${teamMember.phone}`} className="hover:text-blue-600">
              {teamMember.phone}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardMember;
