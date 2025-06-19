import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";

Given("I open the home page", async function (this: CustomWorld) {
  await this.page.goto("https://testautomationpractice.blogspot.com/");
});

When("I fill all the forms", async function (this: CustomWorld) {
  await this.pageManager.onHomePage().fillForm();
});

When(`I upload the files`, async function (this: CustomWorld) {
  await this.pageManager.onHomePage().uploadFiles();
});

Then(`I see the success message`, async function (this: CustomWorld) {
  await this.pageManager.onHomePage().assertionInputs();
});
