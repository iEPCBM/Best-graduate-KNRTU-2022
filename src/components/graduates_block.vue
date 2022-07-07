<template lang="html">
  <div class="graduates-list-wrapper">
    <div class="alphabet-fl-wr">
      <div class="alphabet-wrapper">
        <ul>
          <li v-for="elem in Object.keys(graduates)" :key="elem"><a :href="'#let'+elem">{{ elem }}</a></li>
        </ul>
      </div>
    </div>
    <div class="graduates-list">
      <div class="graduates-list-block" v-for="graduates_l in Object.keys(graduates)" :key="graduates_l">
        <h1 class="letter-title"><a :id="'let'+graduates_l"></a>{{ graduates_l }}</h1>
        <div class="graduate-cat-wrapper">
          <MiniCard
           v-for="graduate in graduates[graduates_l]" :key="graduate.avatarID"
            :id="graduate.avatarID"
            :name="graduate.surename+' '+graduate.name"
            :patronym="graduate.patronym"
            :faculty="graduate.faculty"
            :institute_acronym="graduate.institute_acronym"
            :institute="graduate.institute"
            :major_code="graduate.major_code"
            :major_title="graduate.major_title"
            :achievements="graduate.achievements"
            :avgScore="graduate.avgscore"
            :email="graduate.email"
            :telephone="graduate.tel"
            :site="graduate.site"
            :workTitle="graduate.thesis"
            :avatarUrl="graduate.hasAvatar?('http://127.0.0.1/bgrt/api/getimg.php?hash='+graduate.avatarID.toString()):(altImgPath)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MiniCard from './minicard.vue';
import {getrequest} from '../base.js';
export default {
  name: 'GraduatesBlock',
  data() {
    return {
        graduates:{},
        altImgPath: require("@/assets/nophoto.png")
      };
  },
  created(){
    this.updateGraduates();
  },
  components: {
    MiniCard
  },
    methods: {
      updateGraduates: function() {
        getrequest("http://127.0.0.1/bgrt/api/getgrd.php").then(resp => {
          let parsedData = JSON.parse(resp);
          if (Object.keys(parsedData).length>0) {
            this.graduates = parsedData;
          }
        });
        this.$forceUpdate();
      }
    }
}
</script>

<style lang="css" scoped>
.graduates-list-wrapper {
  background-color: var(--m-color-green);
  padding: 0 0 5em;
}
.graduates-list-wrapper ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.graduates-list-wrapper li {
  display: inline;
  margin: 0 0.5em;
  display: inline;
}
.graduates-list-wrapper a {
  text-decoration: underline;
  display: inline;
  color: var(--m-color-dark-gray);
}
.alphabet-wrapper {
  background-color: var(--m-color-bg);
  display: inline-block;
  margin: 1.5em 0 0;
  padding: 0.3em 0.1em;
}
.alphabet-fl-wr {
  display: flex;
  align-items: center;
  justify-content: center;
}
.graduates-list-block {
  margin: 2em 0 0;
}
.letter-title {
  color: var(--m-color-dark-gray);
  margin: 0;
  padding: 0.25em 2em 0.33em;
}
.graduate-cat-wrapper {
  display: flex;
  margin: 0 3em;
  flex-wrap: wrap;
}
@media only screen
and (max-width: 600px) {
  .graduate-cat-wrapper {
    flex-wrap: nowrap;
    flex-direction: column;
    margin-left: 1em;
    margin-right: 1em;
  }
  .graduates-list-wrapper {
  }
  .letter-title {
    font-size: 2em;
    text-align: center;
    position: relative;
    margin: auto;
    width: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  .letter-title::before {
    content: '';
    background-color: var(--m-color-dark-gray);
    position: absolute;
    width: 0.33em;
    height: 0.1em;
    top: 50%;
    left: 0;
  }
  .letter-title::after {
    content: '';
    background-color: var(--m-color-dark-gray);
    position: absolute;
    width: 0.33em;
    height: 0.1em;
    top: 50%;
    right: 0;
  }
}
</style>
