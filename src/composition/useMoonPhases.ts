import { reactive, toRefs } from "vue";

export function useMoonPhases(fontSize = 30) {
  const state = reactive({
    interval: undefined as number | undefined,
    timesUpdated: 0,
    lastElement: undefined as HTMLElement | undefined
  });

  function updateMoonPhase() {
    state.timesUpdated++;
    let div;

    if (state.lastElement) {
      div = state.lastElement;
    } else {
      div = document.createElement("div");
    }
    console.log(div);

    const moons = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
    const moon = moons[state.timesUpdated % moons.length];
    div.style.fontSize = `${fontSize}px`;
    div.style.textAlign = "center";
    div.style.width = "100vw";
    div.textContent = `${moon}`;

    if (!state.lastElement) {
      document.body.appendChild(div);
    }
    state.lastElement = div;
  }

  function startMoonPhases() {
    if (!state.interval) {
      state.interval = setInterval(() => updateMoonPhase(), 1000);
    }
  }

  function stopMoonPhases() {
    if (state.interval) {
      clearInterval(state.interval);
      state.interval = undefined;
    }
  }

  return { ...toRefs(state), updateMoonPhase, startMoonPhases, stopMoonPhases };
}
