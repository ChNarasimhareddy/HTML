function fetchData()
{
    fetch("https://randomuser.me/api")
     .then((res)=>res.json())
     .then((data)=>displayData())
     .catch((err)=>console.log(err))

}
fetchData();
function displayData(randomuser)
{
    const resultUser=user.results[0];
   const gender=document.createElement('h2')
   const name=document.createElement('h2')
   name.textContent=`${user.name.title} ${user.name.first} ${user.name.last}`;
   const email=document.createElement('p');
   email.textContent=`email:${user.email}`;
   const location=document.createElement('p');
   location.textContent=`location:${user.location.city}, ${user.location.country}`;
   const profilePic=document.createElement('img')
   profilePic.src=user.picture.large;
   profilePic.alt= 'userimage';
   document.getElementById('main').append(resultUser,gender,name,email,location,profilePic)
}


