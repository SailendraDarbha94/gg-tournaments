import Link from 'next/link';

export default function PrizesPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-display bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
            Prize Pool
          </h1>
          <p className="text-body text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Compete for amazing rewards and recognition. Our prize pool reflects the competitive spirit of FC25.
          </p>
        </div>
        
        {/* Main Prizes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="fc25-card p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/5"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-headline text-yellow-400 mb-4">Champion</h3>
              <p className="text-6xl lg:text-7xl font-bold text-white mb-6">₹5,000</p>
              <p className="text-body text-gray-300 leading-relaxed">
                The ultimate prize for the tournament champion. Glory, recognition, and the biggest reward.
              </p>
            </div>
          </div>
          
          <div className="fc25-card p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 to-gray-600/5"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-3xl">🥈</span>
              </div>
              <h3 className="text-headline text-gray-300 mb-4">Runner-up</h3>
              <p className="text-5xl lg:text-6xl font-bold text-white mb-6">₹2,000</p>
              <p className="text-body text-gray-300 leading-relaxed">
                An excellent achievement deserving substantial recognition and reward.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Rewards */}
        <div className="fc25-card p-8 lg:p-12 mb-16">
          <h3 className="text-headline text-green-400 text-center mb-12">Additional Rewards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl">🎮</span>
              </div>
              <h4 className="text-subheadline text-blue-400 mb-3">Best Goal</h4>
              <p className="text-2xl font-bold text-white mb-2">₹500</p>
              <p className="text-caption text-gray-400">For the most spectacular goal</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-subheadline text-purple-400 mb-3">Fair Play</h4>
              <p className="text-2xl font-bold text-white mb-2">Recognition</p>
              <p className="text-caption text-gray-400">Sportsmanship award</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl">🔥</span>
              </div>
              <h4 className="text-subheadline text-red-400 mb-3">Top Scorer</h4>
              <p className="text-2xl font-bold text-white mb-2">₹300</p>
              <p className="text-caption text-gray-400">Most goals in tournament</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="mb-8">
            <p className="text-subheadline text-gray-300 mb-2">
              Total Prize Pool
            </p>
            <p className="text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              ₹7,800
            </p>
          </div>
          <Link
            href="/register"
            className="fc25-button inline-block px-12 py-4 text-black font-semibold text-body"
          >
            Register Now to Compete!
          </Link>
        </div>
      </div>
    </div>
  );
}