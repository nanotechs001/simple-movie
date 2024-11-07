const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const watch_id = urlParams.get('id')

const player = document.getElementById('watch-movie')
player.innerHTML = `<iframe src="https://vidsrc.cc/v2/embed/movie/${watch_id}?autoPlay=false"></iframe>`