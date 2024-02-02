// api url
const api_url =
  "https://fiz6ri4wc7qe2wdmocksaz75lm0nfars.lambda-url.us-east-1.on.aws/api/v1/articles";
  let selectWrap = document.querySelector(".card-wrap");
// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
    // hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
    let content = ``;
  let bgImg = ``;
  // Loop to access all rows

  for (let i = 0; i < data.data.length; i++) {

     content = `<div class="card-wrap">
        <small>${data.data[i].title}</small>
        <h1 class="header-one">${data.data[i].short_description}</h1>
        <div>
            <p class="publisher d-flex">${data.data[i].developer} | <span class="date">${data.data[i].release_date}</span> </p> 
        </div>
    </div>`;
    
    bgImg = `${data.data[i].thumbnail}`;
    document.getElementById(`cardContent${i + 1}`).innerHTML = content;
    document.getElementById(`cardContent${i + 1}`).style.backgroundImage = `url(${bgImg})`;


}
}
