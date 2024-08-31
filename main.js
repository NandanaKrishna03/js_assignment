
    
        // JavaScript to display even numbers
        const evenNumbersContainer = document.getElementById('even-numbers');

        for (let i = 0; i <= 10; i++) {
            if (i % 2 === 0) {
                const numberElement = document.createElement('p');
                numberElement.textContent = i;
                evenNumbersContainer.appendChild(numberElement);
                console.log(i)
            }
        }
    

