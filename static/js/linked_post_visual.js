let postForm = document.querySelector('form')

postForm.addEventListener('submit', (event)=>{
  event.preventDefault()
  
  let fileInput = document.getElementById('postImg')
  // console.log(event.target)
  const selectedFile = fileInput.files[0];

  console.log(selectedFile, fileInput)
})