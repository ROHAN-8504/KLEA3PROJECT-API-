async function getfacts(){
   let response =await fetch('https://meowfacts.herokuapp.com/');
  let finaldata=await response.json()
   document.getElementById('box').innerText=finaldata.data[0];
   return;
}