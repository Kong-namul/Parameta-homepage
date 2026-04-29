import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const SALES_FROM = process.env.RESEND_FROM_ADDRESS || "PARAMETA <noreply@parametacorp.com>";
const SALES_TO = process.env.SALES_TO_ADDRESS || "sales@parametacorp.com";

// Lazy-init so missing RESEND_API_KEY does not throw at module load time —
// validation can still return 400 before we ever try to send.
let resend: Resend | null = null;
function getResend(): Resend {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set");
  }
  if (!resend) resend = new Resend(process.env.RESEND_API_KEY);
  return resend;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, title, email, phone, segment, interest, message, consent } = body || {};

    // Required field validation
    if (!name || !company || !email || !segment || !interest || !message) {
      return NextResponse.json({ error: "필수 항목이 누락되었습니다." }, { status: 400 });
    }
    if (!consent) {
      return NextResponse.json({ error: "개인정보 처리 동의가 필요합니다." }, { status: 400 });
    }
    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "유효한 이메일 주소가 필요합니다." }, { status: 400 });
    }

    // Sales notification
    await getResend().emails.send({
      from: SALES_FROM,
      to: SALES_TO,
      replyTo: email,
      subject: `[${segment}] ${interest} 문의 — ${company}`,
      text: [
        `이름: ${name}`,
        `회사: ${company}`,
        `직책: ${title || "-"}`,
        `이메일: ${email}`,
        `전화: ${phone || "-"}`,
        `고객군: ${segment}`,
        `관심: ${interest}`,
        ``,
        `메시지:`,
        message,
      ].join("\n"),
    });

    // Auto-reply to submitter
    await getResend().emails.send({
      from: SALES_FROM,
      to: email,
      subject: "PARAMETA 문의 접수 완료",
      text: `${name}님,\n\n문의가 접수되었습니다. 영업일 3일 내 회신드릴게요.\n\n— PARAMETA\nhttps://parametacorp.com`,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[/api/contact] error:", e);
    return NextResponse.json({ error: "서버 오류. 잠시 후 다시 시도해주세요." }, { status: 500 });
  }
}
