import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'si';
export type Bi = { en: string; si: string };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (b: Bi) => string;
};

const LangContext = createContext<Ctx>({
  lang: 'en',
  setLang: () => {},
  t: (b) => b.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const t = (b: Bi) => b[lang];
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
