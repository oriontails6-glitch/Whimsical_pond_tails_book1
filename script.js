document.addEventListener('DOMContentLoaded', function () {
  const bookEl = document.getElementById('book');
  const pages = document.querySelectorAll('.page');

  const pageFlip = new St.PageFlip(bookEl, {
    width: 500,
    height: 680,
    size: 'stretch',
    minWidth: 280,
    maxWidth: 1000,
    minHeight: 380,
    maxHeight: 1000,
    maxShadowOpacity: 0.5,
    showCover: true,
    usePortrait: true,
    mobileScrollSupport: true,
    swipeDistance: 50, // Increased threshold to avoid accidental flip triggers
    clickEventForward: true,
    flippingTime: 650,
    useMouseEvents: true
  });

  pageFlip.loadFromHTML(pages);

  const totalPages = pageFlip.getPageCount();
  const indicator = document.getElementById('pageIndicator');

  function updateIndicator() {
    const idx = pageFlip.getCurrentPageIndex();
    if (idx === 0) {
      indicator.textContent = 'Cover';
    } else if (idx === totalPages - 1) {
      indicator.textContent = 'The End';
    } else {
      indicator.textContent = 'Page ' + idx + ' of ' + (totalPages - 2);
    }
  }

  pageFlip.on('flip', updateIndicator);
  updateIndicator();

  // Prevent scroll & touch drag events inside page text from triggering StPageFlip
  document.querySelectorAll('.page-body').forEach(el => {
    ['wheel', 'touchstart', 'touchmove', 'pointerdown', 'pointermove'].forEach(eventType => {
      el.addEventListener(eventType, function (e) {
        e.stopPropagation();
      }, { passive: true });
    });
  });

  function goNext() { pageFlip.flipNext(); }
  function goPrev() { pageFlip.flipPrev(); }

  document.getElementById('nextBtn').addEventListener('click', goNext);
  document.getElementById('prevBtn').addEventListener('click', goPrev);
  document.getElementById('nextBtnBottom').addEventListener('click', goNext);
  document.getElementById('prevBtnBottom').addEventListener('click', goPrev);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') goNext();
    if (e.key === 'ArrowLeft') goPrev();
  });

  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      pageFlip.updateFromHTML(pages);
    }, 200);
  });
});
