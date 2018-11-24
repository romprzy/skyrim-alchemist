<template>
    <div class="row rp-row" :class="{'rp-possible' : isPossibleIngredient(), 'rp-active' : isActiveIngredient()}">
        <span
                class="col rp-col-name btn"
                @click="toggleIngredient($event)"
                :data-properties="ingredient.properties"
            >
                {{ ingredient.name }}
        </span>
        <span class="col rp-col-props">
            <div class="buttons d-flex">
                <template v-for="(property, index) in ingredient.properties">
                    <button
                            class="btn btn-property"
                            :class="{'rp-possible': getPossibleProperties.indexOf(property) > -1, 'rp-active': getActiveProperties.indexOf(property) > -1}"
                            @click="togglePossibleProperty(property)"
                            :data-properties="[property]">
                        {{ property }}
                    </button>
                </template>
            </div>
        </span>
        <!--<span class="col rp-col-locs">{{ ingredient.locations }}</span>-->
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    props: ['ingredient'],
    computed: {
      ...mapGetters([
        'getActiveProperties',
        'getActiveIngredients',
        'getPossibleProperties',
        'getPossibleIngredients'
      ])
    },
    methods: {
      ...mapActions([
        'toggleActiveIngredient',
        'togglePossibleProperty'
      ]),
      isPossibleIngredient() {
        return this.getPossibleIngredients.indexOf(this.ingredient) >= 0 ? true : false;
      },
      isActiveProperty(property) {
        return this.getActiveProperties.indexOf(property) >= 0 ? true : false;
      },
      isActiveIngredient() {
        return this.getActiveIngredients.indexOf(this.ingredient) >= 0 ? true : false;
      },
      toggleIngredient() {
        console.log('toggleIngredient: ', this.ingredient);

        this.toggleActiveIngredient(this.ingredient);
      }
    }
  }
</script>

<style lang="scss">
    .buttons {
        margin: -1px;

        .btn {
            /*border-radius: 0;*/
            flex: 1 1 25%;
            margin: 1px;
            background: transparent;
            border: 1px solid rgba(0,0,0,.15);
        }
    }

    .rp-row {
        /*border: 2px solid green;*/
        & + & {
            margin-top: 1px;
            box-shadow: 0 -1px 0 #fff;
        }
    }

    .rp-col {
        &-name {
            display: flex;
            align-items: center;
            font-weight: 600;
        }
    }

    .rp-possible {
        /*border: 2px solid green;*/
        background: rgba(100, 200, 100, .25);
    }

    .rp-active {
        background: rgba(100, 200, 100, 0.75) !important;

        &.btn {
            border: 2px solid green;
        }
    }

    .rp-selected {
        background: rgba(80, 180, 255, 0.75) !important;

        &.btn {
            border: 2px solid darken(rgba(80, 180, 255, 0.75), 20%) !important;
        }
    }
</style>