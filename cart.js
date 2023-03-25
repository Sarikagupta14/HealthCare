var noti = document.querySelector('.nav h1');
	var select = document.querySelector('.select');
	var button = document.getElementsByTagName('button');
	for(var but of button){
		but.addEventListener('click', (e)=>{
			var add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')

			// image --animation to cart ---//
			var image = e.target.parentNode.querySelector('.itembox img');
			var span = e.target.parentNode.querySelector('.itembox span');
			var s_image = image.cloneNode(false);
			span.appendChild(s_image);
			span.classList.add("active");
			setTimeout(()=>{
				span.classList.remove("active");
				span.removeChild(s_image);
			}, 500); 
			

			// copy and paste //
			var parent = e.target.parentNode;
			var clone = parent.cloneNode(true);
			select.appendChild(clone);
			clone.lastElementChild.innerText = "Buy-now";
			
			if (clone) {
				noti.onclick = ()=>{
					select.classList.toggle('display');
				}	
			}
		})
	}
	// 
	submit.addEventListener('click',function(){
	alert('Your Appointment is booked')
	// allData();
	})
	function callvalue(){
		var n= document.getElementById("uname").value;
		var number= document.getElementById("number").value;
		var email= document.getElementById("email").value;
		var time= document.getElementById("time").value;
		document.writeln("Congratulations, Your appointment is booked!! <br> Your Info: <br>" + "Name: "+ n +"<br>");
		document.writeln("Your email:" +  email +"<br>");
		document.writeln("Your Appointment time:" + time +"<br>");
		document.writeln("Your Mobile no.:" + number +"<br>");

	}
	// 
// 	fetch('https://dummyjson.com/users/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     firstName: 'Muhammad',
//     lastName: 'Ovi',
//     age: 250,
//     /* other user data */
//   })
// })
// .then(res => res.json())
// .then(console.log);
            