// cd /Users/lb2239/Downloads/lucieberko.github.io-main
// npm run dev​

'use client';

import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('ContactPage');

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">{t('title')}</h2>

        <p className="mt-12 text-lg/8 text-gray-600">
          {t('intro')}
        </p>

        <p className="my-6 text-lg/8 font-medium font-mono bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-pink-500 to-yellow-500">
          <span>l.berkovitch</span>
          <span className="mx-2">@</span>
          <span>ghu-paris.fr</span>
        </p>

        <p className="my-6 text-lg/8 text-gray-600">
          {t('or')}
        </p>

        <p className="my-6 text-lg/8 font-medium font-mono bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-emerald-500 to-purple-500 text-left w-fit mx-auto">
          Dr Lucie Berkovitch,<br />
          GHU Paris Psychiatrie & Neurosciences,<br />
          1, rue Cabanis,<br />
          75014 Paris, France
        </p>
      </div>
    </div>
  );
}
