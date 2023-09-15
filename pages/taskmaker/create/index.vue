<template>
  <section>
  <h1>Форма создания заявки</h1>
  <form>          
    <div class="col-sm-5">
      <label for="task-name" class="form-label">Задача</label>
      <input type="text" class="form-control" id="task-name" placeholder="" value="" required="">
      <div class="invalid-feedback">
        Valid task name is required.
      </div>
    </div>

    <div class="col-12">
      <label for="task-description" class="form-label">Описание задачи</label>
      <textarea class="form-control" aria-label="С текстовым полем"></textarea>
    </div>
  
    <hr class="my-4">

    <div class="col-12">
      <h5><label for="competition" class="form-label">Компетенции</label></h5>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          1C
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Искуственный интеллект
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Python
        </label>
      </div>
    </div>

    <hr class="my-4">

    <div class="col-5">
      <label for="task-price" class="form-label">Бюджет</label>
      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
    </div>

    <div class="col-5 my-4">
      <label for="task-deadline" class="form-label">Сроки реализации</label>
      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
    </div>
  
    <button class="w-40 btn btn-warning btn-lg" type="submit">Отправить заявку</button>
  </form>
  </section>
</template>


<script>
export default{

}
</script>
