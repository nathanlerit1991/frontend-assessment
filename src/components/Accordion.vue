<script setup>
  import { ref } from 'vue';

  const props = defineProps([
    'accordionData',
  ])

  const activeAccordion = ref(0)
  const toggleAccordion = (index) => {
    if (activeAccordion.value === index) {
      // If the same accordion is clicked, close it
      activeAccordion.value = -1
    } else {
      // Open the clicked accordion
      activeAccordion.value = index
    }
  }
</script>
<template>
  <div class="accordion" id="accordionExample">
    <div 
      v-for="(accordion, accordion_index) in accordionData" 
      :key="accordion_index" 
      class="accordion-item">
      <h2 class="accordion-header" :id="`heading${accordion_index}`">
        <button 
          class="accordion-button"
          :class="{ collapsed: activeAccordion !== accordion_index }"
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#collapseOne" 
          aria-expanded="true" 
          aria-controls="collapseOne"
          @click="toggleAccordion(accordion_index)"
        >
          {{ accordion.title }}
        </button>
      </h2>
      <div 
        :id="`collapse${accordion_index}`" 
        class="accordion-collapse collapse"
        :class="{ show: activeAccordion === accordion_index }"
        :aria-labelledby="'heading' + accordion_index"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body" v-html="accordion.content" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion .accordion-button {
  box-shadow: none;
}
</style>