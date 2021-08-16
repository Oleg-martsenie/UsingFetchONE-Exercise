function LoadFunction() {
    document.querySelector('#posts').innerHTML = "Loading Comments"

    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(function(resultado) {
        return resultado.json()
    })
    .then(function(json){
        document.querySelector('#posts').innerHTML = json.length+" posts"
    })
    .catch(function(){
        console.log("Deu Ruim. Revisa o codígo e tenta denovo!")
    })
}