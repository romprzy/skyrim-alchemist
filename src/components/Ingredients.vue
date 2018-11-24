<template>
    <section>
        <div class="container-fluid rp-ingredients-table">
            <!--<div class="row text-center rp-row">-->
                <!--<span class="rp-col-header rp-col-name">-->
                    <!--name-->
                <!--</span>-->
                <!--<span class="rp-col-header rp-col-props">-->
                    <!--properties-->
                <!--</span>-->
                <!--&lt;!&ndash;<span class="rp-col-header rp-col-locs">&ndash;&gt;-->
                    <!--&lt;!&ndash;locations&ndash;&gt;-->
                <!--&lt;!&ndash;</span>&ndash;&gt;-->
            <!--</div>-->
            <rp-ingredient
                    v-for="(ingredient, index) in ingredients"
                    v-show="isVisible(ingredient)"
                    :ingredient="ingredient"
                    :key="ingredient.name"
            ></rp-ingredient>
        </div>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import rpIngredient from './Ingredient';

  export default {
    name: "ingredients",
    props: [
      'ingredients'
    ],
    components: {
      rpIngredient
    },
    computed: {
      ...mapGetters([
        'getPossibleIngredients'
      ]),
      visibleIngredients() {
        return this.getPossibleIngredients.length > 0 ? this.getPossibleIngredients : this.ingredients;
      }
    },
    methods: {
      isVisible(ingredient) {
        return this.visibleIngredients.indexOf(ingredient) < 0 ? false : true;
      }
    }
  }
</script>

<style lang="scss">
    .rp-col {
        &-header {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: .25em;
            font-weight: 600;
        }
        &-name {
            flex-basis: 15%;
        }
        &-props {
            flex-basis: 60%;
        }
        &-locs {
            flex-basis: 25%;
        }
    }
    /*.border-white {*/
        /*td, th {*/
            /*border-color: #fff !important;*/
        /*}*/
    /*}*/
</style>