document.addEventListener('DOMContentLoaded', function () {
  const bookEl = document.getElementById('book');
  const pages = document.querySelectorAll('.page');

  const pageFlip = new St.PageFlip(bookEl, {
    width: 800,
    height: 620,
    size: 'stretch',
    minWidth: 300,
    maxWidth: 900,
    minHeight: 260,
    maxHeight: 700,
    maxShadowOpacity: 0.5,
    showCover: true,
    usePortrait: true,
    mobileScrollSupport: false,
    flippingTime: 700,
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
});
