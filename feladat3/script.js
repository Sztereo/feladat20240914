var xhr = new XMLHttpRequest();
xhr.open("get", "https://www.w3schools.com/xml/cd_catalog.xml");
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var feldolgozo = new DOMParser();
        var xml = feldolgozo.parseFromString(xhr.responseText, "text/xml");

        for(var i = 0; i < xml.children[0].children.length; i++){
            console.log(xml.children[0].children[i].children);

            var tr = document.createElement("tr");

            for(var j = 0; j < xml.children[0].children[i].children.length; j++){
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(xml.children[0].children[i].children[j].innerHTML));

                tr.appendChild(td);
            }

            document.getElementById("torzs").appendChild(tr);
        }
    }
};
xhr.send(null);

// ez egy komment


//még egy komment