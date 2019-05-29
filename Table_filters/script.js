var myModule=angular.module("myModule",[])
            .controller("myController",($scope)=>{
                   
                $scope.employees=[
                    {
                        "name":"ben",
                        "DoB":new Date("November 23, 1980"),
                        "Salary":88000
                    },
                    {
                        "name":"sarah",
                        "DoB":new Date("January 1, 1960"),
                        "Salary":60000
                    },
                    {
                        "name":"mark",
                        "DoB":new Date("May 6, 1999"),
                        "Salary":50000
                    },
                    {
                        "name":"harry",
                        "DoB":new Date("October 19, 1996"),
                        "Salary":5000
                    },
                    {
                        "name":"daisy",
                        "DoB":new Date("September 15, 1996"),
                        "Salary":90000
                    }
                ]
                   
                $scope.rowLimit=3;
                $scope.orderbyItem="Salary";
                arr=[];
                

                $scope.sortbyme=function($event){
                    
                     
                    if(arr[$event.target.innerText]==null){
                        arr[$event.target.innerText]='+';
                        $scope.orderbyItem=$event.target.innerText;
                    }
                    else{
                        
                        arr[$event.target.innerText]=(arr[$event.target.innerText]=='+')?'-':'+';
                        $scope.orderbyItem=arr[$event.target.innerText]+""+$event.target.innerText;
                    }
                    console.log("clicked! "+$event.target.innerText+" order:"+$scope.orderbyItem);
                  
                }
               }) 