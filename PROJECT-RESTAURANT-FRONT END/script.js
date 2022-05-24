function getMenu() {
    fetch(`http://localhost:3000/menuList`)
        .then(resp => resp.json())
        .then(menu => {
            const menuList = menu.name
            
            menu.appetizers.forEach(appetizer => {
                const appsElement = document.createElement('div')
                appsElement.classList.add('card')
                const nameElement = document.createElement('h1')
                nameElement.textContent = (appetizer.name)
                appsElement.appendChild(nameElement)
                console.log(nameElement)

                const descripElement = document.createElement('p')
                descripElement.textContent = (appetizer.descrip)
                appsElement.appendChild(descripElement)
                console.log(descripElement)

                const priceElement = document.createElement('h3')
                priceElement.textContent = (appetizer.price)
                appsElement.appendChild(priceElement)
                console.log(priceElement)

                const calorieElement = document.createElement('h4')
                calorieElement.textContent = (appetizer.calories)
                appsElement.appendChild(calorieElement)
                console.log(calorieElement)

                document.querySelector('#apps').appendChild(appsElement)
                
            })

            menu.soupsalad.forEach(sousal => {
                const sousalElement = document.createElement('div')
                sousalElement.classList.add('card')
                const nameElement = document.createElement('h1')
                nameElement.textContent = (sousal.name)
                sousalElement.appendChild(nameElement)
                console.log(nameElement)

                const descripElement = document.createElement('p')
                descripElement.textContent = (sousal.descrip)
                sousalElement.appendChild(descripElement)
                console.log(descripElement)

                const priceElement = document.createElement('h3')
                priceElement.textContent = (sousal.price)
                sousalElement.appendChild(priceElement)
                console.log(priceElement)

                const calorieElement = document.createElement('h4')
                calorieElement.textContent = (sousal.calories)
                sousalElement.appendChild(calorieElement)
                console.log(calorieElement)

                document.querySelector('#sousal').appendChild(sousalElement)
                
            })

            menu.gyros.forEach(gyro => {
                const gyrosElement = document.createElement('div')
                gyrosElement.classList.add('card')
                const nameElement = document.createElement('h1')
                nameElement.textContent = (gyro.name)
                gyrosElement.appendChild(nameElement)
                console.log(nameElement)

                const descripElement = document.createElement('p')
                descripElement.textContent = (gyro.descrip)
                gyrosElement.appendChild(descripElement)
                console.log(descripElement)

                const priceElement = document.createElement('h3')
                priceElement.textContent = (gyro.price)
                gyrosElement.appendChild(priceElement)
                console.log(priceElement)

                const calorieElement = document.createElement('h4')
                calorieElement.textContent = (gyro.calories)
                gyrosElement.appendChild(calorieElement)
                console.log(calorieElement)

                document.querySelector('#gyros').appendChild(gyrosElement)
                
            })

            menu.dinner.forEach(plate => {
                const plateElement = document.createElement('div')
                plateElement.classList.add('card')
                const nameElement = document.createElement('h1')
                nameElement.textContent = (plate.name)
                plateElement.appendChild(nameElement)
                console.log(nameElement)

                const descripElement = document.createElement('p')
                descripElement.textContent = (plate.descrip)
                plateElement.appendChild(descripElement)
                console.log(descripElement)

                const priceElement = document.createElement('h3')
                priceElement.textContent = (plate.price)
                plateElement.appendChild(priceElement)
                console.log(priceElement)

                const calorieElement = document.createElement('h4')
                calorieElement.textContent = (plate.calories)
                plateElement.appendChild(calorieElement)
                console.log(calorieElement)

                document.querySelector('#plate').appendChild(plateElement)
                
            })


        })
    }

    
    
