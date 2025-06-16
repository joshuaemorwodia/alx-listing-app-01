// components/property/BookingSection.tsx
import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const getDays = () => {
    if (!checkIn || !checkOut) return 0;
    const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  const nights = getDays();
  const total = price * nights;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-20">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label>Check-in</label>
        <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} className="border p-2 w-full mt-1 rounded-md" />
      </div>
      <div className="mt-4">
        <label>Check-out</label>
        <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} className="border p-2 w-full mt-1 rounded-md" />
      </div>

      <div className="mt-4">
        <p>Total payment: <strong>${total || 0}</strong></p>
      </div>

      <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
