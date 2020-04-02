const url = require('url');

const myURL = new URL('https://mysite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myURL.href);
console.log(myURL.toString());

// Host / Root Domain
console.log(myURL.host);

// Hostname (Won't include the port number if included)
console.log(myURL.hostname);

// Pathname = returns actual file
console.log(myURL.pathname);

// Serialized Query = after the query ?
console.log(myURL.search);

// Parameters as an object
console.log(myURL.searchParams);

// Add Parameters
myURL.searchParams.append('abc', '123');
console.log(myURL.searchParams);

// Loop through params
myURL.searchParams.forEach((value, name) => {
  console.log(name + ', ' + value);
});
