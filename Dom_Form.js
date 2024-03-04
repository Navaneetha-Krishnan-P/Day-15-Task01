// Form
var form=document.createElement("div")
form.className="form"

function label1(attv, content) {
    var a = document.createElement("label");
    a.setAttribute("for", attv);
    a.innerHTML = content
    return a;
}

function break1() {
    var c = document.createElement("br")
    return c;
}

function input1(att1v,att2v) {
    var b = document.createElement("input");
    b.setAttribute("type", att1v);
    b.setAttribute("id", att2v);
    return b;
}
function radio(id1,value1){
    var rad=document.createElement("input")
    rad.setAttribute("type","radio")
    rad.setAttribute("name","Gender")
    rad.setAttribute("id",id1)
    rad.setAttribute("value",value1)
    return rad;
}
function foodlabel(foodie){
    var foodnum=document.createElement("label")
    foodnum.innerHTML=foodie
    return foodnum
}

function food(foodName){
    var foodinput=document.createElement("input")
    foodinput.setAttribute("type","checkbox")
    foodinput.setAttribute("name","foods")
    foodinput.setAttribute("value",foodName)
    return foodinput
}


var d = label1("firstname", "First Name");
var d1 = break1()
var d2 = input1("text", "firstname");
var d3 = break1()

var e = label1("lastname", "Last Name");
var e1 = break1()
var e2 = input1("text","lastname");
var e3 = break1()

var f = label1("Address", "Address");
var f1 = break1()
var f2 = input1("text","address");
var f3 = break1()

var g = label1("pincode", "Pincode");
var g1 = break1()
var g2 = input1("text","pincode");
var g3 = break1()
var g4 = break1()

var radv=document.createElement("label")
radv.innerHTML="Gender"
var h2 =break1();
var radlabel=document.createElement("label")
radlabel.innerHTML="Male"
var rad1=radio("male","Male")
var radlabel1=document.createElement("label")
radlabel1.innerHTML="Female"
var rad2=radio("female","Female")
var h =break1();
var hh =break1();

var foodv=document.createElement("label")
foodv.innerHTML="Choice of Food"
var h3=break1();
var fd1=foodlabel("Indian")
var food1=food("Indian")
var h5=break1();
var fd2=foodlabel("Chinese")
var food2=food("Chinese")
var h6=break1();
var fd3=foodlabel("Burmese")
var food3=food("Burmese")
var h7=break1();
var fd4=foodlabel("Malaysian")
var food4=food("Malaysian")
var h8=break1();
var fd5=foodlabel("Mexican")
var food5=food("Mexican")
var h1 = break1()
var hhh = break1()

var j = label1("state", "State");
var j1 = break1()
var j2 = input1("text","state");
var j3 = break1()

var k = label1("country", "Country");
var k1 = break1()
var k2 = input1("text","country");
var k3 = break1()
var k4 = break1()

var z = document.createElement("button")
z.setAttribute("type", "button")
z.setAttribute("onclick", "foo()")
z.innerHTML = "Submit"



// Table
var container=document.createElement("div")
container.className="table"

var row1=document.createElement("tr")
row1.className="row1"

function column(heading){
    var colu=document.createElement("th")
    colu.innerHTML=heading
    return colu;
}
var col1=column("First Name")
var col2=column("Last Name")
var col3=column("Address")
var col4=column("Pincode")
var col5=column("Gender")
var col6=column("Choice of Food")
var col7=column("State")
var col8=column("Country")

var row2=document.createElement("tr")
row2.className="row2"

var col11=document.createElement("td")
var col12=document.createElement("td")
var col13=document.createElement("td")
var col14=document.createElement("td")
var col15=document.createElement("td")
var col16=document.createElement("td")
var col17=document.createElement("td")
var col18=document.createElement("td")
row2.append(col11,col12,col13,col14,col15,col16,col17,col18)

function foo(){
var col11v=document.getElementById("firstname").value;
    col11.innerHTML=`${col11v}`

    var col12v=document.getElementById("lastname").value;
    col12.innerHTML=`${col12v}`

    var col13v=document.getElementById("address").value;
    col13.innerHTML=`${col13v}`

    var col14v=document.getElementById("pincode").value;
    col14.innerHTML=`${col14v}`

    var col15v=document.querySelector('input[name="Gender"]:checked');
    if(col15v != null){
        col15.innerHTML=`${col15v.value}`
    }
    else{
        alert("Select your Gender")
    }

    var col16v=document.querySelectorAll('input[name="foods"]:checked');
    var foodv=[];
    if(col16v.length<2){
        alert("Select atleast two food types")
    }
    else{
    for(var i=0;i<col16v.length;i++){
        if(col16v[i].checked==true){
            foodv.push(col16v[i].value)
        }
    }
    col16.innerHTML=`${foodv.join(" / ")}`
    }
    var col17v=document.getElementById("state").value;
    col17.innerHTML=`${col17v}`

    var col18v=document.getElementById("country").value;
    col18.innerHTML=`${col18v}`
}

row1.append(col1,col2,col3,col4,col5,col6,col7,col8)
container.append(row1,row2)

form.append(d,d1,d2,d3,e,e1,e2,e2,f,f1,f2,f3,g,g1,g2,g3,g4,radv,h2,radlabel,rad1,radlabel1,rad2,h,hh,foodv,h3,fd1,food1,h5,fd2,food2,h6,fd3,food3,h7,fd4,food4,h8,fd5,food5,h1,hhh,j, j1, j2, j3, k, k1, k2, k3,k4, z)
document.body.append(form,container)