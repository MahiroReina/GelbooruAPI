const main_url = `https://gelbooru.com`;

const post_lst = `/index.php?page=dapi&q=index` + `&json=1`;
const tag_lst = `/index.php?page=dapi&s=tag&q=index` + `&json=1`;

const additional_tag = ``;
const rating[4] = (general, 

fetch()
  .then(response => {
    if (!response.ok)
      console.log(`Fetch data failed!`);
    return response.json();
  })
  .then(data => {
    
  })
