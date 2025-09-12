// src/app/api/send/route.ts

import { Resend } from 'resend';

console.log("✅ File /api/send/route.ts berhasil dimuat oleh server.");

const resend = new Resend(process.env.RESEND_API_KEY);

if (!resend) {
  console.error("FATAL: RESEND_API_KEY environment variable is not set.");
}

export async function POST(request: Request) {
  // Log untuk menandakan fungsi POST terpanggil
  console.log("▶️ Fungsi POST di /api/send/route.ts mulai dijalankan.");

  try {
    const body = await request.json();
    console.log("📄 Body request yang diterima:", body);
    const { firstName, lastName, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['ppskdos@gmail.com'], // Ganti dengan email Anda
      subject: `Pesan baru dari ${firstName} ${lastName}`,
      replyTo: email,
      html: `<p>Pesan dari: ${firstName} ${lastName} (${email})</p><p>${message}</p>`,
    });

    if (error) {
      console.error("❌ Error dari Resend:", error);
      return Response.json({ error }, { status: 500 });
    }

    console.log("✅ Email berhasil dikirim via Resend:", data);
    return Response.json(data);
  } catch (err) {
    // Menangkap error jika request.json() gagal atau error lainnya
    console.error("❌ Terjadi error di blok catch:", err);
    return Response.json({ error: (err as Error).message }, { status: 500 });
  }
}