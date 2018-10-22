//inner text for table packages
const inner_text = (row, text) => {
    const packages = document.querySelectorAll('div.table-packages div:nth-child(2n+1)');
    for (let i = row - 1; i < packages.length; i += 7) {
        packages[i].innerHTML = text;
    };
};
//end inner text for table packages

//slider for comments
const Slider = () => {
    const slide = document.getElementsByClassName('slide');
    const btnSlide = document.getElementsByClassName('circle');
    const author = document.getElementsByClassName('name');
    for (let i = 0; i < btnSlide.length; i++) {
        btnSlide[i].onclick = () => {
            const height_slide = slide[i].offsetHeight
            for (let j = 0; j < btnSlide.length; j++) {
                btnSlide[j].style.background = 'none'
                slide[j].style.top = height_slide * (j + 1) + 'px'
                author[j].style.display = 'none'
            }
            btnSlide[i].style.background = '#fff'
            slide[i].style.top = (-1) * height_slide * i + 'px'
            author[i].style.display = 'block'
        }
    }
}
//end slider for comments

// login/register
const login = document.querySelector('div.member div.login');
const register = document.querySelector('div.member div.register');
let count = 0;//click

const OpenForm = (open) => {
    const oldClass = open.className
    open.classList.add(oldClass + '-active');
    open.classList.remove(oldClass);
    if (count === 0) {
        count += 1
        open.classList.add(oldClass + '-active');
        open.classList.remove(oldClass);
        open.style.zIndex = '99';
        const Show_form = () => { document.getElementById('form-' + oldClass).style.display = 'flex' }//form class = form + 'login or register'  
        setTimeout(Show_form, 980);
    } else {
        count -= 1;
        open.classList.remove(oldClass + '-active');
        open.classList.add(oldClass.replace(/-active/g, ''));
        document.getElementById('form-' + oldClass.replace(/-active/g, '')).style.display = 'none';//hide form class = form + 'login/register'
        open.style.zIndex = '0';
    }
    login.style.zIndex = '3'
}
login.onclick = () => {
    OpenForm(login)
}
register.onclick = () => {
    OpenForm(register)
}
// end login/register

inner_text(1, 'Disk Space (GB)');
inner_text(2, 'Subdomains)');
inner_text(3, 'Transfer (GB)');
inner_text(4, 'Data bases');
inner_text(5, 'Dashboards');
inner_text(6, 'Control Panel & FTP');
inner_text(7, 'Free Support');
Slider()