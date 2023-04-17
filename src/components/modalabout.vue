<template lang="html">
  <div class="modal-bd" @click="close">
    <div class="modal-wrapper" @click.stop>
      <button type="button" class="btn-close" @click="close">&times;</button>
      <div class="modal-details">
        <h2>Конкурс &laquo;Лучший выпускник КНИТУ&raquo;</h2>
        <p>
          Конкурс &laquo;Лучший выпускник КНИТУ&raquo; проводится с целью выявления и поддержки наиболее талантливых выпускников КНИТУ, проявивших себя в учебной, научной, творческой, спортивной и общественной деятельности, привлечение внимания деловой общественности Республики Татарстан к проблеме трудоустройства выпускников и закрепления молодежи в Республике.
        </p>
        <p>
          В конкурсе принимают участие выпускники&nbsp;&mdash;&nbsp;студенты Казанского Национального Исследовательского Технологического Университета очной формы обучения.
        </p>
        <p>
          Собранная информация на одной платформе о выдающихся выпускниках поможет найти выпускникам работу по профессии, а работодателям&nbsp;&mdash;&nbsp;соискателей на свои вакансии среди лучших выпускников.
        </p>
        <p>
          Сайт Конкурса разработан студентом ИУАИТ группы 8101-21 Кагировым Р. Д.
        </p>
        <p>
          Официальный сайт КНИТУ: <a target="_blank" href="https://www.kstu.ru/">www.kstu.ru</a>.
        </p>
        <div class="video-content">
          <div class="video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ziJ6sc4KzZ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalAbout",
  emits: ["close"],
  methods: {
    close() {
      history.pushState("",
        document.title,
        window.location.pathname
          + window.location.search);
      this.$emit('close');
    }
  }
}
</script>

<style lang="css" scoped>
.video-content {
  display: flex;
  justify-content: center;
}
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
@media only screen
and (max-width: 600px)  {
  .modal-wrapper {
    font-size: 5vw;
  }
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
    z-index: 4;
    color: var(--m-color-dark-gray);
    text-transform: none;
  }
.modal-wrapper {
  background-color: var(--m-color-green);
  padding: 1em 0 0.5em;
  width: 90vw;
  max-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
}
.modal-details {
  overflow-y: auto;
  flex: 1;
  padding: 0 2em;
}
</style>
