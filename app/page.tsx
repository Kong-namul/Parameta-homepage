import { Hero } from "@/components/home/Hero";
import { WhatWeAre } from "@/components/home/WhatWeAre";
import { ProductsRow } from "@/components/home/ProductsRow";
import { DomainExpertise } from "@/components/home/DomainExpertise";
import { SolutionsSplit } from "@/components/home/SolutionsSplit";
import { ClosingCTA } from "@/components/home/ClosingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeAre />
      <ProductsRow />
      <DomainExpertise />
      <SolutionsSplit />
      <ClosingCTA />
    </>
  );
}
