export const disabledBody = () => {
  const bodyStyle = document.body.style;
  bodyStyle.overflowY = 'hidden';
  if (window.outerWidth > 600) {
    bodyStyle.marginRight = '18px';
  }
};

export const enabledBody = () => {
  const bodyStyle = document.body.style;
  bodyStyle.overflowY = 'visible';
  bodyStyle.marginRight = '0';
};

export const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
