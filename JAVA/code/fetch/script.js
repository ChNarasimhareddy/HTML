function fetchData()
{
    fetch("https://randomuser.me/api")
     .then((res)=>res.json())
     .then((data)=>displayData())
     .catch((err)=>console.log(err))

}
fetchData();
function displayData(persons)
{
    const maindiv=document.getElementById('main')
    maindiv.textContent=''
   const persons=persons.results(0)

   const image=document.createElement('img')
   image.src=person.picture.large

   const dob=document.createElement('p')
   dob.textContent=`Date Of Birth: ${date(person.dob.date).toDateString()}`

   const gender=document.createElement('p')
   gender.textContent=person.gender

   const Email=document.createElement('p')
   Email.textContent=`email:${person.Email}`

   const ages=document.createElement('p')
   ages.textContent=`Age:${person.dob.age}`
   document.getElementById('main').append(image,dob,gender,Email,ages)
}


