"use client";

import { FC, useState } from "react";
import {
  Home,
  Building2,
  Building,
  User,
  Users,
  Briefcase,
  UploadCloud,
} from "lucide-react";
import Image from "next/image";

export const PropertySelection: FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="relative w-24 h-12">
  <Image
    src="/logo.png"
    alt="RentYard Logo"
    fill
    className="object-contain" 
  />
</div>

        </div>
        <button className="text-gray-500 hover:text-gray-700 rounded shadow px-4 py-2">
          Exit
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="w-full max-w-5xl space-y-6">
          {/* Property Type */}
          <div>
            <h2 className="text-lg mb-4 text-[#272B35] font-semibold">Property type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {propertyTypes.map((type) => (
                <OptionCard
                  key={type.title}
                  icon={type.icon}
                  title={type.title}
                  description={type.description}
                  selected={false}
                  onSelect={() => {}}
                />
              ))}
            </div>
          </div>

          {/* Select Your Role */}
          <div>
            <h2 className="text-lg text-[#272B35] font-semibold mb-4">Select your role</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {roles.map((role) => (
                <OptionCard
                  key={role.title}
                  icon={role.icon}
                  title={role.title}
                  description={role.description}
                  selected={selectedRole === role.title}
                  onSelect={() => handleRoleSelect(role.title)}
                />
              ))}
            </div>
          </div>

          {/* Realtor Verification */}
          {selectedRole === "Realtor" && (
            <div className="space-y-4 border p-4 rounded-md">
              <h2 className="text-lg font-medium text-[#272B35]">Realtor verification</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField label="License number" placeholder="0000000000" />
                <FileUpload label="Additional documents for realtor" />
                <FileUpload label="Agreement with landlord" />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  Accept RentYard property adding terms & condition
                </label>
              </div>
            </div>
          )}

         {selectedRole === "Property management company" && (
  <div className="space-y-4 border p-4 rounded-md">
    <div className="bg-gray-50 px-4 py-2 rounded">
      <h2 className="text-lg font-medium text-[#272B35]">Company & office info</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <InputField label="Company name*" placeholder="Company name" />
      <InputField label="Company Identifier (EIN/TIN)*" placeholder="Identifier" />
      <InputField label="Your job title*" placeholder="Manager" />
      <FileUpload label="Agreement with landlord/owner*" />
      <SelectField label="Country/Region*" options={["USA", "Bangladesh", "UK"]} />
      <InputField label="Street address*" placeholder="Street Address" />
      <InputField label="Apt, suite, unit" placeholder="Apt/Suite" />
      <PhoneInput label="Phone number*"  />
      <InputField label="Contact email*" placeholder="email@example.com" />
      <InputField label="City/Town*" placeholder="City" />
      <SelectField label="State/Territory*" options={["Choose state", "Texas", "California"]} />
      <InputField label="Zip code*" placeholder="Zip code" />
    </div>
    <div className="flex items-center space-x-2">
      <input type="checkbox" id="terms2" />
      <label htmlFor="terms2" className="text-sm text-gray-600">
        Accept RentYard property adding terms & condition
      </label>
    </div>
  </div>
)}

        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 border-t">
        <button className="text-gray-600 hover:text-gray-800 underline">Back</button>
        <button
          disabled={!selectedRole}
          className={`px-4 py-2 rounded ${
            selectedRole
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-600 text-white opacity-50 cursor-not-allowed"
          }`}
        >
          Get started
        </button>
      </div>
    </div>
  );
};

interface OptionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
}

const OptionCard: FC<OptionCardProps> = ({
  icon,
  title,
  description,
  selected,
  onSelect,
}) => (
  <div
    onClick={onSelect}
    className={`border rounded-lg p-4 cursor-pointer ${
      selected ? "border-blue-500 bg-blue-50" : "hover:border-blue-400"
    }`}
  >
    <div className="flex items-center gap-3">
      <div className="text-[#272B35]">{icon}</div>
      <div className="flex flex-col">
        <h3 className="font-semibold text-[#272B35]">{title}</h3>
        <p className="text-sm text-[#272B35]">{description}</p>
      </div>
    </div>
  </div>
);

interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField: FC<InputFieldProps> = ({ label, placeholder }) => (
  <div className="flex flex-col">
    <label className="text-sm mb-1 text-[#272B35]">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="border rounded px-3 py-2 focus:outline-none focus:border-blue-500 placeholder:text-gray-500"
    />
  </div>
);


interface FileUploadProps {
  label: string;
}

const FileUpload: FC<FileUploadProps> = ({ label }) => (
  <div className="flex flex-col">
    <label className="text-sm mb-1 text-[#272B35]">{label}</label>
    <button className="border rounded px-3 py-2 flex items-center space-x-2 hover:border-blue-500 text-[#272B35]">
      <UploadCloud className="w-4 h-4 text-[#272B35]" />
      <span>(PDF only)</span>
    </button>
  </div>
);

interface SelectFieldProps {
  label: string;
  options: string[];
}

const SelectField: FC<SelectFieldProps> = ({ label, options }) => (
  <div className="flex flex-col">
    <label className="text-sm mb-1 text-[#272B35]">{label}</label>
    <select className="border rounded px-3 py-2 focus:outline-none focus:border-blue-500 text-[#272B35]">
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

interface PhoneInputProps {
  label: string;
}

interface PhoneInputProps {
  label: string;
}

const PhoneInput: FC<PhoneInputProps> = ({ label }) => (
  <div className="flex flex-col">
    <label className="text-sm mb-1 text-[#272B35]">{label}</label>
    <div className="flex">
      <span className="inline-flex items-center px-2 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-[#272B35] text-sm space-x-1">
  <img src="/bd.png" alt="Bangladesh" className="w-4 h-4" />
  <span><svg
          className="w-3 h-3 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg></span>
</span>

      <input
        type="tel"
        placeholder="+880"
        className="border rounded-r px-3 py-2 focus:outline-none focus:border-blue-500 placeholder:text-gray-500 w-full"
      />
    </div>
  </div>
);





const propertyTypes = [
  {
    title: "Single House Property",
    description: "Single unit house for single family",
    icon: <Home className="w-6 h-6" />,
  },
  {
    title: "Apartments complex",
    description: "Multiple unit house for families",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    title: "Condominiums",
    description: "Multiple unit house for families",
    icon: <Building className="w-6 h-6" />,
  },
];

const roles = [
  {
    title: "Landlord",
    description: "Owner of the property",
    icon: <User className="w-6 h-6" />,
  },
  {
    title: "Realtor",
    description: "Manage property on behalf of owner",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Property management company",
    description: "For management company",
    icon: <Briefcase className="w-6 h-6" />,
  },
];
