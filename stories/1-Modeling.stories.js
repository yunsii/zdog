import React from 'react';
import ChildShapesIntro from '../src/Modeling/ChildShapesIntro';
import ChildShapesRelative from '../src/Modeling/ChildShapesRelative';
import ChildShapesTransforms from '../src/Modeling/ChildShapesTransforms';
import Anchors from '../src/Modeling/Anchors';
import Copying from '../src/Modeling/Copying';
import StrokeVolume from '../src/Modeling/StrokeVolume';
import Groups from '../src/Modeling/Groups';

// ref: https://zzz.dog/modeling
export default {
  title: 'Modeling',
};

export const childShapesIntro = () => <ChildShapesIntro />;

childShapesIntro.story = {
  name: 'Child shapes intro',
};

export const childShapesRelative = () => <ChildShapesRelative />;

childShapesIntro.story = {
  name: 'Child shapes relative',
};

export const childShapesTransforms = () => <ChildShapesTransforms />;

childShapesTransforms.story = {
  name: 'Child shapes transforms',
};

export const anchors = () => <Anchors />;

export const copying = () => <Copying />;

export const strokeVolume = () => <StrokeVolume />;

strokeVolume.story = {
  name: 'Stroke Volume',
}

export const groups = () => <Groups />;
