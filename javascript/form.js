// checking the option that user selected for hte form 
let startedButton =document.getElementsByClassName('start')[0]//button for the start

startedButton.addEventListener('click'
 ,() => {

    var myOpt =[];// a blank array where user`s options will be stored

    for(i=1;i<=8;i++)
    {
        if(document.getElementById(`inlineCheckbox${i}`).checked == true)
        {
            myOpt.push(i)//in that blank aaray we stored the user`s options
        }

    }
 
    showOPT(myOpt)//function for the further operations

})//click event

//////////////////////////////////////

// now the function asking for the number of widgets and their titles 

function showOPT(UserOPT){

ShowHide();//show the elements and hide the elements accoding to thier uses....


}

// function which to be show nad hide 
function ShowHide(){

    document.getElementsByClassName('NTi')[0].style.display="block";
    document.getElementsByClassName('buttonpreview')[0].style.display="block";
    document.getElementsByClassName('formopt')[0].style.display="none";

}