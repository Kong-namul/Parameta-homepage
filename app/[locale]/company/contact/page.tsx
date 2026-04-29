import { Container } from "@/components/layout/Container";

export default function ContactInfoPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="label-mono mb-4">COMPANY · CONTACT</div>
        <h1 className="h-hero font-semibold">Contact.</h1>
        <ul className="mt-12 space-y-4 max-w-2xl text-[var(--text-secondary)]">
          <li>
            영업·도입 문의: <a href="mailto:sales@parametacorp.com" className="text-[var(--accent-primary)]">sales@parametacorp.com</a>
          </li>
          <li>
            미디어·보도: <a href="mailto:press@parametacorp.com" className="text-[var(--accent-primary)]">press@parametacorp.com</a>
          </li>
          <li>
            투자·IR: <a href="mailto:ir@parametacorp.com" className="text-[var(--accent-primary)]">ir@parametacorp.com</a>
          </li>
          <li>
            공공기관: <a href="mailto:public@parametacorp.com" className="text-[var(--accent-primary)]">public@parametacorp.com</a>
          </li>
        </ul>
      </Container>
    </section>
  );
}
