(function() {
    
  document.addEventListener('click', burgerInit)

  function burgerInit(e) {
      
      const burgerIcon = e.target.closest('.burger-icon')
      const burgerNavLink = e.target.closest('.nav__link')

      if (!burgerIcon && !burgerNavLink) return
      if (document.documentElement.clientWidth > 900) return

      if (!document.body.classList.contains('body--opened-menu')) {
          document.body.classList.add('body--opened-menu')
      } else {
          document.body.classList.remove('body--opened-menu')
      }

  }
}
)()

const btn = document.querySelector('.about__img-button')
const modal = document.querySelector('.body')

const openModal = () => {
  modal.classList.add('body--opened-modal')
}

const closeModal = () => {
  modal.classList.remove('body--opened-modal')
}


btn.addEventListener('click', openModal)
modal.addEventListener('click', event =>{
 event.preventDefault()
  const target = event.target
  console.log(target)
  if (target && target.classList.contains('modal') || target.closest('.modal__cancel')){
    closeModal()
  }
})

document.addEventListener('keydown', event => {
  if (event.code === 'Escape' && modal.classList.contains('body--opened-modal')){
    closeModal()
  }
})


