import NavBar from '../NavBar';

const navItems = [
  {
    title: 'Home',
    to: '/',
    icon: 'fa fa-home',
  },
  {
    title: 'Downloads',
    to: '/downloads',
    icon: 'fa fa-arrow-circle-down',
  },
  {
    title: 'Information',
    to: '/info',
    icon: 'fa fa-info-circle',
  },
];

export default {
  title: 'NavBar',
  component: NavBar
};

export const NavBarStory = () => <NavBar items={navItems}/>;

export const NavBarVertical = () => <NavBar items={navItems}
                                            direction={'column'}/>;