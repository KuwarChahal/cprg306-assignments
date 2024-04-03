"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Shopping List</h1>
      {user ? (
        <div>
          <p className="mb-2">You are currently signed in as:</p>
          <p className="mb-4 font-bold">{user.displayName} ({user.email})</p>
          <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
          <Link href="/week-10/shopping-list">
            <div className="block mt-4 text-blue-500 hover:underline font-bold">Go to Shopping List</div>
          </Link>
        </div>
      ) : (
        <div>
          <p className="mb-4">Please sign in to continue:</p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded" onClick={handleSignIn}>
            Sign in with GitHub
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
