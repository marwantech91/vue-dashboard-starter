<script setup lang="ts">
import { ref } from 'vue';

const darkMode = ref(false);
const emailNotifications = ref(true);
</script>

<template>
  <div>
    <h1 class="page-title">Settings</h1>
    <div class="settings-card">
      <div class="setting-row">
        <label>Dark Mode</label>
        <input type="checkbox" v-model="darkMode" />
      </div>
      <div class="setting-row">
        <label>Email Notifications</label>
        <input type="checkbox" v-model="emailNotifications" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #111827;
}

.settings-card {
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  max-width: 480px;
}

.setting-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.setting-row:last-child {
  border-bottom: none;
}
</style>
