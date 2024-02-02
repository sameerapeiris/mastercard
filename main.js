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


    // document.querySelectorAll(".card-content").forEach(element => {
    //                 element.innerHTML = content;
    //                 element.style.backgroundImage = `url(${bgImg})`;
    //             })
    // Setting innerHTML and background image for each element with the 'card-content' class
    // const cardContentElement = document.getElementById(`cardContent${i + 1}`);
    // cardContentElement.innerHTML = content;
    // cardContentElement.style.backgroundImage = `url(${bgImg})`;
}
//   for (let r of data.data) {
//     content += ` <div class"card-wrap"><small>${r.title}</small>
//         <h1 class="header-one">${r.short_description}</h1>
//         <div>
//             <p class="publisher d-flex">${r.developer} | <span class="date">${r.release_date}</span> </p> 
//         </div>	</div>`;
//     bgImg = `${r.thumbnail}`;
//         // Setting innerHTML as tab variable
//         document.querySelectorAll(".card-content").forEach(element => {
//             element.innerHTML = content;
//             element.style.backgroundImage = `url(${bgImg})`;
//         })
  

 
//   }
  
}
// let headerOne = document.querySelector(".header-one");
// let tumb = document.querySelector(".master-test_left");

// function getText() {
//     fetch("https://fiz6ri4wc7qe2wdmocksaz75lm0nfars.lambda-url.us-east-1.on.aws/api/v1/articles")
//       .then(function(res) {
//         return res.json();
//       })
//       .then(function(data) {
//         headerOne.textContent = data.data[0].title;
//         tumb.style.backgroundImage = `url(${data.data[0].thumbnail})`;

//       })
//       .catch(function(err) {
//         console.log(err);
//       });
//   }

//   getText();
