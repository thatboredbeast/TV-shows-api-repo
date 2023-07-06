const form = document.querySelector("#searchForm");
const imgBody =document.querySelector('#images');

form.addEventListener('submit', async function (output) { 
    output.preventDefault();
    const searchInput = form.elements.query.value;
    const config = { params: { q: searchInput } };
    const res = await axios.get('https://api.tvmaze.com/search/shows', config);

    // const newimg = document.createElement('img');
    // newimg.src = res.data[0].show.image.medium;
    // document.body.appendChild(newimg);
    imgBody.innerHTML = ' ';
    displayImages(res.data);
    console.log(res.data);
    form.elements.query.value = "";
})

displayImages = (arr) => {
    for (a of arr) {
        if (a.show.image) {
            const newimg = document.createElement('img');
            const link = document.createElement('a');
            link.href = a.show.url;
            link.append(newimg);
            newimg.classList.add('spaced')
            newimg.src = a.show.image.medium;
            imgBody.append(link);
        }
    }
}