const loadData = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      displayCountries(data)
    })
}


const displayCountries = countries => {
  console.log(countries[0]);
  const allCountriesHTML = countries.map(country => getCountryHtml(country));
  // console.log(allCountriesHTML[0]);
  const container = document.getElementById('display-item');
  container.innerHTML = allCountriesHTML.join(' ');
}

//  option--> 1.  array of destruction

// const getCountryHtml = country => {
//   const { flags,name } = country;
//   return `
//         <div class="card card-side bg-base-100 shadow-xl">
//           <figure>
//               <img src="${flags.png}" alt="Country"/>
//           </figure>
//           <div class="card-body">
//               <h2 class="card-title">${name.common}</h2>
//               <p>${country.capital ? country.capital : 'not avilable'}</p>
//               <div class="card-actions justify-end">
//               <button class="btn btn-info btn-xs">see more</button>
//               </div>
//           </div>
//         </div>
//     `;
// }

// option--> 2  array of destructuring by Parameter

const getCountryHtml = ({ flags, name, capital }) => {

  return `     
        <div class="card card-side bg-base-100 shadow-xl">
          <figure>
              <img src="${flags.png}" alt="Country"/>
          </figure>
          <div class="card-body">
              <h2 class="card-title">${name.common}</h2>
              <p>${capital ? capital : 'not avilable'}</p>
              <div class="card-actions justify-end">
              <button class="btn btn-info btn-xs">see more</button>
              </div>
          </div>
        </div>   
    `;
}


// const getCountryHtml = country => {

//   return `     
//         <div class="card card-side bg-base-100 shadow-xl">
//           <figure>
//               <img src="${country.flags.png}" alt="Country"/>
//           </figure>
//           <div class="card-body">
//               <h2 class="card-title">${country.name.common}</h2>
//               <p>${country.capital ? country.capital : 'not avilable'}</p>
//               <div class="card-actions justify-end">
//               <button class="btn btn-info btn-xs">see more</button>
//               </div>
//           </div>
//         </div>   
//     `;
// }


loadData();