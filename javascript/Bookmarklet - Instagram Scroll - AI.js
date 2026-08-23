(() => {
  if (typeof x == "undefined") {
    x = [];
  }

  _stop = function () {
    x.forEach(id => {
      clearInterval(id);
      clearTimeout(id);
    });
    x = [];
  };

  function H() {
    const h = document.querySelector('header');
    return h? h.getBoundingClientRect().height + 8 : 60;
  }

  function P() {
    return Array.from(document.querySelectorAll('main article'))
     .filter(a => a.offsetHeight > 200);
  }

  function closestIdx(posts) {
    let best = 0,
        bd = 1e9,
        off = H();
    posts.forEach((el, i) => {
      const d = Math.abs(el.getBoundingClientRect().top - off);
      if (d < bd && el.getBoundingClientRect().bottom > off) {
        bd = d;
        best = i;
      }
    });
    return best;
  }

  _next = function () {
    const m = document.querySelector('main');
    if (m && m.textContent.includes("You're all caught up")) {
      _stop();
      if (confirm("You're all caught up. Keep scrolling?")) _go();
      return;
    }

    const posts = P();
    if (!posts.length) return;

    const cur = closestIdx(posts);
    const nxt = cur + 1;

    if (nxt >= posts.length) {
      window.scrollBy({ top: 800, behavior: 'smooth' });
      x.push(setTimeout(_next, 2500));
      return;
    }

    const target = posts[nxt];
    window.scrollBy({
      top: target.getBoundingClientRect().top - H(),
      behavior: 'smooth'
    });
    x.push(setTimeout(_next, 2000));
  };

  _go = function () {
    _stop();
    x.push(setTimeout(_next, 600));
  };

  if (x.length > 0) {
    _stop();
    console.log('Paused');
  } else {
    _go();
  }
})();