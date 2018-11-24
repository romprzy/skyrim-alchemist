<template>
    <section>
        <button class="btn btn-primary" @click="setSelectedProperties([])">clear</button>
        <ul class="list-group">
            <li
                    v-for="(property, index) in properties"
                    @click="toggleSelectedProperty(property)"
                    :class="{
                        'rp-selected': getSelectedProperties.indexOf(property) > -1,
                        'rp-possible': getPossibleProperties.indexOf(property) > -1,
                        'rp-active': getActiveProperties.indexOf(property) > -1
                    }"
                    class="list-group-item btn"
            >
                {{ property }}
            </li>
        </ul>
    </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "properties",
    props: [
      'properties'
    ],
    computed: {
      ...mapGetters([
        'ingredients',
        'getPossibleProperties',
        'getSelectedProperties',
        'getActiveProperties'
      ])
    },
    methods: {
      ...mapActions([
        'setSelectedProperties',
        'toggleSelectedProperty'
      ])
    }
  }
</script>

<style lang="scss">
    .list-group {
        &-item {
            padding: 3px;
        }
    }
</style>