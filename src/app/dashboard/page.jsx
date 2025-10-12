import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Return from "@/app/dashboard/Return";
import Link from "next/link";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Access Denied
          </h1>
          <p className="text-gray-600 mb-6">
            Please sign in to access the dashboard
          </p>
          <Link 
            href="/login" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome, {session?.user?.name}!
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="text-gray-600 mb-4">
            You're successfully logged into your dashboard
          </p>
          {session?.user?.email && (
            <p className="text-sm text-gray-500">
              Logged in as: {session.user.email}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}