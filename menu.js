
var menuItem = document.querySelectorAll('.item-menu')
function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//expandir menu
var itExp = document.querySelector('#it-exp')
var menuSide =document.querySelector('.menu-lateral')

itExp.addEventListener('click', function(){
    menuSide.classList.toggle('exp')
})

