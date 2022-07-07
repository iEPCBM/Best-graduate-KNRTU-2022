<template lang="html">
  <div class="modal-bd" @click="close">
    <div class="modal-wrapper" @click.stop>
      <button type="button" class="btn-close" @click="close">&times;</button>
      <div class="modal-details">
        <p>
          
        </p>
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
