import { Container } from "@/components/layout/Container";

const COPY = {
  sales: "영업·도입 문의",
  media: "미디어·보도",
  ir: "투자·IR",
  public: "공공기관",
};

export default function ContactInfoPage() {
  const c = COPY;
  return (
    <section className="py-24">
      <Container>
        <div className="label-mono mb-4">COMPANY · CONTACT</div>
        <h1 className="h-hero font-semibold">Contact.</h1>
        <ul className="mt-12 space-y-4 max-w-2xl text-[var(--text-secondary)]">
          <li>
            {c.sales}: <a href="mailto:sales@parametacorp.com" className="text-[var(--accent-primary)]">sales@parametacorp.com</a>
          </li>
          <li>
            {c.media}: <a href="mailto:press@parametacorp.com" className="text-[var(--accent-primary)]">press@parametacorp.com</a>
          </li>
          <li>
            {c.ir}: <a href="mailto:ir@parametacorp.com" className="text-[var(--accent-primary)]">ir@parametacorp.com</a>
          </li>
          <li>
            {c.public}: <a href="mailto:public@parametacorp.com" className="text-[var(--accent-primary)]">public@parametacorp.com</a>
          </li>
        </ul>
      </Container>
    </section>
  );
}
