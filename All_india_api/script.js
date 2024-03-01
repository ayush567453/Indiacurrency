document.addEventListener("DOMContentLoaded", function() {
    const countriesInput = document.getElementById("inputBox");
    const resultContainer = document.querySelector(".second-container");
    const buttonId=document.getElementById("btn1");

    countriesInput.addEventListener('input', function() {
        console.log(countriesInput.value);
    });
    countriesInput.addEventListener('input', function() {
        console.log(countriesInput.value);
    });
    

   buttonId.addEventListener('click', async function() {
    const countryName=countriesInput.value;
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
           
            console.log(data);
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(data[0].flags.svg)
            console.log(data[0].name.common);
            console.log(data[0].continents[0]);
            console.log(Object.keys(data[0].currencies)[0]);
            console.log(data[0].currencies[Object.keys(data[0].currencies)].name);

            resultContainer.innerHTML=`
            <img src="${data[0].flags.svg}"/>
            <p>Capital:-${data[0].capital[0]}</p>
            <p>Name:-${data[0].name.common}</p>
            <p>Continents:-${data[0].continents}</p>
            <p>Currency:-${Object.keys(data[0].currencies)[0]}</p>
            <p>Currency Name:-${data[0].currencies[Object.keys(data[0].currencies)].name}<p>
            <p>Population:-${data[0].population}</p>
            <p>Language: ${Object.values(data[0].languages)}</p>

            
            `;

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });

    console.log("hello world");

});
