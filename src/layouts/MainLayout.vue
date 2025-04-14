<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Gamification Showcase
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-route-tab to="/current" name="current" label="Current Screen" />
        <q-route-tab to="/phase1" name="phase1" label="Phase 1" />
        <q-route-tab to="/phase2" name="phase2" label="Phase 2" />
        <q-route-tab to="/phase3" name="phase3" label="Phase 3" />
        <q-route-tab to="/phase4" name="phase4" label="Phase 4" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('current')
</script>
