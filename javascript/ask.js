//for tthe buttons to show the code and preview
document.getElementsByClassName('buttons')[0].innerHTML = `<button type="button" class="btn btn-primary">See Code</button>
<button type="button" class="btn btn-info" onclick="showPreview()">Preview</button>`
///////////////////////////////////////////////////////

// for the asking number of the block in code 
document.getElementById('showopt').addEventListener("click", (event) => {
  let numberOfHeading = document.getElementById('ask')
  if (numberOfHeading.value == parseInt(numberOfHeading.value)) {
    showall(numberOfHeading.value)

  } else {
    document.getElementsByClassName('alert-danger')[0].innerText = "Fraction Numers and Zero are not allowed, Please Insert integer ..."
    document.getElementsByClassName('alert-danger')[0].style.display = "block"

  }

  //for hiding the alert box.......
  document.getElementById('ask').addEventListener('focus', () => {
    document.getElementsByClassName('alert-danger')[0].style.display = "none"
  })
})

// now we will show the usert to fill the title and and the paragraphs

function showall(param) {
  var showoptions = document.getElementsByClassName('askform')[0]

  showoptions.innerHTML = ""
  for (var i = 0; i < param; i++) {
    showoptions.innerHTML += `<hr>

        <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationDefault03" style="background-color:#D9ECC7; width:100%">Title ${i + 1}</label>
              <input type="text" class="form-control title" id="validationDefault0${i + 1}" required >
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationDefault04" style="background-color:#D7EDE2; width:100%">Size</label>
              <select class="custom-select size" id="validationDefault00${i + 1}" required>
                <!-- <option selected disabled value="">Choose...</option> -->
                <option>h1</option>
                <option>h2</option>
                <option>h3</option>
                <option>h4</option>
                <option>h5</option>
                <option>h6</option>
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationDefault05" style="background-color:#CCFBFF; width:100%">color</label>
              <input type="text" class="form-control color" id="validationDefaul00${i + 1}1" required placeholder="eg : red or #D9ECC7">
            </div>
          </div>

          <div class="input-group">
  <span class="input-group-text">${i + 1}'s Paragraph</span>
  <textarea class="form-control para" aria-label="With textarea"></textarea>
</div>
         

        `

  }
  if (param > 0) {
    document.getElementsByClassName('buttons')[0].style.display = "block"


  } else {
    
    document.getElementsByClassName('buttons')[0].style.display = "none"

  }
}

///options ends here now code for the preview and  see code

// for the preview code starts from here 
function showPreview(){
  //this will hide the show options 
  document.getElementsByClassName('preview')[0].style.display ="block"
  document.getElementsByTagName('form')[0].style.display="none"
  document.getElementsByClassName('askform')[0].style.display="none"
  document.getElementsByClassName('buttons')[0].style.display="none"


  document.getElementsByClassName('preview')[0].innerHTML = `<button type="button" class="btn btn-info" onclick='showAndHide()'> Edit </button>`

  function showAndHide() {
    document.getElementsByClassName('preview')[0].style.display="none"
    document.getElementsByTagName('form')[0].style.display="block"
    document.getElementsByClassName('askform')[0].style.display="block"
    document.getElementsByClassName('askform')[0].style.display="block"
  }
  // for showing the preview 
    Array.from(document.getElementsByClassName('title')).forEach(insertIT)
    
    function insertIT(element,index)
    {
      
      
        document.getElementsByClassName('preview')[0].innerHTML +=`<${document.getElementsByClassName('size')[index].value} style = "color: ${document.getElementsByClassName('color')[index].value};">${element.value}</${document.getElementsByClassName('size')[index].value}>
        <p>${document.getElementsByClassName('para')[index].value}</p>
        <br>`      
     
  
      
    }
    // document.getElementsByClassName('askform')[0].innerHTML =`<${document.getElementsByClassName('size')[0].value}> ${document.getElementsByClassName('title')[0].value}</${document.getElementsByClassName('size')[0].value}>
    
    // <p> ${document.getElementsByClassName('para')[0].value}</p>`

    
  
}