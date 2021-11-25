console.log(data);

// WRITE YOUR CODE BELOW!

const dogLi = document.querySelector(`.dogs-list`)

function addDog (dog) {

    const infoSection = document.querySelector('.main__dog-section')
    infoSection.innerHTML = ''

    const allDogs = document.createElement(`li`)
    allDogs.setAttribute(`class`, `dogs-list__button`)
    allDogs.textContent = dog.name
    
    const mainDogCard = document.querySelector(`.main__dog-section`)
    const dogName = document.createElement('h2')
    dogName.textContent = dog.name

    const dogPhoto = document.createElement(`img`)
    dogPhoto.src = dog.image

    const dogInfo = document.createElement(`div`)
    dogInfo.setAttribute(`class`, `main__dog-section__desc`)
    
    const bio = document.createElement(`h3`)
    bio.textContent = `Bio`

    const description = document.createElement(`p`)
    description.textContent = dog.bio

    const isnaughty = document.createElement(`p`)
    isnaughty.textContent = `Is Naughty? Yes`

    const button = document.createElement(`button`)
    button.setAttribute(`class`, `main__dog-section__btn`)
    button.textContent = `Good dog`

    if (button.textContent == 'Good Dog') {
        button.textContent = 'Bad Doog'
        isnaughty.textContent='Is naughty? No!'
    }
    else {
       button.textContent = 'Good Dog'
       isnaughty.textContent='Is naughty? Yes!'
    }

    allDogs.addEventListener('click',function(){
        mainDogCard.innerHTML=''
        addDog(dog)
        
    })

    dogLi.append(allDogs)
    mainDogCard.append(dogName, dogPhoto, dogInfo, isnaughty, button)
    dogInfo.append(bio, description)

    
}

for(const dog of data){
    addDog(dog)
}

dogLi.addEventListener('click', function (event) {
   

  })