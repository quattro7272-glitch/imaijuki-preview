// スクロールで .ap-reveal をふわっと表示
document.addEventListener("DOMContentLoaded", function () {
	var els = document.querySelectorAll(".ap-reveal");
	if (!("IntersectionObserver" in window)) {
		els.forEach(function (el) { el.classList.add("is-in"); });
		return;
	}
	var io = new IntersectionObserver(function (entries) {
		entries.forEach(function (e) {
			if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
		});
	}, { rootMargin: "0px 0px -8% 0px" });
	els.forEach(function (el) { io.observe(el); });
});

