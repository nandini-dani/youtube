const AUTH_KEY = 'AIzaSyDWiKCl5UCdaPLqsIpHtNxEeZ0mhBbSDD8';
export const VIDEO_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&key=${AUTH_KEY}`;
export const GET_SEARCH_QUERY = (keyword) =>
  `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyword}&type=video&key=${AUTH_KEY}`;
export const SEARCH_SUGGESTION_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
