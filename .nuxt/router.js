import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _746aded6 = () => interopDefault(import('..\\pages\\consultant\\index.vue' /* webpackChunkName: "pages/consultant/index" */))
const _acc4d836 = () => interopDefault(import('..\\pages\\taskmaker\\index.vue' /* webpackChunkName: "pages/taskmaker/index" */))
const _432966b2 = () => interopDefault(import('..\\pages\\worker\\index.vue' /* webpackChunkName: "pages/worker/index" */))
const _437578ce = () => interopDefault(import('..\\pages\\consultant\\create\\index.vue' /* webpackChunkName: "pages/consultant/create/index" */))
const _61c7f6e9 = () => interopDefault(import('..\\pages\\taskmaker\\create\\index.vue' /* webpackChunkName: "pages/taskmaker/create/index" */))
const _da48de72 = () => interopDefault(import('..\\pages\\taskmaker\\list\\index.vue' /* webpackChunkName: "pages/taskmaker/list/index" */))
const _1262b670 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
=======
const _c82fe0fc = () => interopDefault(import('..\\pages\\consultant\\index.vue' /* webpackChunkName: "pages/consultant/index" */))
const _5ce3f950 = () => interopDefault(import('..\\pages\\taskmaker\\index.vue' /* webpackChunkName: "pages/taskmaker/index" */))
const _0f8d641f = () => interopDefault(import('..\\pages\\worker\\index.vue' /* webpackChunkName: "pages/worker/index" */))
const _395f8586 = () => interopDefault(import('..\\pages\\consultant\\create\\index.vue' /* webpackChunkName: "pages/consultant/create/index" */))
const _3efd70dd = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> 63b78ac06fb903dc1b1df0f799d2262d2f48b89e

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/consultant",
    component: _c82fe0fc,
    name: "consultant"
  }, {
    path: "/taskmaker",
    component: _5ce3f950,
    name: "taskmaker"
  }, {
    path: "/worker",
    component: _0f8d641f,
    name: "worker"
  }, {
    path: "/consultant/create",
    component: _395f8586,
    name: "consultant-create"
  }, {
    path: "/taskmaker/create",
    component: _61c7f6e9,
    name: "taskmaker-create"
  }, {
    path: "/taskmaker/list",
    component: _da48de72,
    name: "taskmaker-list"
  }, {
    path: "/",
    component: _3efd70dd,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
