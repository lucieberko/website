'use client';

import { useTranslations } from 'next-intl';
import { SVGProps } from 'react';

const navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lucie-berkovitch-0922072b5/',
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg fill="#52525b" viewBox="0 0 382 382" {...props}>
        <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889  C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056  H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806  c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1  s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73  c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079  c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426  c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472  L341.91,330.654L341.91,330.654z" />
      </svg>
    )
  },
  {
    name: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=7ShQRx8AAAAJ&hl=fr&oi=ao',
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 512 512" {...props}>
        <path xmlns="http://www.w3.org/2000/svg" fill="#71717a" d="M256 411.12L0 202.667 256 0z" />
        <path xmlns="http://www.w3.org/2000/svg" fill="#52525b" d="M256 411.12l256-208.453L256 0z" />
        <circle xmlns="http://www.w3.org/2000/svg" fill="#d4d4d8" cx="256" cy="362.667" r="149.333" />
        <path xmlns="http://www.w3.org/2000/svg" fill="#a1a1aa" d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z" />
      </svg>
    ),
  },
  {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/lucieberko.bsky.social',
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg fill="#52525b" viewBox="0 0 600 530" {...props}>
        <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/LucieBerkovitch',
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg fill="#52525b" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  }
]

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative inline-block hover:scale-110 transition-transform duration-400"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon
                aria-hidden="true"
                className="size-6 opacity-60 group-hover:opacity-100 transition-opacity duration-400"
              />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6 text-zinc-600 md:order-1 md:mt-0">
          {t('copyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  )
}
