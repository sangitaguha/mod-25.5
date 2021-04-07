fetch('https://restcountries.eu/rest/v2/all')
.then(res =>res.json())
.then(data => console.log(data));


const displayCountries = countries =>{
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country'
        
        const countryInfo = `
           <h3>${country.name}</h3>
           <p>${country.capital}</p>
        `;
        countryDiv.innerHTML = countryInfo;

        countriesDiv.appendChild(countryDiv);
        
    });
    // for (i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className = 'country'
        
    //     const countryInfo = `
    //        <h3>${country.name}</h3>
    //        <p>${country.capital}</p>
    //     `
    //     countryDiv.innerHTML = countryInfo;

    //     countriesDiv.appendChild(countryDiv);
    }

}