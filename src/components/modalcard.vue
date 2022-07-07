<template lang="html">
  <div class="modal-bd" @click="close">
    <div class="card-wrapper" @click.stop>
      <button type="button" class="btn-close" @click="close">&times;</button>
      <div class="card-details">
        <div class="avatar avatar-wrapper">
          <img class="avatar-img" :src="avatarUrl" alt="">
        </div>
        <div class="bdetails-wrapper">
          <p class="details name-wrapper">{{ name }} {{ patronym }}</p>
          <div class="details-department">
            <p class="details institute-wrapper"><span>{{ institute }}</span></p>
            <p class="details faculty-wrapper"><span>{{ faculty }}</span></p>
          </div>
          <p class="details major-wrapper">{{ isSpecialist() ? 'Специальность' : 'Направление' }}: <span>{{ major_code }} {{ major_title }}</span></p>
          <p class="details work-wrapper">Тема {{ parseInt(major_code.split('.')[1]) == 4 ? 'диссертации' : 'ВКР' }}: <span>{{ workTitle }}</span></p>
          <p v-if="avgScore" class="details avgscore-wrapper">Средний балл: <span>{{ avgScore }}</span></p>
        </div>
        <div class="details-ext achievements-wrapper">
          <h2>Достижения</h2>
          <p v-html="achievements.trim().replaceAll('\n', '<br>')"></p>
        </div>
        <div v-if="email||telephone||site" class="details-ext contacts-wrapper">
          <h2>Контакты</h2>
          <p v-if="email">E-mail: <a :href="'mailto:'+email">{{ email }}</a></p>
          <p v-if="telephone">Телефон: <a :href="'tel:'+telephone">{{ telephone }}</a></p>
          <p v-if="site">Веб-страница: <a :href="'http://'+site">{{ site }}</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalCard',
  emits: ["close"],
  methods: {
    close() {
      history.pushState("",
        document.title,
        window.location.pathname
          + window.location.search);
      this.$emit('close');
    },
    isSpecialist() {
      let t = parseInt(this.major_code.split('.')[1]);
      if (t == 2 || t == 5) {
        return true;
      }
      return false;
    }
  },
  props: {
    name: String,
    patronym: String,
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
    site: String
  }
}
</script>

<style lang="css" scoped>
.btn-close {
  margin: 0 1em 0.5em auto;
  background-color: var(--m-color-gray);
  border: 0;
  cursor: pointer;
  color: var(--m-color-dark-gray);
  height: 1.5em;
  width: 1.5em;
  font-size: 1em;
  font-weight: bold;
  padding: 0.25em;
}
.modal-bd {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    color: var(--m-color-dark-gray);
  }
.card-wrapper {
  background-color: var(--m-color-green);
  padding: 1em 0 0.5em;
  width: 90vw;
  max-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
}
.card-details {
  overflow-y: auto;
  flex: 1;
  padding: 0 2em;
}
.avatar-wrapper {
  display: inline;
}
.avatar-img {
  display: inline-block;
  max-width: 25%;
  max-height: 33vw;
}
.bdetails-wrapper {
  display: inline-block;
  margin: 0.5em 2em;
  vertical-align: top;
  max-width: 66%;
}
.details {
  margin: 0;
  padding: 0.4em 0;
  font-weight: bold;
}
.details span {
  font-weight: normal;
}
.name-wrapper {
  font-weight: bold;
  font-size: 1.5em;
  padding-bottom: 0.1em;
}
.details-department {
  padding: 0 0 1em;
}
.details-department p {
  padding: 0.15em 0;
}
.details-ext {
  padding: 1em 0;
}

.details-ext h2 {
  margin: 0;
  padding: 0 0 0.1em;
}
.details-ext p {
  margin: 0;
  padding: 0.5em 0 0;
}

@media only screen
and (max-width: 600px) {
  .avatar-wrapper {
    display: block;
    padding: 0.75em 0 0;
  }
  .avatar-img {
    display: block;
    max-width: 100%;
    max-height: initial;
    margin: auto;
  }
  .bdetails-wrapper {
    margin-left: 0;
    max-width: 100%;
  }
  .card-wrapper {
    font-size: 5vw;
    width: 100vw;
    max-height: 90vh;
  }
  .card-details {
    padding: 0 1em;
  }
}
</style>
