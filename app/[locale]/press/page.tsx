import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Press from '@/components/press'
import { setRequestLocale } from 'next-intl/server'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  
  return (
    <div className="bg-white">
      <Navbar />
      <Press />
      <Footer />
    </div>
  )
}