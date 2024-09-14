var prom = new Promise(function(sikeres, sikertelen){
    var xhr = new XMLHttpRequest();
    xhr.open("get", "https://reqres.in/api/unknown");
    xhr.onload = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var json = JSON.parse(xhr.responseText);
            sikeres(json);
        }
        else{
            sikertelen("HIBA");
        }
    };
    xhr.send(null);
});

//======================================================
prom
.then(function(json){
    //Sikeres
    console.log(json);
})
.catch(function(uzenet){
    //Sikertelen
    console.log(uzenet);
});