var songsModule=angular.module("songsList",[])
                       .controller("songsController",function($scope){
                           
                            var list=[
                                {
                                    singer:"Miley Cyrus",
                                    songs:[
                                        "Butterfly fly away",
                                        "When I look at you",
                                        "Party in the USA"
                                    ]
                                },
                                {
                                    singer:"Ed Sheeran",
                                    songs:[
                                        "Photograph",
                                        "Thinking out Loud",
                                        "Perfect",
                                        "Shape of You"
                                    ]
                                },
                                {
                                    singer:"Ariana Grande",
                                    songs:[
                                        "7 Rings"
                                    ]
                                }
                            ]

                            $scope.list=list;
                        });