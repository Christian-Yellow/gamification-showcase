const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CurrentScreen.vue') },
      { path: 'current', component: () => import('pages/CurrentScreen.vue') },
      { path: 'phase1', component: () => import('pages/Phase1Screen.vue') },
      { path: 'phase2', component: () => import('pages/Phase2Screen.vue') },
      { path: 'phase3', component: () => import('pages/Phase3Screen.vue') },
      { path: 'phase4', component: () => import('pages/Phase4Screen.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
