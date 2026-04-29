import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";

const COPY = {
  title: "Talk to our team.",
  desc: "금융사·기업·지자체 — 어느 길에서 시작하든 한 팀이 받습니다. 영업일 3일 내 회신드립니다.",
};

export default function ContactPage() {
  const c = COPY;
  return (
    <section className="py-24">
      <Container>
        <div className="label-mono mb-4">CONTACT</div>
        <h1 className="h-hero font-semibold mb-12">{c.title}</h1>
        <p className="text-[var(--text-secondary)] mb-12 max-w-xl">{c.desc}</p>
        <ContactForm />
      </Container>
    </section>
  );
}
