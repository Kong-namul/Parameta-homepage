import createMiddleware from "next-intl/middleware";
import { routing } from "./routing";

// Next.js 16 renamed `middleware` to `proxy`. next-intl v4 still exports its
// handler as a "middleware" factory, but it is just a request handler so we
// re-export it as the `proxy` named export expected by Next 16.
export const proxy = createMiddleware(routing);

// Exclude `/studio` (Sanity admin tooling) from the i18n proxy so it is served
// directly from `app/studio/` without locale rewrites.
export const config = { matcher: ["/((?!api|_next|_vercel|studio|.*\\..*).*)"] };
