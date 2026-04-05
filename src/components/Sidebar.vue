<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const navItems = [
  { path: '/', label: 'Dashboard', icon: '~' },
  { path: '/analytics', label: 'Analytics', icon: '#' },
  { path: '/settings', label: 'Settings', icon: '*' },
];
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h2>Admin</h2>
    </div>
    <nav>
      <RouterLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        :class="['nav-item', { active: route.path === item.path }]"
      >
        <span class="nav-icon">{{ item.icon }}</span>
        {{ item.label }}
      </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 240px;
  background: #1a1a2e;
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid #2a2a4a;
}

.sidebar-header h2 {
  font-size: 1.25rem;
  color: #fff;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  color: #b0b0c0;
  text-decoration: none;
  transition: background 0.2s;
}

.nav-item:hover,
.nav-item.active {
  background: #2a2a4a;
  color: #fff;
}

.nav-icon {
  font-size: 1.1rem;
}
</style>
