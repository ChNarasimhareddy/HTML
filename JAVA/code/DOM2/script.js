const gallantry_awards =[
    {
       name:"Vikram Batra",
       rank:"Captain",
       service:"Indian Army",
       award:"Param Vir Chakra (Posthumous)",
       imageLink:"https://static.toiimg.com/thumb/msid-70130456,width-400,resizemode-4/70130456.jpg",
       year:"1999",
    },
    {
       name:"MAJ SANDEEP UNNIKRISHNAN",
       rank:"MAJ",
       service:"Indian Army",
       award:"Ashoka Chakra (Posthumous)",
       imageLink:"https://pbs.twimg.com/media/FJ-KE6wVcAEsx98.jpg:large",
       year:" 26-01-2009",
    }


]
  function displayData()
  {
    gallantry_awards.forEach((v,i) =>
     {
       const gallantry_awardsDiv=document.createElement("div")
       const gallantry_awardsname=document.createElement("h1")
       gallantry_awardsname.textContent=v.name;
       const gallantry_awardsrank=document.createElement("h1")
       gallantry_awardsrank.textContent=v.rank;
       const gallantry_awardsservice=document.createElement("h2")
       gallantry_awardsservice.textContent=v.service;
       const gallantry_awardsaward=document.createElement("h2")
       gallantry_awardsaward.textContent=v.award;
       const gallantry_awardsyear=document.createElement("h2")
       gallantry_awardsyear.textContent=v.year;
       const gallantry_awardsimageLink=document.createElement("img")
       gallantry_awardsimageLink.src=v.imageLink;
       gallantry_awardsimageLink.alt="v.name";
       gallantry_awardsimageLink.height=200
       gallantry_awardsDiv.append(gallantry_awardsimageLink,gallantry_awardsname,gallantry_awardsrank,gallantry_awardsservice,gallantry_awardsaward,gallantry_awardsyear,)
       document.getElementById('main').append(gallantry_awardsDiv);
    })
  }
  displayData();





















//   name:"",
//        rank:"",
//        service:"",
//        award:"",
//        imageLink:"",
//        year:"",