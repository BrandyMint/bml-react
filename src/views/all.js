import ViewsRepository from 'repositories/ViewsRepository';

export const viewsRepository = new ViewsRepository;

import InlineForm1 from './InlineForm1';
viewsRepository.registerView(InlineForm1);

import Navbar1 from './Navbar1';
viewsRepository.registerView(Navbar1);

import GoogleMap1 from './GoogleMap1';
viewsRepository.registerView(GoogleMap1);
