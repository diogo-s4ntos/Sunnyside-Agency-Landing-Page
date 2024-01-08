function menu(checkbox){
    if (checkbox.checked){
        document.body.style.overflow = 'hidden';
        document.getElementById('phone-menu').style.transform = 'translate(0%)';
    }
    else{
        document.body.style.overflow = 'scroll';
        document.getElementById('phone-menu').style.transform = 'translate(100%)';
    }
}
