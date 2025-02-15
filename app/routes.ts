import { index, layout, route } from '@react-router/dev/routes';
import type { RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  layout('routes/auth/layout.tsx', [route('auth', 'routes/auth/page.tsx')]),
] satisfies RouteConfig;
