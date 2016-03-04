import { prepareViews } from 'views/utils';

import InlineForm1 from './InlineForm1';
import Navbar1 from './Navbar1';
import GoogleMap1 from './GoogleMap1';
import CTA1 from './CTA1';
import Footer1 from './Footer1';
import ContentSection0 from './ContentSection0';
import ContentSection1 from './ContentSection1';
import ContentSection2 from './ContentSection2';
// import ContentSection3 from './ContentSection3';

import MustRead1 from './MustRead1';
import MustRead2 from './MustRead2';
import MustRead3 from './MustRead3';

import HeaderText from './HeaderText';
import HeaderList from './HeaderList';

import FreeText from './FreeText';
import PlainHTML from './PlainHTML';

const list = {
  PlainHTML,
  InlineForm1,
  Navbar1,
  GoogleMap1,
  FreeText,
  CTA1,
  HeaderText,
  HeaderList,
  MustRead1,
  MustRead2,
  MustRead3,
  Footer1,
  ContentSection0,
  ContentSection1,
  ContentSection2,
  // ContentSection3,
};

export const types = {}; // Автоматически заполняется через prepareViews

export const views = prepareViews(list, types);
