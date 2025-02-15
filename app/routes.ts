import { index, layout, route } from '@react-router/dev/routes';
import type { RouteConfig } from '@react-router/dev/routes';
import { RoutePaths } from './common/constants/route-paths';

export default [
  index('routes/home.tsx'),

  layout('routes/auth/layout.tsx', [route(RoutePaths.AUTH.path, 'routes/auth/page.tsx')]),

  layout('routes/albums/layout.tsx', [
    route(RoutePaths.ALBUMS.path, 'routes/albums/page.tsx'),
    route(RoutePaths.ALBUM.path, 'routes/albums/[id]/page.tsx'),
  ]),
] satisfies RouteConfig;
