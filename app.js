function kereses(){
    id = document.getElementById("keresesID").value
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data => {
        // Alert the JSON response data
        alert(JSON.stringify(data));
    }).catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
        alert('Error fetching data. Please try again.');
    });
}
function hozzadas(){
    id = document.getElementById("hozzadasID").value
    title = document.getElementById("hozzadasTitle").value
    completed = title[title.length - 1] == "." & true, false
    fetch("https://jsonplaceholder.typicode.com/posts", {

    method: "POST",
     
    
    body: JSON.stringify({
        userId: id,
        id: id,
        title: title,
        completed: completed
    }),
     
    // Fejlécek hozzáadása a kéréshez
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
}
function osszesLekeerese(){
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => response.json())
    .then(response => {
        const container = document.getElementById("osszes");
        response.forEach(element => {
            container.innerHTML += `<div class="col-3">
            <h2>${element.id}</h2>
            <h2>${element.title}</h2>
            <h2>${element.completed}</h2>
            </div>`;
        });
    });
}
