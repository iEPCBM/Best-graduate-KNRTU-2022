<template lang="html">
  <div class="graduate-mini-card-wrapper">
    <div class="avatar mcard-avatar-wrapper">
      <img ref="avatar" class="mcard-avatar" :alt="name" :src="avatarUrl_d" @error="setAltImage">
    </div>
    <div class="mcard-details">
      <div class="data-wrapper">
        <p class="mcard-name">{{ name }}</p>
        <p class="mcard-almamatter">{{ institute }}</p>
      </div>
      <p class="mcard-datails-link"><a @click="showModalCard" :href="'#grc'+id.toString()">Подробнее</a></p>
    </div>
    <ModalCard
      :name="name"
      :patronym="patronym"
      :institute="institute"
      :faculty="faculty"
      :major_code="major_code"
      :major_title="major_title"
      :avatarUrl="avatarUrl"
      :workTitle="workTitle"
      :avgScore="avgScore"
      :achievements="achievements"
      :email="email"
      :telephone="telephone"
      :site="site"
      :cachedImageSizes="cachedImageSizes"
      v-if="isModalVisible"
      @close="closeModalCard"/>
  </div>
</template>

<script>
import ModalCard from './modalcard.vue';

export default {
  name: 'MiniCard',
  data() {
    return {
      isModalVisible: false,
      avatarUrl_d: "",
      altImgPath: require("@/assets/nophoto.png")
    }
  },
  mounted() {
    this.loadCachedImage();
  },
  methods: {
      showModalCard() {
        this.isModalVisible = true;
        document.body.classList.add("disable-scroll");
      },
      closeModalCard() {
        this.isModalVisible = false;
        document.body.classList.remove("disable-scroll");
      },
      setAltImage(evt) {
        evt.target.src = this.altImgPath;
        this.avatarUrl_d = this.altImgPath;
      },
      loadCachedImage() {
        let cw = this.$refs.avatar.clientWidth;
        let optSize = {w: 0, h: 0};
        let minDelta;
        if (this.cachedImageSizes.length>0) {
          this.cachedImageSizes.forEach((item) => {
            if (item["crop"]) {
              if (minDelta!==undefined&&Math.abs(cw-item["w"])<minDelta) {
                optSize.w = item["w"];
                optSize.h = item["h"];
                minDelta = Math.abs(cw-item["w"]);
              }
              else if (minDelta===undefined) {
                optSize.w = item["w"];
                optSize.h = item["h"];
                minDelta = Math.abs(cw-item["w"]);
              }
            }
          });
          this.avatarUrl_d = this.avatarUrl+"?size="+optSize.w+"x"+optSize.h+"&q=90";
        }
        else {
          this.avatarUrl_d = this.avatarUrl;
        }
      }
    },
  props: {
    name: String,
    patronym: String,
    institute_acronym: String,
    institute: String,
    faculty: String,
    major_code: String,
    major_title: String,
    avatarUrl: String,
    workTitle: String,
    avgScore: Number,
    achievements: String,
    email: String,
    telephone: String,
    site: String,
    id: String,
    cachedImageSizes: Object
  },
  components: {
    ModalCard
  }
}
</script>

<style lang="css" scoped>
.graduate-mini-card-wrapper {
  width: 15.1vw;
  padding: 1em;
  margin: 0.5em;
  background-color: var(--m-color-bg);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

}
.mcard-avatar-wrapper {
  display: inline-block;
  position: relative;
  width: 100%;
  z-index: 0;
}
.mcard-avatar {
  object-fit: cover;
  width: 100%;
  height: 15vw;
  margin: 0;
  display: block;
  background-color: var(--m-color-bg);
}
.mcard-details {
  color: var(--m-color-dark-gray);
  white-space: normal;
  width: inherit;
  display: grid;
  align-content: space-between;
  height: 100%;
}
.data-wrapper {
  margin: 0.5em 0 0;
}
.mcard-name, .mcard-almamatter {
  margin: 0.5em 0;
}
.mcard-name {
  font-weight: bold;
  font-size: 1.25em;
}
.mcard-datails-link {
  margin: 1.5em 0 0.5em;
  width: 100%;
}
.mcard-datails-link a {
  background-color: var(--m-color-red);
  display: inline;
  padding: 0.5em 1em;
  color: #FFF;
  text-decoration: none;
  border-radius: 0.25em;
  transition: background-color .25s;
}
.mcard-datails-link a:hover {
  background-color: var(--m-color-red-light);
}
@media only screen
and (max-width: 600px) {
  .graduate-mini-card-wrapper {
    width: auto;
    padding: 1em;
    background-color: var(--m-color-bg);
  }
  .mcard-avatar {
    max-height: initial;
    height: auto;
  }
  .mcard-details {
    align-content: start;
  }
}
</style>
