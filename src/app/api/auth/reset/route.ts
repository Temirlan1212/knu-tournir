import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { ...payload } = body;

  try {
    const res = await fetch(`${process.env.API_URL}/accounts/password/reset/`, {
      method: "POST",
      body: JSON.stringify({ ...payload }),
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
