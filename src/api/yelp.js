import axios from 'axios';
export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer X4SG5O_US00zJU1-B-qOSqH8C4wtNavwD_HJqBa6r47bbjm3dXxYZSztiv-F4uofS9coAHO_0Pp9uEt7iIAu_LP3lWSrI75uWaa-yTtv9KlMyjng7s7U4xham-OXXnYx'
    }
});