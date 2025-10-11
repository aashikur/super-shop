// src/components/ProtectedClient.jsx
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedClient({ children }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/signin"); // your sign-in page
  }, [status, router]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "authenticated") return <>{children}</>;

  return null;
}
