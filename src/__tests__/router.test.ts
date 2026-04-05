// Mock vue-router
jest.mock('vue-router', () => ({
  createRouter: jest.fn((config) => ({
    ...config,
    install: jest.fn(),
    push: jest.fn(),
    getRoutes: () => config.routes,
  })),
  createWebHistory: jest.fn(() => ({})),
}));

// Mock Vue components
jest.mock('@/views/DashboardView.vue', () => ({ name: 'DashboardView' }), { virtual: true });
jest.mock('@/views/AnalyticsView.vue', () => ({ name: 'AnalyticsView' }), { virtual: true });
jest.mock('@/views/SettingsView.vue', () => ({ name: 'SettingsView' }), { virtual: true });

import { router } from '../router/index';

describe('Router', () => {
  it('has dashboard route at root path', () => {
    const routes = router.getRoutes();
    const dashboard = routes.find((r: any) => r.path === '/');

    expect(dashboard).toBeDefined();
    expect(dashboard.name).toBe('dashboard');
  });

  it('has analytics route', () => {
    const routes = router.getRoutes();
    const analytics = routes.find((r: any) => r.path === '/analytics');

    expect(analytics).toBeDefined();
    expect(analytics.name).toBe('analytics');
  });

  it('has settings route', () => {
    const routes = router.getRoutes();
    const settings = routes.find((r: any) => r.path === '/settings');

    expect(settings).toBeDefined();
    expect(settings.name).toBe('settings');
  });

  it('defines exactly 3 routes', () => {
    const routes = router.getRoutes();
    expect(routes).toHaveLength(3);
  });

  it('uses lazy loading for analytics and settings', () => {
    const routes = router.getRoutes();
    const analytics = routes.find((r: any) => r.path === '/analytics');
    const settings = routes.find((r: any) => r.path === '/settings');

    expect(typeof analytics.component).toBe('function');
    expect(typeof settings.component).toBe('function');
  });

  it('eagerly loads dashboard view', () => {
    const routes = router.getRoutes();
    const dashboard = routes.find((r: any) => r.path === '/');

    expect(typeof dashboard.component).toBe('object');
  });
});
