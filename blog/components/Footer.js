export default function Footer() {
  return (
    <div className="w-full bg-sky-blue-500 h-64 items-center justify-between flex flex-row px-64 py-16">
      <h3 className="font-semibold text-heading-green-500 text-3xl">
        Peltorob
      </h3>
      <div className="text-gray-900 flex flex-col gap-4">
        <h2 className="text-center text-xl">Instagram</h2>
        <h2 className="text-center text-xl">Github</h2>
        <h2 className="text-center text-xl">Twitter</h2>
      </div>
    </div>
  );
}
