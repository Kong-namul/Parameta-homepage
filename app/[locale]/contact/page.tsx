import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="label-mono mb-4">CONTACT</div>
        <h1 className="h-hero font-semibold mb-12">Talk to our team.</h1>
        <p className="text-[var(--text-secondary)] mb-12 max-w-xl">
          금융사·기업·지자체 — 어느 길에서 시작하든 한 팀이 받습니다. 영업일 3일 내 회신드립니다.
        </p>
        <ContactForm />
      </Container>
    </section>
  );
}
