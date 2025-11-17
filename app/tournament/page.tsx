'use client';

import { useState, useEffect } from 'react';
import { RegistrationData } from '@/types';

export default function TournamentPage() {
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);

  // Load registrations from localStorage on component mount
  useEffect(() => {
    const savedRegistrations = localStorage.getItem('tournamentRegistrations');
    if (savedRegistrations) {
      setRegistrations(JSON.parse(savedRegistrations));
    }
  }, []);

  const renderBracket = () => {
    const players = registrations.slice(0, 8); // Max 8 players for demo
    const rounds = [
      { name: 'Quarter Finals', matches: 4 },
      { name: 'Semi Finals', matches: 2 },
      { name: 'Finals', matches: 1 }
    ];

    return (
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-display bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Tournament Bracket
          </h1>
          <p className="text-body text-gray-300 max-w-2xl mx-auto">
            Knockout-style tournament featuring the best FIFA players. May the best gamer win!
          </p>
        </div>
        
        {players.length < 2 ? (
          <div className="fc25-card p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🎮</span>
            </div>
            <h3 className="text-headline text-gray-300 mb-4">Waiting for Players</h3>
            <p className="text-body text-gray-400 mb-2">Need at least 2 players to generate bracket</p>
            <p className="text-caption text-gray-500">Current registrations: {registrations.length}</p>
          </div>
        ) : (
          <div className="flex justify-between items-center space-x-8 overflow-x-auto pb-4">
            {rounds.map((round, roundIndex) => (
              <div key={round.name} className="flex flex-col items-center space-y-6 min-w-[280px]">
                <h3 className="text-subheadline text-blue-400 font-semibold">{round.name}</h3>
                <div className="space-y-4">
                  {Array.from({ length: round.matches }, (_, matchIndex) => (
                    <div key={matchIndex} className="fc25-card p-6 w-full">
                      <div className="space-y-3">
                        <div className="glass-effect p-3 rounded-lg flex justify-between items-center">
                          <span className="text-body font-medium">{players[matchIndex * 2]?.name || 'TBD'}</span>
                          <span className="text-caption text-green-400">-</span>
                        </div>
                        <div className="text-center">
                          <span className="text-caption text-gray-400">VS</span>
                        </div>
                        <div className="glass-effect p-3 rounded-lg flex justify-between items-center">
                          <span className="text-body font-medium">{players[matchIndex * 2 + 1]?.name || 'TBD'}</span>
                          <span className="text-caption text-green-400">-</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderBracket()}
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="fc25-card p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">⚽</span>
            </div>
            <h3 className="text-subheadline text-blue-400 mb-6">Tournament Format</h3>
            <ul className="text-body text-gray-300 space-y-3">
              <li className="flex items-center"><span className="text-green-400 mr-3">•</span>Knockout Style Tournament</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">•</span>FIFA FC25 Latest Version</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">•</span>Online Multiplayer</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">•</span>90-minute matches</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">•</span>Fair Play Rules</li>
            </ul>
          </div>
          
          <div className="fc25-card p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="text-subheadline text-green-400 mb-6">Schedule</h3>
            <ul className="text-body text-gray-300 space-y-3">
              <li className="flex items-center"><span className="text-green-400 mr-3">•</span>Registration: Open Now</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">•</span>Tournament Start: Next Weekend</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">•</span>Quarter Finals: Day 1</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">•</span>Semi Finals: Day 2</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">•</span>Finals: Day 2 Evening</li>
            </ul>
          </div>
          
          <div className="fc25-card p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-subheadline text-yellow-400 mb-6">Rules & Guidelines</h3>
            <ul className="text-body text-gray-300 space-y-3">
              <li className="flex items-center"><span className="text-green-400 mr-3">•</span>Active PlayStation Plus required</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">•</span>No disconnections allowed</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">•</span>Report scores immediately</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">•</span>Respectful conduct required</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">•</span>Admin decision is final</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}