const inner_text = (row, text) => {
    const packages = document.querySelectorAll('div.table-packages div:nth-child(2n+1)');
    for (let i = row - 1; i < packages.length; i += 7) {
        packages[i].innerHTML = text;
    };
};
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
inner_text(1, 'Disk Space (GB)');
inner_text(2, 'Subdomains)');
inner_text(3, 'Transfer (GB)');
inner_text(4, 'Data bases');
inner_text(5, 'Dashboards');
inner_text(6, 'Control Panel & FTP');
inner_text(7, 'Free Support');
Slider()