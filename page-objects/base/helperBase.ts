import { Page } from "@playwright/test";
import { faker } from "@faker-js/faker";

export class HelperBase {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected getFaker() {
    return faker;
  }

  protected getRandomNumber(minLimit = 1, maxLimit = 1000) {
    let random = Math.random() * (maxLimit - minLimit) + minLimit;
    random = Math.floor(random);

    return random;
  }
}
