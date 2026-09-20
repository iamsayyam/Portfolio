import { InlineLink } from "@/components/InlineLink";

export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Layout inspired by{" "}
        <InlineLink href="https://brittanychiang.com/">brittanychiang.com</InlineLink>.
        Built with <InlineLink href="https://nextjs.org/">Next.js</InlineLink> and{" "}
        <InlineLink href="https://tailwindcss.com/">Tailwind CSS</InlineLink>,
        deployed with <InlineLink href="https://vercel.com/">Vercel</InlineLink>.
        All text is set in the{" "}
        <InlineLink href="https://rsms.me/inter/">Inter</InlineLink> typeface.
      </p>
    </footer>
  );
}
