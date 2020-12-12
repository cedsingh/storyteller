function submitForm() {
	var data = {
		"one": document.getElementById("one").value,
		"two": document.getElementById("two").value,
		"three": document.getElementById("three").value,
		"adj": document.getElementById("adj").value,
		"verb": document.getElementById("verb").value,
		"number": document.getElementById("number").value,
		"yes": document.getElementById("yes").checked,
		"speed": document.getElementById("speed").value,
		"quote": document.getElementById("quote").value,
		"message": document.getElementById("message").value,
	};
	localStorage.setItem("data", JSON.stringify(data));
}

function getData() {
	var data = localStorage.getItem("data");
	data = JSON.parse(data);
	var u = document.getElementsByTagName('u');
	for (var i = 0; i < u.length; i++) {
		switch (u[i].className) {
			case "one":
				u[i].innerText = data["one"];
				break;
			case "two":
				u[i].innerText = data["two"];
				break;
			case "three":
				u[i].innerText = data['three'];
				break;
			case "adj":
				u[i].innerText = data['adj'];
				break;
			case "verb":
				u[i].innerText = data['verb'];
				break;
			case "number":
				u[i].innerText = data['number'];
				break;
			case "yes":
				u[i].innerText = data['yes']?'Yes':'No';
				break;
			case "speed":
				u[i].innerText = data['speed'];
				break;
			case "quote":
				u[i].innerText = data['quote'];
				break;
			case "message":
				u[i].innerText = data['message'];
				break;
			default:
				u[i].innerHTML = "null";
				break;
		}
	}
}