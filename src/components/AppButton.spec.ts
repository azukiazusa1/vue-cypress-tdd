import { mount } from "@cypress/vue";
import AppButton from "./AppButton.vue";

it("AppButton", () => {
  mount(AppButton, {
    props: {
      text: "Hello World",
    },
  });

  cy.get("button").contains("Hello World").click();
});
