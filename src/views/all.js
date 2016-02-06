import ViewsRepository from 'repositories/ViewsRepository';

export const viewsRepository = new ViewsRepository;

import InlineForm1 from './InlineForm1';
viewsRepository.registerView(InlineForm1);

import Navbar1 from './Navbar1';
viewsRepository.registerView(Navbar1);

import GoogleMap1 from './GoogleMap1';
viewsRepository.registerView(GoogleMap1);

import CTA1 from './CTA1';
viewsRepository.registerView(CTA1);

import MustRead1 from './MustRead1';
viewsRepository.registerView(MustRead1);

import Footer1 from './Footer1';
viewsRepository.registerView(Footer1);

import ContentSection1 from './ContentSection1';
viewsRepository.registerView(ContentSection1);

import ContentSection2 from './ContentSection2';
viewsRepository.registerView(ContentSection2);

import ContentSection3 from './ContentSection3';
viewsRepository.registerView(ContentSection3);

import MustRead2 from './MustRead2';
viewsRepository.registerView(MustRead2);
