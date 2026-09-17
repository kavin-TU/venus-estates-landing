import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { pageRoutes } from '@/content'
import { HomePage } from '@/features/home'
import { ProjectsPage } from '@/features/projects'
import { toRoutePath } from '@/lib'
import { StubPage } from '@/pages'

/** Paths with a real page; everything else still falls back to StubPage. */
const BUILT_PATHS = new Set(['/projects'])

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
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
