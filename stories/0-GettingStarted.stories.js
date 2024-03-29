import React from 'react';
import AnimatingAndZoom from '../src/GettingStarted/Animating&Zoom';
import DragRotate from '../src/GettingStarted/DragRotate';

// ref: https://zzz.dog/getting-started
export default {
  title: 'GettingStarted',
};

export const animatingAndZoom = () => <AnimatingAndZoom />;

animatingAndZoom.story = {
  name: 'Animating & Zoom',
};

export const dragRotate = () => <DragRotate />;

dragRotate.story = {
  name: 'Drag rotate'
}