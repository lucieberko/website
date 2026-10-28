'use client';

import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useTranslations } from 'next-intl';

const featured = [
  {
    id: 4,
    title: 'TEDxAgroParisTech : Psychedelics: Treatments of the Future',
    titleEn: 'TEDxAgroParisTech: Psychedelics: Treatments of the Future',
    href: 'https://www.youtube.com/watch?v=W2W-c_OMGxU',
    descriptionKey: 'itw4.description',
    imageUrl: 'https://img.youtube.com/vi/W2W-c_OMGxU/maxresdefault.jpg',
    date: '2026',
    datetime: '2026-09-30',
    category: { title: 'TEDx', href: '#' },
    location: 'TEDxAgroParisTech',
  },
  {
    id: 1,
    title: 'Paris-Saclay Summit : Dépression : les promesses des psychédéliques',
    titleEn: 'Paris-Saclay Summit: Depression: the promises of psychedelics',
    href: 'https://www.youtube.com/watch?v=sjWvdIqL2wE',
    descriptionKey: 'itw1.description',
    imageUrl: 'https://img.youtube.com/vi/sjWvdIqL2wE/maxresdefault.jpg',
    date: '2026',
    datetime: '2026-03-01',
    category: { title: 'Paris Saclay Summit', href: '#' },
    location: 'Saclay',
  },
  {
    id: 2,
    title: 'We demain : Usage thérapeutique des psychédéliques',
    titleEn: 'We demain: Therapeutic use of psychedelics',
    href: 'https://www.facebook.com/watch/?v=1476602757213894',
    descriptionKey: 'itw2.description',
    imageUrl: '/Wedemain.png',
    date: '2026',
    datetime: '2026',
    category: { title: 'We Demain', href: '#' },
    location: 'Paris',
  },
]

export function Featured() {
  const t = useTranslations('PressPage.featured');

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">{t('title')}</h2>
          <p className="mt-2 text-lg/8 text-gray-600">{t('subtitle')}</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {featured.map((talk) => (
            <article key={talk.id} className="flex flex-col items-start">
            <a
              href={talk.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full h-64 sm:h-72 lg:h-64 block hover:opacity-90 transition-opacity"
            >
              <img
                alt=""
                src={talk.imageUrl}
                className="w-full h-full rounded-2xl  bg-white object-cover"
              />
              <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10" />
            </a>
              <div className="flex max-w-xl w-full flex-col">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={talk.datetime} className="text-gray-500">
                    {talk.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                    {talk.location}
                  </span>
                </div>
                <div className="group relative flex-1 flex flex-col">
                  <h3 className="font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={talk.href} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0" />
                      <span className="mt-4 text-lg/6 opacity-100 group-hover:opacity-0 transition duration-400 ease-in-out min-h-[5rem] flex items-center">
                        {talk.title}
                      </span>
                      <span className="mt-4 text-lg/6 gradient-text absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-400 ease-in-out min-h-[5rem] flex items-center">
                        {talk.title}
                      </span>
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-none text-sm/6 text-gray-600">{t(talk.descriptionKey)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

const press = [
  // Télévision
  {
    id: 1,
    title: 'Journal télévisé France 3 Paris Île-de-France : Psychiatrie, nouvelles thérapies : Des champignons et des hommes',
    href: 'https://tinyurl.com/5x8ejvmt',
    dateKey: 'dates.item1',
    datetime: '2025-10-17',
    category: { title: 'television', subcategory: 'France 3' },
  },

  // Presse papier - Le Monde
  {
    id: 2,
    title: 'Tribune : Avant de mourir, peut-on mieux vivre ? Pour un accès compassionnel aux psychédéliques en fin de vie',
    href: 'https://tinyurl.com/mrca3rhh',
    dateKey: 'dates.item2',
    datetime: '2025-07-05',
    category: { title: 'press', subcategory: 'Le Monde' },
  },
  {
    id: 3,
    title: 'Tribune : Médecine psychédélique : « Faisons l\'éloge d\'une (r)évolution thérapeutique éclairée par la science »',
    href: 'https://tinyurl.com/mr49m6hr',
    dateKey: 'dates.item3',
    datetime: '2023-07-20',
    category: { title: 'press', subcategory: 'Le Monde' },
  },
  {
    id: 4,
    title: 'L\'engouement pour les thérapies psychédéliques, une quête de « dissolution de l\'ego » qui n\'est pas sans risques',
    href: 'https://tinyurl.com/3urmxtdb',
    dateKey: 'dates.item4',
    datetime: '2025-11-08',
    category: { title: 'press', subcategory: 'Le Monde' },
  },
  {
    id: 5,
    title: 'Santé Mentale, des jeunes psychiatres militent contre la stigmatisation',
    href: 'https://tinyurl.com/ynzxazn8',
    dateKey: 'dates.item5',
    datetime: '2024-10-10',
    category: { title: 'press', subcategory: 'Le Monde' },
  },
  {
    id: 6,
    title: 'Ma cure de champignons hallucinogènes',
    href: 'https://tinyurl.com/52j4fjt4',
    dateKey: 'dates.item6',
    datetime: '2024-01-21',
    category: { title: 'press', subcategory: 'Le Monde' },
  },

  // Presse papier - Libération
  {
    id: 7,
    title: 'Recherche psychédélique en France',
    href: 'https://tinyurl.com/yvy8uf89',
    dateKey: 'dates.item7',
    datetime: '2025-04-24',
    category: { title: 'press', subcategory: 'Libération' },
  },

  // Presse papier - Mediapart
  {
    id: 8,
    title: 'Les psychédéliques font leur retour en psychiatrie',
    href: 'https://tinyurl.com/ytnhznm2',
    dateKey: 'dates.item8',
    datetime: '2024-09-07',
    category: { title: 'press', subcategory: 'Mediapart' },
  },

  // Presse papier - Mediapart (nouveau)
  {
    id: 41,
    title: 'Soigner son bad trip : les nouvelles frontières de la psychiatrie',
    href: 'https://www.mediapart.fr/journal/france/210926/soigner-son-bad-trip-les-nouvelles-frontieres-de-la-psychiatrie',
    dateKey: 'dates.item41',
    datetime: '2026-09-21',
    category: { title: 'press', subcategory: 'Mediapart' },
  },

  // Presse papier - RFI
  {
    id: 37,
    title: 'Des champignons en psychiatrie : la psilocybine entre promesses thérapeutiques et prudence médicale',
    href: 'https://www.rfi.fr/fr/science/20260118-des-champignons-en-psychiatrie-la-psilocybine-entre-promesses-th%C3%A9rapeutiques-et-prudence-m%C3%A9dicale',
    dateKey: 'dates.item37',
    datetime: '2026-01-18',
    category: { title: 'press', subcategory: 'RFI' },
  },

  // Presse papier - France 24
  {
    id: 9,
    title: 'Dépression, addictions, fin de vie... Les psychédéliques, du trip mystique à l\'espoir clinique',
    href: 'https://tinyurl.com/4keubypb',
    dateKey: 'dates.item9',
    datetime: '2025-04-17',
    category: { title: 'press', subcategory: 'France 24' },
  },

  // Presse papier - Ouest-France
  {
    id: 10,
    title: 'Des psychédéliques contre les troubles psychiques ? Les nouvelles avancées de la recherche',
    href: 'https://tinyurl.com/5b7avrz2',
    dateKey: 'dates.item10',
    datetime: '2024-05-20',
    category: { title: 'press', subcategory: 'Ouest-France' },
  },

  // Presse papier - Les Dernières Nouvelles d'Alsace
  {
    id: 11,
    title: 'Interview : La psilocybine pour traiter la dépression : « C\'est comme si on hackait le cerveau »',
    href: 'https://tinyurl.com/hkwudchd',
    dateKey: 'dates.item11',
    datetime: '2024-10-29',
    category: { title: 'press', subcategory: 'Les Dernières Nouvelles d\'Alsace' },
  },

  // Radio - France Inter
  {
    id: 12,
    title: 'Zoom Zoom Zen : Les thérapies psychédéliques, la révolution en psychiatrie ?',
    href: '#',
    dateKey: 'dates.item12',
    datetime: '2024-02-16',
    category: { title: 'radio', subcategory: 'France Inter' },
  },

  // Radio - France Culture
  {
    id: 13,
    title: 'Questions du Soir : le débat - Champignons, LSD : un espoir pour la psychiatrie ?',
    href: 'https://tinyurl.com/2eaksabf',
    dateKey: 'dates.item13',
    datetime: '2026-01-02',
    category: { title: 'radio', subcategory: 'France Culture' },
  },
  {
    id: 14,
    title: 'La Question du Jour : Les substances hallucinogènes peuvent-elles soigner l\'alcoolisme et la dépression ?',
    href: 'https://tinyurl.com/3u5rxpas',
    dateKey: 'dates.item14',
    datetime: '2025-10-13',
    category: { title: 'radio', subcategory: 'France Culture' },
  },
  {
    id: 15,
    title: 'Le Journal des Sciences : Une molécule contenue dans les champignons hallucinogènes pour soigner la dépression',
    href: 'https://tinyurl.com/bdeks85b',
    dateKey: 'dates.item15',
    datetime: '2022-11-11',
    category: { title: 'radio', subcategory: 'France Culture' },
  },
  {
    id: 16,
    title: 'La Science CQFD : Traitement de la dépression : au revoir tristesse',
    href: 'https://tinyurl.com/tsts77p9',
    dateKey: 'dates.item16',
    datetime: '2023-08-02',
    category: { title: 'radio', subcategory: 'France Culture' },
  },

  {
    id: 43,
    title: 'Avec sciences : La psilocybine, un psychédélique alignerait l\'activité cérébrale sur le contexte extérieur',
    href: 'https://www.radiofrance.fr/franceculture/podcasts/avec-sciences/la-psilocybine-un-psychedelique-alignerait-l-activite-cerebrale-sur-le-contexte-exterieur-3439236',
    dateKey: 'dates.item43',
    datetime: '2026-09-02',
    category: { title: 'radio', subcategory: 'France Culture' },
  },

  // Radio - RFI
  {
    id: 17,
    title: 'Autour de la Question : Les psychédéliques, médicaments du futur ?',
    href: 'https://tinyurl.com/3w3jnfhk',
    dateKey: 'dates.item17',
    datetime: '2023-05-09',
    category: { title: 'radio', subcategory: 'RFI' },
  },

  // Magazines scientifiques - Cerveau&Psycho
  {
    id: 18,
    title: 'L\'avènement des psychédéliques',
    href: 'https://tinyurl.com/mntrem6u',
    dateKey: 'dates.item18',
    datetime: '2023-09-20',
    category: { title: 'scientificMagazines', subcategory: 'Cerveau&Psycho' },
  },

  // Magazines scientifiques - Sciences et Avenir
  {
    id: 19,
    title: 'Médecine psychédélique : un essai clinique français prometteur pour traiter la dépression',
    href: 'https://tinyurl.com/mr2dj22x',
    dateKey: 'dates.item19',
    datetime: '2024-10-09',
    category: { title: 'scientificMagazines', subcategory: 'Sciences et Avenir' },
  },

  // Magazines scientifiques - Le Quotidien du Médecin
  {
    id: 20,
    title: 'Dr Lucie Berkovitch : « Les psychédéliques ont des effets thérapeutiques en association avec la psychothérapie »',
    href: 'https://tinyurl.com/yc53wb9z',
    dateKey: 'dates.item20',
    datetime: '2024-02-28',
    category: { title: 'scientificMagazines', subcategory: 'Le Quotidien du Médecin' },
  },
  {
    id: 21,
    title: 'Psychédéliques : premiers essais en France',
    href: 'https://tinyurl.com/4b3zkmnr',
    dateKey: 'dates.item21',
    datetime: '2024-12-20',
    category: { title: 'scientificMagazines', subcategory: 'Le Quotidien du Médecin' },
  },

  // Magazines scientifiques - Cerveau&Psycho (nouveaux)
  {
    id: 39,
    title: 'Lucie Berkovitch : « Les psychédéliques sont une révolution dans le traitement de la dépression »',
    href: 'https://www.cerveauetpsycho.fr/sd/psychiatrie/lucie-berkovitch-les-psychedeliques-sont-une-revolution-dans-le-traitement-de-la-depression-28874.php',
    dateKey: 'dates.item39',
    datetime: '2026-03-05',
    category: { title: 'scientificMagazines', subcategory: 'Cerveau&Psycho' },
  },
  {
    id: 40,
    title: 'Dépression : les nouveaux traitements qui pourraient changer la donne',
    href: 'https://www.cerveauetpsycho.fr/sd/Psychopharmacologie/depression-les-nouveaux-traitements-qui-pourraient-changer-la-donne-29656.php',
    dateKey: 'dates.item40',
    datetime: '2026-10-12',
    category: { title: 'scientificMagazines', subcategory: 'Cerveau&Psycho' },
  },

  // Magazines scientifiques - Science & Vie
  {
    id: 38,
    title: 'Les champignons psychédéliques pourraient arriver bientôt en pharmacie, et ils promettent de bousculer la psychiatrie',
    href: 'https://www.science-et-vie.com/corps-et-sante/les-champignons-psychedeliques-pourraient-arriver-bientot-en-pharmacie-et-ils-promettent-de-bousculer-la-psychiatrie-246559.html',
    dateKey: 'dates.item38',
    datetime: '2026-06-26',
    category: { title: 'scientificMagazines', subcategory: 'Science & Vie' },
  },

  // Podcasts - BBC Radio 4
  {
    id: 22,
    title: 'BBC Radio 4 - Understand, The Trip',
    href: 'https://tinyurl.com/4xydasw',
    dateKey: 'dates.item22',
    datetime: '2025-07-30',
    category: { title: 'podcasts', subcategory: 'BBC Radio 4' },
  },

  // Podcasts - L'heure du Monde
  {
    id: 23,
    title: 'Podcast L\'heure du Monde : Les psychédéliques peuvent-ils nous soigner ?',
    href: 'https://tinyurl.com/56bf7v2e',
    dateKey: 'dates.item23',
    datetime: '2023-06-02',
    category: { title: 'podcasts', subcategory: 'L\'heure du Monde' },
  },

  // Podcasts - Encore Heureux
  {
    id: 24,
    title: 'Encore Heureux : Les psychédéliques vont-ils régler tous nos problèmes ?',
    href: 'https://tinyurl.com/ypr787hf',
    dateKey: 'dates.item24',
    datetime: '2025-04-23',
    category: { title: 'podcasts', subcategory: 'Encore Heureux' },
  },

  // Podcasts - Thérapies Psychédéliques
  {
    id: 25,
    title: 'Thérapies Psychédéliques : psilocybine et dépression',
    href: 'https://tinyurl.com/yvzv2xes',
    dateKey: 'dates.item25',
    datetime: '2024-08-23',
    category: { title: 'podcasts', subcategory: 'Thérapies Psychédéliques' },
  },

  // Podcasts - Le Labo des Savoirs
  {
    id: 26,
    title: 'Le Labo des Savoirs : Psychédéliques et santé mentale',
    href: 'https://tinyurl.com/p4j88hme',
    dateKey: 'dates.item26',
    datetime: '2023-03-16',
    category: { title: 'podcasts', subcategory: 'Le Labo des Savoirs' },
  },

  // Podcasts - Braincast (Cerveau&Psycho)
  {
    id: 42,
    title: 'Braincast 24 : Soigner avec les psychédéliques',
    href: 'https://www.cerveauetpsycho.fr/sr/braincast/braincast-24-soigner-avec-les-psychedeliques-avec-lucie-berkovitch-28953.php',
    dateKey: 'dates.item42',
    datetime: '2026-03-17',
    category: { title: 'podcasts', subcategory: 'Braincast (Cerveau&Psycho)' },
  },

  // Vidéos - Canal +
  {
    id: 27,
    title: 'Les éclaireurs Canal + : Champignons, LSD... Les drogues psychédéliques peuvent-elles soigner la dépression ?',
    href: 'https://tinyurl.com/2jx49rt3',
    dateKey: 'dates.item27',
    datetime: '2023-02-27',
    category: { title: 'videos', subcategory: 'Canal +' },
  },

  // Vidéos - Brut
  {
    id: 28,
    title: 'Brut : Le microdosing LSD, un phénomène à risques',
    href: 'https://tinyurl.com/j3699wcj',
    dateKey: 'dates.item28',
    datetime: '2022-06-27',
    category: { title: 'videos', subcategory: 'Brut' },
  },

  // Vidéos - Le Blob
  {
    id: 29,
    title: 'Des champignons hallucinogènes contre la dépression',
    href: 'https://tinyurl.com/39dhmskc',
    dateKey: 'dates.item29',
    datetime: '2025-01-06',
    category: { title: 'videos', subcategory: 'Le Blob' },
  },

  // Vidéos - TEDx, Mieux, Paris-Saclay Summit (nouveaux)
  {
    id: 34,
    title: 'TEDxAgroParisTech : Psychedelics: Treatments of the Future',
    href: 'https://www.youtube.com/watch?v=W2W-c_OMGxU',
    dateKey: 'dates.item34',
    datetime: '2026-09-30',
    category: { title: 'videos', subcategory: 'TEDx' },
  },
  {
    id: 35,
    title: 'Psychédéliques en psychiatrie : révolution thérapeutique ou fausse promesse ? - Mieux dans ma tête',
    href: 'https://www.youtube.com/watch?v=E2Tt5BaPVdA',
    dateKey: 'dates.item35',
    datetime: '2026-09-22',
    category: { title: 'videos', subcategory: 'Mieux' },
  },
  {
    id: 36,
    title: 'Paris-Saclay Summit : Dépression : les promesses des psychédéliques',
    href: 'https://www.youtube.com/watch?v=sjWvdIqL2wE',
    dateKey: 'dates.item36',
    datetime: '2026-03-01',
    category: { title: 'videos', subcategory: 'Le Point' },
  },

  // Événements grand public
  {
    id: 30,
    title: 'Festival Pop&Psy 2024',
    href: 'https://popetpsy.fr/',
    dateKey: 'dates.item30',
    datetime: '2024-01-01',
    category: { title: 'publicEvents', subcategory: '' },
  },
  {
    id: 31,
    title: 'Neuroplanète 2023',
    href: '#',
    dateKey: 'dates.item31',
    datetime: '2023-01-01',
    category: { title: 'publicEvents', subcategory: '' },
  },
  {
    id: 32,
    title: 'Conférence « Vers une Renaissance Psychédélique » organisée par le Nouvel Obs',
    href: '#',
    dateKey: 'dates.item32',
    datetime: '2025-03-10',
    category: { title: 'publicEvents', subcategory: '' },
  },
  {
    id: 33,
    title: 'Conférence autour de la pièce de théâtre « Les Ardents » au Théâtre du Soleil',
    href: '#',
    dateKey: 'dates.item33',
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

  // Tri du plus récent au plus ancien (les sous-catégories sont ordonnées selon leur article le plus récent)
  const sortedPress = [...press].sort((a, b) => b.datetime.localeCompare(a.datetime));

  const groupedByCategory = categories.map(category => ({
    category,
    items: sortedPress.filter(item => item.category.title === category),
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
                                {t(post.dateKey)}
                              </time>
                            </div>
                            <div className="group relative">
                              <h5 className="text-base text-gray-900 group-hover:text-gray-600">
                                <a href={post.href}>
                                  <span className="opacity-100 group-hover:opacity-0 transition duration-400 ease-in-out">
                                    {post.title}
                                  </span>
                                  <span className="gradient-text absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-400 ease-in-out">
                                    {post.title}
                                  </span>
                                </a>
                              </h5>
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
