import axios from 'axios';

const KEY='AIzaSyA1Qvd5q86plbgwtCbFMfswkoC7MM-e-pA';

export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3',
params: {
     part:'snippet',
     type:'video',
     maxResults:5,
     key :KEY
    }
});

