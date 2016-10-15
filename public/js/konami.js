$(document).ready(function() {

			Array.prototype.equals = function (array) {
			    // if the other array is a false value, return
			    if (!array)
			        return false;

			    // compare lengths - can save a lot of time 
			    if (this.length != array.length)
			        return false;

			    for (var i = 0, l=this.length; i < l; i++) {
			        // Check if we have nested arrays
			        if (this[i] instanceof Array && array[i] instanceof Array) {
			            // recurse into the nested arrays
			            if (!this[i].equals(array[i]))
			                return false;       
			        }           
			        else if (this[i] != array[i]) { 
			            // Warning - two different object instances will never be equal: {x:20} != {x:20}
			            return false;   
			        }           
			    }       
			    return true;
			}   

			function burritoInit() {
				var num1 = Math.floor((Math.random()*5)+1);
				var num2 = Math.floor((Math.random()*5)+1);
				var num3 = Math.floor((Math.random()*5)+1);
				var num4 = Math.floor((Math.random()*5)+1);
				
				while(num1 == num2){
					num2 = Math.floor((Math.random()*5)+1);
				}
				
				while(num1 == num3 || num2 == num3){
					num3 = Math.floor((Math.random()*5)+1);
				}
				while(num1 == num4 || num2 == num4 || num3 == num4){
					num4 = Math.floor((Math.random()*5)+1);
				}
				
				$('#rand1').each(function() {
					$(this).attr('src', '/img/random/'+ num1 + '.jpg');
				});
				
				$('#rand2').each(function() {
					$(this).attr('src', '/img/random/'+ num2 + '.jpg');
				});
				$('#rand3').each(function() {
					$(this).attr('src', '/img/random/'+ num3 + '.jpg');
				});
				$('#rand4').each(function() {
					$(this).attr('src', '/img/random/'+ num4 + '.jpg');
				});
			}

			var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
			var yourInput = [];

			$(document).on('keydown', function(event) {
				yourInput.push(event.keyCode);
				if(yourInput.length > 11) {
					yourInput.shift();
				}
				console.log(yourInput);

				if(konamiCode.equals(yourInput)) {
					burritoInit();
				}
			});
		});