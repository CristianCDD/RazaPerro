const apiKey = "zChaSS/Ef8rodsBsAeBJQw==ZaKSvKGU7in8u2X7";

const raza = document.getElementById('raza');
const buscar = document.querySelector('.icon');
const completado = document.querySelector('.completado');

const imagenContainer = document.querySelector('#imagenContainer');




const amistad = document.querySelector('#amistad');

const options = {
    method: "GET",
    headers: {
        "X-Api-key": apiKey,
    },
}

async function perro(nombre){  
   
        
   try {
    
  
    completado.innerHTML = ' <i class="Icon fa-solid fa-dog"></i> <p class = "completed">Buscando...</p>';
    if(raza.classList.contains('animacInput')){
        raza.classList.remove('animacInput');
    }
   
    const apiURL = `https://api.api-ninjas.com/v1/dogs?name=${nombre}`;
    const response = await fetch(apiURL, options);

    const data = await response.json();
   



  

    completado.innerHTML = '';
    
    
     let nombrePerro = document.createElement('p');
    nombrePerro.innerHTML = `Raza: ${data[0].name}`;
    nombrePerro.classList.add('animac');
     completado.appendChild(nombrePerro);

    let vidaMin = document.createElement('p');
    vidaMin.innerHTML = `Expectativa de vida minima <i class="fa-solid fa-heart"></i> : ${data[0].min_life_expectancy} años`; 
    vidaMin.classList.add('animac');
     completado.appendChild(vidaMin);

    let vidaMax = document.createElement('p');
    vidaMax.innerHTML = `Expectativa de vida máxima <i class="fa-solid fa-heart"></i> : ${data[0].max_life_expectancy} años`;
    vidaMax.classList.add('animac');
    completado.appendChild(vidaMax);


    let pesoMMax = document.createElement('p');
    pesoMMax.innerHTML = `Peso máximo: ${(data[0].max_weight_male) * 0.45} KG`; 
    pesoMMax.classList.add('animac');
    completado.appendChild(pesoMMax);


    let pesoMMin = document.createElement('p');
    pesoMMin.innerHTML = `Peso minimo: ${(data[0].min_height_male) * 0.45} KG`;
    pesoMMin.classList.add('animac');
    completado.appendChild(pesoMMin);


    let amistad = document.createElement('p');
    amistad.innerHTML = `Buena relación con los niños: ${data[0].good_with_children}`; 
    amistad.classList.add('animac');
    completado.appendChild(amistad);

    let imagenContainer = document.createElement("div");

    let imagen = document.createElement('img');
    imagen.setAttribute('src',data[0].image_link);
    imagen.classList.add('animac');
    imagenContainer.appendChild(imagen);
    completado.appendChild(imagenContainer);

} catch (error) {
    completado.innerHTML = '<i class="Icon fa-solid fa-question"></i>'
    completado.innerHTML +=  '<p>Raza no encontrada<p>'
    raza.value = '';
    raza.classList.add('animacInput');

}
  

}

buscar.addEventListener('click', ()=>{
    if(raza.value.trim() == ''){
        

        if(raza.classList.contains('animacInput')){
            raza.classList.remove('animacInput');
            
            setTimeout(() => {
            raza.classList.add('animacInput'); 
            }, 500);


        }else{
            raza.classList.add('animacInput');
        }

    }else{
        perro(raza.value);

    }
});


