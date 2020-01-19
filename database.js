
const firebaseConfig = {
			apiKey: "AIzaSyAYNFQoW_3d27FxoatT7CsubuQVZXjpBcU",
			authDomain: "fueledbycaffeine.firebaseapp.com",
			databaseURL: "https://fueledbycaffeine.firebaseio.com",
			projectId: "fueledbycaffeine",
			storageBucket: "fueledbycaffeine.appspot.com",
			messagingSenderId: "477307245291",
			appId: "1:477307245291:web:83a3fc367f1ab7e01c24ae",
			measurementId: "G-HY5FJDHTHL"
			};
			firebase.initializeApp(firebaseConfig);
			var db = firebase.firestore();
			
			function writeUsers() {
			
				db.collection("users").doc("username").set({
				"age": "age",
				"weight": "weight",
				"caffeine-sensitivity": "sensitivity",
				"reccomended-daily-caf": "reccCaf"
			})
			.then(function() {
				console.log("user created");
			})
			.catch(function(error) {
				console.error("Error adding document: ", error);
			});
		}	
		writeUsers();

	function readUsers() {
		let element = document.getElementById('results');
		element.innerHTML = '';
		db.collection('users').get()
			.then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				const data = doc.data();
				element.appendChild(document.createTextNode(data.users));
			});
			});
		}
		