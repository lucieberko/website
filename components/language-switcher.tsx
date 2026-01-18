'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale, scroll: false});
  };

  return (
    <div className="flex items-center gap-2">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={`text-sm font-semibold transition-colors border-b-2 ${
            locale === loc
              ? 'text-zinc-800 box-content border-zinc-700 hover:cursor-default'
              : 'text-zinc-400 hover:text-zinc-950 border-transparent hover:cursor-pointer'
          }`}
          aria-label={t(loc)}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
