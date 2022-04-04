function submit() {
    if (typeof vehicles == "undefined") {
        var vehicles = new Array ();
    }

    let newVehicle = {
        fName: document.getElementById("fName").value,
        lName: document.getElementById("lName").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        province: document.getElementById("province").value,
        pCode: document.getElementById("pCode").value,
        pNum: document.getElementById("pNum").value,
        email: document.getElementById("email").value,
        make: document.getElementById("make").value,
        model: document.getElementById("model").value,
        year: document.getElementById("year").value
    }
    

    var vehicleString = JSON.stringify(newVehicle);
    var setter = "vehicles" + String(localStorage.length);
    window.localStorage.setItem(setter, vehicleString);

    window.location="viewVehicle.html"
}
function fill() {
    const currentVehicle = JSON.parse(localStorage.getItem("vehicles" + String(localStorage.length -1)));
    const link = "http://www.jdpower.com/cars/" + String(currentVehicle.year) + "/" + String(currentVehicle.make) + "/" + String(currentVehicle.model);
    document.getElementById("fName").value = currentVehicle.fName;
    document.getElementById("lName").value = currentVehicle.lName;
    document.getElementById("address").value = currentVehicle.address;
    document.getElementById("city").value = currentVehicle.city;
    document.getElementById("province").value = currentVehicle.province;
    document.getElementById("pCode").value = currentVehicle.pCode;
    document.getElementById("pNum").value = currentVehicle.pNum;
    document.getElementById("email").value = currentVehicle.email;
    document.getElementById("make").value = currentVehicle.make;
    document.getElementById("model").value = currentVehicle.model;
    document.getElementById("year").value = currentVehicle.year;
    document.getElementById("link").value = link;
}

function list() {
    for (let i = 0; i < localStorage.length; i++) {
        const currentVehicle = JSON.parse(localStorage.getItem("vehicles" + String(i)));
        var container = "vehicle" + String(i);
        
        var fName = document.createTextNode("First Name: " + currentVehicle.fName);
        var lName = document.createTextNode("Last Name: " + currentVehicle.lName);
        var address = document.createTextNode("Address: " + currentVehicle.address);
        var city = document.createTextNode("City: " + currentVehicle.city);
        var province = document.createTextNode("Province: " + currentVehicle.province);
        var pCode = document.createTextNode("Postal Code: " + currentVehicle.pCode);
        var pNum = document.createTextNode("Phone Number: " + currentVehicle.pNum);
        var email = document.createTextNode("Email: " + currentVehicle.email);
        var make = document.createTextNode("Make: " + currentVehicle.make);
        var model = document.createTextNode("Model: " + currentVehicle.model);
        var year = document.createTextNode("Year: " + currentVehicle.year);
        var link = document.createTextNode("JD Power: " + "http://www.jdpower.com/cars/" + String(currentVehicle.year) + "/" + String(currentVehicle.make) + "/" + String(currentVehicle.model));
        var div = document.createElement('div');
        div.id = container;
        document.getElementById("list").appendChild(div);
        document.getElementById("vehicle" + String(i)).appendChild(fName);
        document.getElementById("vehicle" + String(i)).appendChild(document.createElement("br"));
        document.getElementById("vehicle" + String(i)).appendChild(lName);
        document.getElementById("vehicle" + String(i)).appendChild(document.createElement("br"));
        document.getElementById("vehicle" + String(i)).appendChild(address);
        document.getElementById("vehicle" + String(i)).appendChild(document.createElement("br"));
        document.getElementById("vehicle" + String(i)).appendChild(city);
        document.getElementById("vehicle" + String(i)).appendChild(document.createElement("br"));
        document.getElementById("vehicle" + String(i)).appendChild(province);
        document.getElementById("vehicle" + String(i)).appendChild(document.createElement("br"));
        document.getElementById("vehicle" + String(i)).appendChild(pCode);
        document.getElementById("vehicle" + String(i)).appendChild(document.createElement("br"));
        document.getElementById("vehicle" + String(i)).appendChild(pNum);
        document.getElementById("vehicle" + String(i)).appendChild(document.createElement("br"));
        document.getElementById("vehicle" + String(i)).appendChild(email);
        document.getElementById("vehicle" + String(i)).appendChild(document.createElement("br"));
        document.getElementById("vehicle" + String(i)).appendChild(make);
        document.getElementById("vehicle" + String(i)).appendChild(document.createElement("br"));
        document.getElementById("vehicle" + String(i)).appendChild(model);
        document.getElementById("vehicle" + String(i)).appendChild(document.createElement("br"));
        document.getElementById("vehicle" + String(i)).appendChild(year);
        document.getElementById("vehicle" + String(i)).appendChild(document.createElement("br"));
        document.getElementById("vehicle" + String(i)).appendChild(link);
    }
    
}