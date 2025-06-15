// from and fromTo{}
// in from () no need to specify the initial state , (it will figure by itself)

gsap.from('.box1', {
  y: -200,
  duration: 3,
  ease: 'linear',
  repeat: -1,
  yoyo: true
})

// fromTo() - you have to specify the default value and new animation state to
gsap.fromTo(
  '.box2',
  {
    // for initial state
    y: 200,
    opacity: 0
  },
  {
    // For animation
    opacity: 1,
    y: -200,
    duration: 3,
    ease: 'linear',
    borderRadius: 0,
    repeat: -1,
    yoyo: true
  }
)

// GSAP supports only camelCase
