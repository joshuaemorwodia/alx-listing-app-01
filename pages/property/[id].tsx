// pages/property/[id].tsx
import React from 'react';
import PropertyDetail from '@/components/property/PropertyDetail';
import BookingSection from '@/components/property/BookingSection';
import ReviewSection from '@/components/property/ReviewSection';

export default function PropertyPage() {
  return (
    <div>
      <PropertyDetail />
      <BookingSection />
      <ReviewSection />
    </div>
  );
}

