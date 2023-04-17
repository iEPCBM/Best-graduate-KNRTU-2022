<template lang="html">
  <section class="banner-wrapper">
    <video class="banner-bg" autoplay muted loop id="video-pb">
      <source src="@/assets/playback.mp4" type="video/mp4">
    </video>
    <div class="tbanner-wrapper">
      <div class="tbanner-container">
        <p>Лучший</p>
        <p>выпускник</p>
        <p>КНИТУ <span class="tb-sel">2022</span></p>
      </div>
    </div>
  </section>
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
  width: 100%;
  max-height: 85vh;
  object-fit: cover;
  overflow:hidden;
  bottom: 0;
  margin: 0;
  display: block;
}
.tbanner-wrapper {
  background-color: rgba(255,255,255,0.33);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.tbanner-container {
  background-color: var(--m-color-gray);
  margin-left: auto;
  padding: 0.75em 1.5em;
  color: var(--m-color-dark-gray);
  display: inline-block;
  position: absolute;
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
