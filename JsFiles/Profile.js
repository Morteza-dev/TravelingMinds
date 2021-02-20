var pos=0;
function TtoR(element)
{
    debugger;
    var parent = element.parentElement;
    var elm=parent.getElementsByClassName('Popular');
    //var elm=document.getElementById('Popular');
    //var RB=document.getElementById('RB');
    //var LB=document.getElementById('LB');
    elm[0].scrollLeft+=310;
    pos+=910;
    //RB.style.right=pos+'px';
    //LB.style.left=pos+'px';
}

function TtoL(element)
{
    debugger;
    var parent = element.parentElement;
    var elm=parent.getElementsByClassName('Popular');
    //var elm=document.getElementById('Popular');
    //var RB=document.getElementById('RB');
    //var LB=document.getElementById('LB');
    elm[0].scrollLeft-=310;
    pos-=310;
  //  RB.style.right=pos+'px';
    //LB.style.left=pos+'px';
}
function load(page)
{
    function none()
    {
        document.getElementById('suggestion').style.display='none';
        document.getElementById('Posts').style.display='none';
        document.getElementById('Following').style.display='none';
        document.getElementById('Follower').style.display='none';
    }
    none();
    document.getElementById(page).style.display='block';
}
function Refresh()
{
    debugger;
    
}