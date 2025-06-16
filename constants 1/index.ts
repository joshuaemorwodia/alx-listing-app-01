import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-6">Welcome to ALX Listing App</h1>

      <Card title="Nice Apartment" description="A lovely 2-bedroom apartment." />

      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert("Booked!")} />
      </div>
    </main>
  );
}
