export const TIMELINE_ALL = `*[_type == "timeline"] | order(year asc, month asc)`;
export const TIMELINE_HERO = `*[_type == "timeline" && featured_on_hero == true] | order(year asc)`;
export const INSIGHTS_LATEST = `*[_type == "insight"] | order(publish_date desc)[0...3]`;
export const INSIGHTS_ALL = `*[_type == "insight"] | order(publish_date desc)`;
export const NEWSROOM_ALL = `*[_type == "newsroom"] | order(publish_date desc)`;
export const CASE_STUDIES_FEATURED = `*[_type == "caseStudy" && featured == true]`;
export const CASE_STUDIES_ALL = `*[_type == "caseStudy"]`;
export const CASE_STUDIES_BY_INDUSTRY = (industry: string) =>
  `*[_type == "caseStudy" && industry == "${industry}"]`;
