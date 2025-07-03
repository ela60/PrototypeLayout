"use client";

import React, { useState } from 'react';
import { Search, Plus, Trash2, Edit2 } from 'lucide-react';

interface FormData {
  // Basic Information
  propertyType: string;
  listingTitle: string;
  propertyDescription: string;
  
  // Location & Contact
  address: string;
  city: string;
  state: string;
  zipCode: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  
  // Pricing & Availability
  rentAmount: string;
  securityDeposit: string;
  applicationFee: string;
  petDeposit: string;
  availableDate: string;
  leaseTerm: string;
  
  // Property Details
  bedrooms: string;
  bathrooms: string;
  squareFootage: string;
  lotSize: string;
  yearBuilt: string;
  parkingSpaces: string;
  
  // Amenities
  appliances: string[];
  utilities: string[];
  features: string[];
  communityAmenities: string[];
  
  // Policies
  petPolicy: string;
  smokingPolicy: string;
  
  // Media
  photos: File[];
  virtualTour: string;
  floorPlan: string;
}

const PropertyListingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    propertyType: '',
    listingTitle: '',
    propertyDescription: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    rentAmount: '',
    securityDeposit: '',
    applicationFee: '',
    petDeposit: '',
    availableDate: '',
    leaseTerm: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    lotSize: '',
    yearBuilt: '',
    parkingSpaces: '',
    appliances: [],
    utilities: [],
    features: [],
    communityAmenities: [],
    petPolicy: '',
    smokingPolicy: '',
    photos: [],
    virtualTour: '',
    floorPlan: ''
  });

  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (category: string, item: string) => {
    setSelectedAmenities(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const FormSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">{title}</h3>
      {children}
    </div>
  );

  const FormField = ({ 
    label, 
    value, 
    onChange, 
    required = false, 
    optional = false,
    type = 'text',
    placeholder = '',
    multiline = false
  }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
    optional?: boolean;
    type?: string;
    placeholder?: string;
    multiline?: boolean;
  }) => (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
          {optional && <span className="text-gray-400 ml-1">(Optional)</span>}
        </label>
        <button className="text-blue-500 text-sm hover:underline flex items-center gap-1">
          <Plus className="w-3 h-3" />
          Add
        </button>
      </div>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={4}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      )}
    </div>
  );

  const CheckboxGroup = ({ 
    title, 
    items, 
    category 
  }: { 
    title: string; 
    items: string[]; 
    category: string;
  }) => (
    <div className="mb-6">
      <h4 className="text-sm font-medium text-gray-700 mb-3">{title}</h4>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item) => (
          <label key={item} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedAmenities.includes(item)}
              onChange={() => handleCheckboxChange(category, item)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{item}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const PhotoUploadSection = () => (
    <div className="mb-6">
      <h4 className="text-sm font-medium text-gray-700 mb-3">Property Photos</h4>
      <div className="grid grid-cols-6 gap-3 mb-4">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-400 transition-colors bg-gray-50"
          >
            <Plus className="w-6 h-6 text-gray-400" />
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm">
          Upload Photos
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
          Add Virtual Tour
        </button>
      </div>
    </div>
  );

  const appliances = [
    'Refrigerator', 'Stove/Oven', 'Microwave', 'Dishwasher', 
    'Washer', 'Dryer', 'Garbage Disposal', 'Ice Maker'
  ];

  const utilities = [
    'Electricity', 'Gas', 'Water', 'Sewer', 'Trash', 'Internet', 'Cable TV', 'Phone'
  ];

  const features = [
    'Air Conditioning', 'Heating', 'Fireplace', 'Balcony/Patio', 
    'Walk-in Closet', 'Hardwood Floors', 'Carpet', 'Tile Floors',
    'Ceiling Fans', 'Window Coverings', 'Storage Space', 'Garage'
  ];

  const communityAmenities = [
    'Swimming Pool', 'Fitness Center', 'Tennis Court', 'Playground',
    'Clubhouse', 'Business Center', 'Laundry Facility', 'Pet Area',
    'Gated Community', 'Security System', 'Parking', 'Public Transportation'
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5 text-blue-500" />
          <span className="font-medium">SearchYard</span>
        </div>
        <button className="text-blue-500 text-sm hover:underline">Save & Exit</button>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8 text-gray-800">Property Listing Information</h1>
        
        {/* Basic Information */}
        <FormSection title="Basic Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Property Type"
              value={formData.propertyType}
              onChange={(value) => handleInputChange('propertyType', value)}
              required
              placeholder="e.g., Apartment, House, Condo"
            />
            <FormField
              label="Listing Title"
              value={formData.listingTitle}
              onChange={(value) => handleInputChange('listingTitle', value)}
              required
              placeholder="e.g., Beautiful 2BR Apartment"
            />
          </div>
          <FormField
            label="Property Description"
            value={formData.propertyDescription}
            onChange={(value) => handleInputChange('propertyDescription', value)}
            multiline
            placeholder="Describe your property in detail..."
          />
        </FormSection>

        {/* Location & Contact */}
        <FormSection title="Location & Contact Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Street Address"
              value={formData.address}
              onChange={(value) => handleInputChange('address', value)}
              required
              placeholder="123 Main Street"
            />
            <FormField
              label="City"
              value={formData.city}
              onChange={(value) => handleInputChange('city', value)}
              required
              placeholder="City"
            />
            <FormField
              label="State"
              value={formData.state}
              onChange={(value) => handleInputChange('state', value)}
              required
              placeholder="State"
            />
            <FormField
              label="Zip Code"
              value={formData.zipCode}
              onChange={(value) => handleInputChange('zipCode', value)}
              required
              placeholder="12345"
            />
            <FormField
              label="Contact Name"
              value={formData.contactName}
              onChange={(value) => handleInputChange('contactName', value)}
              required
              placeholder="John Doe"
            />
            <FormField
              label="Contact Phone"
              value={formData.contactPhone}
              onChange={(value) => handleInputChange('contactPhone', value)}
              type="tel"
              required
              placeholder="(555) 123-4567"
            />
          </div>
          <FormField
            label="Contact Email"
            value={formData.contactEmail}
            onChange={(value) => handleInputChange('contactEmail', value)}
            type="email"
            required
            placeholder="john@example.com"
          />
        </FormSection>

        {/* Pricing & Availability */}
        <FormSection title="Pricing & Availability">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Monthly Rent"
              value={formData.rentAmount}
              onChange={(value) => handleInputChange('rentAmount', value)}
              type="number"
              required
              placeholder="$1,200"
            />
            <FormField
              label="Security Deposit"
              value={formData.securityDeposit}
              onChange={(value) => handleInputChange('securityDeposit', value)}
              type="number"
              placeholder="$1,200"
            />
            <FormField
              label="Application Fee"
              value={formData.applicationFee}
              onChange={(value) => handleInputChange('applicationFee', value)}
              type="number"
              optional
              placeholder="$50"
            />
            <FormField
              label="Pet Deposit"
              value={formData.petDeposit}
              onChange={(value) => handleInputChange('petDeposit', value)}
              type="number"
              optional
              placeholder="$300"
            />
            <FormField
              label="Available Date"
              value={formData.availableDate}
              onChange={(value) => handleInputChange('availableDate', value)}
              type="date"
              required
            />
            <FormField
              label="Lease Term"
              value={formData.leaseTerm}
              onChange={(value) => handleInputChange('leaseTerm', value)}
              placeholder="12 months"
            />
          </div>
        </FormSection>

        {/* Property Details */}
        <FormSection title="Property Details">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <FormField
              label="Bedrooms"
              value={formData.bedrooms}
              onChange={(value) => handleInputChange('bedrooms', value)}
              type="number"
              required
              placeholder="2"
            />
            <FormField
              label="Bathrooms"
              value={formData.bathrooms}
              onChange={(value) => handleInputChange('bathrooms', value)}
              type="number"
              required
              placeholder="1.5"
            />
            <FormField
              label="Square Footage"
              value={formData.squareFootage}
              onChange={(value) => handleInputChange('squareFootage', value)}
              type="number"
              placeholder="1,200"
            />
            <FormField
              label="Lot Size"
              value={formData.lotSize}
              onChange={(value) => handleInputChange('lotSize', value)}
              optional
              placeholder="0.25 acres"
            />
            <FormField
              label="Year Built"
              value={formData.yearBuilt}
              onChange={(value) => handleInputChange('yearBuilt', value)}
              type="number"
              optional
              placeholder="1995"
            />
            <FormField
              label="Parking Spaces"
              value={formData.parkingSpaces}
              onChange={(value) => handleInputChange('parkingSpaces', value)}
              type="number"
              placeholder="2"
            />
          </div>
        </FormSection>

        {/* Amenities & Features */}
        <FormSection title="Amenities & Features">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CheckboxGroup title="Appliances Included" items={appliances} category="appliances" />
            <CheckboxGroup title="Utilities Included" items={utilities} category="utilities" />
            <CheckboxGroup title="Property Features" items={features} category="features" />
            <CheckboxGroup title="Community Amenities" items={communityAmenities} category="community" />
          </div>
        </FormSection>

        {/* Policies */}
        <FormSection title="Policies">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Pet Policy"
              value={formData.petPolicy}
              onChange={(value) => handleInputChange('petPolicy', value)}
              placeholder="e.g., Cats allowed, No dogs"
            />
            <FormField
              label="Smoking Policy"
              value={formData.smokingPolicy}
              onChange={(value) => handleInputChange('smokingPolicy', value)}
              placeholder="e.g., No smoking"
            />
          </div>
        </FormSection>

        {/* Media */}
        <FormSection title="Photos & Media">
          <PhotoUploadSection />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Virtual Tour URL"
              value={formData.virtualTour}
              onChange={(value) => handleInputChange('virtualTour', value)}
              optional
              placeholder="https://example.com/virtual-tour"
            />
            <FormField
              label="Floor Plan URL"
              value={formData.floorPlan}
              onChange={(value) => handleInputChange('floorPlan', value)}
              optional
              placeholder="https://example.com/floor-plan"
            />
          </div>
        </FormSection>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-6 border-t bg-gray-50 sticky bottom-0">
        <button className="px-6 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100">
          Back
        </button>
        <div className="flex items-center gap-4">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Step 1 of 3
          </div>
          <button className="px-8 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyListingForm;