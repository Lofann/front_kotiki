<template>
    <div class="d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-warning" type="button">
        <nuxt-link class = 'nav-link' :to ="this.$route.path+'/create'" >Создать</nuxt-link>
      </button>

      <button class="btn btn-warning" type="button">
        <nuxt-link class = 'nav-link' :to ="this.$route.path+'/list'" >Посмотреть список</nuxt-link>
      </button>
    </div>
</template>

<script>
export default{

}
</script>
