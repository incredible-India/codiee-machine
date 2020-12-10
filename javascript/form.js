// checking the option that user selected for hte form 
let startedButton =document.getElementsByClassName('start')[0]//button for the start

var myOpt =[];// a blank array where user`s options will be stored
startedButton.addEventListener('click'
 ,() => {

        myOpt.length=0;
 

    for(i=1;i<=7;i++)
    {
        if(document.getElementById(`inlineCheckbox${i}`).checked == true)
        {
            myOpt.push(document.getElementById(`inlineCheckbox${i}`).value)//in that blank aaray we stored the user`s options
        }

    }
    document.getElementsByClassName('alert-danger')[0].style.display="none";
    showOPT(myOpt)//function for the further operations

})//click event

//////////////////////////////////////

// now the function asking for the number of widgets and their titles 

function showOPT(UserOPT){

    


    document.getElementsByClassName('NTi')[0].innerHTML =""//first we will  keep it blank

ShowHide();//show the elements and hide the elements accoding to thier uses....

// now  ask the user number and title of that widget 
for(i=0;i<UserOPT.length;i++)
{
    document.getElementsByClassName('NTi')[0].innerHTML  +=` <div class="row g-2">
    <div class="col-md">
      <div class="form-floating">
      <label for="floatingInputGrid${i}" style="margin-left:10px; margin-top: 5px ;"> Number of ${UserOPT[i]}</label>
        <input type="number" class="form-control numbers" id="floatingInputGrid${i}" placeholder="number">
        
      </div>
    </div>`
}


}

//for back button....
document.getElementsByClassName('backbtn')[0].addEventListener('click',()=>{
    document.getElementsByClassName('NTi')[0].style.display="none";
    document.getElementsByClassName('buttonpreview')[0].style.display="none";
    document.getElementsByClassName('formopt')[0].style.display="block";

})

// function which to be show nad hide 
function ShowHide(){

    document.getElementsByClassName('NTi')[0].style.display="block";
    document.getElementsByClassName('buttonpreview')[0].style.display="block";
    document.getElementsByClassName('formopt')[0].style.display="none";

}

//for the next button after that preview buttons will show
document.getElementsByClassName('next')[0].addEventListener('click',()=>{

 

    //for removing the alert danger box after ccliking on number box
    Array.from(document.getElementsByClassName('numbers')).forEach(element =>{
        element.addEventListener('click',()=>{
            element.style.border  ="1px solid skyblue"
            document.getElementsByClassName('alert-danger')[0].style.display="none";
        })
    })
    // cheking the validation that user wont input the 0 or negative or blank

    for(i=0;i<myOpt.length;i++)

    {
        // document.getElementById(`floatingInputGrid${i}`).value
        //for showing error in and message to user we used alert box here
        if(document.getElementById(`floatingInputGrid${i}`).value <= 0 )
        {
          
            
                document.getElementById(`floatingInputGrid${i}`).style.border ="1px solid red"

                document.getElementsByClassName('alert-danger')[0].innerText ="Number box Cannot be blank or Zero or neagtive or fractional ,please fill the postive non-zero integer or remove it by clicking back button"
               
                document.getElementsByClassName('alert-danger')[0].style.display="block"
                return ;
            
         
        
        }
         if(parseInt(document.getElementById(`floatingInputGrid${i}`).value) != document.getElementById(`floatingInputGrid${i}`).value )
         {
            document.getElementById(`floatingInputGrid${i}`).style.border ="1px solid red"

            document.getElementsByClassName('alert-danger')[0].innerText ="Number box Cannot be blank or Zero or neagtive or fractional ,please fill the postive non-zero integer or remove it by clicking back button"
           
            document.getElementsByClassName('alert-danger')[0].style.display="block"
            return ;
         }
       
          
        
    }
//if there is no error or 0 input negative input then it will execute
    document.getElementsByClassName('NTi')[0].style.display="none";
    document.getElementsByClassName('buttonpreview')[0].style.display="none";
    document.getElementsByClassName('formopt')[0].style.display="none";
    document.getElementsByClassName('nextbtn')[0].style.display="block";
    document.getElementsByClassName('title')[0].style.display="block";

    document.getElementsByClassName('title')[0].innerHTML ="";

     askAndShowPreview();//this will ask the title of form widget and the give  the options for the preview


   




})

//for backbutton in preview buttons page
document.getElementsByClassName('backbtns')[0].addEventListener('click',()=>{

   
    document.getElementsByClassName('NTi')[0].style.display="block";
    document.getElementsByClassName('buttonpreview')[0].style.display="block";
    document.getElementsByClassName('formopt')[0].style.display="none";
    document.getElementsByClassName('nextbtn')[0].style.display="none";
    document.getElementsByClassName('title')[0].style.display="none";



})


//for asking the title and showing option for the preview 
function askAndShowPreview() {
    
   
    for (i=0;i<myOpt.length;i++)
    {
       
        for(let j=0 ;j < document.getElementById(`floatingInputGrid${i}`).value;j++)
        {
            document.getElementsByClassName('title')[0].innerHTML +=`<div class="input-group mb-3">
            <span class="input-group-text " id="basic-addon3${j}${i}">Title of ${j+1}'s ${myOpt[i]}  </span>
            <input type="text" class="form-control insertit" id="basic-url${j}${i}" aria-describedby="basic-addon3">
          </div>`;
        }
    }

}


// now its time for the showing the preview 
document.getElementsByClassName('SHWpreview')[0].addEventListener('click',()=>{

    document.getElementsByClassName('NTi')[0].style.display="none";
    document.getElementsByClassName('buttonpreview')[0].style.display="none";
    document.getElementsByClassName('formopt')[0].style.display="none";
    document.getElementsByClassName('nextbtn')[0].style.display="none";
    document.getElementsByClassName('title')[0].style.display="none";
    document.getElementsByClassName('previews')[0].style.display="block"
    document.getElementsByClassName('previewBTN')[0].style.display="block"

    finalPreview();//it will show the finally preview of user forms



    
})

//for the back button in the preview page
document.getElementsByClassName('backbtni')[0].addEventListener('click',()=>{

    document.getElementsByClassName('NTi')[0].style.display="none";
    document.getElementsByClassName('buttonpreview')[0].style.display="none";
    document.getElementsByClassName('formopt')[0].style.display="none";
    document.getElementsByClassName('nextbtn')[0].style.display="block";
    document.getElementsByClassName('title')[0].style.display="block";
    document.getElementsByClassName('previews')[0].style.display="none"
    document.getElementsByClassName('previewBTN')[0].style.display="none"

})

//function for showing the preview

    function finalPreview() {
       
        let titleName ="";

        if(document.getElementsByClassName('frmtitle')[0].value == "")
        {
          titleName ="Coddie Machine"
        }else
        {
        titleName =document.getElementsByClassName('frmtitle')[0].value
            }//cheking either the user filled up the title of the form or not , if not by default it will codiee machine


        document.getElementsByClassName('previews')[0].innerHTML=""//initially we will keep it blank

        document.getElementsByClassName('previews')[0].innerHTML =`<form class="myform">
        <h1>${titleName} </h1> </form>`


        document.getElementsByClassName('myform')[0].innerHTML ="";//this class is from the created form tag 

        let numberofloop =0;

        for(i =0 ; i<myOpt.length ; i++ )
        {
           
                for(let k=0; k<document.getElementsByClassName('numbers')[i].value;k++)
                {
                   
                    document.getElementsByClassName('myform')[0].innerHTML +=`
                    <label>${document.getElementsByClassName('insertit')[numberofloop].value}</label>
                    <input type="${myOpt[i]}" class="form-control">
                    `
                    numberofloop++;
                }
              
        
       }

    //    document.getElementsByClassName('previews')[0].innerHTML += document.getElementsByClassName('myform')[0].innerHTML
      

    }