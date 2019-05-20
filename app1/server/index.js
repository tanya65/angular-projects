let express=require('express');
let app=express();
let fs=require('fs');

let list_women_clothing="";

app.use(express.urlencoded({
    extended: true
  }))
app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/womenClothing',(req,res)=>{

  let list;
  fs.readFile('productsData/womenClothing.txt',(err,data)=>{
    if (err) throw err;
    list=JSON.parse(data).list;
    list_women_clothing=list;
    res.send(list);
  })

})

app.get('/womenCosmetics',(req,res)=>{

  let list;
  fs.readFile('productsData/womenCosmetics.txt',(err,data)=>{
    if (err) throw err;
    list=JSON.parse(data).list;
    list_women_cosmetics=list;
    res.send(list);
  })

})

app.get('/menClothing',(req,res)=>{

  let list;
  fs.readFile('productsData/menClothing.txt',(err,data)=>{
    if (err) throw err;
    list=JSON.parse(data).list;
    list_men_clothing=list;
    res.send(list);
  })

})

app.get('/menWatches',(req,res)=>{

  let list;
  fs.readFile('productsData/menWatches.txt',(err,data)=>{
    if (err) throw err;
    list=JSON.parse(data).list;
    list_men_watch=list;
    res.send(list);
  })

})

app.post("/ProductDetail",(req,res)=>{
  let category=req.body.category;
  let item_name=req.body.item;
  let output="item not found!";
console.log("category: "+category+" item:"+item_name);

switch(category){
case 'Women-Clothes':
if(list_women_clothing!=""){
  for(let item of list_women_clothing){
    console.log("item.name:"+JSON.stringify(item));
    if(item.name==item_name){
      output=item;
      break;
    }
  }
  
}
else{

  fs.readFile('productsData/womenClothing.txt',(err,data)=>{
    if (err) throw err;
    list=JSON.parse(data).list;
    list_women_clothing=list;
    for(let item of list_women_clothing){
      
      if(item.name==item_name){
        output=item;
        console.log("found! :"+item.detail);
        break;
      }

    }
    

  })
  
}
break;
default:
output="Invalid category!";
}

res.send(JSON.stringify(output));
})

app.get("/email",(req,res)=>{
  let data={
    "Women-Clothes":[
        {"crop top":{
            "description":"crop top is the new trend",
            "image":"newFolder/tshirt.svg"
        }},
        {"jeans":{
            "description":"jeans are the new trend",
            "image":"newFolder/tshirt.svg"
        }},
        {"pilazo":{
            "description":"crop top is the new trend",
            "image":"newFolder/tshirt.svg"
        }},
        {"bell bottoms":{
            "description":"crop top is the new trend",
            "image":"newFolder/tshirt.svg"
        }},
        {"shorts":{
            "description":"crop top is the new trend",
            "image":"newFolder/tshirt.svg"
        }},
        {"bikini":{
            "description":"crop top is the new trend",
            "image":"newFolder/tshirt.svg"
        }},
        {"kurta":{
            "description":"crop top is the new trend",
            "image":"newFolder/tshirt.svg"
        }}

    ]
 }
 
    res.send(data);
})
app.listen(4444,()=>console.log("listening.."));