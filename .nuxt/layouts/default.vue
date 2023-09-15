<template>


  <div>
    <NavbarRole/>
    <main>
      <div class = 'container'>
    <Nuxt />
  </div>
    </main>
  </div>

</template>

<script>
import NavbarRole from "/components/NavbarRole"
export default{
  components:{
    NavbarRole
  }
}
</script>