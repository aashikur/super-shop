// src/app/dashboard/page.jsx (server component)
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    // redirect to login or show message
    alert("login Required");
  }
  return <div>Welcome, {session.user?.name}</div>;
}
