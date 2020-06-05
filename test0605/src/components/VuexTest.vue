<template>
  <div>
    <h2>{{ $store.getters.doubleCounter }}</h2>
    <h2>{{ $store.getters.numberFilter(6) }}</h2>
  </div>
</template>

<script>
export default {
  name: "VuexTest",
}
</script>

<style scoped>

</style>