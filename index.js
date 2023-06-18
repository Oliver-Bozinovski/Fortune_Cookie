// create a function that generates a random chinese fortune cookie message

const generateFortuneCookie = () => {
	// create an array of strings
	const fortunes = [
		"You will be hungry again in one hour.",
		"An alien of some sort will be appearing to you shortly.",
		"Do not mistake temptation for opportunity.",
		"Flattery will go far tonight.",
		"He who laughs at himself never runs out of things to laugh at.",
		"He who laughs last is laughing at you.",
		"He who throws dirt is losing ground.",
		"Many changes of mind and mood; a good time to leave your job.",
		"You are a bundle of energy, always on the go.",
		"You will step on the soil of many countries.",
		"The person of your dreams is coming to you soon.",
		"You will be recognized and honored as a community leader.",
		"Under no circumstances take a sleeping pill and a laxative on the same night.",
		"You learn from your mistakes... You will learn a lot today.",
		"A closed mouth gathers no feet.",
		"Hands that grasp for too much, receive nothing.",
		"Every excess becomes a vice.",
		"Your principles mean more to you than any money or success.",
		"Mouth may be loud, but voice is small.",
		"Only listen to the fortune cookie; disregard all other fortune telling units.",
	];
	// generate a random number
	const randomIndex = Math.floor(Math.random() * fortunes.length);
	// get a random element from the array of strings
	const randomFortune = fortunes[randomIndex];
	// return the random element
	return randomFortune;
};

const randomChineseLuckyCatPhotos = () => {
	const photos = [
		"https://images.unsplash.com/photo-1671230816334-04ca31b3294c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=8",
		"https://images.unsplash.com/photo-1631967311783-853995189f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=8",
		"https://images.unsplash.com/photo-1644217147349-b9e20abd124f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=8",
		"https://images.unsplash.com/photo-1601150057881-38ff0ccc58dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
		"https://images.unsplash.com/photo-1585911171383-e292f19c7d97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
		"https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		"https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
		"https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
	];
	const randomIndex = Math.floor(Math.random() * photos.length);
	const randomPhoto = photos[randomIndex];
	return randomPhoto;
};

const generateText = () => {
	const text = document.createElement("h2");
	// creaate an image element with class name "lucky-cat"
	const image = document.createElement("img");
	image.className = "lucky-cat";
	text.innerText = generateFortuneCookie();
	image.src = randomChineseLuckyCatPhotos();
	//clear the previous text
	const previousText = document.querySelector("h2");
	const previousImage = document.querySelector("img");
	previousText?.remove();
	previousImage?.remove();
	document.body.appendChild(text);
	document.body.appendChild(image);
	enlargeImage();
};

const clickMe = document.getElementById("click-me");
clickMe?.addEventListener("click", generateText);
