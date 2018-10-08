<template>
  <div class="home-page">
    <h3 class="home-page-title">
      Welcome to the Test-Project for AMMO Varejo, follow the link to the product's list on the logo below
    </h3>
    <div class="brand-logo">
      <router-link class="brand-logo" to="products">
        <Header :brandMmartan="true" />
      </router-link>
    </div>
    <footer class="home-page-footer">
      <h4>by Nelson Dornelas</h4>
    </footer>
  </div>
</template>

<script>
import Header from '@/modules/common/components/Header'

export default {
  components: { Header },
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},

  methods: {}
}
</script>

<style lang="stylus" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  .home-page-title {
    flex-grow: 0;
    flex-shrink: 0;
  }
  .brand-logo {
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .home-page-footer {
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
