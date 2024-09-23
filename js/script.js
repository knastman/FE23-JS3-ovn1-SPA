const homeDOM = document.getElementById('home');
const aboutDOM = document.getElementById('about');
const contactDOM = document.getElementById('contact');

const content = document.getElementById('content');



/************************************
  Laddar in sidinfo
***********************************/

//"State" blir home och home.html laddas in vid start
window.addEventListener('load', async () => {
  history.replaceState({page: 'home'}, "", "/home");
  await getPageContent('home.html')
});


//Laddar rätt sida (getPageContent - funktion nedan) och sätter rätt URL (pushstate)
homeDOM.addEventListener('click', async () => {
  // event.preventDefault(); behövs inte enligt Tim, kan vara bra att läsa på om igen
  // history.pushState({page: 'home'}, '', '/home');
  history.pushState({page: 'home'}, '', '/home');
  await getPageContent('home.html');
})

aboutDOM.addEventListener('click', async () => {
  history.pushState({page: 'about'}, '', '/about');
  await getPageContent('about.html');
})

contactDOM.addEventListener('click', async () => {
  history.pushState({page: 'contact'}, '', '/contact');
  await getPageContent('contact.html');
});


/************************************
  Piltangenterna i webbläsaren
***********************************/

//Gör det möjligt att backa och gå framåt med webbläsarpilarna
//popstate hänger ihop med pushstate - som är en del av history API
window.addEventListener('popstate', async () => {
  if (history.state == null) {
    return; //Om state är null så avslutas och den fortsätter INTE mer i funktionen
  }

  const pageName = `${history.state.page}.html`;
  await getPageContent(pageName);
})


/************************************
  Hämta innehåll från htmlfilerna
***********************************/

async function getPageContent(filename) {
  //Säkrar att "filername" (variabeln) är en sträng
  if(typeof filename != 'string'){
    return; 
  }  

  //Spinner gif when waiting for content
  const spinnerImg = createSpinnerImg();
  content.appendChild(spinnerImg);

  await fetch(`${filename}`)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      content.innerHTML = data;
    })
    .catch(error => {
      content.innerHTML = `Error fetching data`;
      console.log(error);    
    })
    .finally(() => {
      spinnerImg.remove();
    })
}


/************************************
  Skapa spinnerbilden
***********************************/

function createSpinnerImg() {
  const img = document.createElement('img')
  img.src = '../images/spinner.gif';
  return img;
}
