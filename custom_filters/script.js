var app=angular.module("myModule",[]);
app.controller("myController",function($scope){

$scope.employees=[
    {"name":"a",
     "gender":1
    },
    {
     "name":"b",
     "gender":2
    },
    {
        
    "name":"c",
    "gender":1
           
    }
]

    
})

app.filter("genderValue",function(){
    return function(gender){
        if(gender==1){
            return "male";
        }
        else{
            return "female";
        }
    }
})