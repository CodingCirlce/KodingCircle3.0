let select = s => document.querySelector(s),
  selectAll = s =>  document.querySelectorAll(s),
		mainSVG = select('#mainSVG')

gsap.set('svg', {
	visibility: 'visible'
})

let tl = gsap.timeline({repeat: -1});
tl.to('#allBoxes rect', {
	transformOrigin: '107% 50%',
	rotation: gsap.utils.wrap([180, -180]),
	stagger: {
		each: 0.14,
	}
})
.to('#allBoxes', {
	x: -112,
	duration: tl.recent().duration(),
	ease: 'linear'
}, 0)

gsap.set('#ref', {
	scaleY: -1,
	transformOrigin: '50% 50%'
})
//ScrubGSAPTimeline(tl)