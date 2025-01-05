(function() {
    if (document.location.href === 'https://www.youtube.com/' ||
        document.location.href === 'https://www.youtube.com' || 
        document.location.href.startsWith('https://www.primevideo.com'
        )) {
      window.location.replace('https://www.linkedin.com/jobs/');
    }
  })();