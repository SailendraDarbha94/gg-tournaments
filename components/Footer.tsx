export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-green-500/20 py-8">
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-black font-bold">FIFA</span>
          </div>
          <span className="text-xl font-bold text-white">GG Tournaments</span>
        </div>
        <p className="text-gray-400 mb-4">
          Bringing FIFA enthusiasts together for epic online battles. Fair play, great prizes, unforgettable memories.
        </p>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <span>© 2024 GG Tournaments</span>
          <span>•</span>
          <span>Contact: tournaments@gg.com</span>
          <span>•</span>
          <span>WhatsApp: +91 XXXXX XXXXX</span>
        </div>
      </div>
    </footer>
  );
}