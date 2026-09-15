import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { pageRoutes } from '@/content'
import { HomePage } from '@/features/home'
import { toRoutePath } from '@/lib'
import { StubPage } from '@/pages'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        {pageRoutes.map((page) => (
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
