const packages = document.querySelectorAll('div.table-packages div:nth-child(2n+1)');
const inner_text = (row, text) => {
    for (let i = row - 1; i < packages.length; i += 7) {
        packages[i].innerHTML = text;
    };
};
inner_text(1, 'Disk Space (GB)');
inner_text(2, 'Subdomains)');
inner_text(3, 'Transfer (GB)');
inner_text(4, 'Data bases');
inner_text(5, 'Dashboards');
inner_text(6, 'Control Panel & FTP');
inner_text(7, 'Free Support');
