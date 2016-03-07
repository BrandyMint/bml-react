import { map, size, get } from 'lodash';
import classnames from 'classnames';

const getBackgroundStyle = (block, prevBackgroundStyle) => {
  const hasImage = get(block, 'backgroundImage.url') || size(block.backgroundVideos) > 0;

  let dark = false;
  let secondary = false;

  if (hasImage) {
    dark = true; // Фоны с картинками всегда считаются за темные
  } else {
    dark = false;
    secondary = prevBackgroundStyle && !prevBackgroundStyle.secondary && !prevBackgroundStyle.dark;
  }

  const bgClasses = classnames(
    {
      'image-bg': hasImage,
      'bg-secondary': secondary,
      'bg-dark': dark,
    }
  );

  return {
    bgClasses,
    hasImage,
    dark,
    secondary,
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
