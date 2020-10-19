  function testVariable() {
            debugger
            //var strText = document.getElementById("txtName").value;
            var strText1 = document.getElementById("txtEmail").value;
			var strText2 = document.getElementById("number1").value;
			var strText3 = document.getElementById("number2").value;
         
            document.getElementById("p2").innerHTML = strText1;
			 document.getElementById("p3").innerHTML = strText2;
			 document.getElementById("p4").innerHTML = strText3;
			 //document.getElementById("myImg").src = "https://amizone.net/amizone/Images/Signatures/"+strText+"_P.png"
			 
			 function readURL(input) {
				if (input.files && input.files[0]) {
				var reader = new FileReader();
				
				reader.onload = function (e) {
					// $('.addressDiv').css('height','180px');
					$('#myImg').attr('src', e.target.result);
				}
				
				reader.readAsDataURL(input.files[0]);
			}
		}
		
		$("#userPhoto").change(function(){
			readURL(this);
		});
	
	}
});
	

        }
		
function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}

