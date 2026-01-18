import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Resume from '@/components/resume'
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
      <Resume />
      <Footer />
    </div>
  )
}
