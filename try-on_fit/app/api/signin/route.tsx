import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    console.log("Reached POST in signin routes");

    const url = process.env.NEXT_PUBLIC_API_URL + "/auth/signin";

    const body = await req.json();

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    const setCookie = response.headers.get('set-cookie');
    const responseBody = await response.json();

    const nextResponse = NextResponse.json(responseBody, {
        status: response.status
    });

    if (setCookie) {
        console.log('Cookie: ', setCookie);
        nextResponse.headers.set('Set-Cookie', setCookie);
    }

    return nextResponse;

}