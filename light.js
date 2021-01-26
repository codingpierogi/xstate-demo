import { Machine, interpret } from "xstate";

const lightMachine = Machine({
  id: "light",
  initial: "on",
  states: {
    on: {
      on: {
        TOGGLE: "off",
      },
    },
    off: {
      on: {
        TOGGLE: "on",
      },
    },
  },
});

const lightService = interpret(lightMachine)
  .onTransition((state) => console.log(state.value))
  .start();

lightService.send("TOGGLE");
lightService.send("TOGGLE");

lightService.stop();
