<template>
  <div class="container-fluid">
    <div class="row">
      <Header />
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from '@/pages/header.vue';
import Footer from '@/pages/footer.vue';
export default {
  components:{
    Header,
    Footer
  }
}
</script>
