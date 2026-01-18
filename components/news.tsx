'use client';

import { useTranslations } from 'next-intl';

const posts = [
  {
    id: 1,
    title: 'Questions du Soir : le débat - Champignons, LSD : un espoir pour la psychiatrie ?',
    href: 'https://tinyurl.com/2eaksabf',
    descriptionKey: 'pub1.description',
    imageUrl:
      'https://www.radiofrance.fr/pikapi/images/3e393392-21a3-423b-96e5-0c46317fb6a7/1200x680',
    date: '02 Jan 2026',
    datetime: '2026-01-02',
    categoryKey: 'pub1.category'
  },
  {
    id: 2,
    title: 'Ketamine disrupts consciousness in healthy participants in relation with psychotic-like symptoms',
    href: 'https://doi.org/10.1101/2025.11.06.687042',
    descriptionKey: 'pub2.description',
    imageUrl: '/Summary3_large.png',
    date: '08 Nov 2025',
    datetime: '2025-11-08',
    categoryKey: 'pub2.category'
  },
  {
    id: 3,
    title: 'Tribune : Avant de mourir, peut-on mieux vivre ? Pour un accès compassionnel aux psychédéliques en fin de vie',
    href: 'https://tinyurl.com/mrca3rhh',
    descriptionKey: 'pub3.description',
    imageUrl: 'https://img.lemde.fr/2025/04/04/0/0/8256/5504/664/0/75/0/8a555cc_sirius-fs-upload-1-bhv0g8luuyeb-1743775316099-000-33ff3gy.jpg',
    date: '05 Jul 2025',
    datetime: '2025-07-05',
    categoryKey: 'pub3.category'
  },
];

export default function News() {
  const t = useTranslations('HomePage.news');

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-2 text-lg/8 text-zinc-600">
            {t('subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full h-64 sm:h-72 lg:h-64 block hover:opacity-90 transition-opacity"
            >
              <img
                alt=""
                src={post.imageUrl}
                className="w-full h-full rounded-2xl bg-white object-cover"
              />
              <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10" />
            </a>
              <div className="flex max-w-xl grow flex-col justify-between">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-zinc-500">
                    {post.date}
                  </time>
                  <span
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-zinc-600 hover:bg-gray-100"
                  >
                    {t(post.categoryKey)}
                  </span>
                </div>

                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                        <span className="mt-3 text-lg/6 font-semibold opacity-100 group-hover:opacity-0 transition duration-400 ease-in-out min-h-[5rem] flex items-center">
                          {post.title}
                        </span>
                        <span className="mt-3 text-lg/6 font-semibold gradient-text absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-400 ease-in-out min-h-[5rem] flex items-center">
                          {post.title}
                        </span>
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{t(post.descriptionKey)}</p>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
