import { map, size, get } from 'lodash';
import classnames from 'classnames';
import invariant from 'invariant';

const getBackgroundStyle = (block, prevBackgroundStyle) => {
  invariant(block, 'Block is undefined');

  const hasImage = get(block, 'backgroundImage.url') || size(block.backgroundVideos) > 0;

  let dark = false;
  let even = false;

  if (hasImage) {
    dark = true; // Фоны с картинками всегда считаются за темные
  } else {
    dark = false;
    even = prevBackgroundStyle && !prevBackgroundStyle.even && !prevBackgroundStyle.dark;
  }

  const bgClasses = classnames(
    {
      'image-bg': hasImage,
      'bg--even': even,
      'bg-dark': dark,
      'bg-light': !dark,
    }
  );

  return {
    bgClasses,
    hasImage,
    dark,
    even,
  };
};

export default (blocks) => {
  let prevBackgroundStyle = null;

  return map(blocks, (block) => {
    const backgroundStyle = getBackgroundStyle(block, prevBackgroundStyle);
    prevBackgroundStyle = backgroundStyle;
    return { ...block, backgroundStyle };
  });
};
