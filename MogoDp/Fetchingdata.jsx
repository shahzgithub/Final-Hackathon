fetch('http://your-server-url/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
