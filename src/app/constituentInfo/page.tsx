"use client";

import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';

interface FormData {
  [key: string]: string | string[];
}

const PropertyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({});

  const FormRow = ({ 
    label, 
    status = '', 
    rightLabel = '', 
    rightStatus = '',
    hasAdd = true 
  }: {
    label: string;
    status?: string;
    rightLabel?: string;
    rightStatus?: string;
    hasAdd?: boolean;
  }) => (
    <div className="flex items-center py-2 border-b border-gray-100">
      <div className="flex-1 flex items-center">
        <span className="text-gray-700 text-sm">{label}</span>
        {status && (
          <span className={`ml-2 text-xs ${
            status === '(Required)' ? 'text-red-500' : 
            status === '(Optional)' ? 'text-gray-500' :
            status === '(Optional but recommended)' ? 'text-gray-500' : 'text-gray-500'
          }`}>
            {status}
          </span>
        )}
      </div>
      
      {rightLabel && (
        <div className="flex-1 flex items-center ml-8">
          <span className="text-gray-700 text-sm">{rightLabel}</span>
          {rightStatus && (
            <span className={`ml-2 text-xs ${
              rightStatus === '(Required)' ? 'text-red-500' : 
              rightStatus === '(Optional)' ? 'text-gray-500' :
              rightStatus === '(Optional but recommended)' ? 'text-gray-500' : 'text-gray-500'
            }`}>
              {rightStatus}
            </span>
          )}
        </div>
      )}
      
      {hasAdd && (
        <button className="text-blue-500 text-sm hover:underline ml-4">+ Add</button>
      )}
    </div>
  );

  const PhotoGrid = () => (
    <div className="my-6">
      <div className="text-sm text-gray-600 mb-3">Featured photo:</div>
      <div className="grid grid-cols-7 gap-2">
        {[...Array(14)].map((_, index) => (
          <div 
            key={index}
            className="aspect-square border-2 border-dashed border-gray-300 rounded flex items-center justify-center cursor-pointer hover:border-blue-400 transition-colors bg-gray-50"
          >
            <Plus className="w-4 h-4 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );

  const AmenitiesSection = () => {
    const amenities = [
      'Fitness center/gym', 'Swimming pool', 'Spa/hot tub', 'Tennis court',
      'Basketball court', 'Golf course', 'Playground', 'Dog park',
      'Business center', 'Conference room', 'Rooftop deck', 'BBQ/picnic area',
      'Concierge service', 'Valet parking', 'Storage units', 'Bike storage',
      'Package receiving', 'Dry cleaning service', 'Car wash', 'EV charging'
    ];

    return (
      <div className="my-6">
        <div className="text-sm text-gray-700 mb-3">Select amenities available:</div>
        <div className="grid grid-cols-2 gap-2">
          {amenities.map((amenity, index) => (
            <label key={index} className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
              />
              <span className="text-gray-700">{amenity}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  const FloorPlanSection = () => (
    <div className="my-6">
      <div className="text-sm text-gray-700 mb-3">Floor plan:</div>
      <div className="flex gap-6 items-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded flex items-center justify-center mb-2">
            <Plus className="w-6 h-6 text-gray-400" />
          </div>
          <span className="text-xs text-gray-500">Studio</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded flex items-center justify-center mb-2">
            <Plus className="w-6 h-6 text-gray-400" />
          </div>
          <span className="text-xs text-gray-500">1 Bed</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded flex items-center justify-center mb-2">
            <Plus className="w-6 h-6 text-gray-400" />
          </div>
          <span className="text-xs text-gray-500">2 Bed</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded flex items-center justify-center mb-2">
            <Plus className="w-6 h-6 text-gray-400" />
          </div>
          <span className="text-xs text-gray-500">3 Bed</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded flex items-center justify-center mb-2">
            <Plus className="w-6 h-6 text-gray-400" />
          </div>
          <span className="text-xs text-gray-500">4 Bed</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded flex items-center justify-center mb-2">
            <Plus className="w-6 h-6 text-gray-400" />
          </div>
          <span className="text-xs text-gray-500">5+ Bed</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5 text-blue-500" />
          <span className="font-medium">SearchYard</span>
        </div>
        <button className="text-blue-500 text-sm hover:underline">Save & Exit</button>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-6 text-gray-800">Condominium Information</h2>
        
        <div className="space-y-0">
          <FormRow 
            label="Property address" 
            status="(Required)"
            rightLabel="Pet deposit"
            rightStatus="(Optional but recommended)"
          />
          
          <FormRow 
            label="Leasing info" 
            status="(Required)"
            rightLabel="Parking"
            rightStatus="(Optional)"
          />
          
          <FormRow 
            label="Charges" 
            status="(Required)"
            rightLabel="Nearest educational institutions"
            rightStatus="(Optional but recommended)"
          />
          
          <FormRow 
            label="Rent frequency & payment reminders" 
            status="(Required)"
            rightLabel="Nearest stations"
            rightStatus="(Optional but recommended)"
          />
          
          <FormRow 
            label="Application Agreement" 
            status="(Optional)"
            rightLabel="Nearest landmarks"
            rightStatus="(Optional but recommended)"
          />
          
          <FormRow 
            label="About the property" 
            status="(Optional)"
            rightLabel="Utilities provided"
            rightStatus="(Optional but recommended)"
          />
          
          <FormRow 
            label="Community amenities" 
            status="(Optional but recommended)"
            rightLabel=""
          />
        </div>

        <div className="mt-8">
          <FormRow 
            label="Property photos" 
            status="(not well utilized)"
            hasAdd={false}
          />
          <PhotoGrid />
        </div>

        <AmenitiesSection />

        <FloorPlanSection />

        <div className="space-y-0 mt-8">
          <FormRow 
            label="More photos" 
            status="(Optional)"
          />
          
          <FormRow 
            label="Videos" 
            status="(Optional)"
          />
          
          <FormRow 
            label="Virtual tour link" 
            status="(Optional)"
          />
          
          <FormRow 
            label="Neighborhood information" 
            status="(Optional)"
          />
          
          <FormRow 
            label="Transportation" 
            status="(Optional)"
          />
          
          <FormRow 
            label="Schools nearby" 
            status="(Optional)"
          />
          
          <FormRow 
            label="Shopping centers" 
            status="(Optional)"
          />
          
          <FormRow 
            label="Hospitals/medical facilities" 
            status="(Optional)"
          />
          
          <FormRow 
            label="Recreation/entertainment" 
            status="(Optional)"
          />
          
          <FormRow 
            label="Restaurants/dining" 
            status="(Optional)"
          />
          
          <FormRow 
            label="Additional notes" 
            status="(Optional)"
          />
        </div>

        <div className="mt-8">
          <div className="text-sm text-gray-700 mb-4">Contact information:</div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Name</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded text-sm"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Phone</label>
              <input 
                type="tel" 
                className="w-full p-2 border border-gray-300 rounded text-sm"
                placeholder="Enter phone"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full p-2 border border-gray-300 rounded text-sm"
                placeholder="Enter email"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t bg-gray-50">
        <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
          Back
        </button>
        <div className="flex items-center gap-4">
          <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
            1240 • 1244 Hub
          </div>
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;