import RegistrationForm from '@/components/RegistrationForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-display bg-gradient-to-r from-white via-gray-100 to-green-400 bg-clip-text text-transparent mb-6">
            Join the Tournament
          </h1>
          <p className="text-body text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to showcase your FIFA skills? Register now and compete against the best players for amazing prizes.
          </p>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
}