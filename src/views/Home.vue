<script setup>
  import Pods from '../components/Pods.vue'
</script>

<template>
  <main>
    <section id="hero" class="mh-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col text-center">
            <h1 class="text-white display-4">Hello Developer!</h1>
            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </div>
    </section>

    <section id="pods">
      <div class="container">
        <div class="row">
          <div class="cols col-md-4">
            <Pods/>
          </div>
          <div class="cols col-md-4">
            <Pods/>
          </div>
          <div class="cols col-md-4">
            <Pods/>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
