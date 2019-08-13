import { configure, addDecorator } from "@storybook/react"; // <- or your view layer
import { withTests } from "@storybook/addon-jest";

try {
  const results = require("./.jest-test-results.json");
  addDecorator(
    withTests({
      results
    })
  );
} catch (err) {
  // do nothing
}

configure(require.context("../components", true, /\.stories\.jsx$/), module);
