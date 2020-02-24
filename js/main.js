var carouselImgs = ['jar-sun', 'facing-up', 'underwater', 'water-hands']
var carouselCounter = 0
var carousel = null

setInterval(function(){carousel_right()},5000)

function carousel_left() {
	if (carouselCounter == 0) {
		carouselCounter = 3
	} else {
		--carouselCounter
	}
	document.getElementById("carousel").style.backgroundImage = 'url("img/' + carouselImgs[carouselCounter] + '.jpg")'
}

function carousel_right() {
	if (carouselCounter == 3) {
		carouselCounter = 0
	} else {
		++carouselCounter
	}
	document.getElementById("carousel").style.backgroundImage = 'url("img/' + carouselImgs[carouselCounter] + '.jpg")'
}

var categories = [
	"K-Pop",
	"Youtubers",
	"Political Figures"
];

const productList = [
	{ name: "Vsauce", category: "youtuber", image_url: "https://cust-images.grenadine.co/grenadine/image/upload/c_fill,f_jpg,g_face,h_600,w_600/v1/VidCon/vQnx_913.jpg" },
	{ name:"pewdiepie", category:"youtuber", image_url:"https://i.scdn.co/image/a3dc2f43e7c93a0a8f5da406289c632175b220f1"},
	{ name: "Ethan Klein", category: "youtuber", image_url:"https://www.thefamouspeople.com/profiles/images/ethan-klein-2.jpg"},
	{ name:"Tai Lopez", category: "youtuber", image_url:"https://vignette.wikia.nocookie.net/astral-domination/images/3/3f/TaiLopez.png/revision/latest?cb=20181030215949"},
	{ name:"Jenna Marbles", category: "youtuber", image_url:"https://www.caa.com/sites/default/files/styles/headshot_500x500/public/speaker-headshots/MarblesJ_headshot_web.jpg?itok=bUF6EuG_"},
	{ name:"Pink Guy", category: "youtuber", image_url:"https://i1.sndcdn.com/artworks-000532120344-zorxn3-t500x500.jpg"},
	{ name:"Hyuna", category: "kpop", image_url:"https://happybirthdayoppakevin.files.wordpress.com/2014/07/924421_1522630804618184_1871573046_n.jpg"},
	{ name:"Psy", category: "kpop", image_url:"https://vignette.wikia.nocookie.net/gangnamstyle/images/0/07/Psy.jpeg/revision/latest?cb=20120918232224"},
	{ name:"JYP", category: "kpop", image_url:"https://pm1.narvii.com/6024/b2f753b17f9bab066741a60d413009b7ea5d8640_hq.jpg"},
	{ name:"Taeyeon", category: "kpop", image_url:"https://pbs.twimg.com/profile_images/1211472051376025600/J8Rdz7HS.png"},
	{ name:"Sunmi", category: "kpop", image_url:"https://upload.wikimedia.org/wikipedia/commons/4/41/Lee_Sun-mi_going_to_a_Music_Bank_recording_in_September_2018_%282%29.jpg"},
	{ name:"BTS", category: "kpop", image_url:"https://kprofiles.com/wp-content/uploads/2019/09/BTS-1-534x800.jpg"},
	{ name:"Supreme Leader", category: "political", image_url:"https://upload.wikimedia.org/wikipedia/commons/7/76/Kim_and_Trump_standing_next_to_each_other_%28cropped%29.jpg"},
	{ name:"Donald Trump", category: "political", image_url:"https://thenypost.files.wordpress.com/2019/12/trump-china.jpg?quality=80&strip=all&w=618&h=410&crop=1"},
	{ name:"Leslie Knope", category: "political", image_url:"https://www.bostonmagazine.com/wp-content/uploads/sites/2/2015/02/leslie-sq.jpg"},
	{ name:"Bernie Sanders", category: "political", image_url:"https://api.time.com/wp-content/uploads/2016/04/bernie-sanders9.jpg?w=600&quality=85"},
	{ name:"Sarah Palin", category: "political", image_url:"https://nyppagesix.files.wordpress.com/2018/04/tina-fey-tribeca-film-festival.jpg?quality=80&strip=all&w=618&h=410&crop=1"},
	{ name:"Zodiac Killer", category: "political", image_url:"https://www.msnbc.com/sites/msnbc/files/styles/ratio--3-2--1_5x-768x512/public/articles/2013-10-19t220656z_48049653.jpg?itok=0-2jla7Q"},
];

function populateTopProducts() {
	first = Math.floor(Math.random() * 6);
	second = Math.floor(Math.random() * 6) + 6;
	third = Math.floor(Math.random() * 6) + 12;

	topFirst = document.getElementsByClassName("first")[0].children[0];
	topSecond = document.getElementsByClassName("second")[0].children[0];
	topThird = document.getElementsByClassName("third")[0].children[0];

	topFirst.textContent = productList[first].name;
	topSecond.textContent = productList[second].name;
	topThird.textContent = productList[third].name;

	topFirstBack = document.getElementsByClassName("first")[0];
	topSecondBack = document.getElementsByClassName("second")[0];
	topThirdBack = document.getElementsByClassName("third")[0];

	topFirstBack.style.backgroundImage = "url('" + productList[first].image_url + "')";
	topSecondBack.style.backgroundImage = "url('" + productList[second].image_url + "')";
	topThirdBack.style.backgroundImage = "url('" + productList[third].image_url + "')";
}

populateTopProducts();

function populateCategoryPreview(category) {
	previewElements = document.getElementsByClassName("preview");
	switch (category) {
		case "youtuber":
			for (let i = 0; i < previewElements.length; i++) {
				previewElements[i].style.backgroundImage = "url('" + productList[i].image_url + "')";
				previewElements[i].textContent = productList[i].name
			}
			break;
		case "kpop":
			for (let i = 0; i < previewElements.length; i++) {
				previewElements[i].style.backgroundImage = "url('" + productList[i+6].image_url + "')";
				previewElements[i].textContent = productList[i+6].name
			}
			break;
		case "political":
			for (let i = 0; i < previewElements.length; i++) {
				previewElements[i].style.backgroundImage = "url('" + productList[i+12].image_url + "')";
				previewElements[i].textContent = productList[i+12].name
			}
			break;
		default:
			break;
	}
}

populateCategoryPreview('youtuber');