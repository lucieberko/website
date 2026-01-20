'use client'

import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import LanguageSwitcher from './language-switcher'

export default function Navbar() {
  const t = useTranslations('Navigation')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // triggers when route changes in App Router

  const navigation = [
    // { name: t('about'), href: '/' },
    { name: t('publications'), href: '/publications' },
    { name: t('press'), href: '/press' },
    { name: t('conf'), href: '/conf' },
    { name: t('resume'), href: '/resume' },
    { name: t('contact'), href: '/contact' },
    { name: t('links'), href: '/links' }
  ]

  useEffect(() => {
    // run once on mount & whenever pathname changes (so we recompute on navigation)
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // initial check (important when navigating between pages)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]); // re-run when path changes so we recalc scroll state

  return (
    <header
      className={clsx(
        'navbar',
        scrolled ? 'navbar-scrolled' : '',
        'sticky top-0',
        'z-50 w-full transition duration-500',
      )}
    >
      {/* Non-mobile navigation */}
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

        <div className="flex lg:flex-1">
          <Link href="/" className="group px-4 relative bg-size-[600%] -m-1.5 -ml-4 p-1.5">
            <div className="gradient-background absolute opacity-0 -z-1 group-hover:opacity-80 w-full h-full top-0 left-0 transition-all duration-500 ease-in-out"></div>
            <p className="text-xl font-medium text-zinc-800 group-hover:text-white transition duration-500 ease-in-out">Lucie Berkovitch</p>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">{t('openMenu')}</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="group text-base font-semibold relative">
              <p className="opacity-100 group-hover:opacity-0 transition duration-400 ease-in-out">{item.name}</p>
              <p className="gradient-text absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-400 ease-in-out">{item.name}</p>
            </Link>
          ))}

        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Mobile navigation */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-60" />
        <DialogPanel className="fixed inset-y-0 right-0 z-60 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span>Lucie Berkovitch</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">{t('closeMenu')}</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">

                <div className="space-y-2 py-6">

                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}

                </div>

                <div className="py-6">
                  <LanguageSwitcher />
                </div>

              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
