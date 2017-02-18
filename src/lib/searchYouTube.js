var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      q: options.query,
      key: options.key,
      maxResults: options.max
    },
    type: 'GET',
    contentType: 'application/json',
    success: (data) => {
      console.log('success', data)
    },
    error: (error) => {
      console.log('error', error)
    },
  })
};

window.searchYouTube = searchYouTube;
