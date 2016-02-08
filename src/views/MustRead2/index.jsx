// https://github.com/BinaryThumb/react-background-video/blob/master/src/index.js
// https://gist.github.com/mikechau/5547c67d0dc2957e907d

import React from 'react';
import { Types, makeView } from 'views/types';
import map from 'lodash/map';
import StringEditable from 'components/primitives/StringEditable';
import BackgroundVideo from 'views/shared/BackgroundVideo';

import './index.css';

const MustRead2 = ({ content }) => {
  const videos = [
    { src: 'assets/video/video.mp4', type: 'video/mp4' },
    { src: 'assets/video/video.webm', type: 'video/webm' },
    { src: 'assets/video/video.ogv', type: 'video/ogg' },
  ];

  return (
    <section className="MustRead2 hero bg-video video-play">
      <BackgroundVideo videos={videos} />

      <div className="container vertical-center-rel">
        <div className="row">
            <div className="col-md-7">
              <StringEditable
                className="text-white p-t-md"
                data={content}
                fieldName="header"
                tagName="h1"
              />
              <StringEditable
                className="lead text-white m-b-md"
                data={content}
                fieldName="subheader"
                tagName="p"
              />
              {map(content.items, (link, index) =>
                (<a
                  href={link.url}
                  key={index}
                  className="btn btn-shadow btn-blue text-uppercase btn-md"
                >{link.title}
                </a>
                )
              )}
            </div>
        </div>
      </div>

    </section>
    );
};

export default makeView(MustRead2, Types.mustRead);
