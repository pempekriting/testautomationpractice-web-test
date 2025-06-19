import { Page } from "@playwright/test";
import { HomePage } from "../page/homePage";

export class PageManager {
    private readonly page: Page;
    private readonly homePage: HomePage;

    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(page);
    }

    onHomePage() {
        return this.homePage;
    }
}