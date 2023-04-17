<template lang="html">
  <footer class="footer">
    <p>Исходный код: Copyright &copy; 2022 Rishat D. Kagirov</p>
  </footer>
</template>

<script>
export default {
  name: 'GFooter'
}
</script>

<style lang="css" scoped>
.footer {
  background-color: var(--m-color-dark-gray);
}
.footer p {
  margin: 0;
  padding: 2.5em 5em;
  color: #FFF;
  display: inline-block;
}
</style>
