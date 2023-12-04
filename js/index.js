const loadData = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/ai/tools`
  );
  const data = await response.json();
  const aiData = data.data.tools;
  displayData(aiData);
  displayFeaturesList(aiData);
};

const displayData = (aiData) => {
  const cardContainer = document.getElementById("cardContainer");
  console.log(aiData);
  aiData.forEach((data) => {
    const dataCard = document.createElement("div");

    // console.log(featureList)
    dataCard.innerHTML = `

        <div class="card p-8  bg-base-100 shadow-xl space-y-5">
        <figure><img src="${data.image}" alt="Shoes" /></figure>
        <div class="">
          <h2 class="text-2xl font-bold">Feature</h2>
          
          <ul id="feature-list" class="space-y-5">
            <li>1. ${data.features[0]}
            <li>2. ${data.features[1]}
            <li>3. ${data.features[2]}
          </ul>

          <div>
            <h2 class="text-2xl font-bold mt-10">${data.name}</h2>
            <div class="flex justify-between">
              <div class="flex gap-4 item-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
                <p class="mt-5">${data.published_in}</p>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#ff0000c7]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>

          </div>

            </div>
          </div>
          
        </div>
      </div>
        
        `;
    cardContainer.appendChild(dataCard);
  });

  // showFeatureList(featureList)
};

const displayFeaturesList = (arr) => {
  for (const item of arr) {
    const itemArr = item.features;
    console.log(itemArr);
    showFeatureList(itemArr);
  }
};

const showFeatureList = (arr) => {
  const featureList = document.getElementById("feature-list");
  const count = featureList.childElementCount;
  for (let item of arr) {
    const li = document.createElement("li");
    li.innerText = `${count + 1}. ${item}`;
    // featureList.appendChild(li)
    console.log(item);
  }
};

loadData();
