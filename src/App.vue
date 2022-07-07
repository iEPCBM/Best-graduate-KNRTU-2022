<template>
  <AppNavbar/>
  <HeaderBanner/>
  <GraduatesBlock/>
  <GFooter/>
</template>

<script>
import AppNavbar from './components/nav.vue'
import HeaderBanner from './components/header_banner.vue'
import GFooter from './components/footer.vue'
import GraduatesBlock from './components/graduates_block.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    HeaderBanner,
    GraduatesBlock,
    GFooter
  }
}
</script>

<style>
</style>
