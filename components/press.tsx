'use client';

import { useTranslations } from 'next-intl';

const press = [
  // Télévision
  {
    id: 1,
    title: 'Journal télévisé France 3 Paris Île-de-France : Psychiatrie, nouvelles thérapies : Des champignons et des hommes',
    href: 'https://tinyurl.com/5x8ejvmt',
    description: '',
    date: '2023',
    datetime: '2023-01-01',
    category: { title: 'television', subcategory: 'France 3' },
  },

  // Presse papier - Le Monde
  {
    id: 2,
    title: 'Tribune : Avant de mourir, peut-on mieux vivre ? Pour un accès compassionnel aux psychédéliques en fin de vie',
    href: 'https://tinyurl.com/mrca3rhh',
    description: '',
    date: '05 Jul 2025',
    datetime: '2025-07-05',
    category: { title: 'press', subcategory: 'Le Monde' },
  },
  {
    id: 3,
    title: 'Tribune : Médecine psychédélique : « Faisons l\'éloge d\'une (r)évolution thérapeutique éclairée par la science »',
    href: 'https://tinyurl.com/mr49m6hr',
    description: '',
    date: '20 Jul 2023',
    datetime: '2023-07-20',
    category: { title: 'press', subcategory: 'Le Monde' },
  },
  {
    id: 4,
    title: 'L\'engouement pour les thérapies psychédéliques, une quête de « dissolution de l\'ego » qui n\'est pas sans risques',
    href: 'https://tinyurl.com/3urmxtdb',
    description: '',
    date: '08 Nov 2025',
    datetime: '2025-11-08',
    category: { title: 'press', subcategory: 'Le Monde' },
  },
  {
    id: 5,
    title: 'Santé Mentale, des jeunes psychiatres militent contre la stigmatisation',
    href: 'https://tinyurl.com/ynzxazn8',
    description: '',
    date: '10 Oct 2024',
    datetime: '2024-10-10',
    category: { title: 'press', subcategory: 'Le Monde' },
  },
  {
    id: 6,
    title: 'Ma cure de champignons hallucinogènes',
    href: 'https://tinyurl.com/52j4fjt4',
    description: '',
    date: '21 Jan 2024',
    datetime: '2024-01-21',
    category: { title: 'press', subcategory: 'Le Monde' },
  },

  // Presse papier - Libération
  {
    id: 7,
    title: 'Recherche psychédélique en France',
    href: 'https://tinyurl.com/yvy8uf89',
    description: '',
    date: '24 Apr 2025',
    datetime: '2025-04-24',
    category: { title: 'press', subcategory: 'Libération' },
  },

  // Presse papier - Mediapart
  {
    id: 8,
    title: 'Les psychédéliques font leur retour en psychiatrie',
    href: 'https://tinyurl.com/ytnhznm2',
    description: '',
    date: '07 Sep 2024',
    datetime: '2024-09-07',
    category: { title: 'press', subcategory: 'Mediapart' },
  },

  // Presse papier - France 24
  {
    id: 9,
    title: 'Dépression, addictions, fin de vie... Les psychédéliques, du trip mystique à l\'espoir clinique',
    href: 'https://tinyurl.com/4keubypb',
    description: '',
    date: '17 Apr 2025',
    datetime: '2025-04-17',
    category: { title: 'press', subcategory: 'France 24' },
  },

  // Presse papier - Ouest-France
  {
    id: 10,
    title: 'Des psychédéliques contre les troubles psychiques ? Les nouvelles avancées de la recherche',
    href: 'https://tinyurl.com/5b7avrz2',
    description: '',
    date: '20 May 2024',
    datetime: '2024-05-20',
    category: { title: 'press', subcategory: 'Ouest-France' },
  },

  // Presse papier - Les Dernières Nouvelles d'Alsace
  {
    id: 11,
    title: 'Interview : La psilocybine pour traiter la dépression : « C\'est comme si on hackait le cerveau »',
    href: 'https://tinyurl.com/hkwudchd',
    description: '',
    date: '29 Oct 2024',
    datetime: '2024-10-29',
    category: { title: 'press', subcategory: 'Les Dernières Nouvelles d\'Alsace' },
  },

  // Radio - France Inter
  {
    id: 12,
    title: 'Zoom Zoom Zen : Les thérapies psychédéliques, la révolution en psychiatrie ?',
    href: '#',
    description: '',
    date: '16 Feb 2024',
    datetime: '2024-02-16',
    category: { title: 'radio', subcategory: 'France Inter' },
  },

  // Radio - France Culture
  {
    id: 13,
    title: 'Questions du Soir : le débat - Champignons, LSD : un espoir pour la psychiatrie ?',
    href: 'https://tinyurl.com/2eaksabf',
    description: '',
    date: '02 Jan 2026',
    datetime: '2026-01-02',
    category: { title: 'radio', subcategory: 'France Culture' },
  },
  {
    id: 14,
    title: 'La Question du Jour : Les substances hallucinogènes peuvent-elles soigner l\'alcoolisme et la dépression ?',
    href: 'https://tinyurl.com/3u5rxpas',
    description: '',
    date: '13 Oct 2025',
    datetime: '2025-10-13',
    category: { title: 'radio', subcategory: 'France Culture' },
  },
  {
    id: 15,
    title: 'Le Journal des Sciences : Une molécule contenue dans les champignons hallucinogènes pour soigner la dépression',
    href: 'https://tinyurl.com/bdeks85b',
    description: '',
    date: '11 Nov 2022',
    datetime: '2022-11-11',
    category: { title: 'radio', subcategory: 'France Culture' },
  },
  {
    id: 16,
    title: 'La Science CQFD : Traitement de la dépression : au revoir tristesse',
    href: 'https://tinyurl.com/tsts77p9',
    description: '',
    date: '02 Aug 2023',
    datetime: '2023-08-02',
    category: { title: 'radio', subcategory: 'France Culture' },
  },

  // Radio - RFI
  {
    id: 17,
    title: 'Autour de la Question : Les psychédéliques, médicaments du futur ?',
    href: 'https://tinyurl.com/3w3jnfhk',
    description: '',
    date: '09 May 2023',
    datetime: '2023-05-09',
    category: { title: 'radio', subcategory: 'RFI' },
  },

  // Magazines scientifiques - Cerveau&Psycho
  {
    id: 18,
    title: 'L\'avènement des psychédéliques',
    href: 'https://tinyurl.com/mntrem6u',
    description: '',
    date: '20 Sep 2023',
    datetime: '2023-09-20',
    category: { title: 'scientificMagazines', subcategory: 'Cerveau&Psycho' },
  },

  // Magazines scientifiques - Sciences et Avenir
  {
    id: 19,
    title: 'Médecine psychédélique : un essai clinique français prometteur pour traiter la dépression',
    href: 'https://tinyurl.com/mr2dj22x',
    description: '',
    date: '09 Oct 2024',
    datetime: '2024-10-09',
    category: { title: 'scientificMagazines', subcategory: 'Sciences et Avenir' },
  },

  // Magazines scientifiques - Le Quotidien du Médecin
  {
    id: 20,
    title: 'Dr Lucie Berkovitch : « Les psychédéliques ont des effets thérapeutiques en association avec la psychothérapie »',
    href: 'https://tinyurl.com/yc53wb9z',
    description: '',
    date: '28 Feb 2024',
    datetime: '2024-02-28',
    category: { title: 'scientificMagazines', subcategory: 'Le Quotidien du Médecin' },
  },
  {
    id: 21,
    title: 'Psychédéliques : premiers essais en France',
    href: 'https://tinyurl.com/4b3zkmnr',
    description: '',
    date: '20 Dec 2024',
    datetime: '2024-12-20',
    category: { title: 'scientificMagazines', subcategory: 'Le Quotidien du Médecin' },
  },

  // Podcasts - BBC Radio 4
  {
    id: 22,
    title: 'BBC Radio 4 - Understand, The Trip',
    href: 'https://tinyurl.com/4xydasw',
    description: '',
    date: '30 Jul 2025',
    datetime: '2025-07-30',
    category: { title: 'podcasts', subcategory: 'BBC Radio 4' },
  },

  // Podcasts - L'heure du Monde
  {
    id: 23,
    title: 'Podcast L\'heure du Monde : Les psychédéliques peuvent-ils nous soigner ?',
    href: 'https://tinyurl.com/56bf7v2e',
    description: '',
    date: '02 Jun 2023',
    datetime: '2023-06-02',
    category: { title: 'podcasts', subcategory: 'L\'heure du Monde' },
  },

  // Podcasts - Encore Heureux
  {
    id: 24,
    title: 'Encore Heureux : Les psychédéliques vont-ils régler tous nos problèmes ?',
    href: 'https://tinyurl.com/ypr787hf',
    description: '',
    date: '23 Apr 2025',
    datetime: '2025-04-23',
    category: { title: 'podcasts', subcategory: 'Encore Heureux' },
  },

  // Podcasts - Thérapies Psychédéliques
  {
    id: 25,
    title: 'Thérapies Psychédéliques : psilocybine et dépression',
    href: 'https://tinyurl.com/yvzv2xes',
    description: '',
    date: '23 Aug 2024',
    datetime: '2024-08-23',
    category: { title: 'podcasts', subcategory: 'Thérapies Psychédéliques' },
  },

  // Podcasts - Le Labo des Savoirs
  {
    id: 26,
    title: 'Le Labo des Savoirs : Psychédéliques et santé mentale',
    href: 'https://tinyurl.com/p4j88hme',
    description: '',
    date: '16 Mar 2023',
    datetime: '2023-03-16',
    category: { title: 'podcasts', subcategory: 'Le Labo des Savoirs' },
  },

  // Vidéos - Canal +
  {
    id: 27,
    title: 'Les éclaireurs Canal + : Champignons, LSD... Les drogues psychédéliques peuvent-elles soigner la dépression ?',
    href: 'https://tinyurl.com/2jx49rt3',
    description: '',
    date: '27 Feb 2023',
    datetime: '2023-02-27',
    category: { title: 'videos', subcategory: 'Canal +' },
  },

  // Vidéos - Brut
  {
    id: 28,
    title: 'Brut : Le microdosing LSD, un phénomène à risques',
    href: 'https://tinyurl.com/j3699wcj',
    description: '',
    date: '27 Jun 2022',
    datetime: '2022-06-27',
    category: { title: 'videos', subcategory: 'Brut' },
  },

  // Vidéos - Le Blob
  {
    id: 29,
    title: 'Des champignons hallucinogènes contre la dépression',
    href: 'https://tinyurl.com/39dhmskc',
    description: '',
    date: '06 Jan 2025',
    datetime: '2025-01-06',
    category: { title: 'videos', subcategory: 'Le Blob' },
  },

  // Événements grand public
  {
    id: 30,
    title: 'Festival Pop&Psy 2024',
    href: 'https://popetpsy.fr/',
    description: '',
    date: '2024',
    datetime: '2024-01-01',
    category: { title: 'publicEvents', subcategory: '' },
  },
  {
    id: 31,
    title: 'Neuroplanète 2023',
    href: '#',
    description: '',
    date: '2023',
    datetime: '2023-01-01',
    category: { title: 'publicEvents', subcategory: '' },
  },
  {
    id: 32,
    title: 'Conférence « Vers une Renaissance Psychédélique » organisée par le Nouvel Obs',
    href: '#',
    description: '',
    date: '10 Mar 2025',
    datetime: '2025-03-10',
    category: { title: 'publicEvents', subcategory: '' },
  },
  {
    id: 33,
    title: 'Conférence autour de la pièce de théâtre « Les Ardents » au Théâtre du Soleil',
    href: '#',
    description: '',
    date: '27 Nov 2025',
    datetime: '2025-11-27',
    category: { title: 'publicEvents', subcategory: '' },
  },
];

// Images par catégorie
const categoryImages: Record<string, string> = {
  'television': 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'press': 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'radio': 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'scientificMagazines': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'podcasts': 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'videos': 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'publicEvents': 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
};

export default function Press() {
  const t = useTranslations('PressPage');

  // Grouper les articles par catégorie en conservant l'ordre
  const categories = [
    'television',
    'press',
    'radio',
    'scientificMagazines',
    'podcasts',
    'videos',
    'publicEvents',
  ];

  const groupedByCategory = categories.map(category => ({
    category,
    items: press.filter(item => item.category.title === category),
  })).filter(group => group.items.length > 0);

  // Grouper par sous-catégorie au sein de chaque catégorie
  const getSubcategories = (items: typeof press) => {
    const subcats = new Map<string, typeof press>();
    items.forEach(item => {
      const subcat = item.category.subcategory || '';
      if (!subcats.has(subcat)) {
        subcats.set(subcat, []);
      }
      subcats.get(subcat)!.push(item);
    });
    return Array.from(subcats.entries());
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl whitespace-pre-line">
            {t('title')}
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">{t('subtitle')}</p>

          <div className="mt-16 space-y-16 lg:mt-20">
            {groupedByCategory.map(({ category, items }) => (
              <div key={category}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-16 h-16 shrink-0">
                    <img
                      alt=""
                      src={categoryImages[category]}
                      className="absolute inset-0 size-full rounded-xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t(`categories.${category}`)}</h3>
                </div>

                <div className="space-y-10">
                  {getSubcategories(items).map(([subcategory, subItems]) => (
                    <div key={subcategory || 'main'}>
                      {subcategory && (
                        <h4 className="text-lg font-semibold text-gray-700 mb-4 ml-6">
                          {subcategory}
                        </h4>
                      )}
                      <div className="space-y-6">
                        {subItems.map((post) => (
                          <article
                            key={post.id}
                            className="relative isolate flex flex-col gap-3 border-l-2 border-gray-200 pl-6 hover:border-gray-400 transition-colors"
                          >
                            <div className="flex items-center gap-x-4 text-xs">
                              <time dateTime={post.datetime} className="text-gray-500">
                                {post.date}
                              </time>
                            </div>
                            <div className="group relative">
                              <h5 className="text-base font-semibold text-gray-900 group-hover:text-gray-600">
                                <a href={post.href}>
                                  <span className="absolute inset-0" />
                                  {post.title}
                                </a>
                              </h5>
                              {post.description && (
                                <p className="mt-2 text-sm text-gray-600">{post.description}</p>
                              )}
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
