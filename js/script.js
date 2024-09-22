


const homeDOM = document.getElementById('home');
const aboutDOM = document.getElementById('about');
const contactDOM = document.getElementById('contact');

const content = document.getElementById('content');

//State blir home och home.html laddas in
window.addEventListener('load', async () => {
  history.pushState({page: 'home'}, "", "/home");
  // await fetchPage('home.html')
  await fetchPage('home')
});


//Laddar rätt sida (fetchPage) och sätter rätt URL (pushstate)
homeDOM.addEventListener('click', async () => {
  // event.preventDefault(); behövs inte enligt Tim, kan vara bra att läsa på om igen
  history.pushState({page: 'home'}, '', '/home');
  await fetchPage('home');
})

aboutDOM.addEventListener('click', async () => {
  history.pushState({page: 'about'}, '', '/about');
  await fetchPage('about');
})

contactDOM.addEventListener('click', async () => {
  history.pushState({page: 'contact'}, '', '/contact');
  await fetchPage('contact');
})


//EVENTUELLT:
//Gör en funktion som gör att home, about etc inte måste skrivas tre gånger i eventlistnerna
//Gör pushState och fetchPage med en variabel istället för en hårdkodad sträng 


//Gör det möjligt att backa och gå framåt med webbläsarpilarna
//popstate hänger ihop med pushstate - som är en del av history API
window.addEventListener('popstate', async () => {
  if (history.state == null) {
    return; //Om state är null så avslutas och den fortsätter INTE mer i funktionen
  }

  // const pageName = `${history.state.page}.html`;
  const pageName = history.state.page;
  await fetchPage(pageName);
})


//Döp ev om så att jag inte glömmer att det inte är en inbyggd funktion
//Hämtar innehållet i htmlfilerna och visar det
async function fetchPage(filename) {
  console.log('fetchpage');
  
  //Säkrar att "filername" (variabeln) är en sträng
  if(typeof filename != 'string'){
    return; 
  }  

  await fetch(`${filename}.html`)
    .then((result) => {
      console.log(result);
      return result.text();
    })
    .then((data) => {
      content.innerHTML = data;
    })
    .catch(error => {
      content.innerHTML = `Error fetching data`;
      console.log(error);    
    })
}


// Alriks exempelkod
// function fetchHtml() { 
//   fetch('./contact.html')
//       .then((response) => {
//           return response.text()
//       })
//       .then((html) => {
//           document.body.innerHTML = html
//       })
// }