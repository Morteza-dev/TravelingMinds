function ShowSignin()
{
    var body=document.getElementsByTagName('body');
    body[0].style.overflowY='hidden';
    var page=document.getElementById('SigninPage');
    page.style.visibility='visible';
    page.style.overflow='auto';

}
function HideForm()
{
    var body=document.getElementsByTagName('body');
    body[0].style.overflowY='visible'
    var page=document.getElementById('SigninPage');
    page.style.visibility='hidden';
}
function showhide()
{
    var inpt = document.getElementById('pass');
    var img = document.getElementById('imgHS');
    if(inpt.type==='password')
    {
        inpt.type='text';
        img.src='../Resources/icons8-hide-24.png';
    }
    else
    {
        inpt.type='password';
        img.src='../Resources/icons8-eye-24.png';
    }
}