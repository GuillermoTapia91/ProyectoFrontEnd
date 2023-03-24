const listas = [
  {
    distrito: "san miguel",
    nombre:"Mi tercer lugar",
    direccion: "Av. La Mar 2261 San Miguel ",
    Logo: "https://scontent.flim22-2.fna.fbcdn.net/v/t39.30808-6/313358268_2420606358092953_8404790856308028534_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEoa0bj3ajfuxWcAFHmVOa_OkCl_FOcEVY6QKX8U5wRVl4fbiD_te7QOAuTrau-wPvTGKsAZVpiLMNeRbV1wMaJ&_nc_ohc=qW8Uek3GFrMAX9Hz9SQ&_nc_zt=23&_nc_ht=scontent.flim22-2.fna&oh=00_AfDoHROz7ZmmsGgM18Fg0W38BXPchO9spDPhXX2ewPr0AA&oe=64202B09"
  },
  {
    distrito: "san miguel",
    nombre:"EN lounge & bar",
    direccion: "Av. La Mar 2261 San Miguel",
    Logo: "https://scontent.flim22-2.fna.fbcdn.net/v/t39.30808-6/304845614_759975898306941_4751507246876975963_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGNQ-mzfNxcRXCjmT3lPLrqrWV6gtPaV4ytZXqC09pXjCCHg9Wd6TfOJT625VzStAZXjU4yQZJu3g8VZLufkcTc&_nc_ohc=KaBGNFyP1UYAX98TVFn&_nc_zt=23&_nc_ht=scontent.flim22-2.fna&oh=00_AfCQXn2CIbYwh3x3nBWTxFRP6wfdQYR90iBpJOGmfHnzjQ&oe=6420B36D"
  },
  {
    distrito: "san miguel",
    nombre:"Mi tercer lugar",
    direccion: "Av. La Mar 2261 San Miguel ",
    Logo: "https://scontent.flim22-2.fna.fbcdn.net/v/t39.30808-6/313358268_2420606358092953_8404790856308028534_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEoa0bj3ajfuxWcAFHmVOa_OkCl_FOcEVY6QKX8U5wRVl4fbiD_te7QOAuTrau-wPvTGKsAZVpiLMNeRbV1wMaJ&_nc_ohc=qW8Uek3GFrMAX9Hz9SQ&_nc_zt=23&_nc_ht=scontent.flim22-2.fna&oh=00_AfDoHROz7ZmmsGgM18Fg0W38BXPchO9spDPhXX2ewPr0AA&oe=64202B09"
  },
  {
    distrito: "san miguel",
    nombre:"EN lounge & bar",
    direccion: "Av. La Mar 2261 San Miguel",
    Logo: "https://scontent.flim22-2.fna.fbcdn.net/v/t39.30808-6/304845614_759975898306941_4751507246876975963_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGNQ-mzfNxcRXCjmT3lPLrqrWV6gtPaV4ytZXqC09pXjCCHg9Wd6TfOJT625VzStAZXjU4yQZJu3g8VZLufkcTc&_nc_ohc=KaBGNFyP1UYAX98TVFn&_nc_zt=23&_nc_ht=scontent.flim22-2.fna&oh=00_AfCQXn2CIbYwh3x3nBWTxFRP6wfdQYR90iBpJOGmfHnzjQ&oe=6420B36D"
  },
  {
    distrito: "san miguel",
    nombre:"Mi tercer lugar",
    direccion: "Av. La Mar 2261 San Miguel ",
    Logo: "https://scontent.flim22-2.fna.fbcdn.net/v/t39.30808-6/313358268_2420606358092953_8404790856308028534_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEoa0bj3ajfuxWcAFHmVOa_OkCl_FOcEVY6QKX8U5wRVl4fbiD_te7QOAuTrau-wPvTGKsAZVpiLMNeRbV1wMaJ&_nc_ohc=qW8Uek3GFrMAX9Hz9SQ&_nc_zt=23&_nc_ht=scontent.flim22-2.fna&oh=00_AfDoHROz7ZmmsGgM18Fg0W38BXPchO9spDPhXX2ewPr0AA&oe=64202B09"
  },
  {
    distrito: "san miguel",
    nombre:"EN lounge & bar",
    direccion: "Av. La Mar 2261 San Miguel",
    Logo: "https://scontent.flim22-2.fna.fbcdn.net/v/t39.30808-6/304845614_759975898306941_4751507246876975963_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGNQ-mzfNxcRXCjmT3lPLrqrWV6gtPaV4ytZXqC09pXjCCHg9Wd6TfOJT625VzStAZXjU4yQZJu3g8VZLufkcTc&_nc_ohc=KaBGNFyP1UYAX98TVFn&_nc_zt=23&_nc_ht=scontent.flim22-2.fna&oh=00_AfCQXn2CIbYwh3x3nBWTxFRP6wfdQYR90iBpJOGmfHnzjQ&oe=6420B36D"
  },
  {
    distrito: "san miguel",
    nombre:"Mi tercer lugar",
    direccion: "Av. La Mar 2261 San Miguel ",
    Logo: "https://scontent.flim22-2.fna.fbcdn.net/v/t39.30808-6/313358268_2420606358092953_8404790856308028534_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEoa0bj3ajfuxWcAFHmVOa_OkCl_FOcEVY6QKX8U5wRVl4fbiD_te7QOAuTrau-wPvTGKsAZVpiLMNeRbV1wMaJ&_nc_ohc=qW8Uek3GFrMAX9Hz9SQ&_nc_zt=23&_nc_ht=scontent.flim22-2.fna&oh=00_AfDoHROz7ZmmsGgM18Fg0W38BXPchO9spDPhXX2ewPr0AA&oe=64202B09"
  },
  {
    distrito: "san miguel",
    nombre:"EN lounge & bar",
    direccion: "Av. La Mar 2261 San Miguel",
    Logo: "https://scontent.flim22-2.fna.fbcdn.net/v/t39.30808-6/304845614_759975898306941_4751507246876975963_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGNQ-mzfNxcRXCjmT3lPLrqrWV6gtPaV4ytZXqC09pXjCCHg9Wd6TfOJT625VzStAZXjU4yQZJu3g8VZLufkcTc&_nc_ohc=KaBGNFyP1UYAX98TVFn&_nc_zt=23&_nc_ht=scontent.flim22-2.fna&oh=00_AfCQXn2CIbYwh3x3nBWTxFRP6wfdQYR90iBpJOGmfHnzjQ&oe=6420B36D"
  },
  {
    distrito: "miraflores",
    nombre:"BarBarian",
    direccion: "C. Manuel Bonilla 108, Miraflores 15074",
    Logo: "https://scontent.flim12-1.fna.fbcdn.net/v/t1.6435-9/123597471_644490389547760_4895326925213030232_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG35b-CALL6OV7Xf7GndnBVF-CAy1M2ymwX4IDLUzbKbP80LpB0w0U2jWEp-APCTCQ&_nc_ohc=W5yGh45SVaYAX-WKnUt&_nc_ht=scontent.flim12-1.fna&oh=00_AfAonMQRMsn9PngxOUkupLlgwFXC-Zncvsl1nTsaHhXEnQ&oe=6443F4D1"
  }
];

// for (let lista of listas) {
//   if(lista.distrito ==="San Miguel") {
//     console.log(lista.nombre) 
//     console.log(lista.direccion);}
// }

const input = document.querySelector("input")
const placeAvailable = document.querySelector(".place_available")

input.addEventListener("input",(event)=> {
  placeAvailable.innerHTML =""
  for (let lista of listas) {
    if(lista.distrito === input.value.toLocaleLowerCase()) {
      placeAvailable.innerHTML += `
        <div class="col-md-2 col-sm-5 col-12 card text-center">
          <h5>${lista.nombre}</h5>
          <h5>${lista.direccion}</h5>
          <img src="${lista.Logo}" width="100px"alt="" class="img-fluid" />
        </div>
          
      `
      // console.log(lista.nombre) 
      // console.log(lista.direccion);
    }
  }
})

//Por ahora solo funciona con san miguel y miraflores, ya que solo hay eso en la lista de objetos