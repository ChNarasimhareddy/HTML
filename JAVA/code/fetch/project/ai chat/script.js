const API_KEY="AIzaSyAmZGFQEj-XABfpQeKucvGOPpg3UmRfOVg";
async function fetchData()
{
   const input=document.getElementById('inp').value
   const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
    
      {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					contents: [
						{
							parts: [{ text:input }],
						},
					],
				}),
			},
    )
    console.log(res)
    const data= await res.json()
    console.log(data.candidates[0].content.parts[0].text)
    displayData(data.candidates[0].content.parts[0].text)

}
document.getElementById('btn').addEventListener('click',fetchData)
function displayData(v)
{
    const h3=document.createElement('h3')
    h3.textContent=v;
    document.getElementById('main').appendChild(h3)
}