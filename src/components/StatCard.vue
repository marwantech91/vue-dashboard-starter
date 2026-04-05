<script setup lang="ts">
defineProps<{
  title: string;
  value: string | number;
  change?: string;
}>();
</script>

<template>
  <div class="stat-card">
    <p class="stat-title">{{ title }}</p>
    <p class="stat-value">{{ value }}</p>
    <p v-if="change" class="stat-change">{{ change }}</p>
  </div>
</template>

<style scoped>
.stat-card {
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.stat-title {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
}

.stat-change {
  font-size: 0.8rem;
  color: #10b981;
  margin-top: 0.25rem;
}
</style>
