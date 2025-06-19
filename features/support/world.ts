import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { PageManager } from '../../page-objects/base/pageManager';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  pageManager!: PageManager;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init() {
    this.browser = await chromium.launch({ headless: false, slowMo:500 });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.pageManager = new PageManager(this.page);
  }

  async close() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
