function searchWebsite() {
    const search = querySelector('url_text')
    
    console.log(search.value);
    site = search.value
}

function changeWebsite(site) {
    const frame = querySelector('.responsive-iframe')
    const frame.src = `www.${site}.com`
}

const colunm_middle = document.querySelector('#url_text')
colunm_middle.addEventListener("change", searchWebsite)