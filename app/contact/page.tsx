import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";

const COPY = {
  title: "Talk to our team.",
  desc: "금융사·기업·지자체 — 어떤 분야든, 든든한 파트너가 되겠습니다. 영업일 3일 내 회신드립니다.",
};

export default function ContactPage() {
  const c = COPY;
  return (
    <section className="py-24">
      <Container>
        <h1 className="h-hero font-semibold mb-12">{c.title}</h1>
        <p className="text-[var(--text-secondary)] mb-12 max-w-xl">{c.desc}</p>
        <ContactForm />
      </Container>
    </section>
  );
}
