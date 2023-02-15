

function savetocrudstorage(event){
    event.preventDefault();
    let userDetails = {
        Name: document.getElementById("name").value,
        Email: document.getElementById("emailID").value,
        Number: document.getElementById("phone").value
    };
    console.log(userDetails)
    axios
    .post("http://localhost:3000/post",userDetails
    )
    .then((response)=> {
        if(response.status==201){
            alert("Your Registration has been succesfully Done")
        }
        document.getElementById("name").value = ''
        document.getElementById("emailID").value = ''
        document.getElementById("phone").value = ''
    })
    .catch((err)=>{
        console.log(err)
    })
}

window.addEventListener('DOMContentLoaded',() =>{
    axios.get("http://localhost:3000/get")
    .then(res => {
      for(let i =0; i<res.data.data.length; i++){
        showNewUseronScreen(res.data.data[i].name,res.data.data[i].emailid, res.data.data[i].number)
  
      }
    })
    .catch(err => {
      console.log(err);
    })
  })
  
    function showNewUseronScreen(name, emailid, number) {
      const d = document.getElementById("ul");
      const li = `<li id="${emailid}"> ${name} - ${emailid} - ${number} 
        <button   onclick = "deleteUser('${emailid}')"> Delete </button> 
         </li>`;
    
      d.innerHTML = d.innerHTML + li;
    }
    
    
    function deleteUser(emailid) {
      console.log(emailid);
      axios
        .delete(
          `http://localhost:3000/delete/${emailid}`
        )
        .then((response) => {
          //removeUserfromScreen(emailid);
          console.log(response);
        })
        .catch(error => {
      console.log(error);
        })
    }
    


