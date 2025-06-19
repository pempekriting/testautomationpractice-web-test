# 🧪 Test Automation Practice - Playwright + Cucumber

UI test automation project using **Playwright**, **Cucumber**, and **TypeScript**.  
Test target: [testautomationpractice.blogspot.com](https://testautomationpractice.blogspot.com)

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
npx playwright install
```

---

### 2. 📁 Project Structure

```
.
├── features/
│   ├── gherkin/                # Feature files (.feature)
│   ├── step-definitions/       # Step definitions
│   └── support/                # Hooks & World
├── pages/                      # Page Object Models (POM)
├── reports/                    # Generated test reports
├── screenshots/                # Screenshots from test steps
├── cucumber.js                 # Cucumber CLI config
├── tsconfig.json
└── package.json
```

---

### 3. Running Tests

```bash
npm run test
```

📌 By default:
- Headless: `false`
- Timeout: 30 seconds per step
- Screenshot: taken automatically on success or failure

If you want to change the settings, you can directly edit in the `features/support/world.ts`

---



## 📊 Generating HTML Report

1. Run test with JSON output:
```bash
npm run test
```

2. Generate HTML report:
```bash
npm run report
```

This will create and open `reports/report.html`.

---

## 🛠 Scripts

```json
"scripts": {
  "test": "cucumber-js",
  "report": "node generate-report.js"
}
```

---

## 📦 Dependencies

- `@cucumber/cucumber`
- `playwright`
- `typescript`
- `ts-node`
- `cucumber-html-reporter`

---

## ✅ Features Tested

- Homepage visit
- Form fill & submission
- File upload (with multiple files)
- Assertion with UI validation

---

## 🔒 Notes
- Since we using cucumber as a runner, some core functionality didn't worked while
- Refer to point number 1, Playwright config (`playwright.config.ts`) is not used directly — browser is launched via custom world.
- Timeout and context are managed manually in `features/support/world.ts`.

---

## 👨‍💻 Maintainer

Built and maintained by Kgs. Azzam Nizar.

---

## Report Evidence

[HTML Report](https://)

---

### Video Evidence

![](/evidence/evidence-gif.gif)