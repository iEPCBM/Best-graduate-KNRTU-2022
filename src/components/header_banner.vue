<template lang="html">
  <div class="banner-wrapper">
    <img class="banner-bg" src="../assets/m_statue_cg.png" alt="">
    <div class="tbanner-container">
      <p>Лучший</p>
      <p>выпускник</p>
      <p>КНИТУ <span class="tb-sel">2022</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBanner'
}
</script>

<style lang="css" scoped>
.banner-wrapper {
  height: 100%;
  z-index: 0;
  position: relative;
}
.banner-bg {
  max-width: 50vw;
  bottom: 0;
  margin: 5em -13em 0 20vw;
  display: block;
}
.tbanner-container {
  background-color: var(--m-color-gray);
  position: absolute;
  left: 54vw;
  bottom: 40%;
  padding: 0.75em 1.5em;
  color: var(--m-color-dark-gray);
}
.tbanner-container p {
  margin: 0;
  padding: 0.125em 0;
  font-size: 3em;
}
.tb-sel {
  background-color: var(--m-color-dark-gray);
  color: #FFF;
  padding: 0 0.2em;
  border-radius: 0.25em;
  font-weight: bold;
}
@media only screen
and (max-width: 600px) {
  .tbanner-container {
    padding: 0.25em 0.5em;
  }
  .tbanner-container p {
    font-size: 1em;
  }
  .banner-wrapper {
    height: auto;
  }
  .banner-bg {
    max-width: 66%;
    margin: 2em 0 0 6vw;
  }
}
</style>
