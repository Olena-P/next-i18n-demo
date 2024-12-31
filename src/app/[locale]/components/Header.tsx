import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations();

  return (
    <header className="flex gap-6 items-end">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt={t("title")}
        width={180}
        height={38}
        priority
      />
      <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
        i18n
      </code>
    </header>
  );
}
