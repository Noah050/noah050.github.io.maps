const output = document.querySelector('.output');

const url = 'Maps.json';
let myList = [];
let localData = localStorage.getItem('myList');
    myList=JSON.parse(localStorage.getItem('myList'));
    jsloader();

function jsloader() {
    fetch(url).then(rep => rep.json())
    .then((data) => {
        mylist = data;
        maker();
        savetoStorage();
    });
}


function maker(){
    output.innerHTML= '';
    mylist.forEach((el, index) =>
    {
        makeList(el,index);

    });
}

function makeList(item, index) {
    
    var h1 = document.createElement('h1');
    var h2 = document.createElement('h2');
    var map = document.createElement('div');
    var img = document.createElement('img');
    h1.innerHTML = `${item.name}`;
    h2.innerHTML = `${item.address}`;
    map.innerHTML = `<iframe src = ${item.map} width = "500" height= "500"> </iframe>`;
    img.src = `${item.img}`;
    img.className = "img"
    map.className = "map"
    img.addEventListener("click", change =>{
        img.style.display = "none"
        map.style.display = "block";
    })
    output.append(h1);
    output.append(h2);
    output.append(map);
    output.append(img);
    savetoStorage();
}



        
 
function savetoStorage() {
    localStorage.setItem("myList", JSON.stringify(myList));
}
