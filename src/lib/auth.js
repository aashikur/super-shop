// src/lib/auth.js
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function getSessionFromServer(req) {
  return await getServerSession(authOptions);
}
