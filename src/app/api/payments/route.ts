import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { amount, created_at, status } = body;

  const params = new URLSearchParams();
  amount && params.append("amount", String(amount));
  created_at && params.append("created_at", String(created_at));
  status && params.append("status", String(status));

  try {
    const res = await fetch(`${process.env.API_URL}/payments?${params}/`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
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
