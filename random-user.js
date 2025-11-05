const btnEle=document.querySelector('.btn');

function getUser(){
    fetch('https://randomuser.me/api/')
    .then((response)=>{
       if(!response.ok){
        throw new Error('Request Failed')
       }
       
       return response.json()
    
    })
    .then((data)=>{
        displayUser(data.results[0])
})
.catch((error)=>{
    document.querySelector('.flex-adding').innerHTML=`
    <p class="error-mess">${error}</p>
    `
})

}

function displayUser(user){
    const flexAdding=document.querySelector('.flex-adding')
    if(user.gender==='female'){
        document.body.style.backgroundColor="purple";
    }else{
        document.body.style.backgroundColor='steelblue'
    }

    flexAdding.innerHTML=`
     <div class="flex-container">
      <div class="image">
      <img src=${user.picture.large} class="pic">
      </div>
      <div class="details">
       <p><span class="det">Name: </span>${user.name.first} ${user.name.last}</p>
       <p><span class="det">Email: </span>${user.email}</p>
       <p><span class="det">Phone: </span>${user.phone}</p>
       <p><span class="det">Location: </span>${user.location.city}</p>
       <p><span class="det">Age: </span>${user.registered.age}</p>
      </div>
     </div>
    
    
    `
}

 btnEle.addEventListener('click',getUser);
//document.addEventListener('DOMContentLoaded',getUser)
getUser();




