'use client';

import Image from "next/image";
import { useState } from 'react';

interface RegistrationData {
  name: string;
  age: string;
  psId: string;
  phone: string;
  email: string;
  upiId: string;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);
  const [formData, setFormData] = useState<RegistrationData>({
    name: '',
    age: '',
    psId: '',
    phone: '',
    email: '',
    upiId: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistrations([...registrations, formData]);
    setFormData({
      name: '',
      age: '',
      psId: '',
      phone: '',
      email: '',
      upiId: ''
    });
    alert('Registration successful! Check the Tournament section to see registered players.');
  };

  const renderBracket = () => {
    const players = registrations.slice(0, 8); // Max 8 players for demo
    const rounds = [
      { name: 'Quarter Finals', matches: 4 },
      { name: 'Semi Finals', matches: 2 },
      { name: 'Finals', matches: 1 }
    ];

    return (
      <div className="w-full max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-400">Tournament Bracket</h2>
        {players.length < 2 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">Need at least 2 players to generate bracket</p>
            <p className="text-lg text-gray-500 mt-2">Current registrations: {registrations.length}</p>
          </div>
        ) : (
          <div className="flex justify-between items-center space-x-8">
            {rounds.map((round, roundIndex) => (
              <div key={round.name} className="flex flex-col items-center space-y-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">{round.name}</h3>
                {Array.from({ length: round.matches }, (_, matchIndex) => (
                  <div key={matchIndex} className="bg-gray-800 rounded-lg p-4 min-w-[200px]">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                        <span className="text-sm">{players[matchIndex * 2]?.name || 'TBD'}</span>
                        <span className="text-xs text-gray-400">vs</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                        <span className="text-sm">{players[matchIndex * 2 + 1]?.name || 'TBD'}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-green-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold">FIFA</span>
              </div>
              <span className="text-xl font-bold text-white">GG Tournaments</span>
            </div>
            <div className="flex space-x-6">
              {['home', 'register', 'tournament', 'prizes'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === section
                      ? 'bg-green-500 text-black'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/hero-image.png"
              alt="FIFA Tournament Hero"
              fill
              className="object-cover opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              FIFA <span className="text-green-400">TOURNAMENTS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Experience the ultimate online FIFA tournament. Register now, compete in knockout matches, and win exciting prizes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveSection('register')}
                className="px-8 py-4 bg-green-500 text-black font-bold rounded-lg text-lg hover:bg-green-400 transition-all transform hover:scale-105"
              >
                Register Now
              </button>
              <button
                onClick={() => setActiveSection('tournament')}
                className="px-8 py-4 bg-transparent border-2 border-green-500 text-green-500 font-bold rounded-lg text-lg hover:bg-green-500 hover:text-black transition-all"
              >
                View Tournament
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Registration Section */}
      {activeSection === 'register' && (
        <section className="min-h-screen pt-24 pb-12 px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">Tournament Registration</h2>
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-green-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Age</label>
                    <input
                      type="number"
                      name="age"
                      required
                      min="13"
                      max="99"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your age"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">PlayStation ID</label>
                  <input
                    type="text"
                    name="psId"
                    required
                    value={formData.psId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your PlayStation ID"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">UPI ID</label>
                  <input
                    type="text"
                    name="upiId"
                    required
                    value={formData.upiId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="yourname@upi"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-green-500 text-black font-bold rounded-lg text-lg hover:bg-green-400 transition-all transform hover:scale-105"
                >
                  Register for Tournament
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-600">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Registered Players ({registrations.length})</h3>
                {registrations.length === 0 ? (
                  <p className="text-gray-400">No registrations yet</p>
                ) : (
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {registrations.map((player, index) => (
                      <div key={index} className="flex justify-between items-center bg-gray-700 p-3 rounded-lg">
                        <span className="text-white font-medium">{player.name}</span>
                        <span className="text-gray-400 text-sm">{player.psId}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tournament Section */}
      {activeSection === 'tournament' && (
        <section className="min-h-screen pt-24 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            {renderBracket()}
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/90 p-6 rounded-xl border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Tournament Format</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Knockout Style Tournament</li>
                  <li>• FIFA Latest Version</li>
                  <li>• Online Multiplayer</li>
                  <li>• 90-minute matches</li>
                  <li>• Fair Play Rules</li>
                </ul>
              </div>
              
              <div className="bg-gray-800/90 p-6 rounded-xl border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-4">Schedule</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Registration: Open Now</li>
                  <li>• Tournament Start: Next Weekend</li>
                  <li>• Quarter Finals: Day 1</li>
                  <li>• Semi Finals: Day 2</li>
                  <li>• Finals: Day 2 Evening</li>
                </ul>
              </div>
              
              <div className="bg-gray-800/90 p-6 rounded-xl border border-yellow-500/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Rules & Guidelines</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Must have active PlayStation Plus</li>
                  <li>• No disconnections allowed</li>
                  <li>• Report scores immediately</li>
                  <li>• Respectful conduct required</li>
                  <li>• Admin decision is final</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Prizes Section */}
      {activeSection === 'prizes' && (
        <section className="min-h-screen pt-24 pb-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">Prize Pool</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 p-8 rounded-2xl border border-yellow-500/30">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">1st Place</h3>
                <p className="text-5xl font-bold text-white mb-4">₹5,000</p>
                <p className="text-gray-300">Winner takes the crown and the biggest prize!</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-400/20 to-gray-500/20 p-8 rounded-2xl border border-gray-400/30">
                <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥈</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-300 mb-2">2nd Place</h3>
                <p className="text-4xl font-bold text-white mb-4">₹2,000</p>
                <p className="text-gray-300">Runner-up receives a substantial reward!</p>
              </div>
            </div>

            <div className="bg-gray-800/90 p-8 rounded-2xl border border-green-500/20">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Additional Rewards</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🎮</span>
                  </div>
                  <h4 className="font-semibold text-blue-400">Best Goal</h4>
                  <p className="text-gray-300 text-sm">₹500 Prize</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">⚡</span>
                  </div>
                  <h4 className="font-semibold text-purple-400">Fair Play</h4>
                  <p className="text-gray-300 text-sm">Special Recognition</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🔥</span>
                  </div>
                  <h4 className="font-semibold text-red-400">Top Scorer</h4>
                  <p className="text-gray-300 text-sm">₹300 Prize</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-gray-300 mb-6">
                Total Prize Pool: <span className="text-green-400 font-bold text-2xl">₹7,800</span>
              </p>
              <button
                onClick={() => setActiveSection('register')}
                className="px-8 py-4 bg-green-500 text-black font-bold rounded-lg text-lg hover:bg-green-400 transition-all transform hover:scale-105"
              >
                Register Now to Compete!
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
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
    </div>
  );
}
