const hendleCatagory =async () =>{
    const res = await fetch(' https://openapi.programming-hero.com/api/videos/categories');
    const data =await res.json();

    const tabcontainer = document.getElementById('tab-container');

    data.data.forEach((catagory) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick ="hendleLoadTube('${catagory.category_id}')" class="btn rounded">${catagory.category}</button>
        `;
        tabcontainer.appendChild(div);
        
    });




    console.log(data.data)
}



const hendleLoadTube = async (catagoryId) =>{
  console.log(catagoryId);
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catagoryId}`);
    const data = await res.json();

    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent ="";
   const drawingcontainer =document.getElementById('drawing-container');
   drawingcontainer.textContent="";
    if(data.data.length === 0){
      drawingcontainer.innerHTML = `
      <div class="text-center">
      <img class="w-[140px] mx-auto" src="../image/Icon.png" alt="">
      <p class="text-black text-4xl font-bold">Oops!! Sorry, There is no <br> content here</p>
      </div>
      `
    }else{
      data.data.forEach((tube)=>{
        console.log(tube);
        const div = document.createElement('div');
        div.innerHTML=`
        <div  class="card w-96 bg-base-100 shadow-xl">
        <figure><img class="w-[312px] h-[200px]" src="${tube.thumbnail}" alt="Shoes" /></figure>
        
        
        <div class="card-body">
          <div class=" flex gap-4 mt-8">
            <div>
              <img class="w-14 h-14 rounded-full" src="${tube?.authors?.[0]?.profile_picture}" alt="">  
            </div>
            <div>
              <h4 class="text-black font-bold">${tube.title}</h4>
              <div class="flex">
              <div>
              <h4>${tube?.authors?.[0]?.profile_name}</h4>
              <p><span id="views">${tube.others.views} </span>views</p>  
              </div>
              <div>
                  ${tube.authors[0]?.verified ? `<img src="../image/fi_10629607.png" alt="">` : ""}
                  
              </div>
          </div>
            </div>
          </div>
          
        </div>
      </div>
        `; 
        cardContainer.appendChild(div);
        

     })



    }

    
    

    


    // console.log(data.data)

}



hendleLoadTube("1000")
hendleCatagory();

