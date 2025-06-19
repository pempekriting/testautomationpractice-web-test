import { Before, After, Status } from '@cucumber/cucumber';
import { CustomWorld } from './world';

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld, scenario) {
  if(scenario.result?.status === Status.PASSED || scenario.result?.status === Status.FAILED){
    const bufferPict = await this.page.screenshot();
    this.attach(bufferPict, `image/png`);
  }
  await this.close();
});
