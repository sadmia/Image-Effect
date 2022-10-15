"use string";

var imagesDiv = document.getElementById('imagesBox');
var fileInput = document.getElementById('fileInput');
var filterList = document.getElementById("filterList");
var myRange = document.getElementById("myRange");


imagesDiv.addEventListener("click", function(){
	fileInput.click();
});

fileInput.addEventListener("input", function(){
	let value = fileInput.value;
	let urlExt = value.slice(-3, value.length);
	let url = URL.createObjectURL(this.files[0]);

	if (urlExt == "png" || urlExt == "jpg") {
		imagesDiv.src = url;
		imagesDiv.style.width = "100%";
		imagesDiv.style.height = "100%";
		imagesDiv.style.objectFit = "contain";
	} else {
		console.log(urlExt + " Not Alowe");
	}

})


let filterImages = "icon/filter-images.jpg";
let filterName = ["None", "Blur", "Hue Rotate", "Grayscale", "Brightness", "Contrast", "Inherit", "Invert", "Opacity", "revert", "Saturate", "Sepia", "unset"];
let filterType = ["none", "blur(1px)", "hue-rotate(45deg)", "grayscale(1)", "brightness(0.5)", "contrast(1.5)", "inherit", "invert(1)", "opacity(0.5)", "revert", "saturate(0.5)", "sepia(1)", "unset"];

for (let i = 0; i < 15; i++){
	listDesign(filterImages, filterName[i], filterType[i]);
}



function listDesign(src, filterName, filterType){
	let li = document.createElement("li");
	let div = document.createElement("div");
	div.className = "EffictImages";
	let img = document.createElement("img");
	img.style.filter = filterType;
	img.src = src;
	img.title = filterName;
	filterList.appendChild(li);
	li.appendChild(div);
	div.appendChild(img);
}



let flli = filterList.getElementsByTagName("li");
for (let i = 0; i < flli.length; i++){
	flli[i].addEventListener("click", function(){
		imagesDiv.style.filter = filterType[i];
	});
}



