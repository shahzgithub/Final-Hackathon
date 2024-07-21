fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the fetched data
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
