const form = document.querySelector('form')

form.addEventListener('submit', function(evnt){
    evnt.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = (document.querySelector("#results"));


    if(height == '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight == '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // showing the result for calculated bmi
    if (bmi < 18.6) {
      results.innerHTML = `<span>Bmi is ${bmi} which is Underweight</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>Bmi is ${bmi} which is in Normal Range</span>`;
    } else {
      results.innerHTML = `<span>Bmi is ${bmi} which is Overweight</span>`;
    }
    }



});