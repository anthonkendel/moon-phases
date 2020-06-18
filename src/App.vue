<template>
  <div id="app">
    <h2>The moon has phased {{ timesUpdated }} times.</h2>
    <button class="button" @click="updateMoonPhase">Force moon phase</button>
    <button class="button" @click="startMoonPhases">Start moon phases</button>
    <button class="button" @click="stopMoonPhases">Stop moon phases</button>
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
  color: #2e2e2e;
  margin-top: 60px;

  .button {
    margin: 0 4px 10px;
  }
}
</style>
