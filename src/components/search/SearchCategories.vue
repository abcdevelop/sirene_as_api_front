<template>
  <div :class="hideObjectIfNoSearch">
    <ul class="results__categories">
      <li v-bind:class="{emphasize_this: emphasizeAll}"
          v-on:click="changeFocus('all')">
        <p>Tous les résultats ({{numberResults}})</p>
        <div class="results__white_div"></div>
      </li>
      <li v-bind:class="{emphasize_this: emphasizeEntreprises}"
          v-on:click="changeFocus('entreprises')">
        <p>Entreprises ({{numberResults}})</p>
        <div class="results__white_div"></div>
      </li>
      <li v-bind:class="{emphasize_this: emphasizeAssociations}"
          v-on:click="changeFocus('associations')">
        <p>Associations ({{numberResults}})</p>
        <div class="results__white_div"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchCategories',
  data () {
    return {
      emphasizeAll: true,
      emphasizeEntreprises: false,
      emphasizeAssociations: false
    }
  },
  methods: {
    changeFocus (dataToEmphasize) {
      this.emphasizeAll = false
      this.emphasizeEntreprises = false
      this.emphasizeAssociations = false
      switch (dataToEmphasize) {
        case 'all':
          this.emphasizeAll = true
          break
        case 'entreprises':
          this.emphasizeEntreprises = true
          break
        case 'associations':
          this.emphasizeAssociations = true
          break
      }
    }
  },
  computed: {
    hideObjectIfNoSearch: function () {
      let myClass = ''
      if (this.$store.state.storedFullText === '') {
        myClass = 'hide_this'
      }
      return myClass
    },
    numberResults () {
      return this.$store.getters.numberResults
    }
  }
}
</script>

<style lang='scss' scoped>

.results__categories {
  display: flex;
  align-items: flex-end;
  position: relative;
  top: 3em;
  cursor: pointer;
  li {
    list-style: none;
    display: inline;
    font-weight: $fw-regular;
    font-size: $fs-small;
    margin-right: 3.5em;
  }
  .results__white_div {
    background-color: transparent;
    height: 0.3em;
  }
}

.hide_this {
  display: none !important;
}

.emphasize_this {
  font-weight: $fw-bold !important;
  .results__white_div {
    background-color: $color-white !important;
  }
}

</style>
