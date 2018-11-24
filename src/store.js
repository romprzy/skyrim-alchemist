import Vue from 'vue';
import Vuex from 'vuex';
import ingredients from './ingredients';

Vue.use(Vuex);

const state = {
  ingredients: ingredients.ingredients,
  possibleProperties: [],
  possibleIngredients: [],
  selectedProperties: [],
  activeProperties: [],
  activeIngredients: []
};

const getters = {
  getIngredients(s) {
    return state.ingredients;
  },
  allProperties() {
    let allProperties = [];
    ingredients.ingredients.forEach((ingredient) => {
      allProperties = allProperties.concat(ingredient.properties);
      return allProperties;
    });
    return [...new Set(allProperties)].sort();
  },
  getActiveProperties(s) {
    return state.activeProperties
  },
  getActiveIngredients(s) {
    return state.activeIngredients
  },
  getPossibleIngredients(s) {
    return state.possibleIngredients
  },
  getSelectedProperties(s) {
    return state.selectedProperties
  },
  getPossibleProperties(s) {
    return state.possibleProperties
  }
};

const mutations = {
  SetPossibleProperties(s, props) {
    props.forEach((prop) => {
      const index = state.possibleProperties.indexOf(prop);
      if (index < 0) {
        state.possibleProperties.push(prop);
      }
    });
  },
  SetSelectedProperties(s, props) {
    console.log('SetSelectedProperties', props);
    if (props.length === 0) {
      state.selectedProperties = [];
      console.log('state.selectedProperties', state.selectedProperties);
    } else {
      props.forEach((prop) => {
        const index = state.selectedProperties.indexOf(prop);
        if (index < 0) {
          state.selectedProperties.push(prop);
        }
      });
    }
  },
  SetActiveProperties(s, props) {
    console.log('SetActiveProperties');
    if (state.activeIngredients.length > 1) {
      let properties = [];
      const result = [];
      state.activeIngredients.forEach((ingredient, index) => {
        properties = properties.concat(ingredient.properties);
      });
      properties.sort();
      console.log('properties', properties);
      properties.reduce((a, b) => {
        console.log('a = ', a);
        console.log('b = ', b);
        if (a === b) {
          if (result.indexOf(b) < 0) {
            result.push(b);
          }
        }
        console.log('result = ', result);
        return b;
      });
      state.activeProperties = result;
    } else {
      state.activeProperties = [];
    }
  },
  ToggleSelectedProperty(s, property) {
    const index = state.selectedProperties.indexOf(property);
    console.log('index', index);
    if (index < 0) {
      state.selectedProperties.push(property);
    } else {
      state.selectedProperties.splice(index, 1);
    }
  },
  TogglePossibleProperty(s, property) {
    const index = state.possibleProperties.indexOf(property);
    console.log('index', index);
    if (index < 0) {
      state.possibleProperties.push(property);
    } else {
      state.possibleProperties.splice(index, 1);
    }
  },
  ToggleActiveIngredient(s, ingredient) {
    const index = state.activeIngredients.indexOf(ingredient);
    console.log('index', index);
    if (index < 0) {
      if (state.activeIngredients.length < 3) {
        state.activeIngredients.push(ingredient);
      } else {
        alert('Maximum number of ingredients to mix is 3')
      }
    } else {
      state.activeIngredients.splice(index, 1);
    }
  },
  SetPossibleIngredients(s, props) {
    state.possibleIngredients = [];
    state.possibleProperties.forEach((property) => {
      state.ingredients.forEach((ingredient) => {
        if (ingredient.properties.indexOf(property) > -1) {
          state.possibleIngredients.push(ingredient);
        }
      })
    });
  }
};

const actions = {
  setSelectedProperties(store, props) {
    store.commit('SetSelectedProperties', props);
    store.commit('SetPossibleProperties', props);
    store.commit('SetPossibleIngredients', props);
  },
  toggleActiveIngredient(store, props) {
    store.commit('ToggleActiveIngredient', props);
    store.commit('SetPossibleProperties', props.properties);
    store.commit('SetActiveProperties', props.properties);
    store.commit('SetPossibleIngredients', props);
  },
  togglePossibleProperty(store, props) {
    store.commit('TogglePossibleProperty', props);
    store.commit('SetPossibleIngredients', props);
  },
  toggleSelectedProperty(store, props) {
    store.commit('ToggleSelectedProperty', props);
    store.commit('SetPossibleIngredients', props);
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})