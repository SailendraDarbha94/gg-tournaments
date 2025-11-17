'use client';

import { useState, useEffect } from 'react';
import { RegistrationData } from '@/types';

export default function RegistrationForm() {
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);
  const [formData, setFormData] = useState<RegistrationData>({
    name: '',
    age: '',
    psId: '',
    phone: '',
    email: '',
    upiId: ''
  });

  // Load registrations from localStorage on component mount
  useEffect(() => {
    const savedRegistrations = localStorage.getItem('tournamentRegistrations');
    if (savedRegistrations) {
      setRegistrations(JSON.parse(savedRegistrations));
    }
  }, []);

  // Save registrations to localStorage whenever registrations change
  useEffect(() => {
    localStorage.setItem('tournamentRegistrations', JSON.stringify(registrations));
  }, [registrations]);

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

  return (
    <div className="max-w-2xl mx-auto">
      <div className="fc25-card p-8 lg:p-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-3">
              <label className="block text-caption text-gray-300 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="fc25-input w-full px-4 py-4 text-body focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-3">
              <label className="block text-caption text-gray-300 font-medium">Age</label>
              <input
                type="number"
                name="age"
                required
                min="13"
                max="99"
                value={formData.age}
                onChange={handleInputChange}
                className="fc25-input w-full px-4 py-4 text-body focus:outline-none"
                placeholder="Enter your age"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-caption text-gray-300 font-medium">PlayStation ID</label>
            <input
              type="text"
              name="psId"
              required
              value={formData.psId}
              onChange={handleInputChange}
              className="fc25-input w-full px-4 py-4 text-body focus:outline-none"
              placeholder="Enter your PlayStation ID"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-3">
              <label className="block text-caption text-gray-300 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="fc25-input w-full px-4 py-4 text-body focus:outline-none"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div className="space-y-3">
              <label className="block text-caption text-gray-300 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="fc25-input w-full px-4 py-4 text-body focus:outline-none"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-caption text-gray-300 font-medium">UPI ID</label>
            <input
              type="text"
              name="upiId"
              required
              value={formData.upiId}
              onChange={handleInputChange}
              className="fc25-input w-full px-4 py-4 text-body focus:outline-none"
              placeholder="yourname@upi"
            />
          </div>

          <button
            type="submit"
            className="fc25-button w-full px-8 py-4 text-black font-semibold text-body"
          >
            Register for Tournament
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-subheadline text-green-400 mb-6">
            Registered Players ({registrations.length})
          </h3>
          {registrations.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-body text-gray-400">No registrations yet</p>
              <p className="text-caption text-gray-500 mt-2">Be the first to join!</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {registrations.map((player, index) => (
                <div key={index} className="glass-effect p-4 rounded-xl flex justify-between items-center">
                  <div>
                    <span className="text-body font-medium text-white">{player.name}</span>
                    <span className="text-caption text-gray-400 ml-3">Age: {player.age}</span>
                  </div>
                  <span className="text-caption text-green-400 font-mono">{player.psId}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}