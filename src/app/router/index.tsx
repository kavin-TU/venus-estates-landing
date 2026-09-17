import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { pageRoutes } from '@/content'
import { BlogDetailPage, BlogPage } from '@/features/blog'
import { ContactPage } from '@/features/contact'
import { GalleryAlbumPage, GalleryPage } from '@/features/gallery'
import { HomePage } from '@/features/home'
import { InvestorCornerPage } from '@/features/investorCorner'
import { NriCornerPage } from '@/features/nriCorner'
import { PlotDetailPage, PlotsPage } from '@/features/plots'
import { ProjectsPage } from '@/features/projects'
import { toRoutePath } from '@/lib'
import { StubPage } from '@/pages'

/** Paths with a real page; everything else still falls back to StubPage. */
const BUILT_PATHS = new Set([
  '/projects',
  '/plots',
  '/gallery',
  '/blog',
  '/nri-corner',
  '/investor-corner',
  '/contact',
])

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
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
    </Routes>
  )
}
