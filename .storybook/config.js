import { configure } from "@storybook/react";

function loadStories() {
    require("../src/primitives/stories");
}

configure(loadStories, module);
