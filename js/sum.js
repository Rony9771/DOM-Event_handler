console.log('Hello');

document.getElementById('blue-btn').addEventListener('click',function(){
  document.body.style.backgroundColor ='blue';
})

function makegold (){
  document.body.style.backgroundColor = 'gold';
}
{/* <h1 id="magic">Hello Nabil</h1>
<button onclick="magicBtn()">Ekri Bikri Shikri</button> */}

function magicBtn (){
  const magicButton =document.getElementById('magic');
  magicButton.innerText = 'Nabil Bokchod';
  }

  //<!-- option 2: recap -->
  // <h1>See changes Below</h1>
  //   <p id="input-text-display">Default Input text</p>
  //   <input id="input-field" type="text">
  //   <button id="btn-update">Update</button>
  
  document.getElementById('btn-update').addEventListener('click', function(){
      const inputField = document.getElementById('input-field');
      const inputText = inputField.value;

      const p = document.getElementById('input-text-display');
      p.innerText = inputText;
      inputField.value = '';
  })
