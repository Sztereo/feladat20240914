var xhr = new XMLHttpRequest();
xhr.open("get", "https://reqres.in/api/unknown");
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var json = JSON.parse(xhr.responseText);

        for(var i = 0; i < json.data.length; i++){
            var tr = document.createElement("tr");

            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");

            td1.appendChild(document.createTextNode(json.data[i].id));
            td2.appendChild(document.createTextNode(json.data[i].name));
            td3.appendChild(document.createTextNode(json.data[i].color));
            td4.appendChild(document.createTextNode(json.data[i].year));
            td5.appendChild(document.createTextNode(json.data[i].pantone_value));

            td3.setAttribute("style", `color: ${json.data[i].color};`);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            document.getElementById("torzs").appendChild(tr);
        }
    }
};
xhr.send(null);