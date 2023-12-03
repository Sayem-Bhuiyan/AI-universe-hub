const loadData = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    const data = await response.json();
    const aiData = data.data.tools;
    displayData(aiData);
}

const displayData = (aiData) => {
    console.log(aiData)
    const cardContainer = document.getElementById('cardContainer');
    aiData.forEach((data) => {
        const dataCard = document.createElement('div');
        dataCard.innerHTML = `

        <div class="card  bg-base-100 shadow-xl">
        <figure><img src="${data.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        
        `;
        cardContainer.appendChild(dataCard)
    })
}
loadData()