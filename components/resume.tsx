'use client';

import { useTranslations } from 'next-intl';

// Les données du CV avec des clés de traduction
const resumeData = [
  // Postes actuels
  { id: 'cur1', titleKey: 'currentPositions.item1.title', descriptionKey: 'currentPositions.item1.description', date: '2023 - Present', category: 'currentPositions', href: 'https://www.ghu-paris.fr/fr/annuaire-des-structures-medicales/institut-de-neuromodulation-pole-15' },
  { id: 'cur2', titleKey: 'currentPositions.item2.title', descriptionKey: 'currentPositions.item2.description', date: '2024 - Present', category: 'currentPositions', href: 'https://computationalbrainteam.com/' },

  // Postes précédents
  { id: 'prev1', titleKey: 'previousPositions.item1.title', descriptionKey: 'previousPositions.item1.description', date: '2021 - 2023', category: 'previousPositions', href: 'https://medicine.yale.edu/lab/cho/members/' },
  { id: 'prev2', titleKey: 'previousPositions.item2.title', descriptionKey: 'previousPositions.item2.description', date: '2019 - 2021', category: 'previousPositions', href: 'https://www.ghu-paris.fr/fr/annuaire-des-structures-medicales/service-hospitalo-universitaire-shu' },

  // Éducation
  { id: 'edu1', titleKey: 'education.item1.title', descriptionKey: 'education.item1.description', date: '2020', category: 'education' },
  { id: 'edu2', titleKey: 'education.item2.title', descriptionKey: 'education.item2.description', date: '2015 - 2018', category: 'education' },
  { id: 'edu3', titleKey: 'education.item3.title', descriptionKey: 'education.item3.description', date: '2016', category: 'education' },
  { id: 'edu4', titleKey: 'education.item4.title', descriptionKey: 'education.item4.description', date: '2015', category: 'education' },
  { id: 'edu5', titleKey: 'education.item5.title', descriptionKey: 'education.item5.description', date: '2011 - 2019', category: 'education' },
  { id: 'edu6', titleKey: 'education.item6.title', descriptionKey: 'education.item6.description', date: '2006 - 2011', category: 'education' },

  // Bourses et prix
  { id: 'award1', titleKey: 'awards.item1', descriptionKey: '', date: '2023', category: 'awards' },
  { id: 'award2', titleKey: 'awards.item2', descriptionKey: '', date: '2023', category: 'awards' },
  { id: 'award3', titleKey: 'awards.item3', descriptionKey: '', date: '2022', category: 'awards' },
  { id: 'award4', titleKey: 'awards.item4', descriptionKey: '', date: '2022', category: 'awards' },
  { id: 'award5', titleKey: 'awards.item5', descriptionKey: '', date: '2021', category: 'awards' },
  { id: 'award6', titleKey: 'awards.item6', descriptionKey: '', date: '2018', category: 'awards' },
  { id: 'award7', titleKey: 'awards.item7', descriptionKey: '', date: '2018', category: 'awards' },
  { id: 'award8', titleKey: 'awards.item8', descriptionKey: '', date: '2018', category: 'awards' },

  // Financements
  { id: 'fund1', titleKey: 'funding.item1.title', descriptionKey: 'funding.item1.description', date: '2024', category: 'funding' },
  { id: 'fund2', titleKey: 'funding.item2.title', descriptionKey: 'funding.item2.description', date: '2025', category: 'funding' },
  { id: 'fund3', titleKey: 'funding.item3.title', descriptionKey: 'funding.item3.description', date: '2025', category: 'funding' },
  { id: 'fund4', titleKey: 'funding.item4.title', descriptionKey: 'funding.item4.description', date: '2019', category: 'funding' },
  { id: 'fund5', titleKey: 'funding.item5.title', descriptionKey: 'funding.item5.description', date: '2016 - 2018', category: 'funding' },
  { id: 'fund6', titleKey: 'funding.item6.title', descriptionKey: 'funding.item6.description', date: '2015 - 2016', category: 'funding' },
  { id: 'fund7', titleKey: 'funding.item7.title', descriptionKey: 'funding.item7.description', date: '2014 - 2015', category: 'funding' },

  // Enseignement
  { id: 'teach1', titleKey: 'teaching.item1', descriptionKey: '', date: '2024 - Present', category: 'teaching' },
  { id: 'teach2', titleKey: 'teaching.item2', descriptionKey: '', date: '2024 - Present', category: 'teaching' },
  { id: 'teach3', titleKey: 'teaching.item3', descriptionKey: '', date: '2023 - 2024', category: 'teaching' },
  { id: 'teach4', titleKey: 'teaching.item4', descriptionKey: '', date: '2020 - Present', category: 'teaching' },
  { id: 'teach5', titleKey: 'teaching.item5', descriptionKey: '', date: '2019 - Present', category: 'teaching' },
  { id: 'teach6', titleKey: 'teaching.item6', descriptionKey: '', date: '2018 - Present', category: 'teaching' },
  { id: 'teach7', titleKey: 'teaching.item7', descriptionKey: '', date: '2017 - Present', category: 'teaching' },
  { id: 'teach8', titleKey: 'teaching.item8', descriptionKey: '', date: '2017', category: 'teaching' },
  { id: 'teach9', titleKey: 'teaching.item9', descriptionKey: '', date: '2016 - 2021', category: 'teaching' },
  { id: 'teach10', titleKey: 'teaching.item10', descriptionKey: '', date: '2013 - 2021', category: 'teaching' },

  // Associatif et sociétés savantes
  { id: 'assoc1', titleKey: 'associative.item1', descriptionKey: '', date: '', category: 'associative' },
  { id: 'assoc2', titleKey: 'associative.item2', descriptionKey: '', date: '', category: 'associative' },
  { id: 'assoc3', titleKey: 'associative.item3', descriptionKey: '', date: '', category: 'associative' },
  { id: 'assoc4', titleKey: 'associative.item4', descriptionKey: '', date: '', category: 'associative' },
  { id: 'assoc5', titleKey: 'associative.item5', descriptionKey: '', date: '', category: 'associative' },
  { id: 'assoc6', titleKey: 'associative.item6', descriptionKey: '', date: '', category: 'associative' },
  { id: 'assoc7', titleKey: 'associative.item7', descriptionKey: '', date: '', category: 'associative' },
  { id: 'assoc8', titleKey: 'associative.item8', descriptionKey: '', date: '2008', category: 'associative' },
  { id: 'assoc9', titleKey: 'associative.item9', descriptionKey: '', date: '2007 - 2008', category: 'associative' },
];

export default function ResumePage() {
  const t = useTranslations('ResumePage');

  // Catégories qui gardent le style actuel (avec bordure à gauche)
  const borderedCategories = ['currentPositions', 'previousPositions'];

  // Catégories qui utilisent le nouveau style (liste avec dividers)
  const listCategories = ['education', 'awards', 'funding', 'teaching', 'associative'];

  // Ordre des catégories
  const categories = [
    'currentPositions',
    'previousPositions',
    'education',
    'awards',
    'funding',
    'teaching',
    'associative',
  ];

  const groupedByCategory = categories.map(category => ({
    category,
    items: resumeData.filter(item => item.category === category),
  })).filter(group => group.items.length > 0);

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  {t('title')}
                </h2>
                <p className="mt-2 text-lg/8 text-gray-600">{t('subtitle')}</p>
              </div>

              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 sm:w-24 sm:h-24">
                  <img
                    src="/photoID.png"
                    alt="Photo de profil"
                    className="rounded-lg object-cover drop-shadow-md ring-gray-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16 pb-24">
        <div className="mx-auto max-w-2xl space-y-16">
          {groupedByCategory.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t(`categories.${category}`)}</h3>

              {borderedCategories.includes(category) ? (
                // Style avec bordure à gauche pour les positions
                <div className="space-y-1">
                  {items.map((item) => (
                    <article
                      key={item.id}
                      className="relative isolate flex flex-col gap-3 border-l-2 border-gray-200 pl-6 hover:border-gray-400 transition-colors mb-6"
                    >
                      {item.date && (
                        <div className="flex items-center gap-x-4 text-xs">
                          <time className="text-gray-500">{item.date}</time>
                        </div>
                      )}
                      <div className="group relative">
                        <h5 className="text-base font-semibold text-gray-900">
                          {item.href ? (
                            <a
                              href={item.href}
                              className="group text-lg font-semibold text-gray-900 relative inline-block"
                              >
                                <span className="opacity-100 group-hover:opacity-0 transition duration-400 ease-in-out">
                                  {t(item.titleKey)}
                                </span>
                                <span className="gradient-text absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-400 ease-in-out">
                                  {t(item.titleKey)}
                                </span>
                            </a>
                          ) : (
                            t(item.titleKey)
                          )}
                        </h5>
                        {item.descriptionKey && (
                          <p className="mt-2 text-sm text-gray-600">
                            {t.rich(item.descriptionKey, {
                              institute: (chunks) => <span className="text-blue-600 font-semibold">{chunks}</span>,
                              hospital: (chunks) => <span className="text-green-600 font-semibold">{chunks}</span>,
                            })}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                // Style liste pour les autres catégories
                <ul role="list" className="divide-y divide-gray-100">
                  {items.map((item) => (
                    <li key={item.id} className="relative flex justify-between gap-x-6 py-5">
                      <div className="flex min-w-0 gap-x-4 flex-1">
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm/6 font-semibold text-gray-900">
                            {item.href ? (
                              <a href={item.href} target="_blank" rel="noopener noreferrer">
                                <span className="absolute inset-x-0 -top-px bottom-0" />
                                {t(item.titleKey)}
                              </a>
                            ) : (
                              t(item.titleKey)
                            )}
                          </p>
                          {item.descriptionKey && (
                            <p className="mt-1 text-xs/5 text-gray-500">
                              {t.rich(item.descriptionKey, {
                                institute: (chunks) => <span className="text-blue-600 font-semibold">{chunks}</span>,
                                hospital: (chunks) => <span className="text-green-600 font-semibold">{chunks}</span>,
                              })}
                            </p>
                          )}
                        </div>
                      </div>
                      {item.date && (
                        <div className="flex shrink-0 items-center gap-x-4 min-w-[100px] justify-end">
                          <div className="flex flex-col items-end">
                            <p className="text-sm/6 text-gray-900 text-right">{item.date}</p>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
