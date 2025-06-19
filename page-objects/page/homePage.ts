import { Page, Locator } from "@playwright/test";
import { HelperBase } from "../base/helperBase";

export class HomePage extends HelperBase {
    readonly inpName: Locator;
    readonly inpEmail: Locator;
    readonly inpPhone: Locator;
    readonly inpAddress: Locator;
    readonly cbxGenderMale: Locator;
    readonly cbxGenderFemale: Locator;
    readonly slctCountry: Locator;
    readonly slctColors: Locator;
    readonly slctAnimals: Locator;
    readonly inpDatePicker1: Locator;
    readonly inpDatePicker2: Locator;
    readonly listOfDates: Locator;

    constructor(page: Page) {
        super(page);
        this.inpName = page.locator(`#name`);
        this.inpEmail = page.locator(`#email`);
        this.inpPhone = page.locator(`#phone`);
        this.inpAddress = page.locator(`#textarea`);
        this.cbxGenderMale = page.locator(`#male`);
        this.cbxGenderFemale = page.locator(`#female`);
        this.slctCountry = page.locator(`#country`);
        this.slctColors = page.locator(`#colors`);
        this.slctAnimals = page.locator(`#animals`);
        this.inpDatePicker1 = page.locator(`#datepicker`);
        this.inpDatePicker2 = page.locator(`#txtDate`);
        this.listOfDates = page.locator(`a.ui-state-default`);
    }

    async fillForm() {
        await this.inpName.fill(this.getFaker().person.fullName());
        await this.inpEmail.fill(this.getFaker().internet.email());
        await this.inpPhone.fill(this.getFaker().phone.number());
        await this.inpPhone.fill(this.getFaker().location.streetAddress());
        await this.cbxGenderMale.click();
        await this.slctCountry.selectOption({value: `uk`});
        await this.slctColors.selectOption({value: `green`});
        await this.slctAnimals.selectOption({value: `lion`});
        await this.inpDatePicker1.click();
        await this.pickRandomDateInCalendar();
        await this.inpDatePicker2.click();
        await this.pickRandomDateInCalendar();
    }

    async pickRandomDateInCalendar() {
        const totalDatesAvailable = await this.listOfDates.count();
        await this.listOfDates.nth(this.getRandomNumber(0, totalDatesAvailable - 1)).click();
    }
}