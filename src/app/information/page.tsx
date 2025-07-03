"use client";

import { useState } from "react";
import { NextPage } from "next";
import { Plus } from "lucide-react";
import Modal from "@/components/Modal";
import Image from "next/image";


const CondoInfoPage: NextPage = () => {
  const [featuredPhoto, setFeaturedPhoto] = useState<File | null>(null);
  const [morePhotos, setMorePhotos] = useState<File[]>([]);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleFeaturedPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFeaturedPhoto(e.target.files[0]);
    }
  };

  const handleMorePhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMorePhotos(Array.from(e.target.files));
    }
  };

  const infoFields = [
    { label: "Property address", required: true },
    { label: "Leasing info", required: true },
    { label: "Charges", required: true },
    { label: "Rent frequency & payment reminder", required: true },
    { label: "Application agreement", optional: true },
    { label: "About the property", optional: true },
    { label: "Community's amenity/features", optional: true },
    { label: "Pet fees", optional: true },
    { label: "Parking", optional: true },
    { label: "Nearest educational institution", optional: true },
    { label: "Nearest stations", optional: true },
    { label: "Nearest landmark", optional: true },
    { label: "Utilities provided", optional: true },
  ];

  const getPlaceholder = (label: string) => {
    switch (label) {
      case "Property address":
        return "e.g. 123 Main St, Springfield, IL 62704";
      case "Leasing info":
        return "e.g. 12-month lease, renewable, $1500/mo";
      case "Charges":
        return "e.g. $200 security deposit, $100 admin fee";
      case "Rent frequency & payment reminder":
        return "e.g. Rent due 1st of every month. Reminder 5 days prior.";
      case "Application agreement":
        return "e.g. All tenants must sign the digital agreement.";
      case "About the property":
        return "e.g. 2 bed, 2 bath condo with open kitchen layout.";
      case "Community's amenity/features":
        return "e.g. Swimming pool, Gym, Clubhouse, Gated security.";
      case "Pet fees":
        return "e.g. $250 non-refundable pet fee + $25/mo per pet.";
      case "Parking":
        return "e.g. 2 covered parking slots per unit included.";
      case "Nearest educational institution":
        return "e.g. Lincoln Elementary (0.3 miles), Central High (1 mile).";
      case "Nearest stations":
        return "e.g. Springfield Metro (Blue Line), Bus Stop on 5th St.";
      case "Nearest landmark":
        return "e.g. Near City Park, Opposite Town Mall entrance.";
      case "Utilities provided":
        return "e.g. Water, Trash, Internet included. Electricity separate.";
      default:
        return "Enter relevant information here.";
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex justify-between items-center mb-6">
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
        <button className="text-gray-500 hover:text-gray-700 rounded shadow px-4 py-2">Save & Exit</button>
      </div>

      <h2 className="text-lg font-semibold mb-4 text-[#272B35]">Condominiums information</h2>

      {/* Grid for info fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {infoFields.map((field, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center border px-4 py-3 rounded-md shadow-sm"
          >
            <span
              className={`text-sm ${field.required ? "text-red-600 font-semibold" : "text-gray-700"}`}
            >
              {field.label}
              {field.required ? " (Required)" : field.optional ? " (Optional)" : ""}
            </span>
            <button
              onClick={() => setActiveModal(field.label)}
              className="text-blue-600 text-sm flex items-center gap-1"
            >
              <Plus size={16} /> Add
            </button>

            <Modal
              title={field.label}
              isOpen={activeModal === field.label}
              onClose={() => setActiveModal(null)}
            >
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}:
              </label>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded-md text-gray-700 placeholder-gray-500"
                placeholder={getPlaceholder(field.label)}
              />
              <div className="mt-4 flex justify-end">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                  onClick={() => setActiveModal(null)}
                >
                  Save
                </button>
              </div>
            </Modal>
          </div>
        ))}
      </div>

      {/* Gallery Upload */}
      <div className="mb-6">
        <p className="text-sm text-gray-700 mb-2">Property gallery (let’s not use photos?)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Featured */}
          <div>
            <label className="block text-sm font-medium mb-1">Featured photos</label>
            <div className="border-dashed border-2 rounded-md p-4 flex flex-col items-center justify-center text-center text-gray-500 hover:border-blue-400">
              <input
                type="file"
                className="hidden"
                id="featured-photo"
                onChange={handleFeaturedPhoto}
              />
              <label htmlFor="featured-photo" className="cursor-pointer">
                Upload cover photo
              </label>
              {featuredPhoto && <p className="text-xs mt-2 text-gray-600">{featuredPhoto.name}</p>}
            </div>
          </div>

          {/* More Photos */}
          <div>
            <label className="block text-sm font-medium mb-1">More photos (optional)</label>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <label
                  key={i}
                  htmlFor={`more-photo-${i}`}
                  className="border-dashed border-2 rounded-md w-full h-20 flex items-center justify-center text-gray-400 cursor-pointer hover:border-blue-400"
                >
                  +
                  <input
                    type="file"
                    id={`more-photo-${i}`}
                    className="hidden"
                    onChange={handleMorePhotos}
                    multiple
                  />
                </label>
              ))}
            </div>
            {morePhotos.length > 0 && (
              <p className="text-xs text-gray-600 mt-2">{morePhotos.length} photo(s) selected</p>
            )}
          </div>
        </div>
      </div>

      {/* Videos */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">Videos (optional)</label>
        <input
          type="url"
          placeholder="Paste video link (YouTube, Vimeo, etc)"
          className="w-full border px-4 py-2 rounded-md placeholder-gray-700 text-gray-700"
        />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t pt-4">
        <button className="text-sm text-gray-600">Back</button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default CondoInfoPage;
