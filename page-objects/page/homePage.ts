import { Page, Locator, expect } from "@playwright/test";
import { HelperBase } from "../base/helperBase";
import path from "path";

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
  readonly inpUploadSingleFile: Locator;
  readonly inpUploadMultifleFile: Locator;
  readonly btnUploadSingleFile: Locator;
  readonly btnUploadMultipleFile: Locator;
  readonly paragraphSuccessIndicatorUploadSingleFile: Locator;
  readonly paragraphSuccessIndicatorUploadMultipleFile: Locator;

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
    this.inpUploadSingleFile = page.locator(`#singleFileInput`);
    this.inpUploadMultifleFile = page.locator(`#multipleFilesInput`);
    this.btnUploadSingleFile = page.locator(`#singleFileForm > button`);
    this.btnUploadMultipleFile = page.locator(`#multipleFilesForm > button`);
    this.paragraphSuccessIndicatorUploadSingleFile =
      page.locator(`#singleFileStatus`);
    this.paragraphSuccessIndicatorUploadMultipleFile =
      page.locator(`#multipleFilesStatus`);
  }

  async fillForm() {
    await this.inpName.fill(this.getFaker().person.fullName());
    await this.inpEmail.fill(this.getFaker().internet.email());
    await this.inpPhone.fill(this.getFaker().phone.number());
    await this.inpAddress.fill(this.getFaker().location.streetAddress());
    await this.cbxGenderMale.click();
    await this.slctCountry.selectOption({ value: `uk` });
    await this.slctColors.selectOption({ value: `green` });
    await this.slctAnimals.selectOption({ value: `lion` });
    await this.inpDatePicker1.click();
    await this.pickRandomDateInCalendar();
    await this.inpDatePicker2.click();
    await this.pickRandomDateInCalendar();
  }

  async pickRandomDateInCalendar() {
    const totalDatesAvailable = await this.listOfDates.count();
    await this.listOfDates
      .nth(this.getRandomNumber(0, totalDatesAvailable - 1))
      .click();
  }

  async uploadFiles() {
    await this.inpUploadSingleFile.setInputFiles(
      path.join(`${process.cwd()}/data`, `pict-1.jpg`),
    );
    await this.btnUploadSingleFile.click();
    await this.inpUploadMultifleFile.setInputFiles([
      path.join(`${process.cwd()}/data`, `pict-2.jpg`),
      path.join(`${process.cwd()}/data`, `pict-3.jpg`),
    ]);
    await this.btnUploadMultipleFile.click();
  }

  async assertionInputs() {
    expect(this.paragraphSuccessIndicatorUploadSingleFile).toBeVisible();
    expect(this.paragraphSuccessIndicatorUploadSingleFile).toContainText(
      `Single file selected: pict-1.jpg`,
    );
    expect(this.paragraphSuccessIndicatorUploadMultipleFile).toBeVisible();
    const text =
      await this.paragraphSuccessIndicatorUploadMultipleFile.textContent();
    expect(text).toMatch(/Multiple files selected:.*pict-2\.jpg.*pict-3\.jpg/);
  }
}
