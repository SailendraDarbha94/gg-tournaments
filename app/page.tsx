import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-image.png"
          alt="FIFA Tournament Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-display font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-white via-green-400 to-blue-400 bg-clip-text text-transparent">FIFA</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">TOURNAMENTS</span>
          </h1>
          <p className="text-subheadline text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
            Experience the ultimate online FIFA tournament. Compete in knockout matches, showcase your skills, and win amazing prizes in the most exciting gaming competition.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/register"
            className="fc25-button px-12 py-5 text-black font-bold text-lg inline-block"
          >
            Register Now
          </Link>
          <Link
            href="/tournament"
            className="glass-effect px-12 py-5 border border-green-400/30 text-green-400 font-semibold text-lg rounded-xl hover:border-green-400/60 hover:bg-green-400/10 transition-all duration-200 inline-block"
          >
            View Tournament
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="glass-effect p-6 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🏆</span>
            </div>
            <h3 className="text-subheadline text-white mb-2">₹7,800</h3>
            <p className="text-caption text-gray-300">Total Prize Pool</p>
          </div>
          
          <div className="glass-effect p-6 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">⚡</span>
            </div>
            <h3 className="text-subheadline text-white mb-2">Knockout</h3>
            <p className="text-caption text-gray-300">Tournament Style</p>
          </div>
          
          <div className="glass-effect p-6 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🎮</span>
            </div>
            <h3 className="text-subheadline text-white mb-2">FC25</h3>
            <p className="text-caption text-gray-300">Latest Version</p>
          </div>
        </div>
      </div>
    </section>
  );
}
