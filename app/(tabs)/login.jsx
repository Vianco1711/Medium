import React from "react";

const MediumSignup: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-serif font-medium mb-8">Medium</h1>
      <div className="text-center mb-10">
        <h2 className="text-5xl font-serif font-light leading-tight">Human</h2>
        <h2 className="text-5xl font-serif font-light leading-tight">
          stories and
        </h2>
        <h2 className="text-5xl font-serif font-light leading-tight mb-4">
          ideas.
        </h2>
        <p className="text-gray-400 text-sm">
          Discover perspectives that deepen understanding.
        </p>
      </div>

      <div className="space-y-4 w-full max-w-sm">
        <button
          className="flex items-center justify-center gap-3 w-full border border-white rounded-full py-2.5 hover:bg-white hover:text-black transition duration-200"
          aria-label="Sign up with Google"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
            aria-hidden="true"
          />
          Sign up with Google
        </button>
        <button
          className="flex items-center justify-center gap-3 w-full border border-white rounded-full py-2.5 hover:bg-white hover:text-black transition duration-200"
          aria-label="Sign up with Facebook"
        >
          <img
            src="https://www.svgrepo.com/show/475630/facebook-color.svg"
            alt="Facebook"
            className="w-5 h-5"
            aria-hidden="true"
          />
          Sign up with Facebook
        </button>
        <button
          className="flex items-center justify-center gap-3 w-full border border-white rounded-full py-2.5 hover:bg-white hover:text-black transition duration-200"
          aria-label="Sign up with Apple"
        >
          <img
            src="https://www.svgrepo.com/show/303130/apple-logo.svg"
            alt="Apple"
            className="w-5 h-5 invert"
            aria-hidden="true"
          />
          Sign up with Apple
        </button>
        <button
          className="flex items-center justify-center gap-3 w-full border border-white rounded-full py-2.5 hover:bg-white hover:text-black transition duration-200"
          aria-label="Sign up with Email"
        >
          <img
            src="https://www.svgrepo.com/show/494305/mail.svg"
            alt="Email"
            className="w-5 h-5 invert"
            aria-hidden="true"
          />
          Sign up with Email
        </button>
      </div>

      <p className="text-sm text-gray-400 mt-8">
        Already have an account?{" "}
        <a
          href="#"
          className="text-green-500 hover:underline focus:outline-none focus:ring-1 focus:ring-green-500 rounded"
        >
          Sign in
        </a>
      </p>
    </div>
  );
};

export default MediumSignup;
