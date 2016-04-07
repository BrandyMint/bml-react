import map from 'lodash/map';
import size from 'lodash/size';
import get from 'lodash/get';
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

  const backgroundStyle = {
    bgClasses,
    hasImage,
    dark,
    even,
  };

  return { ...block, backgroundStyle };
};

export default (blocks) => {
  let prevBackgroundStyle = null;

  return map(blocks, (block) => {
    const newBlock = getBackgroundStyle(block, prevBackgroundStyle);
    prevBackgroundStyle = newBlock.backgroundStyle;
    return newBlock;
  });
};
