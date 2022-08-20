<template>
  <div id="app">
    <HelloWorld />
    <br />
    {{ count }}
    <hr />
    <button @click="mutationChangeCount">同步修改</button>
    <button @click="actionsChangeCount">同步修改</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { createNamespacedHelpers } from "vuex";
import * as TYPES from "./store/modules/action-types";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("cart");
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapMutations([TYPES.CHANGE_COUNT]),
    ...mapActions([TYPES.CHANGE_COUNT2]),
    mutationChangeCount() {
      this[TYPES.CHANGE_COUNT]();
    },
    actionsChangeCount() {
      this[TYPES.CHANGE_COUNT2]("hello world");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
