'use client';

import { useTranslations } from 'next-intl';

// Les données des liens utiles avec des clés de traduction
const linksData = [
  // Offres et structures de soins
  {
    id: 'care1',
    titleKey: 'careServices.item1.title',
    descriptionKey: 'careServices.item1.description',
    category: 'careServices',
    href: 'https://www.ghu-paris.fr/fr/annuaire-des-structures-medicales/centre-devaluation-des-pathologies-resistantes-cenpare-shu-pole'
  },
  {
    id: 'care2',
    titleKey: 'careServices.item2.title',
    descriptionKey: 'careServices.item2.description',
    category: 'careServices',
    href: 'https://www.ghu-paris.fr/fr/annuaire-des-structures-medicales/institut-de-neuromodulation-pole-15'
  },
  {
    id: 'care3',
    titleKey: 'careServices.item3.title',
    descriptionKey: 'careServices.item3.description',
    category: 'careServices',
    href: 'https://www.ghu-paris.fr/fr/annuaire-des-structures-medicales/consultation-bad-trip'
  },

  // Études en cours
  {
    id: 'study1',
    titleKey: 'ongoingStudies.item1.title',
    descriptionKey: 'ongoingStudies.item1.description',
    category: 'ongoingStudies',
    href: 'https://www.ghu-paris.fr/fr/actualites/etude-trouble-anxieux-generalise-lsd'
  },

  // Laboratoires et équipes de recherche
  {
    id: 'lab1',
    titleKey: 'researchLabs.item1.title',
    descriptionKey: 'researchLabs.item1.description',
    category: 'researchLabs',
    href: 'https://computationalbrainteam.com/'
  },
  {
    id: 'lab2',
    titleKey: 'researchLabs.item2.title',
    descriptionKey: 'researchLabs.item2.description',
    category: 'researchLabs',
    href: 'https://joliot.cea.fr/drf/joliot/Pages/Entites_de_recherche/neurospin/UNICOG.aspx'
  },

  // Associations et sociétés
  {
    id: 'assoc1',
    titleKey: 'associations.item1.title',
    descriptionKey: 'associations.item1.description',
    category: 'associations',
    href: 'https://www.afpbn.org/sections/medecine-psychedelique/'
  },
  {
    id: 'assoc2',
    titleKey: 'associations.item2.title',
    descriptionKey: 'associations.item2.description',
    category: 'associations',
    href: 'https://societepsychedelique.fr/fr'
  },

  // Ressources
  {
    id: 'resource1',
    titleKey: 'resources.item1.title',
    descriptionKey: 'resources.item1.description',
    category: 'resources',
    href: 'https://challengingpsychedelicexperiences.com/'
  }
];

// Images par catégorie
const categoryImages: Record<string, string> = {
  'careServices': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'ongoingStudies': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'researchLabs': 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'associations': 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'resources': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
};

export default function UsefulLinksPage() {
  const t = useTranslations('UsefulLinksPage');

  // Ordre des catégories
  const categories = [
    'careServices',
    'ongoingStudies',
    'researchLabs',
    'associations',
    'resources',
  ];

  const groupedByCategory = categories.map(category => ({
    category,
    items: linksData.filter(item => item.category === category),
  })).filter(group => group.items.length > 0);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
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

                <div className="space-y-6">
                  {items.map((item) => (
                    <article
                      key={item.id}
                      className="relative isolate flex flex-col gap-3 border-l-2 border-gray-200 pl-6 hover:border-gray-400 transition-colors"
                    >
                      <div className="group relative">
                        <h5 className="text-base font-semibold text-gray-900">
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-block"
                          >
                            <span className="opacity-100 group-hover:opacity-0 transition duration-400 ease-in-out">
                              {t(item.titleKey)}
                            </span>
                            <span className="gradient-text absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-400 ease-in-out">
                              {t(item.titleKey)}
                            </span>
                          </a>
                        </h5>
                        {item.descriptionKey && (
                          <p className="mt-2 text-sm text-gray-600">
                            {t(item.descriptionKey)}
                          </p>
                        )}
                      </div>
                    </article>
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
