<script setup>
  import { ref } from 'vue'

  const props = defineProps([
    'tabsData',
  ])

  const activeTab = ref(0)

  const changeTab = (index) => {
    activeTab.value = index
  }
</script>

<template>
  <div class="tabs">
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="(tab, index) in props.tabsData" :key="index">
        <a
          class="nav-link"
          :id="`tab${index}`"
          :class="{ active: activeTab === index }"
          data-bs-toggle="tab"
          :href="'#content' + index"
          role="tab"
          @click="changeTab(index)"
        >
          {{ tab.title }}
        </a>
      </li>
    </ul>

    <div class="tab-content p-3">
      <div
        v-for="(tab, index) in props.tabsData"
        :key="index"
        :id="`content${index}`"
        class="tab-pane"
        :class="{ active: activeTab === index }"
        role="tabpanel"
        v-html="tab.content"
      />
    </div>
  </div>
</template>

<style scoped>
.tabs .nav-link {
  color: #052c65;
  border: none;
}
.tabs .nav-link.active {
  background: #cfe2ff;
  border: none;
  color: #052c65;
}

.tab-pane.active {
  animation: fadeInSlideFromRight 0.2s ease-in-out;
}

@keyframes fadeInSlideFromRight {
  0% {
    opacity: 0;
    transform: translateX(5%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>