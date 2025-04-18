//******************** Fetch API *************************
//? The Fetch API provides an interface for fetching(sending/receiving) resources.
//? it used Request and Response objects.
//? One Word, it is basically request and response cycle.
//? The fetch() Method is used to fetch a resource(data).
//? let promise = fetch(url,[options])

//** Fetch API is Asynchronous method and always returns a promise.


//***************** Understanding Terms ***********************
//? AJAX is Asynchronous JS & XML
//? JSON is JavaScript Object Notation
//? json()method: returns a second promise that resolves with result of parsing the response body text as JSON.(Input is JSON, output is JS object)

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector('#fact');
const btn = document.querySelector('#btn');

const getData = async () => {
  console.log("getting data .....");
  let response = await fetch(URL); //? call an API using the fetch API.
  console.log(response); //? JSON format
  let data = await response.json() //? returns a second promise
  factPara.innerText = data[2].text;
}

btn.addEventListener("click", getData);


//************** Request & Response ************************
//? HTTP Verbs -> Hyper Text Transfer Protocol.
//GET Request , POST Request, DELETE Request, PATCH Request
//? Response Status Code -> 
//1.Informational Response = (100-199)
//2.Successful Response = (200-299)
//3. Redirection Messages = (300-399 )
//4. Client Error Responses = (400-499)
//5. Server Error Responses = (500-599)
//*** HTTP response headers also contain details about the response,such as content type,HTTP status code etc.


