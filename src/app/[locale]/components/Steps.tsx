import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Steps() {
  const t = useTranslations();

  return (
    <>
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">
          {t("stepFirst")}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            next-intl
          </code>
          .
        </li>
        <li>{t("stepSecond")}.</li>
      </ol>

      <a
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        href="https://olenacodes.com/blog/next-intl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="dark:invert"
          src="/olenacodes-logo.svg"
          alt="Vercel logomark"
          width={20}
          height={20}
        />
        {t("blogPost")}
      </a>
    </>
  );
}
