const openModelButtons = document.querrySelectorAll('[data-modal-target]')
const closeModelButtons = document.querrySelectorAll('[data-close-button]')
const overlay1 = document.getElementById('paynowbodyoverlay')

openModelButtons.forEach(button=> {
    button.addEventListner('click',()=> {
        const model = document.querrySelector(button.dataset.paynowtcTarget)
        openmodel(model)

    })
} )


closeModelButtons.forEach(button=> {
    button.addEventListner('click',()=> {
        const model = button.closest('.paynowtc')
        closemodel(model)

    })
} )





 function openModal(model) {
    if (model == null) return
    model.classList.add('active')
    overlay1.classList.add('active')
 }


  function closeModal(model) {
    if (model == null) return
    model.classList.remove('active')
    overlay1.classList.remove('active')
 }