// checking the option that user selected for hte form 
let startedButton =document.getElementsByClassName('start')[0]//button for the start

var myOpt =[];// a blank array where user`s options will be stored
startedButton.addEventListener('click'
 ,() => {

        myOpt.length=0;
 

    for(i=1;i<=8;i++)
    {
        if(document.getElementById(`inlineCheckbox${i}`).checked == true)
        {
            myOpt.push(document.getElementById(`inlineCheckbox${i}`).value)//in that blank aaray we stored the user`s options
        }

    }
 
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

    document.getElementsByClassName('NTi')[0].style.display="none";
    document.getElementsByClassName('buttonpreview')[0].style.display="none";
    document.getElementsByClassName('formopt')[0].style.display="none";
    document.getElementsByClassName('nextbtn')[0].style.display="block";
    document.getElementsByClassName('title')[0].style.display="block";

    document.getElementsByClassName('title')[0].innerHTML ="";

    for(i=0;i<myOpt.length;i++)
    {
        console.log(myOpt);
    }




})

//for backbutton in preview buttons page
document.getElementsByClassName('backbtns')[0].addEventListener('click',()=>{

    document.getElementsByClassName('NTi')[0].style.display="block";
    document.getElementsByClassName('buttonpreview')[0].style.display="block";
    document.getElementsByClassName('formopt')[0].style.display="none";
    document.getElementsByClassName('nextbtn')[0].style.display="none";
    document.getElementsByClassName('title')[0].style.display="none";



})


