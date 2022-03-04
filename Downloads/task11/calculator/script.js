let title = document.createElement("h1")
title.innerText = ("CALCULATOR")
title.classList.add("text-center")
title.setAttribute("id", "title")
document.body.appendChild(title)



let description = document.createElement("p")
description.innerText = ("CALCULATOR USING DOM")
description.setAttribute("id", "description")
description.classList.add("text-center")
document.body.appendChild(description)



//table starts here 
//  var str="abc"



let box = document.createElement("div")
box.setAttribute("id", "box")
box.setAttribute("class", "bb")
document.body.appendChild(box)

let input = document.createElement("input")    //input boxx
input.setAttribute("id", "result")
input.setAttribute('class',"display-box")
input.setAttribute("type", "text")
box.appendChild(input)








let table = document.createElement("table")  //table starts 
table.setAttribute("id", "table")
table.classList.add("table-sm")
box.appendChild(table)




let tablebody = document.createElement("tbody")   //table body
tablebody.setAttribute("id", "tablebody")
table.appendChild(tablebody)






////row
let tr1 = document.createElement("tr")  //row one
tr1.setAttribute("id", "tr1")
tablebody.appendChild(tr1)


let td = document.createElement("td")
td.setAttribute("id", "td1")
tr1.appendChild(td)

let buttonclear = document.createElement("button")
buttonclear.setAttribute("id", "clear")
buttonclear.setAttribute("onclick", "clearscreen()")    //button for clear
buttonclear.innerText = ("c")
td.appendChild(buttonclear)

let td2 = document.createElement("td")
td2.setAttribute("id", "td2")
tr1.appendChild(td2)


let buttonclear1 = document.createElement("button")
buttonclear1.setAttribute("id", "clear1")
buttonclear1.innerText = ("<=")                         //button for greater thaan or not
buttonclear1.setAttribute("onclick", "display('<=')")
td2.appendChild(buttonclear1)


// function display(value) {
//     console.log('did')   // checking function working or not
//     document.getElementById("result").value += value;
//    }

//////2
let td3 = document.createElement("td")
td3.setAttribute("id", "td3")
tr1.appendChild(td3)


let buttonclear2 = document.createElement("button")
buttonclear2.setAttribute("id", "dot")              // including dot 
buttonclear2.innerText = (".")
buttonclear2.setAttribute("class","px-2")
buttonclear2.setAttribute("onclick", "display('.')")
td3.appendChild(buttonclear2)
////3
let td4 = document.createElement("td")
td4.setAttribute("id", "td4")
tr1.appendChild(td4)


let buttonclear3 = document.createElement("button")
buttonclear3.setAttribute("id", "multiply")
buttonclear3.innerText = ("*")
buttonclear3.setAttribute("onclick", "display('*')")
td4.appendChild(buttonclear3)




////Table row 2

let tr2 = document.createElement("tr")
tr2.setAttribute("id", "tr2")
tablebody.appendChild(tr2)


let td5 = document.createElement("td")
td5.setAttribute("id", "td5")
tr2.appendChild(td5)

let button7 = document.createElement("button")
button7.setAttribute("id", "7")                             // 7 inserted
button7.setAttribute("onclick", "display('7')")
button7.innerText = ("7")
td5.appendChild(button7)

let td6 = document.createElement("td")
td6.setAttribute("id", "td6")
tr2.appendChild(td6)


let button8 = document.createElement("button")              // 8 inserted
button8.setAttribute("id", "8")
button8.setAttribute("onclick", "display('8')")
button8.innerText = ("8")
td6.appendChild(button8)



//////2
let td7 = document.createElement("td")
td7.setAttribute("id", "td7")
tr2.appendChild(td7)


let button9 = document.createElement("button")
button9.setAttribute("id", "9")
button9.innerText = ("9")                               // 9 inserted
button9.setAttribute("onclick", "display('9')")
td7.appendChild(button9)
////3
let td8 = document.createElement("td")
td8.setAttribute("id", "td8")
tr2.appendChild(td8)


let buttondiv = document.createElement("button")
buttondiv.setAttribute("id", "/")                           // division operation
buttondiv.setAttribute("onclick", "display('/')")
buttondiv.innerText = ("/")
td8.appendChild(buttondiv)




///table row 3


let tr3 = document.createElement("tr")
tr3.setAttribute("id", "tr3")
tablebody.appendChild(tr3)


let td9 = document.createElement("td")
td9.setAttribute("id", "td9")
tr3.appendChild(td9)

let button4 = document.createElement("button")
button4.setAttribute("id", "4")
button4.setAttribute("onclick", "display('4')")                 // 4 inserted
button4.innerText = ("4")
td9.appendChild(button4)

let td10 = document.createElement("td")
td10.setAttribute("id", "td10")
tr3.appendChild(td10)


let button5 = document.createElement("button")
button5.setAttribute("id", "5")                                 // 5 inserted
button5.setAttribute("onclick", "display('5')")
button5.innerText = ("5")
td10.appendChild(button5)

//////2
let td11 = document.createElement("td")
td11.setAttribute("id", "td11")
tr3.appendChild(td11)


let button6 = document.createElement("button")                  // 6 inserted
button6.setAttribute("id", "6")
button6.setAttribute("onclick", "display('6')")
button6.innerText = ("6")
td11.appendChild(button6)
////3
let td12 = document.createElement("td")
td12.setAttribute("id", "td12")
tr3.appendChild(td12)


let buttonsub = document.createElement("button")
buttonsub.setAttribute("id", "subtract")
buttonsub.setAttribute("onclick", "display('-')")
buttonsub.innerText = ("-")
td12.appendChild(buttonsub)



///table row 4
let tr4 = document.createElement("tr")
tr4.setAttribute("id", "tr4")
tablebody.appendChild(tr4)


let td13 = document.createElement("td")
td13.setAttribute("id", "td13")
tr4.appendChild(td13)

let button1 = document.createElement("button")
button1.setAttribute("id", "1")
button1.setAttribute("onclick", "display('1')")             // 1 inserted
button1.innerText = ("1")
td13.appendChild(button1)

let td14 = document.createElement("td")
td14.setAttribute("id", "td14")
tr4.appendChild(td14)


let button2 = document.createElement("button")              //2 inserted
button2.setAttribute("id", "2")
button2.setAttribute("onclick", "display('2')")
button2.innerText = ("2")
td14.appendChild(button2)

//////2
let td15 = document.createElement("td")
td15.setAttribute("id", "td15")
tr4.appendChild(td15)


let button3 = document.createElement("button")              //3 inserted
button3.setAttribute("id", "3")
button3.setAttribute("onclick", "display('3')")
button3.innerText = ("3")
td15.appendChild(button3)
////3
let td16 = document.createElement("td")
td16.setAttribute("id", "td16")
tr4.appendChild(td16)


let buttonplus = document.createElement("button")           //+inserted performing addition operation
buttonplus.setAttribute("id", "add")
buttonplus.innerText = ("+")
buttonplus.setAttribute("onclick", "display('+')")
td16.appendChild(buttonplus)



///table row 5
let tr5 = document.createElement("tr")
tr5.setAttribute("id", "tr5")
tablebody.appendChild(tr5)


let td17 = document.createElement("td")
td17.setAttribute("id", "td17")
tr5.appendChild(td17)

let button0 = document.createElement("button")          // 0 added
button0.setAttribute("id", "0")
button0.setAttribute("onclick", "display('0')")
button0.innerText = ("0")
td17.appendChild(button0)

let td18 = document.createElement("td")
td18.setAttribute("id", "td2")
tr5.appendChild(td18)


let button00 = document.createElement("button")
button00.setAttribute("id", "00")
button00.setAttribute("onclick", "display('00')")       //00 added
button00.innerText = ("00")
td18.appendChild(button00)

//////2
let td19 = document.createElement("td")
td19.setAttribute("id", "td19")
// td19.setAttribute("colspan", "5")
tr5.appendChild(td19)


let equal = document.createElement("button")
equal.setAttribute("id", "equal")
equal.innerText = ("=")
equal.setAttribute("onclick", "calculate()")
td19.appendChild(equal)
////3




function display(value) {
    console.log('did')                                      //function for inserting into input boxs
    document.getElementById("result").value += value;
   }


   function clearscreen() {                                 // function for clearing
    document.getElementById("result").value = "";
   }


   function calculate() {
    var p = document.getElementById("result").value;
    console.log("calculate working")                            // evalution of add,sub, mul,divs
    console.log(p)
    var q = eval(p);
    document.getElementById("result").value = q;
   }

   function eval(p){
    
    str=p.split('')
    for(let i=0;i<str.length;i++){
        if(str[i]=='+'){
            p=str.join('')
            val=p.split('+')
            sum=Number(val[0])+Number(val[1])
            console.log(sum)
            return sum;
        }
        if(str[i]=='-'){
            p=str.join('')
            val=p.split('-')
            sum=Number(val[0])-Number(val[1])
            console.log(sum)
            return sum;
        }
        if(str[i]=='/'){
            p=str.join('')
            val=p.split('/')
            sum=Number(val[0])/Number(val[1])
            console.log(sum)
            return sum;
        }
        if(str[i]=='*'){
            p=str.join('')
            val=p.split('*')
            sum=Number(val[0])*Number(val[1])
            console.log(sum)
            return sum;
        }
    }


   }




//let x = document.getElementById("result").addEventListener("click",click)