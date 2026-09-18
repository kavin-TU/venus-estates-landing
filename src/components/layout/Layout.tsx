import { Outlet, useLocation } from 'react-router-dom'
import { PageFade } from '@/components/ui'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { ScrollToTop } from './ScrollToTop'

export function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="relative flex min-h-dvh flex-col bg-ink text-paper">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <PageFade pageKey={pathname}>
          <Outlet />
        </PageFade>
      </main>
      <Footer />
    </div>
  )
}
