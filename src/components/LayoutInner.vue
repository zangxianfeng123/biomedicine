<template>
  <section>
    <router-view :key="key"></router-view>
  </section>
</template>

<script>
export default {
  name: 'LayoutInner',
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>
