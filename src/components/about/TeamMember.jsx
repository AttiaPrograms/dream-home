import React from "react";

const TeamMember = ({ image, name, role }) => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden text-center hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-[#1A2A3A]">{name}</h4>
        <p className="text-sm text-[#7F8C8D] mt-1">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;