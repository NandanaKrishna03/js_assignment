
    
        // JavaScript to display even numbers
        let evenNumbersContainer = document.getElementById('even-numbers');

        for (let i = 0; i <= 10; i++) {
            if (i % 2 === 0) {
                let numberElement = document.createElement('p');
                numberElement.innerText = i;
                evenNumbersContainer.appendChild(numberElement);
                console.log(i)
            }
        }
    

