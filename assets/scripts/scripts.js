var app = angular.module('app',['ui.bootstrap','smart-table']);



app.controller('mainController',['$scope',function($scope){

	$scope.products 	= [
		{
			imgUrl	: "https://images-na.ssl-images-amazon.com/images/I/5126u6Mwp6L._SL500_AC_SS350_.jpg",
			name	: "Celphone v.1",
			desc	: "Cool and affordable celphone",
			stock	: 5,
			price	: 8000,
			editing : false
		},
	
		 

	];
	//$scope.products.prototype.editing = false;


	$scope.addProduct 		= function(item){
		for (var i = $scope.products.length-1; i >= 0; -- i){$scope.products['editing'] = false;} 
		$scope.products.push(item);
		$scope.item = {};
	}

	$scope.removeProduct 	= function removeProduct(item) {
        var index = $scope.products.indexOf(item);
        for (var i = 0; i < $scope.products.length; i++){
        	 $scope.products.splice(i, 1);
        }
           
    }

	$scope.remove = function(item){				
		var index = -1;		
		var comArr = eval( $scope.products );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].item === item ) {
				index = i;
				break;
			}
		}
		//if( index === -1 ) {
		//	alert( "Something gone wrong" );
		//}
		$scope.products.splice( index, 1 );		
	};


    $scope.addToCart		= function(item){
        var index 	= $scope.products.indexOf(item);
    	var totalindex = $scope.products.index.stock - item;
    	console.log(totalindex);
    }

    $scope.editItem = function (item) {
        item.editing = true;
    }

    $scope.doneEditing = function (item) {
        item.editing = false;
    };


}]);




