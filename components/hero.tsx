'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('HomePage.hero');

  return (
    <div className="relative bg-zinc-50 lg:my-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 lg:w-full lg:max-w-2xl">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-zinc-50 lg:block"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 py-12 sm:py-24 lg:px-8 lg:py-42 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl text-lg font-normal text-pretty text-gray-700 sm:text-xl/8">

              <p className="">
                {t.rich('intro', {
                  name: (chunks) => <span className="font-semibold text-pink-600">{chunks}</span>,
                  specialty: (chunks) => <span className="font-semibold text-purple-600">{chunks}</span>,
                })}
              </p>

              <p className="mt-8">
                {t.rich('description', {
                  institute: (chunks) => (
                    <a
                      href="https://www.ghu-paris.fr/fr/annuaire-des-structures-medicales/institut-de-neuromodulation-pole-15"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group font-semibold relative inline-block"
                    >
                      <span className="opacity-100 group-hover:opacity-0 transition duration-400 ease-in-out text-yellow-600">
                        {chunks}
                      </span>
                      <span className="gradient-text absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-400 ease-in-out">
                        {chunks}
                      </span>
                    </a>
                  ),
                  hospital: (chunks) => <span className="font-semibold text-green-600">{chunks}</span>,
                })}
              </p>

            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          alt=""
          src="/lucie_berkovitch.jpeg"
          className="aspect-3/2 object-cover lg:aspect-auto lg:size-full"
        />
      </div>
    </div>
  );
}
