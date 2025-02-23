import { NextResponse } from "next/server";

export async function POST(req) {
    const { url, nextUrl, cookies } = req;
    console.log("post");

    try {
        // Token çerezini temizle
        const response = NextResponse.redirect(new URL(`/`, url));
        // Çerezi silmek için Set-Cookie başlığını ayarla
        response.headers.append('Set-Cookie', 'token=; Path=/; HttpOnly; Max-Age=0');
        return response;
    } catch (error) {

        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function GET(req) {
    console.log("post");

    return new Response(JSON.stringify({ message: 'GET isteği alındı' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function DELETE(req) {
    console.log("delrtr");

    return new Response(JSON.stringify({ message: 'Delete işlemi başarılı' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}