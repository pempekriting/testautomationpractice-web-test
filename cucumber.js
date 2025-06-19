const options = [
 '--require-module ts-node/register',
 '--require features/support/setup.ts',
 '--require features/step-definitions/**/*.ts',
 '--require features/support/**/*.ts',
 '--format progress',
  `--format json:reports/cucumber_report.json`,
].join(' ');
const features = ['features/**/*.feature', options].join(' ');
module.exports = {
 default: features,
};