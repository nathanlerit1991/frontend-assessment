<script setup>
  const props = defineProps([
    'description',
  ])
</script>

<template>
  <div class="py-2 px-1 h-100">
    <figure class="pods-wrapper text-center h-100 p-3 p-md-4">
      <img src="https://via.placeholder.com/400x300" alt="pod image"/>
      <figcaption class="my-4 pb-4">{{ props.description }}</figcaption>

      <button class="btn text-black text-uppercase">Read More</button>
    </figure>
  </div>
</template>

<style scoped>
  .pods-wrapper {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    position: relative;
  }
  .pods-wrapper img {
    width: 100%;
    border-radius: 8px;
  }
  .pods-wrapper button {
    border-radius: 20px;
    border: solid 2px #000;
    font-weight: 700;

    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translate(-50%, 0);
  }
</style>