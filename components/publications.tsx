'use client';

import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useTranslations } from 'next-intl';

const featured = [
  {
    id: 1,
    title: 'Disruption of Conscious Access in Schizophrenia',
    href: 'https://doi.org/10.1016/j.tics.2017.08.006',
    descriptionKey: 'pub1.description',
    imageUrl: '/cover.tics.png',
    date: '2017',
    datetime: '2017',
    category: { title: 'Review', href: '#' },
    journal: 'Trends in Cognitive Sciences',
    authors: 'Berkovitch, L., Dehaene, S., Gaillard, R.',
  },
  {
    id: 2,
    title: 'A common symptom geometry of mood improvement under sertraline and placebo associated with distinct neural patterns',
    href: 'https://doi.org/10.1017/S0033291725100962',
    descriptionKey: 'pub2.description',
    imageUrl: '/PC_distrib_brain.png',
    date: '2025',
    datetime: '2025',
    category: { title: 'Research Article', href: '#' },
    journal: 'Psychological Medicine',
    authors: 'Berkovitch, L., Lee, K., Ji, J., Helmer, M., Rahmati, M., et al.',
  },
  {
    id: 3,
    title: 'Ketamine disrupts consciousness in healthy participants in relation with psychotic-like symptoms',
    href: 'https://doi.org/10.1101/2025.11.06.687042',
    descriptionKey: 'pub3.description',
    imageUrl: '/Summary3.png',
    date: '2025',
    datetime: '2025',
    category: { title: 'Preprint', href: '#' },
    journal: 'bioRxiv',
    authors: 'Berkovitch, L., Salvador, A., Andrillon, T., Dehaene, S., Gaillard, R.',
  },
]

export function Featured() {
  const t = useTranslations('PublicationsPage.featured');

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">{t('title')}</h2>
          <p className="mt-2 text-lg/8 text-gray-600">{t('subtitle')}</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {featured.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-64 sm:h-72 lg:h-64 block hover:opacity-90 transition-opacity"
              >
                <img
                  alt=""
                  src={post.imageUrl}
                  className="w-full h-full rounded-2xl bg-white object-contain"
                />
                <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10" />
              </a>
              <div className="flex max-w-xl w-full flex-col">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative flex-1 flex flex-col">
                  <h3 className="font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      <span className="mt-4 text-lg/6 opacity-100 group-hover:opacity-0 transition duration-400 ease-in-out min-h-[5rem] flex items-center">
                        {post.title}
                      </span>
                      <span className="mt-4 text-lg/6 gradient-text absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-400 ease-in-out min-h-[5rem] flex items-center">
                        {post.title}
                      </span>
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-none text-sm/6 text-gray-600">{t(post.descriptionKey)}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

const publications = [
  {
    title: 'Is there an independant anti-suicidal effect of esketamine in treatment resistant depression?',
    authors: 'Danon, M., Ostronoff G., Petit, A.C., de Maricourt, P., Kopec J., Mekaoui L., Gorwood P., Berkovitch, L.',
    journal: 'Journal of Affective Disorders',
    href: 'https://doi.org/10.1016/j.jad.2026.121181',
    date: '2026',
  },
  {
    title: 'Antidepressant drugs have pharmacological- and time-dependent effects on reinforcement learning in healthy volunteers: An 8 weeks randomized double-blind placebo-controlled study',
    authors: 'Berkovitch, L., Vinckier, F., Salvador, A., Pessiglione, M., Deakin, J. F. W., Dawson, G. R., Harmer, C. J., Goodwin, G. M., Gaillard, R.',
    journal: 'medRxiv',
    href: 'https://doi.org/10.64898/2025.12.30.25342896',
    date: '2026',
  },
  {
    title: 'Ketamine disrupts consciousness in healthy participants in relation with psychotic-like symptoms',
    authors: 'Berkovitch, L., Salvador, A., Andrillon, T., Dehaene, S., Gaillard, R.',
    journal: 'bioRxiv',
    href: 'https://doi.org/10.1101/2025.11.06.687042',
    date: '2025',
  },
  {
    title: 'An educational tool using artificial-intelligence-generated visualisations to improve teaching of psychiatric symptom characterisation',
    authors: 'Gauld, C. & AESP Group Study',
    journal: 'The British Journal of Psychiatry',
    href: 'https://doi.org/10.1192/bjp.2025.10464',
    date: '2025',
  },
  {
    title: 'Optimizing subthalamic deep brain stimulation for treatment-refractory obsessive compulsive disorder: A practical guide to advanced parameter tuning',
    authors: 'Amagat, M., Porpiglia, F., Chalah, M. A., Longuet, Y., Vinckier, F., Gaillard, R., Berkovitch, L., Pallud, J., Defrance, G., Zanello, M., Domenech, P.',
    journal: 'Brain Stimulation',
    href: 'https://doi.org/10.1016/j.brs.2025.09.007',
    date: '2025',
  },
  {
    title: 'Disruption of consciousness depends on insight in obsessive-compulsive disorder and on positive symptoms in schizophrenia',
    authors: 'Tumkaya, S., Yücens, B., Gündüz, M., Maheu, M., Berkovitch, L.',
    journal: 'Neuroscience of Consciousness',
    href: 'https://doi.org/10.1093/nc/niaf029',
    date: '2025',
  },
  {
    title: 'A common symptom geometry of mood improvement under sertraline and placebo associated with distinct neural patterns',
    authors: 'Berkovitch, L., Lee, K., Ji, J., Helmer, M., Rahmati, M., Demsar, J., Kraljic, A., Matkovic, A., Tamayo, Z., Murray, J., Repovs, G., Krystal, J., Martin, W., Fonteneau, C., Anticevic, A.',
    journal: 'Psychological Medicine',
    href: 'https://doi.org/10.1017/S0033291725100962',
    date: '2025',
  },
  {
    title: 'Neurocognitive effects of psilocybin: A systematic and comprehensive review of neuroimaging studies in humans',
    authors: 'Berkovitch, L., Fauvel, B., Preller, K. H., Gaillard, R.',
    journal: 'Neuroscience & Biobehavioral Reviews',
    href: 'https://doi.org/10.1016/j.neubiorev.2025.106239',
    date: '2025',
  },
  {
    title: 'Predictive Biases in Emotional Perception: Differential Influence of Mood and Affective Primes in Individuals with and without Mood Disorders',
    authors: 'Leclerc, A., Nalborczyk, L., Kauffmann, L., Houenou, J., Berkovitch, L., Favre, P.',
    journal: 'OSF',
    href: 'https://doi.org/10.31234/osf.io/ztyk6_v2',
    date: '2025',
  },
  {
    title: 'Ketamine Alters Tuning of Neural and Behavioral Spatial Working Memory Precision',
    authors: 'Rahmati, M., Moujaes, F., Suljič, N. P., Ji, J. L., Berkovitch, L., Lee, K., et al., Anticevic, A.',
    journal: 'bioRxiv',
    href: 'https://doi.org/10.1101/2025.02.10.637233',
    date: '2025',
  },
  {
    title: 'Mixed features in mood episodes: Mismatch between intensity and valence in emotional responses',
    authors: 'Henry C., Berkovitch L.',
    journal: 'European Neuropsychopharmacology',
    href: 'https://doi.org/10.1016/j.euroneuro.2024.06.009',
    date: '2024',
  },
  {
    title: 'Human brain state dynamics reflect individual neuro-phenotypes',
    authors: 'Lee, K., Ji, J. L., Fonteneau, C., Berkovitch, L., Rahmati, M., Pan, L., Repovš, G., Krystal, J. H., Murray, J. D., Anticevic, A.',
    journal: 'PLOS Biology',
    href: 'https://doi.org/10.1371/journal.pbio.3002808',
    date: '2024',
  },
  {
    title: 'Esketamine-induced post-traumatic stress disorder flashbacks during treatment-resistant depression indication: Is it just a side effect?',
    authors: 'Rothärmel, M., Mekaoui, L., Kazour, F., Herrero, M., Beetz-Lobono, E.-M., Lengvenyte, A., Holtzmann, J., Raynaud, P., Cuenca, M., Bulteau, S., Maricourt, P. de, Husson, T., Olié, E., et al., Berkovitch, L.',
    journal: 'medRxiv',
    href: 'https://doi.org/10.1101/2024.01.09.24300998',
    date: '2024',
  },
  {
    title: 'Psychedelic medicine: A new fast-acting treatment for depression?',
    authors: 'Bottemanne, H., Berkovitch, L., Gasnier, M., Mallet, L.',
    journal: "L'Information Psychiatrique",
    href: 'https://doi.org/10.1684/ipe.2023.2655',
    date: '2023',
  },
  {
    title: 'Storm on predictive brain: A neurocomputational account of ketamine antidepressant effect',
    authors: 'Berkovitch, L., Bottemanne, H., Gauld, C., Balcerac, A., Schmidt, L., Mouchabac, S., Fossati, P.',
    journal: 'Neuroscience & Biobehavioral Reviews',
    href: 'https://doi.org/10.1016/j.neubiorev.2023.105410',
    date: '2023',
  },
  {
    title: 'Towards mapping neuro-behavioral heterogeneity of psychedelic neurobiology in humans',
    authors: 'Moujaes, F., Preller, K., Ji, L., Murray, J., Berkovitch, L., Vollenweider, F., Anticevic, A.',
    journal: 'Biological Psychiatry',
    href: 'https://doi.org/10.1016/j.biopsych.2022.10.021',
    date: '2023',
  },
  {
    title: 'Preserved Unconscious Processing in Schizophrenia: The Case of Motivation',
    authors: 'Berkovitch, L., Gaillard, R., Abdel-Ahad, P., et al., Pessiglione, M., Vinckier, F.',
    journal: 'Schizophrenia Bulletin',
    href: 'https://doi.org/10.1093/schbul/sbac076',
    date: '2022',
  },
  {
    title: 'Efficacy and Safety of Intranasal Esketamine in Patients With Treatment-Resistant Depression and Comorbid Chronic Post-traumatic Stress Disorder: Open-Label Single-Arm Pilot Study',
    authors: 'Rothärmel, M., Benosman, C., El-Hage, W., Berjamin, C., Ribayrol, D., et al., Berkovitch, L., Moulier, V.',
    journal: 'Frontiers in Psychiatry',
    href: 'https://doi.org/10.3389/fpsyt.2022.865466',
    date: '2022',
  },
  {
    title: 'Efficacy of tDCS in catatonia: a review and case series',
    authors: 'Haroche, A., Giraud, N., Vinckier, F., et al., Berkovitch, L., Gaillard, R., Attali, D., Plaze, M.',
    journal: 'Frontiers in Psychiatry',
    href: 'https://doi.org/10.3389/fpsyt.2022.876834',
    date: '2022',
  },
  {
    title: 'Efficacité des psychédéliques en psychiatrie, une revue systématique',
    authors: 'Berkovitch, L., Romeo, B., Karila, L., Gaillard, R., Benyamina, A.',
    journal: "L'Encéphale",
    href: 'http://doi.org/10.1016/j.encep.2020.12.002',
    date: '2021',
  },
  {
    title: 'Disruption of Conscious Access in Psychosis Is Associated with Altered Structural Brain Connectivity',
    authors: 'Berkovitch, L., Charles, L., Del Cul, A., et al., Dehaene, S., Houenou, J.',
    journal: 'The Journal of Neuroscience',
    href: 'https://doi.org/10.1523/JNEUROSCI.0945-20.2020',
    date: '2021',
  },
  {
    title: 'Hallucinogènes et culture',
    authors: 'Dupuis, D., Berkovitch, L.',
    journal: 'PSN',
    href: 'https://www.cairn.info/revue-psn-2020-3-page-37.htm',
    date: '2020',
  },
  {
    title: 'Subliminal syntactic priming',
    authors: 'Berkovitch, L., Dehaene, S.',
    journal: 'Cognitive Psychology',
    href: 'https://doi.org/10.1016/j.cogpsych.2018.12.001',
    date: '2019',
  },
  {
    title: 'Unconscious memory suppression',
    authors: 'Salvador, A., Berkovitch, L., Vinckier, F., Cohen, L., Naccache, L., Dehaene, S., Gaillard, R.',
    journal: 'Cognition',
    href: 'https://doi.org/10.1016/j.cognition.2018.06.023',
    date: '2018',
  },
  {
    title: 'Impaired conscious access and abnormal attentional amplification in schizophrenia',
    authors: 'Berkovitch, L., Del Cul, A., Maheu, M., Dehaene, S.',
    journal: 'NeuroImage: Clinical',
    href: 'https://doi.org/10.1016/j.nicl.2018.03.010',
    date: '2018',
  },
  {
    title: 'La schizophrénie, une affaire de société',
    authors: 'Gaillard, R., Berkovitch, L., Olié, JP.',
    journal: 'Bulletin de l\'Académie Nationale de Médecine',
    href: '#',
    date: '2018',
  },
  {
    title: 'Disruption of Conscious Access in Schizophrenia',
    authors: 'Berkovitch, L., Dehaene, S., Gaillard, R.',
    journal: 'Trends in Cognitive Sciences',
    href: 'https://doi.org/10.1016/j.tics.2017.08.006',
    date: '2017',
  },
  {
    title: 'Des techniques de neurostimulation à l\'immunopsychiatrie',
    authors: 'Berkovitch, L., Gauthier, C., Gaillard, R.',
    journal: 'Bulletin de l\'Académie Nationale de Médecine',
    href: '#',
    date: '2017',
  },
  {
    title: 'Why the P3b is still a plausible correlate of conscious access? A commentary on Silverstein et al., 2015',
    authors: 'Naccache, L., Marti, S., Sitt, J. D., Trübutschek, D., Berkovitch, L.',
    journal: 'Cortex',
    href: 'https://doi.org/10.1016/j.cortex.2016.04.003',
    date: '2016',
  },
];

export function Publications() {
  const t = useTranslations('PublicationsPage.all');

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-2xl lg:max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">{t('title')}</h2>
          <p className="mt-2 text-lg/8 text-gray-600">{t('subtitle')}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:my-24">
        <div className="mx-auto max-w-2xl">

          <ul role="list" className="divide-y divide-gray-100">
            {publications.map((publication) => (
              <li key={publication.title} className="relative flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-gray-900">
                      <a href={publication.href}>
                        <span className="absolute inset-x-0 -top-px bottom-0" />
                        {publication.title}
                      </a>
                    </p>
                    <p className="mt-1 flex text-xs/5 text-gray-500">
                      {publication.authors}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm/6 text-gray-900">{publication.journal}</p>
                    <p className="mt-1 text-xs/5 text-gray-500">
                      <time dateTime={publication.date}>{publication.date}</time>
                    </p>
                  </div>
                  <ChevronRightIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
