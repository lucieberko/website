'use client';

import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useTranslations } from 'next-intl';

const featured = [
  {
    id: 1,
    title: 'Kétamine et psychédéliques : rendre la dépression plastique',
    titleEn: 'Ketamine and psychedelics: making depression plastic',
    href: 'https://www.youtube.com/watch?v=U1uDMttCVJY',
    descriptionKey: 'talk1.description',
    imageUrl: 'https://img.youtube.com/vi/U1uDMttCVJY/maxresdefault.jpg',
    date: '2024',
    datetime: '2024',
    category: { title: 'Journée Neurosciences Psychiatrie Neurologie', href: '#' },
    location: 'Paris',
  },
  {
    id: 2,
    title: 'Usage thérapeutique des psychédéliques',
    titleEn: 'Therapeutic use of psychedelics',
    href: 'https://www.youtube.com/watch?v=43uLxpI2-WA',
    descriptionKey: 'talk2.description',
    imageUrl: '/Federation_Addiction_large.png',
    date: '2023',
    datetime: '2023',
    category: { title: 'Fédération Addiction', href: '#' },
    location: 'Orléans',
  },
  {
    id: 3,
    title: 'Les psychédéliques et le potentiel thérapeutique des états modifiés de conscience',
    titleEn: 'Psychedelics and the therapeutic potential of altered states of consciousness',
    href: 'https://www.youtube.com/watch?v=UEREXRI7VYw',
    descriptionKey: 'talk3.description',
    imageUrl: 'https://img.youtube.com/vi/UEREXRI7VYw/maxresdefault.jpg',
    date: '2023',
    datetime: '2023',
    category: { title: 'Forum des Sciences Cognitives', href: '#' },
    location: 'Paris',
  },
]

export function Featured() {
  const t = useTranslations('TalksPage.featured');

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

const talks = [
  // Conference Organization
  {
    title: 'Symposium Psychedelic Medicine: Scientific Perspective avec la Section de Médecine Psychédélique de l\'AFPBN',
    href: '#',
    date: '2025',
    category: 'Organisation de conférences',
    location: 'Paris Brain Institute',
  },
  {
    title: 'Metacognition and Freedom of choice in mental illness',
    href: '#',
    date: '2019',
    category: 'Organisation de conférences',
    location: 'Institut d\'Études Avancées',
  },

  // Oral Communications
  {
    title: 'Thérapies assistées par psychédéliques, pratiques, méthodes, enjeux',
    href: '#',
    date: '2025',
    category: 'Communications orales',
    location: 'Séminaire EHESS, Paris',
  },
  {
    title: 'Psychédéliques et suicide : Facteur de risque ou prévention ?',
    href: '#',
    date: '2025',
    category: 'Communications orales',
    location: 'Congrès du GEPS, Paris',
  },
  {
    title: 'Consciousness and psychiatry',
    href: '#',
    date: '2025',
    category: 'Communications orales',
    location: 'Mediteranean Society for Consciousness Science, Lago di Bolsena, Italie',
  },
  {
    title: 'Are 5-HT2A receptors essential for psychedelics\' antidepressant effects in humans?',
    href: '#',
    date: '2025',
    category: 'Communications orales',
    location: 'ISSR, Vienne',
  },
  {
    title: 'Les psychédéliques ont-ils besoin de psychothérapie ?',
    href: '#',
    date: '2025',
    category: 'Communications orales',
    location: 'Congrès Franco-Maghrébin de Psychiatrie, Djerba, Tunisie',
  },
  {
    title: 'Psychédéliques et créativité : Micro-booster, macro-inspiration ?',
    href: '#',
    date: '2025',
    category: 'Communications orales',
    location: 'Congrès de l\'Encéphale, Paris',
  },
  {
    title: 'Pipeline de la psychiatrie : les antidépresseurs et les anxiolytiques',
    href: '#',
    date: '2025',
    category: 'Communications orales',
    location: 'Congrès de l\'Encéphale, Paris',
  },
  {
    title: 'Inégalités femmes-hommes dans le monde scientifique : constats et solutions',
    href: '#',
    date: '2024',
    category: 'Communications orales',
    location: 'Congrès Français de Psychiatrie',
  },
  {
    title: 'Kétamine et psychédéliques : rendre la dépression plastique',
    href: 'https://www.youtube.com/watch?v=U1uDMttCVJY',
    date: '2024',
    category: 'Communications orales',
    location: 'Journée Neurosciences Psychiatrie Neurologie, Paris',
  },
  {
    title: 'Mécanismes cérébraux de l\'expérience mystique',
    href: '#',
    date: '2024',
    category: 'Communications orales',
    location: 'Congrès de l\'Encéphale, Paris',
  },
  {
    title: 'Psychiatres et psychédéliques : connaissances et expérience',
    href: '#',
    date: '2024',
    category: 'Communications orales',
    location: 'Congrès de l\'Encéphale, Paris',
  },
  {
    title: 'Faut-il triper pour guérir ?',
    href: '#',
    date: '2023',
    category: 'Communications orales',
    location: 'Congrès Français de Psychiatrie, Lyon',
  },
  {
    title: 'Usage thérapeutique des psychédéliques',
    href: 'https://www.youtube.com/watch?v=43uLxpI2-WA',
    date: '2023',
    category: 'Communications orales',
    location: 'Fédération Addiction, Orléans',
  },
  {
    title: 'Un renouveau des psychédéliques ? Perspectives psychiatriques',
    href: '#',
    date: '2023',
    category: 'Communications orales',
    location: 'Webinaire Politiques des Drogues IRESP CNAM',
  },
  {
    title: 'Les psychédéliques et le potentiel thérapeutique des états modifiés de conscience',
    href: 'https://www.youtube.com/watch?v=UEREXRI7VYw',
    date: '2023',
    category: 'Communications orales',
    location: 'Forum des Sciences Cognitives, Paris',
  },
  {
    title: 'Les psychédéliques, la seule révolution en psychiatrie',
    href: '#',
    date: '2023',
    category: 'Communications orales',
    location: 'Congrès de l\'Encéphale, Paris',
  },
  {
    title: 'Triper pour guérir',
    href: '#',
    date: '2022',
    category: 'Communications orales',
    location: 'Webinar de Neuropsychopharmacologie pour l\'AFPBN',
  },
  {
    title: 'e-Conference',
    href: '#',
    date: '2021',
    category: 'Communications orales',
    location: 'Journées de Neurologie de Langue Française',
  },
  {
    title: 'Présidence de la session Psychiatrie et Psychédéliques',
    href: '#',
    date: '2021',
    category: 'Communications orales',
    location: 'Congrès de l\'Encéphale, Paris',
  },
  {
    title: 'Présidence de la session Psychiatrie et Psychédéliques',
    href: '#',
    date: '2020',
    category: 'Communications orales',
    location: 'Congrès de l\'Encéphale, Paris',
  },
  {
    title: 'Congrès de Psychiatrie et de Neurologie en Langue Française',
    href: '#',
    date: '2019',
    category: 'Communications orales',
    location: 'Beyrouth, Lebanon',
  },
  {
    title: 'BCNBP National Day: Cognition and Consciousness',
    href: '#',
    date: '2019',
    category: 'Communications orales',
    location: 'Bruxelles, Belgium',
  },
  {
    title: 'Congrès Français de Psychiatrie ; Congrès de l\'Encéphale',
    href: '#',
    date: '2018',
    category: 'Communications orales',
    location: 'Nantes ; Paris',
  },

  // Posters
  {
    title: 'Esketamine-induced mystical experiences predict antidepressive response',
    href: '#',
    date: '2025',
    category: 'Posters',
    location: 'SOBP, Toronto, Canada',
  },
  {
    title: 'Disruption of consciousness depends on insight in obsessive-compulsive disorder and on positive symptoms in schizophrenia',
    href: '#',
    date: '2024',
    category: 'Posters',
    location: 'SOBP Austin, USA ; ASSC Tokyo, Japon',
  },
  {
    title: 'Ketamine disrupts consciousness in healthy controls in relation with psychotic-like symptoms',
    href: '#',
    date: '2023',
    category: 'Posters',
    location: 'SOBP Austin, USA ; ASSC New York, USA',
  },
  {
    title: 'Mapping Individually Actionable Brain-Behavior Space Variation Across the Mood Spectrum',
    href: '#',
    date: '2023',
    category: 'Posters',
    location: 'SOBP San Diego, USA ; OHBM Montréal, Canada',
  },
  {
    title: 'Perturbations de l\'accès conscient et de la connectivité cérébrale longue-distance dans la psychose',
    href: '#',
    date: '2018',
    category: 'Posters',
    location: 'Congrès Français de Psychiatrie, Nantes',
  },
  {
    title: 'Anomalies de la conscience et de l\'amplification attentionnelle chez les patients schizophrènes',
    href: '#',
    date: '2018',
    category: 'Posters',
    location: 'Congrès de l\'Encéphale, Paris',
  },
  {
    title: 'Impaired conscious access and abnormal attentional amplification in schizophrenia',
    href: '#',
    date: '2017',
    category: 'Posters',
    location: 'ASSC Beijing ; ICON Amsterdam',
  },
  {
    title: 'Pseudo-hallucinations dans le cadre d\'un trouble conversif, à propos d\'un cas',
    href: '#',
    date: '2014',
    category: 'Posters',
    location: 'Congrès de l\'Encéphale, Paris',
  },
  {
    title: 'Folates et schizophrénie, vers de nouvelles pratiques ?',
    href: '#',
    date: '2014',
    category: 'Posters',
    location: 'Congrès de l\'Encéphale, Paris',
  },
];

export function Talks() {
  const t = useTranslations('TalksPage.all');

  // Group by category
  const categories = ['Organisation de conférences', 'Communications orales', 'Posters'];
  const groupedTalks = categories.map(category => ({
    category,
    items: talks.filter(talk => talk.category === category)
  }));

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-2xl lg:max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">{t('title')}</h2>
          <p className="mt-2 text-lg/8 text-gray-600">{t('subtitle')}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:my-24">
        <div className="mx-auto max-w-2xl space-y-16">
          {groupedTalks.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t(`categories.${category}`)}</h3>
              <ul role="list" className="divide-y divide-gray-100">
                {items.map((talk, index) => (
                  <li key={`${category}-${index}`} className="relative flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm/6 font-semibold text-gray-900">
                          {talk.href !== '#' ? (
                            <a href={talk.href} target="_blank" rel="noopener noreferrer">
                              <span className="absolute inset-x-0 -top-px bottom-0" />
                              {talk.title}
                            </a>
                          ) : (
                            talk.title
                          )}
                        </p>
                        <p className="mt-1 flex text-xs/5 text-gray-500">
                          {talk.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-x-4 min-w-[120px] justify-end">
                      <div className="hidden sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm/6 text-gray-900 w-24 text-right">{talk.date}</p>
                      </div>
                      <div className="w-5">
                        {talk.href !== '#' && (
                          <ChevronRightIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
