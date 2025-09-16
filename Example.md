## test.js
```
const APIurl = `https://gelbooru.com/index.php?page=dapi&s=post&q=index&tags=bondage+gag+-rating:explicit+-rating:sensitive&api_key=a6dca2045988ec286c39dff0f2b9448940a346b24cf25fe280f7d07bbb02d9fb&user_id=1171195`

let b = document.getElementById("b");
const photo = document.querySelector("div");
img = [];

fetch(APIurl+`&json=1`)
    .then(res => {
        console.log(res.json());
    })
fetch(APIurl)
    // .then(res => console.log(res))
    .then(response => {
        if (!response.ok)
            throw new Error('Respone not Ok.');
        return response.text();
    })
    .then(data => {
        console.log("Successfully fecthed data!!");
        const xmlTxt = new DOMParser().parseFromString(data, `text/xml`);

        urls = xmlTxt.querySelectorAll(`post preview_url`);
        urls.forEach(url => {
            console.log(urls.textContent);
            img.push(`<img src="${url.textContent}" alt="Failed to fetch!">`);

        })
        photo.innerHTML = `${img.join("")}`;
    })
```

## test.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>
    <p id="b">hi</p>
    <div></div>
    <script src="test.js"></script>
</body>
```
