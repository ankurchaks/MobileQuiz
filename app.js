
AppInitialize()
function AppInitialize(){
    document.getElementById('Ques').style.display='none';
    document.getElementById('Option1').style.display='none';
    document.getElementById('Option2').style.display='none';
    document.getElementById('Option3').style.display='none';
    document.getElementById('Option4').style.display='none';
    document.getElementById('Announcement').style.display='none';
    document.getElementById('QuesNo').style.display='none';
    document.getElementById('Ans').style.display='none';
    document.getElementById('BtnPrevious').style.display='none';

}
async function GetData(Quescnt){
    const Ques=await fetch('Questions.csv');
    const data=await Ques.text();
    console.log(data);

    const myTable=data.split('\n').slice(1);
    const row=myTable[Quescnt];
    const columns=row.split(',');
    document.getElementById('Ques').textContent=columns[1];

    document.getElementById('Option1').textContent=columns[2];
    document.getElementById('Option2').textContent=columns[3];
    document.getElementById('Option3').textContent=columns[4];
    document.getElementById('Option4').textContent=columns[5];
    document.getElementById('Ans').textContent=columns[6];
    const cnt=parseInt(document.getElementById('QuesNo').textContent)
    if (cnt==0) {
        document.getElementById('BtnPrevious').style.display='none';
    } else{
        document.getElementById('BtnPrevious').style.display='block';
    };
    if (cnt==myTable.length-2) {
        document.getElementById('BtnNext').style.display='none';
    } else{
        document.getElementById('BtnNext').style.display='block';
    }
 }

 //***Reset Screen***
 function ResetScreen(){
    //alert('Next Question');
    document.getElementById('Intro').style.display='none';
    document.getElementById('secondCaption').style.display='none';
    document.getElementById('inputDefault').style.display='none';
    document.getElementById('Ques').style.display='block';
    document.getElementById('Option1').style.display='block';
    document.getElementById('Option2').style.display='block';
    document.getElementById('Option3').style.display='block';
    document.getElementById('Option4').style.display='block';
    document.getElementById('Option1').className="btn btn-primary btn-sm btn-block";
    document.getElementById('Option2').className="btn btn-primary btn-sm btn-block";
    document.getElementById('Option3').className="btn btn-primary btn-sm btn-block";
    document.getElementById('Option4').className="btn btn-primary btn-sm btn-block";

    document.getElementById('Announcement').style.display='none';
    document.getElementById('QuesNo').style.display='none';
    document.getElementById('Ans').style.display='none';
}

document.getElementById('BtnNext').addEventListener('click',callNextQuestion);

function callNextQuestion(){
    var myName=document.getElementById("inputDefault").value
    if (myName.trim()=="") {
        //alert('Please enter youe name to proceed.')
        var pos = myName.indexOf(" ");
        if (pos<11) {
            document.getElementById("inputDefault").value=myName.slice(1,pos);
        } else {
            document.getElementById("inputDefault").value=myName.slice(1,10);
        }
        document.getElementById('Announcement').style.display='Block';
        document.getElementById('Announcement').style.color='#C62828';
        document.getElementById('Announcement').textContent='Please enter your name to proceed.';
    }else{
        ResetScreen();
        const cnt=parseInt(document.getElementById('QuesNo').textContent)+1;
        GetData(cnt);
        document.getElementById('QuesNo').textContent=cnt;
    }

}

document.getElementById('BtnPrevious').addEventListener('click',callPreviousQuestion);

function callPreviousQuestion(){

    ResetScreen();
    const cnt=parseInt(document.getElementById('QuesNo').textContent)-1;
    GetData(cnt);
    document.getElementById('QuesNo').textContent=cnt;
}

document.getElementById('Option1').addEventListener('click',callCheckOption1);
document.getElementById('Option2').addEventListener('click',callCheckOption2);
document.getElementById('Option3').addEventListener('click',callCheckOption3);
document.getElementById('Option4').addEventListener('click',callCheckOption4);

function callCheckOption1(){

    var rightAns=document.getElementById('Ans').textContent;
    var myAns=document.getElementById('Option1').innerHTML;
    document.getElementById('Announcement').style.display='Block';
    if (rightAns.trim()==myAns.trim()) {
        var myName=document.getElementById("inputDefault").value
        document.getElementById('Announcement').textContent='That\'s correct, '+ myName ;
        document.getElementById('Announcement').style.color='green';
        document.getElementById('Option1').className="form-control is-valid btn-sm"
       // document.getElementById('Option1').className="btn btn-success btn-sm btn-block"
    } else{
        var myName=document.getElementById("inputDefault").value
        document.getElementById('Announcement').textContent='O '+myName+'! you missed it. Please try again';
        document.getElementById('Announcement').style.color='red';
        document.getElementById('Option1').className="form-control is-invalid btn-sm"
    }
}

function callCheckOption2(){
    var rightAns=document.getElementById('Ans').textContent;
    var myAns=document.getElementById('Option2').innerHTML;
    var myName=document.getElementById("inputDefault").value
    document.getElementById('Announcement').style.display='Block';
    if (rightAns.trim()==myAns.trim()) {
        document.getElementById('Announcement').textContent='Great '+myName+'! you are a genius';
        document.getElementById('Announcement').style.color='green';
        document.getElementById('Option2').className="form-control is-valid btn-sm"
    } else{
        var myName=document.getElementById("inputDefault").value
        document.getElementById('Announcement').textContent='O '+myName+'! you missed it. Please try again';
        document.getElementById('Announcement').style.color='red';
        document.getElementById('Option2').className="form-control is-invalid btn-sm"
    }
}

function callCheckOption3(){
    var rightAns=document.getElementById('Ans').textContent;
    var myAns=document.getElementById('Option3').innerHTML;
    var myName=document.getElementById("inputDefault").value
    document.getElementById('Announcement').style.display='Block';
    if (rightAns.trim()==myAns.trim()) {
        document.getElementById('Announcement').textContent='Super '+myName+'! you have got it right';
        document.getElementById('Announcement').style.color='green';
        document.getElementById('Option3').className="form-control is-valid btn-sm"
    } else{
        var myName=document.getElementById("inputDefault").value
        document.getElementById('Announcement').textContent='Sorry '+myName+' .That\'s not correct';
        document.getElementById('Announcement').style.color='red';
        document.getElementById('Option3').className="form-control is-invalid btn-sm"
    }
}

function callCheckOption4(){
    var rightAns=document.getElementById('Ans').textContent;
    var myAns=document.getElementById('Option4').innerHTML;
    var myName=document.getElementById("inputDefault").value
    document.getElementById('Announcement').style.display='Block';
    if (rightAns.trim()==myAns.trim()) {
        document.getElementById('Announcement').textContent='Wow '+myName+'! you have got it right';
        document.getElementById('Announcement').style.color='green';
        document.getElementById('Option4').className="form-control is-valid btn-sm"
    } else{
        document.getElementById('Announcement').textContent='Sorry, that\'s not correct. Please try again';
        document.getElementById('Announcement').style.color='red';
        document.getElementById('Option4').className="form-control is-invalid btn-sm"
    }
}
