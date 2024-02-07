import singers from "./singers.json" assert { type: "json" };

const listContainer = document.getElementById('listContainer');
const searchContainer = document.getElementById('searchContainer');
const personDisplay = document.getElementById('personDisplay');
const searchField = document.getElementById('searchField');
const returnButton = document.getElementById('returnButton');

const idField = document.getElementById('idField');
const nameField = document.getElementById('nameField');
const typeField = document.getElementById('typeField');
const popularityField = document.getElementById('popularityField');
const followersField = document.getElementById('followersField');
const genresField = document.getElementById('genresField');
const urlField = document.getElementById('urlField');

returnButton.onclick = function(){
  deselectElement();
};

fillList();

searchField.addEventListener('input', (evt) => {
  clearList();
  fillList(searchField.value);
});

function fillList(filter){
  singers.forEach(element => {
    const text = element.name;
    if (filter === undefined || text.toLowerCase().includes(filter)){
      const node = document.createElement("div");
      const textnode = text;
      node.className = "list-item"
      const imagenode = document.createElement("img");
      imagenode.src = element.images[1].url;
      imagenode.width = element.images[1].width;
      imagenode.height = element.images[1].height;
      node.append(imagenode);
      node.append(textnode);
      node.onclick = function(){
          selectElement(node);
      };
      listContainer.appendChild(node);
    }
  });
}

function clearList(){
  while (listContainer.firstChild) listContainer.removeChild(listContainer.lastChild);
}

function selectElement(e){
  let divParts = e.innerHTML.split(">");
  let elementName = divParts[divParts.length-1];
  
  let element = singers.find(singer => singer.name === elementName);
  fillPersonData(element);
  personDisplay.style = "display:flex";
  listContainer.style = "display:none";
  searchContainer.style = "display:none";
}

function fillPersonData(person){
  pictureField.src = person.images[0].url;
  idField.innerHTML = "ID: " + person.id;
  nameField.innerHTML = "Name: " + person.name;
  typeField.innerHTML = "Type: " + person.type;
  popularityField.innerHTML = "Popularity: " + person.popularity;
  followersField.innerHTML = "Followers: " + person.followers.total;
  genresField.innerHTML = "Genres: " + person.genres;
  urlField.href = person.external_urls.spotify;
 }

function deselectElement(){
  personDisplay.style = "display:none";
  listContainer.style = "display:grid";
  searchContainer.style = "display:flex";
}
  