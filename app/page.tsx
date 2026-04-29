import { Hero } from "@/components/home/Hero";
import { WhatWeAre } from "@/components/home/WhatWeAre";
import { ProductsRow } from "@/components/home/ProductsRow";
import { ParaStaModuleStrip } from "@/components/home/ParaStaModuleStrip";
import { TrustStrip } from "@/components/home/TrustStrip";
import { SolutionsSplit } from "@/components/home/SolutionsSplit";
import { RealModels } from "@/components/home/RealModels";
import { ShowcaseDemoCTA } from "@/components/home/ShowcaseDemoCTA";
import { InsightsLatest } from "@/components/home/InsightsLatest";
import { ClosingCTA } from "@/components/home/ClosingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeAre />
      <ProductsRow />
      <ParaStaModuleStrip />
      <TrustStrip />
      <SolutionsSplit />
      <RealModels />
      <ShowcaseDemoCTA />
      <InsightsLatest />
      <ClosingCTA />
    </>
  );
}
