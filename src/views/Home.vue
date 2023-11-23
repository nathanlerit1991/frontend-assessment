<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  import Pods from '../components/Pods.vue'
  import Accordion from '../components/Accordion.vue'
  import Tabs from '../components/Tabs.vue'

  //Fetch Data in data.json
  const jsonData = ref(null)
  async function fetchData() {
    try {
      const response = await fetch('/contents/data.json')

      if (response.ok) {
        jsonData.value = await response.json()
      } else {
        console.error('Failed to fetch JSON data')
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  /*
    isDesktop - conditionally display Tabs or Accordion via v-if to ensure only one component is visible in the DOM
    adjust the 768 depending on the desired mobile size
  */
  const isDesktop = ref(true)
  const handleResize = () => {
    isDesktop.value = window.innerWidth >= 768
  }


  onMounted(() => {
    fetchData()

    handleResize()
    window.addEventListener('resize', handleResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })

  //Dummy Data
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
            v-for="(pod, pod_index) in podsData" :key="pod_index"
            class="cols col-md-4">
            <Pods :description="pod.description"/>
          </div>
        </div>
      </div>
    </section>

    <section id="contents" class="py-4 p-md-5 px-2">
      <div class="container">
        <div class="row">
          <Tabs v-if="isDesktop" :tabsData="jsonData" />
          <Accordion v-else :accordionData="jsonData" />
        </div>
      </div>
    </section>
  </main>
</template>
