const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const nights = 7; // You can make this dynamic later

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div className="mt-4">
        <label className="block text-sm font-medium">Check-in</label>
        <input type="date" className="border p-2 w-full mt-1" />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Check-out</label>
        <input type="date" className="border p-2 w-full mt-1" />
      </div>

      <div className="mt-4">
        <p>Total payment: <strong>${price * nights}</strong></p>
      </div>

      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
