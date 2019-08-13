import React from "react";
import { Button } from "./Button";

export default {
  title: "Button",
  parameters: {
    jest: ["Button.test.jsx"]
  }
};

export function htmlButton() {
  return <button>Default HTML Button</button>;
}

htmlButton.story = {
  name: "HTML"
};

export function defaultUsage() {
  return <Button>Click ME!</Button>;
}

defaultUsage.story = {
  name: "default"
};

export function defaultUsageWithClickEvent() {
  return (
    <Button onClick={defaultUsageWithClickEvent.onClickMock}>Click ME!</Button>
  );
}

defaultUsageWithClickEvent.onClickMock = () => console.log("click");

defaultUsageWithClickEvent.story = {
  name: "default with click event"
};

export function disabledButton() {
  return <Button disabled>Click ME!</Button>;
}

disabledButton.story = {
  name: "disabled"
};

export function disabledButtonWithClickEvent() {
  return (
    <Button disabled onClick={disabledButtonWithClickEvent.onClickMock}>
      Click ME!
    </Button>
  );
}

disabledButtonWithClickEvent.onClickMock = () => console.log("click");

disabledButtonWithClickEvent.story = {
  name: "disabled with click event"
};
