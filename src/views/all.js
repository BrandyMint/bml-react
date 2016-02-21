import { prepareViews } from 'views/utils';

import InlineForm1 from './InlineForm1';
import Navbar1 from './Navbar1';
import GoogleMap1 from './GoogleMap1';
import CTA1 from './CTA1';
import MustRead1 from './MustRead1';
import Footer1 from './Footer1';
import ContentSection1 from './ContentSection1';
import ContentSection2 from './ContentSection2';
import ContentSection3 from './ContentSection3';
import MustRead2 from './MustRead2';

const list = {
  InlineForm1,
  Navbar1,
  GoogleMap1,
  CTA1,
  MustRead1,
  MustRead2,
  Footer1,
  ContentSection1,
  ContentSection2,
  ContentSection3,
};

export const types = {}; // Автоматически заполняется через prepareViews

export const views = prepareViews(list, types);
