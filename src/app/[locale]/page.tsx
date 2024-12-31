import Header from "./components/Header";
import Steps from "./components/Steps";
import Footer from "./components/Footer";
import Image from "next/image";
import { getTypedMessages } from "@/lib/i18nHelpers";

export default async function HomePage({
  params: rawParams,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await rawParams;

  const [messages, countries] = await Promise.all([
    getTypedMessages(locale),
    fetch("https://restcountries.com/v3.1/all").then((res) => res.json()),
  ]);

  const country = countries?.[0] || {};
  const { name, capital, region, flags } = country;

  function getMessage(
    value: string | Record<string, string>,
    fallback: string
  ): string {
    return typeof value === "string" ? value : fallback;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Steps />
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-bold">
            {getMessage(messages.serverDataTitle, "Country Details")}
          </h2>
          <p>
            {getMessage(messages.country, "Country Name")}:{" "}
            <strong>{name?.common || "No data available"}</strong>
          </p>
          <p>
            {getMessage(messages.capital, "Capital")}:{" "}
            <strong>{capital?.[0] || "No data available"}</strong>
          </p>
          <p>
            {getMessage(messages.region, "Region")}:{" "}
            <strong>{region || "No data available"}</strong>
          </p>
          {flags?.svg && (
            <Image
              src={flags.svg}
              alt={`${name?.common || "Country"} Flag`}
              className="w-40 h-auto"
              width={80}
              height={80}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
