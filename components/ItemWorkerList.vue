<template>

      <div class="card" style="width: 80%; margin-left: auto; margin-right: auto; margin-top: 1%; margin-bottom: 1%;">
        <div class="card-body">
          <h1><nuxt-link  :to = 'this.$route.path +"/"+$data.UUID'> Название Заявки</nuxt-link></h1>
          <h4 class="card-subtitle mb-2 text-body-secondary">Название реализатора</h4>
          <p class="card-text">
            Небольшой пример текста, который должен основываться на названии карты и составлять основную часть содержимого карты.
            Небольшой пример текста, который должен основываться на названии карты и составлять основную часть содержимого карты.
            Небольшой пример текста, который должен основываться на названии карты и составлять основную часть содержимого карты.
          </p>
            <div class="row justify-content-end text-center" >
              <div class="p-3 col-2 mr-1  mb-3  ">Рейтинг: 5</div>
              <div class="p-3 col-2 mr-1 text-light mb-3 bg-warning border rounded">deadline</div>
              <div class="p-3 col-2 mr-5 text-light mb-3 bg-warning border rounded">Бюджет</div>

        </div>
      </div>
    </div>
</template>

<script>
export default{
data:() => ({
  UUID: "23232",
}),
}
</script>
