function showRegister() {
    document.getElementById('loginbox1').classList.add('hidden');
    document.getElementById('registerBox').classList.remove('hidden');
    document.getElementById('forgetbox').classList.add('hidden');
}

function showLogin() {
    document.getElementById('loginbox1').classList.remove('hidden');
    document.getElementById('registerBox').classList.add('hidden');
    document.getElementById('forgetbox').classList.add('hidden');
}

function showForgot() {
    document.getElementById('loginbox1').classList.add('hidden');
    document.getElementById('registerBox').classList.add('hidden');
    document.getElementById('forgetbox').classList.remove('hidden');
}
