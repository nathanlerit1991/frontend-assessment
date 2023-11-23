<template>
  <div class="py-2 px-1">
    <figure class="pods-wrapper text-center p-3 p-md-4">
      <img src="https://via.placeholder.com/400x300" alt="pod image"/>
      <figcaption class="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet dictum risus eu mollis. Aliquam tempor quam id ex imperdiet, vitae mattis metus malesuada.</figcaption>

      <button class="btn text-black text-uppercase">Read More</button>
    </figure>
  </div>
</template>

<style scoped>
  .pods-wrapper {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }
  .pods-wrapper img {
    width: 100%;
    border-radius: 8px;
  }
  .pods-wrapper button {
    border-radius: 20px;
    border: solid 2px #000;
    font-weight: 700;
  }
</style>