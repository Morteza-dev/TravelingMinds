var LastElm=document.getElementById('End');
var RefElm=document.getElementById('note');
//var idE=['0','1','2','3','4','5','6','7','8'];
function CreateElment(className)
{
    //debugger;
    var NewItem=document.createElement('div');
    var Childe=document.createElement('div');
    switch(className)
    {
        case 'Layout1':
            {
                NewItem.className='Layout1 div';
                break;
            }
        case 'Layout2':
            {
                NewItem.className='Layout2 div';
                break;
            }
        case 'Layout3':
            {
                NewItem.className='Layout3 div';
                break;
            }
    }
    Childe.className='close';
    Childe.onclick=function(){debugger; NewItem.remove();}
    NewItem.ondragover=function(event){event.preventDefault();}
    NewItem.ondrop=function(event,RefElm=this)
    {
        debugger;
    //try
    //{
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        var dataJson= JSON.parse(data);
        alert(dataJson.type);
        var Childe=document.createElement('div');
        Childe.className='closeTools';
        //console.log(RefElm);
        //debugger;
        if(Validator(RefElm,dataJson.size))
        {
            switch(dataJson.type)
            {
                case 'textarea':
                    {
                        var NewItem=document.createElement(dataJson.type);
                        NewItem.className=dataJson.type+" "+dataJson.size;
                        //NewItem.appendChild(Childe);
                        RefElm.appendChild(NewItem);
                        NewItem.ondblclick=function(){RemoveThis(this);}
                        //Childe.onclick=function(){debugger; NewItem.remove();}
                        break;
                    }
                case 'camera':
                    {
                        var NewItem=document.createElement('div');
                        var btn=document.createElement('button');
                        var inpt=document.createElement('input');
                        NewItem.className=dataJson.type+" "+dataJson.size;
                        btn.className='btn';
                        btn.innerHTML='Browse';
                        btn.onclick=function()
                        {
                            //alert(inpt.value);
                            inpt.click();
                        }
                        inpt.className='inputfile';
                        inpt.type='file';
                        inpt.onchange=function()
                        {
                            //alert(inpt.value);
                            var path=inpt.value;
                            alert(document.getElementById('Test').src);
                            document.getElementById('Test').src='E:\Yas%20Smart%20Group\Projects\TravelingMinds\TravelingMinds\Resources\R8.jpg';
                            alert(document.getElementById('Test').src);
                            
                            
                        }
                        NewItem.appendChild(inpt);
                        NewItem.appendChild(Childe);
                        NewItem.insertBefore(btn,inpt);
                        //NewItem.insertBefore(inpt,Childe);
                        RefElm.appendChild(NewItem);
                        Childe.ondblclick=function(){RemoveThis(NewItem);}
                        break;
                    }    
                case 'pic':
                    {
                        var NewItem=document.createElement('div');
                        var inpt=document.createElement('input');
                        NewItem.className=dataJson.type+" "+dataJson.size;
                        inpt.className='inputLink';
                        inpt.type='Text';
                        inpt.placeholder='Link ...';
                        inpt.onchange=function()
                        {
                            var img=document.createElement('img');
                            img.className='imglink';
                            NewItem.insertBefore(img,inpt);
                            img.src=inpt.value;
                            inpt.style.display='none';
                            img.ondblclick=function(){RemoveThis(this);}
                        }
                        NewItem.appendChild(inpt);
                       // NewItem.insertBefore(inpt,Childe);
                       NewItem.appendChild(Childe);
                        RefElm.appendChild(NewItem);
                        Childe.ondblclick=function(){RemoveThis(NewItem);}
                        //Childe.onclick=function(){debugger; NewItem.remove();}
                        break;
                    }    
            }
    
        }
        else
        {

        }
        //var NewItem=document.createElement(dataJson.type);
        //NewItem.className=dataJson.type+" "+dataJson.size;
        //RefElm.appendChild(NewItem);
   // }
    //catch
   // {
        //event.preventDefault();
        //alert('alert');
    //}
    }
    NewItem.appendChild(Childe);
    RefElm.insertBefore(NewItem,LastElm);
    /*NewItem.onclick=function()
    {
        debugger;
        alert('Test');
        var x=NewItem.innerHTML;
        document.getElementById('para').innerHTML=x;
    }*/
}


function RemoveThis(elm)
{
    elm.remove();
}


function drag(ev,NameElement,Size)
{
    debugger;
    var data={type:NameElement , size:Size};
    var dataString=JSON.stringify(data);
    ev.dataTransfer.setData('text',dataString);
}
function drop(ev,RefElm=this) {
    debugger;
    try
    {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        var dataJson= JSON.parse(data);
        alert(dataJson.type);
        var NewItem=document.createElement('textarea');
        NewItem.className=dataJson.type+" "+dataJson.size;
        RefElm.appendChild(NewItem);
    }
    catch
    {
        ev.preventDefault();
        alert('alert');
    }
  }
  function allowDrop(ev) 
  {
    ev.preventDefault();
  }
  function Validator(parent,size)
{
    debugger;
    console.log(parent);
    var p=parent;
    console.log(p);
    var q=p.querySelector("close");
    console.log(q);
    switch(size)
    {
        case 'size1':
            {
                if(p.getElementsByClassName("size3").length>0)
                    return false;
                else
                {
                    if(p.getElementsByClassName("size2").length==1)
                    {
                        if(p.getElementsByClassName("size1").length>0)
                        return false;
                        else
                        return true;
                    }
                    else if(p.getElementsByClassName("size2").length==0)
                    {
                        if(p.getElementsByClassName("size1").length>2)
                        return false;
                        else
                        return true;
                    }    
                }    
                break;
            }
        case 'size2':
            {
                if(p.getElementsByClassName("size3").length>0)
                    return false;
                else
                {
                    if(p.getElementsByClassName("size2").length>0)
                        return false;
                    else
                    {
                        if(p.getElementsByClassName("size1").length>1)
                            return false;
                            
                        else
                            return true;
                    }
                }    
                break;
            }
        case 'size3':
            {
                if(p.getElementsByClassName("size3").length>0)
                    return false;
                else
                {
                    if(p.getElementsByClassName("size2").length>0)
                        return false;
                    else
                    {
                        if(p.getElementsByClassName("size1").length>0)
                            return false;
                        else
                            return true;
                    }
                }
                break;
            }        
    }
}
function HideShowSidebar(elm)
{
    var dspl=document.getElementById('side').style.display;
    if(dspl==='none')
    {
        document.getElementById('side').style.display='block';
        document.getElementById('note').style.width='75%';
    }
    else
    {
        document.getElementById('side').style.display='none';
        document.getElementById('note').style.width='100%';
    }
}
