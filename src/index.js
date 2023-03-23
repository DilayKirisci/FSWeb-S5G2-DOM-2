import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

const links = document.querySelectorAll("a");
function linkAnimation(e) {
	e.preventDefault();
	e.target.style.backgroundColor = "pink";
}
links.forEach((link) => {
	link.addEventListener("mouseover", linkAnimation);
});

const images = document.querySelectorAll("img");
function changeSize(e) {
	e.preventDefault();
	e.target.style.width = "400px";
	e.target.style.height = "400px";
}
images.forEach((image) => {
	image.addEventListener("mouseover", changeSize);
});

const welcome = document.querySelector(".intro h2");
welcome.addEventListener("select", changeSize);

window.addEventListener("dblclick");

document.addEventListener("dblclick", function () {
	const elem = document.documentElement;
	const requestFullScreen = elem.requestFullscreen;

	if (requestFullScreen) {
		requestFullScreen.call(elem);
	}
});

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) =>
	btn.addEventListener("click", () => {
		btn.textContent = "Simdi Al!";
	})
);
