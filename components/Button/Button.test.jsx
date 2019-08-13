import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import * as stories from './Button.stories';

test('default should render', () => {
  const {getByText} = render(stories.defaultUsage());
  expect(getByText('Click ME!')).toBeInTheDocument();
});

test('default should fire click', () => {
  stories.defaultUsageWithClickEvent.onClickMock = jest.fn();
  const uhh = render(stories.defaultUsageWithClickEvent());
  fireEvent.click(uhh.getByText('Click ME!'));
  expect(stories.defaultUsageWithClickEvent.onClickMock).toHaveBeenCalled();
});

test('disabled should render', () => {
  const {getByText} = render(stories.disabledButton());
  expect(getByText('Click ME!')).toBeInTheDocument();
});

test('disabled should not click', () => {
  stories.disabledButtonWithClickEvent.onClickMock = jest.fn();
  const uhh = render(stories.disabledButtonWithClickEvent());
  fireEvent.click(uhh.getByText('Click ME!'));
  expect(stories.disabledButtonWithClickEvent.onClickMock).not.toHaveBeenCalled();
});