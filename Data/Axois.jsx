import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => {
    // Process the fetched data
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
