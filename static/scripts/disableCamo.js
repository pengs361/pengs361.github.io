document.querySelectorAll('a').forEach(anchor => {const img = anchor.querySelector('img');if (img && img.hasAttribute('data-canonical-src')) {const canonicalSrc = img.getAttribute('data-canonical-src');anchor.setAttribute('href', canonicalSrc);img.setAttribute('src', canonicalSrc);img.removeAttribute('data-canonical-src');}});
