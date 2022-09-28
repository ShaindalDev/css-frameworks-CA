export function createPost(createPost) {
    const template = document.querySelector("template#nft");
  
    if (template) {
      const item = template.content.cloneNode(true)
      
      const card = item.querySelector('.card');
      card.id = nft.id;
      card.dataset.price = nft.price;
      card.dataset.owner = nft.owner;
      if (nft.onSale) {
        card.dataset.sale = nft.onSale;
      }
      card.dataset.created = nft.createdDate;
  
      const img = item.querySelector('img');
      img.src = nft.src;
  
      const cardBody = item.querySelector(".card-body");
      cardBody.innerText = nft.collectionName;
  
      const a = item.querySelector("a");
      a.href = nft.url;
  
      return item
    }
  }