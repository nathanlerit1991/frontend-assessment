<script setup>
  import { ref } from 'vue';

  import Pods from '../components/Pods.vue'

  const podsData = ref([
    { img: 'https://via.placeholder.com/400x300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { img: 'https://via.placeholder.com/400x300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua.' },
    { img: 'https://via.placeholder.com/400x300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' },
  ]);
</script>

<template>
  <main>
    <section id="hero" class="py-4 p-md-5 px-2">
      <div class="container">
        <div class="row align-items-center">
          <div class="col text-center">
            <h1 class="text-white">Hello Developer!</h1>
            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </div>
    </section>

    <section id="pods" class="py-4 p-md-5 px-2">
      <div class="container">
        <div class="row">
          <div
            v-for="(pod, pod_index) in podsData"
            class="cols col-md-4">
            <Pods :description="pod.description"/>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
