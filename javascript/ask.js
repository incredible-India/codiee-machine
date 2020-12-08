//for tthe buttons to show the code and preview
document.getElementsByClassName('buttons')[0].innerHTML = `<button type="button" class="btn btn-info" onclick="showPreview()">Preview</button>
`
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
function showPreview()
{

  document.getElementsByClassName('preview')[0].innerHTML=""
  document.getElementsByClassName('btns')[0].innerHTML=""//latar we will insert the tags
  //this will hide the show options 
  document.getElementsByClassName('preview')[0].style.display ="block"
  document.getElementsByClassName('btns')[0].style.display ="block"//show the button of get the code and preview
  document.getElementsByTagName('form')[0].style.display="none" //form asking number of heading
  document.getElementsByClassName('askform')[0].style.display="none"//titles heading paragraph color and size
  document.getElementsByClassName('buttons')[0].style.display="none"//preview button
  document.getElementsByClassName('codebutton')[0].style.display="none"//button inside the copy code
  document.getElementsByClassName('gtcode')[0].style.display="none";//code to copy


  // document.getElementsByClassName('preview')[0].innerHTML = `<button type="button" class="btn btn-info" onclick='showAndHide()'> Edit </button>`
  // document.getElementsByClassName('preview')[0].innerHTML += `<button type="button" class="btn btn-dark" onclick='getTheCode()' style="margin-left:10px;"> Get The Code </button>`


  // for showing the preview 
    Array.from(document.getElementsByClassName('title')).forEach(insertIT)
    
    function insertIT(element,index)
    {
      
      
        document.getElementsByClassName('preview')[0].innerHTML +=`<${document.getElementsByClassName('size')[index].value} style = "color: ${document.getElementsByClassName('color')[index].value};">${element.value}</${document.getElementsByClassName('size')[index].value}>
        <p>${document.getElementsByClassName('para')[index].value}</p>
        `      
     
  
      
    }
    document.getElementsByClassName('btns')[0].innerHTML = `<button type="button" class="btn btn-info" onclick='showAndHide()'> Edit </button>`
    document.getElementsByClassName('btns')[0].innerHTML += `<button type="button" class="btn btn-dark" onclick='getTheCode()' style="margin-left:10px;"> Get The Code </button>`
    //  document.getElementsByClassName('btns')[0].innerHTML += `<button type="button" class="btn btn-dark" onclick='getTheCode()' style="margin-left:10px;"> Get The Code </button>`
    // document.getElementsByClassName('askform')[0].innerHTML =`<${document.getElementsByClassName('size')[0].value}> ${document.getElementsByClassName('title')[0].value}</${document.getElementsByClassName('size')[0].value}>
    
    // <p> ${document.getElementsByClassName('para')[0].value}</p>`

    
  
}

//this will toggle like whenever user will click preview ,preview will be shown and if user click again on 'edit' button it will show all the options filled by user 
function showAndHide()
 {
  document.getElementsByClassName('preview')[0].style.display="none";
  document.getElementsByClassName('btns')[0].style.display="none";
  document.getElementsByTagName('form')[0].style.display="flex";
  document.getElementsByClassName('askform')[0].style.display="block";
  document.getElementsByClassName('buttons')[0].style.display="block";
  document.getElementsByClassName('codebutton')[0].style.display="none"
  document.getElementsByClassName('gtcode')[0].style.display="none";
}

//now for the source code (when user will click on 'get the code')
function getTheCode()
{
  document.getElementsByClassName('preview')[0].style.display="none";//preview page
  document.getElementsByClassName('btns')[0].style.display="none";//button of show code nad preview
  document.getElementsByTagName('form')[0].style.display="none";//form asking number of headings
  document.getElementsByClassName('askform')[0].style.display="none";//color size and title
  document.getElementsByClassName('buttons')[0].style.display="none";//button of preview

  document.getElementsByClassName('gtcode')[0].style.display="block";//code to copy
  
  document.getElementsByClassName('codebutton')[0].innerHTML=""//for the buttons inside the code

  //final code 

  document.getElementsByClassName('language-html')[0].innerText =`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">

      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <title>Codiee Machine</title>

      </head>

      <body>

      ${document.getElementsByClassName('preview')[0].innerHTML}

      </body>

      </html>`

      document.getElementsByClassName('codebutton')[0].innerHTML =`<button type="button" class="btn btn-info" onclick="showPreview()"> Preview </button>`
      document.getElementsByClassName('codebutton')[0].innerHTML +=`<button type="button" class="btn btn-warning" onclick='showAndHide()' style="margin-left:10px;"> Edit </button>`

      document.getElementsByClassName('codebutton')[0].style.display="block"//after getting the code two option will be there

}