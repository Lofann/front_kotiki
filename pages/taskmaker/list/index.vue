<template>
  <section>
    <h1 class="text-center">СПИСОК УМПАЛУМП</h1>
    <div class="container " style="margin-left: auto;margin-right: auto;">
        <ItemWorkerList/>
        <ItemWorkerList/>
    </div>
  </section>

</template>

<script>
import ItemWorkerList from '/components/ItemWorkerList'
export default{
components:{
  ItemWorkerList
}
}
</script>
