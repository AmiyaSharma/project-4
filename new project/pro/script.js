function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  let button= document.querySelector("form")

  button.addEventListener("submit", submitform)
  

  function submitform(){
   
    let name = document.getElementById("name1").value
  
  let description = document.getElementById("campaign_mode").value;
  let type = document.getElementById("SMS").value;
  let date = document.getElementById("enddate").value;
  let category = document.getElementById("catagory").value;
  let price = document.getElementById("price").value;
  let obj={
    name:name,
    description:description,
    type:type,
    date:date,
    category:category,
    price:price,
  };
console.log(obj)
  
  let tasklist =JSON.parse(localStorage.getItem("task-list"))||[]
  tasklist.push(obj)
  localStorage.setItem("task-list",JSON.stringify(tasklist))

  }



  

let parent = document.querySelector("tbody")

let data =JSON.parse(localStorage.getItem("task-list"))||[]
appenddata(data);
function appenddata(data){
parent.innerHTML=""
  data.forEach(function(ele,ind){
    let tr= document.createElement("tr")
    let td1=document.createElement("td")
    td1.textContent=ele.name;
    let td2=document.createElement("td")
    td2.textContent=ele.description;
    let td3=document.createElement("td")
    td3.textContent=ele.type;
    let td4=document.createElement("td")
    td4.textContent=ele.date;
    let td5=document.createElement("td")
    td5.textContent=ele.category;
    let td6=document.createElement("td")
    td6.textContent=ele.price;
    let td7=document.createElement("button")
    td7.textContent="Remove";
    td7.addEventListener("click", function(){
let ele = data.splice(ind,1);
let priortylist =JSON.parse(localStorage.getItem("priority-list"))||[]
priortylist.push(ele[0])
localStorage.setItem("priority-list",JSON.stringify(priortylist));
localStorage.setItem("task-list",JSON.stringify(data));
appenddata(data);

    })
    tr.append(td1,td2,td3,td4,td5,td6, td7)
    parent.append(tr);
  })
}

