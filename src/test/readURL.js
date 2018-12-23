import React from 'react';
import Counter from './Counter'
class readURL extends React.Component{ 
    async getSummariesfromURL() {
        try {
          let response = await fetch('https://facebook.github.io/react-native/movies.json');
          let responseJson = await response.json();
          return responseJson.movies;
         } catch(error) {
          console.error(error);
        }
      }
}
export default readURL;