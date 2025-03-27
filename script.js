function executar(){
var nun = document.getElementById('txtnun')
var tab = document.getElementById('seltab')
if (nun.value.length == 0) {
    window.alert('Por favor, digite um numero!')
} else {
    var nun = Number(nun.value)
    var c = 1
    tab.innerHTML =''
    while (c<=10){
        var item = document.createElement('option')
        item.text = `${nun} X ${c} = ${nun*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }
}

    

}
