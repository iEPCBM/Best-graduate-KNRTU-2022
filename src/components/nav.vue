<template lang="html">
  <header class="header-wrapper">
    <h2 class="title">Лучший выпускник КНИТУ 2022</h2>
    <nav class="nav-wrapper">
      <ul>
        <li><a @click="showModalAbout" href="#about">О проекте</a></li>
      </ul>
    </nav>
    <ModalAbout
      v-if="isModalAboutVisible"
      @close="closeModalAbout"/>
  </header>
</template>

<script>
import ModalAbout from './modalabout.vue';

export default {
  name: 'AppNavbar',
  data() {
    return {
      isModalAboutVisible: false
    }
  },
  methods: {
    showModalAbout() {
      this.isModalAboutVisible = true;
      document.body.classList.add("disable-scroll");
    },
    closeModalAbout() {
      this.isModalAboutVisible = false;
      document.body.classList.remove("disable-scroll");
    }
  },
  components: {
    ModalAbout
  }
}
</script>

<style lang="css" scoped>
h3 {
  margin: 40px 0 0;
}
.nav-wrapper {
  float: right;
  display: inline-block;
  align-self: center;
  margin-left: auto;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline;
  margin: 0 10px;
}
a {
  color: var(--m-color-dark-gray);
}
.title {
  display: inline;
}
.header-wrapper {
  top: 0;
  padding: 1.5em 8em;
  background-color: var(--m-color-gray);
  color: var(--m-color-dark-gray);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
}
@media only screen
and (max-width: 600px) {
  .header-wrapper {
    padding: 1em;
    flex-direction: column;
  }
  .title {
    display: block;
  }
  .nav-wrapper {
    margin: 0;
    margin-right: auto;
    float: left;
    display: block;
  }
  li {
    margin: 0;
  }
}
</style>
