<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" to="#">PUNKOTITKI</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link exact active-class = "active" class="nav-link" to = "/consultant">Консультант</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link exact active-class = "active" class="nav-link " to = "/taskmaker">Заказчик</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link exact active-class = "active" class="nav-link " to = "/worker">Исполнитель</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </template>
<script>
export default {

}
</script>

