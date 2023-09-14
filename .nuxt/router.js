import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c82fe0fc = () => interopDefault(import('..\\pages\\consultant\\index.vue' /* webpackChunkName: "pages/consultant/index" */))
const _5ce3f950 = () => interopDefault(import('..\\pages\\taskmaker\\index.vue' /* webpackChunkName: "pages/taskmaker/index" */))
const _0f8d641f = () => interopDefault(import('..\\pages\\worker\\index.vue' /* webpackChunkName: "pages/worker/index" */))
const _395f8586 = () => interopDefault(import('..\\pages\\consultant\\create\\index.vue' /* webpackChunkName: "pages/consultant/create/index" */))
const _3efd70dd = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
