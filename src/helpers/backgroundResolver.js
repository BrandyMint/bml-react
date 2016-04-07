import size from 'lodash/size';
import isEqual from 'lodash/isEqual';
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

  return backgroundStyle;
};

export default (blocks) => {
  let hasChanges = false;

  const newBlocks = [];

  let prevBackgroundStyle = null;

  const func = (block) => {
    const wasBackgroundStyle = block.backgroundStyle;
    const backgroundStyle = getBackgroundStyle(block, prevBackgroundStyle);
    prevBackgroundStyle = backgroundStyle;

    if (isEqual(wasBackgroundStyle, backgroundStyle)) {
      newBlocks.push(block);
      return;
    }

    hasChanges = true;
    const newBlock = { ...block, backgroundStyle };
    newBlocks.push(newBlock);
  };

  blocks.forEach(func);

  if (hasChanges) {
    return newBlocks;
  }

  return blocks;
};
