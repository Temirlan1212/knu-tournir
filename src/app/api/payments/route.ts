import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { options } from "../auth/[...nextauth]/options";

export async function POST(req: Request) {
  const body = await req.json();
  const { amount, created_at, status } = body;
  const session = await getServerSession(options);
  const token = session?.user?.access;

  const params = new URLSearchParams();
  amount && params.append("amount", String(amount));
  created_at && params.append("created_at", String(created_at));
  status && params.append("status", String(status));

  try {
    const url = `${process.env.API_URL}/payments/?${params}`;

    const res = await fetch(url, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return new NextResponse(
      JSON.stringify({
        data,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
