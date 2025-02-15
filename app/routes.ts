import { index, layout, route } from '@react-router/dev/routes';
import type { RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),

  layout('routes/auth/layout.tsx', [route('auth', 'routes/auth/page.tsx')]),

  layout('routes/albums/layout.tsx', [
    route('albums', 'routes/albums/page.tsx'),
    route('albums/:id', 'routes/albums/[id]/page.tsx'),
  ]),
] satisfies RouteConfig;
