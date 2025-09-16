const main_url = `https://gelbooru.com`;
const api_key = `&api_key=a6dca2045988ec286c39dff0f2b9448940a346b24cf25fe280f7d07bbb02d9fb&user_id=1171195`;

const post_lst = `/index.php?page=dapi&q=index` + `&json=1`;
const tag_lst = `/index.php?page=dapi&s=tag&q=index` + `&json=1`;

const additional_tag = ``;
const rating[4] = [`general`, ] 

fetch(main_url + post_lst + api_key)
  .then(response => {
    if (!response.ok)
      console.log(`Fetch data failed!`);
    return response.json();
  })
  .then(data => {
    
  })
