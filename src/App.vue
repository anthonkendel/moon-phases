<template>
  <div id="app">
    <h2>The moon is updated {{ timesUpdated }} times.</h2>
    <button @click="updateMoonPhase">Force moon phase.</button>
    <button @click="startMoonPhases">Start moon phases.</button>
    <button @click="stopMoonPhases">Stop moon phases.</button>
  </div>
</template>

<script lang="ts">
import { useMoonPhases } from "./composition/useMoonPhases";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const {
      timesUpdated,
      updateMoonPhase,
      startMoonPhases,
      stopMoonPhases
    } = useMoonPhases(200);

    return { timesUpdated, updateMoonPhase, startMoonPhases, stopMoonPhases };
  }
});
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
