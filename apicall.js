const main_url = `https://gelbooru.com`;
const api_key = `&api_key=a6dca2045988ec286c39dff0f2b9448940a346b24cf25fe280f7d07bbb02d9fb&user_id=1171195` + `&json=1`;

const post_lst = `/index.php?page=dapi&s=post&q=index`;
const tag_lst = `/index.php?page=dapi&s=tag&q=index`;

const additional_tag = `&tags=` + ``;
const rating = [`general`, `questionable`, `sentitive`, `explicit`];

const img_lst = [];

fetch(`https://corsproxy.io/?url=` + main_url + post_lst + api_key + `&tags=rating:general+aircraft`)
  .then(response => {
    if (!response.ok)
      console.log(`Fetch data failed!`);
    return response.json();
  })
  .then(data => {
    console.log(`Successfully fetch data!`);
    let post = data.post;
    console.log(data.post);
    post.forEach(element => {
      img_lst.push(`  <a href="${element.file_url} target="_blank">
                        <img src="${element.preview_url}">
                      </a>`)
    });
    let illust = document.getElementById("illust");
    illust.innerHTML = img_lst.join(``);
  })
