# vue-dashboard-starter

A minimal Vue 3 admin dashboard starter with TypeScript, Pinia, and Vue Router.

## Features

- Vue 3 Composition API with `<script setup>`
- TypeScript throughout
- Pinia state management
- Vue Router with lazy-loaded routes
- Sidebar navigation with active state
- Responsive stat cards grid
- Vite for fast development

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  components/    # Reusable UI components
    Sidebar.vue
    StatCard.vue
  views/         # Route-level views
    DashboardView.vue
    AnalyticsView.vue
    SettingsView.vue
  router/        # Vue Router config
  main.ts        # App entry point
```

## License

MIT
