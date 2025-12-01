//template ID template_r6z69ye
//Service ID  service_kpuk9yt
//public key hnp2n1Q8doU5v-nbH

 function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
        'service_kpuk9yt',
        'template_r6z69e',
        form,
        'user_hnp2n1Q8doU5v-nbH'
    ).then(() =>{
        console.log('this worked')
        loading.classList.remove("modal__overlay--visible");
        success.classList.add('modal__overlay--visible');
        form.reset();
    }).catch(() =>{
        loading.classList.remove("modal__overlay--visible");
        loading.classList.remove('modal__overlay--visible');
        alert('sorry, service unavailable at this time. Send a message directly to creepybrow@gmail.com');
    });   
}   
