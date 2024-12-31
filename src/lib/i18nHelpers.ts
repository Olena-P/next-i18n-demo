import { getMessages } from "next-intl/server";

type Translations = {
  [key: string]: string | Record<string, string>;
};

export async function getTypedMessages(locale: string): Promise<Translations> {
  const messages = await getMessages({ locale });
  return messages as Translations;
}
