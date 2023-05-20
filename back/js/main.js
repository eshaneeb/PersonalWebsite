const navMenu = document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close')
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('nav-menu')
const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))
const contactForm=document.getElementById('contact-form'),
    contactMessage=document.getElementById('contact-message')
const sendEmail = (e) =>{
    e.preventDefault()
    emailjs.sendForm('service_gtw107o','template_1io3quy', '#contact-form','kBsl-hAvgdQxG_AC4')
        .then(()=>{
            contactMessage.textContent='Message Sent Successfully 🎉'
            setTimeout(()=>{
                contactMessage.textContent=''
            },5000)
            contactForm.reset()
        },()=>{
            contactMessage.textContent='Message not sent, please try later 😢'
        })
}
contactForm.addEventListener('submit', sendEmail)


const scrollUp = () =>{
	const scrollUp = document.getElementById('scrollToTopBtn')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)