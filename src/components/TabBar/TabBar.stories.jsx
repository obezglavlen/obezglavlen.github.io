import TabBar from '../TabBar';
import React from 'react';

const tabItems = [
  {
    title: 'Page one',
    path: 'one',
  },
  {
    title: 'Page two',
    path: 'two',
  },
  {
    title: 'Page three',
    path: 'three',
  },
];

export default {
  title: 'TabBar',
  component: TabBar,
};

export const TabBarStory = () => <TabBar items={tabItems}/>;