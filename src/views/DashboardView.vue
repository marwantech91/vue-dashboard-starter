<script setup lang="ts">
import StatCard from '@/components/StatCard.vue';
</script>

<template>
  <div>
    <h1 class="page-title">Dashboard</h1>
    <div class="stats-grid">
      <StatCard title="Total Users" value="12,847" change="+14% from last month" />
      <StatCard title="Revenue" value="$48,290" change="+8.2% from last month" />
      <StatCard title="Active Sessions" value="1,423" />
      <StatCard title="Conversion Rate" value="3.24%" change="+0.5% from last month" />
    </div>
  </div>
</template>

<style scoped>
.page-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #111827;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}
</style>
