// StringEditable
export const STRING_OPTIONS = {
  disableReturn: true,
  placeholder: {
    text: 'Напишите здесь что-нибудь..',
    hideOnClick: true,
  },
  paste: {
    forcePlainText: true,
    cleanPastedHTML: true,
    cleanAttrs: ['class', 'style', 'dir'],
    cleanTags: ['meta'],
  },
  toolbar: false,
};

export const BUTTON_OPTIONS = {
  disableReturn: true,
  placeholder: {
    text: 'КНОПКа',
    hideOnClick: true,
  },
  paste: {
    forcePlainText: true,
    cleanPastedHTML: true,
    cleanAttrs: ['class', 'style', 'dir'],
    cleanTags: ['meta'],
  },
  toolbar: false,
}

export const RICH_OPTIONS = {
  paste: {
    cleanPastedHTML: true,
    cleanAttrs: ['class', 'style', 'dir'],
    cleanTags: ['meta'],
  },
  placeholder: {
    text: 'Напишите здесь что-нибудь..',
    hideOnClick: true,
  },
  toolbar: {
    allowMultiParagraphSelection: false,
    static: true,
    sticky: true,
  },
};

export default {
  string: STRING_OPTIONS,
  rich: RICH_OPTIONS,
  button: BUTTON_OPTIONS,
};
