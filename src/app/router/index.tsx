import { lazy, Suspense } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { pageRoutes } from '@/content'
import { HomePage } from '@/features/home'
import { toRoutePath } from '@/lib'

const ProjectsPage = lazy(() =>
  import('@/features/projects').then((m) => ({ default: m.ProjectsPage })),
)
const PlotsPage = lazy(() =>
  import('@/features/plots').then((m) => ({ default: m.PlotsPage })),
)
const PlotDetailPage = lazy(() =>
  import('@/features/plots').then((m) => ({ default: m.PlotDetailPage })),
)
const GalleryPage = lazy(() =>
  import('@/features/gallery').then((m) => ({ default: m.GalleryPage })),
)
const GalleryAlbumPage = lazy(() =>
  import('@/features/gallery').then((m) => ({ default: m.GalleryAlbumPage })),
)
const BlogPage = lazy(() =>
  import('@/features/blog').then((m) => ({ default: m.BlogPage })),
)
const BlogDetailPage = lazy(() =>
  import('@/features/blog').then((m) => ({ default: m.BlogDetailPage })),
)
const NriCornerPage = lazy(() =>
  import('@/features/nriCorner').then((m) => ({ default: m.NriCornerPage })),
)
const InvestorCornerPage = lazy(() =>
  import('@/features/investorCorner').then((m) => ({
    default: m.InvestorCornerPage,
  })),
)
const ContactPage = lazy(() =>
  import('@/features/contact').then((m) => ({ default: m.ContactPage })),
)
const AboutStoryPage = lazy(() =>
  import('@/features/about').then((m) => ({ default: m.AboutStoryPage })),
)
const WhyUsPage = lazy(() =>
  import('@/features/about').then((m) => ({ default: m.WhyUsPage })),
)
const StubPage = lazy(() =>
  import('@/pages').then((m) => ({ default: m.StubPage })),
)

/** Paths with a real page; everything else still falls back to StubPage. */
const BUILT_PATHS = new Set([
  '/projects',
  '/plots',
  '/gallery',
  '/blog',
  '/nri-corner',
  '/investor-corner',
  '/contact',
  '/about/our-story',
  '/about/why-us',
])

function RouteFallback() {
  return (
    <div
      className="min-h-[40vh] w-full animate-pulse bg-mist"
      aria-hidden="true"
    />
  )
}

function LazyOutlet() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Outlet />
    </Suspense>
  )
}

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route element={<LazyOutlet />}>
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="plots" element={<PlotsPage />} />
          <Route path="plots/:slug" element={<PlotDetailPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="gallery/:slug" element={<GalleryAlbumPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogDetailPage />} />
          <Route path="nri-corner" element={<NriCornerPage />} />
          <Route path="investor-corner" element={<InvestorCornerPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<Navigate to="/about/our-story" replace />} />
          <Route path="about/our-story" element={<AboutStoryPage />} />
          <Route path="about/why-us" element={<WhyUsPage />} />
          {pageRoutes
            .filter((page) => !BUILT_PATHS.has(page.path))
            .map((page) => (
              <Route
                key={page.path}
                path={toRoutePath(page.path)}
                element={<StubPage title={page.label} />}
              />
            ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Route>
    </Routes>
  )
}
