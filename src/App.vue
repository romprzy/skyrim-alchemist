<template>
  <div id="app">
    <div class="container-fluid">
      <!--<h1 class="text-center">{{ title }}</h1>-->

      <h3 class="h6">Ingredients (getActiveIngredients)</h3>
      <rp-ingredients :ingredients="getActiveIngredients"></rp-ingredients>

      <div class="rp-panel-inline">
        <h3 class="h6 d-inline-block">Effects</h3>
        <rp-properties :properties="getActiveProperties" class="rp-list-inline"></rp-properties>
      </div>

      <div class="row">
        <div class="panel col col-md-2">
          <h3 class="h6">Possible Properties (getPossibleProperties)</h3>
          <rp-properties :properties="getPossibleProperties"></rp-properties>
          <hr>
          <h3 class="h6">Properties</h3>
          <rp-properties :properties="allProperties"></rp-properties>
        </div>
        <div class="panel col col-md-9">
          <rp-ingredients :ingredients="getIngredients"></rp-ingredients>
        </div>
        <div class="panel col col-md-1">

        </div>
      </div>
    </div>

    <div class="rp-results bg-secondary">
      <div class="container-fluid">
        <h2 class="h5">Results</h2>

        <h3 class="h6">Ingredients (getActiveIngredients)</h3>
        <rp-ingredients :ingredients="getActiveIngredients"></rp-ingredients>

        <!--<h3 class="h6">Possibe Ingredients (getPossibleIngredients)</h3>-->
        <!--<ul>-->
          <!--<li v-for="(ingredient, index) in getPossibleIngredients">-->
            <!--{{ ingredient }}-->
          <!--</li>-->
        <!--</ul>-->

        <h3 class="h6">Possible Properties (getPossibleProperties)</h3>
        {{getPossibleProperties}}
        <rp-properties :properties="getPossibleProperties"></rp-properties>

        <h3 class="h6">Active Properties (getActiveProperties)</h3>
        <rp-properties :properties="getActiveProperties"></rp-properties>

        <h3 class="h6">Potions</h3>
      </div>
    </div>
  </div>
</template>

<script>
import rpIngredients from './components/Ingredients';
import rpProperties from './components/Properties';
import { mapGetters } from 'vuex';

export default {

  name: 'app',
  data () {
    return {
      title: 'Skyrim Alchemist'
    }
  },
  components: {
    rpIngredients,
    rpProperties
  },
  computed: {
    ...mapGetters([
      'getIngredients',
      'getPossibleIngredients',
      'getActiveIngredients',
      'getPossibleProperties',
      'getActiveProperties',
      'allProperties'
    ])
  }
}
</script>

<style lang="scss">
  button, .btn {
    cursor: pointer;
  }

  .panel {
    background: #eee;
    border: 1px solid #fff;
  }

  .active {
    background: rgba(100, 200, 100, .5);
  }

  .rp {
    &-panel-inline {
      display: flex;
      flex-direction: row;
      align-items: center;

      .rp-list-inline {
        ul {
          display: flex;
          flex-direction: row;

          > li {
            margin: 5px 0 5px 5px;
          }
        }
      }
    }
  }
</style>
