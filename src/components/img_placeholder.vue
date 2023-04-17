<template>
  <div class="avatar mcard-avatar-wrapper">
    <img ref="avatar" class="mcard-avatar" :alt="name" :src="avatarUrl_d" @error="setAltImage">
    <div class="">

    </div>
  </div>
</template>

<script>
export default {
  name: 'img_placeholder',
  data() {
    return {
      avatarUrl_d: "",
      altImgPath: require("@/assets/nophoto.png")
    }
  },
  props: {
    src: String,
    alt: String,

  }
}
</script>

<style lang="css" scoped>
.mcard-avatar-wrapper {
  display: inline-block;
  position: relative;
  width: 100%;
  z-index: 0;
}
.mcard-avatar {
  object-fit: cover;
  width: 100%;
  max-height: 15vw;
  margin: 0;
  display: block;
}
</style>
