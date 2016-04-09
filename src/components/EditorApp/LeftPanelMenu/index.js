import { connect } from 'react-redux';
import component from './component';
import { createSelector } from 'reselect'

import { toggleMenu, closeMenu, changeZoom } from 'actions/application';
import { changeTheme, switchBoxedLayout } from 'actions/site';

const siteSelector = ({ site }) => site;
const applicationSelector = ({ application }) => application;

const selector = createSelector(
  siteSelector,
  applicationSelector,
  (site, application) => ({
    is_boxed: site.is_boxed,
    theme_name: site.theme_name,
    zoom: application.zoom,
    isMenuOpen: application.isMenuOpen,
    variantUuid: application.variantUuid
  })

);

const actions = {
  toggleMenu,
  closeMenu,
  changeZoom,
  changeTheme,
  switchBoxedLayout,
};

export default connect(selector, actions)(component);
