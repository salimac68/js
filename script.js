// qn:1
function prime(){
    var a=document.getElementById("q1");
    num1=document.getElementById("text1").value;
    var num=num1[0];
    var count=0;
    for(i=1; i<=num; i++){
        q=num%i;
        if(q==0){
            count+=1;
        }
    }
    if(count==2){
        a.innerHTML="prime number";
    }
    else{
        a.innerHTML="not a prime";
    }
    console.log(count);
   }

// qn:2
function frequent(){ 
    var x1=document.getElementById("text2").value;
    var x21=x1.length;
    var count21=0;
    var count22=0;
    var value2;
    for(var g=0;g<x21;g++){
        count21=0;
        for(var h=0; h<x21; h++){
                if (x1[g] == x1[h]){
                 count21++;
            }
        }
                if (count21>count22){
                  count22=count21; 
                  value2= x1[g];
                }
        }
        if(count22>=2){
            document.getElementById("q2").innerHTML="most frequent item"+value2+"is"+count22+"times";
        }
        else{
            document.getElementById("q2").innerHTML="no repeat";
        }
    }

// qn:3
function swaptext(){
    var c=document.getElementById("q3");
    var a=document.getElementById("text3").value;
    var output=[];

    regExp=/^[A-Z]/;
    lower=/^[a-z]/;

    for(var x=0;x<=a.length;x++){
        if(regExp.test(a[x])){
            output+=a[x].toLowerCase();
        }
        else{
            output+=a[x].toUpperCase();
        }
        c.innerHTML=output;
    }
}

// qn:4
function square(){
    var sum=0;
    numb2=document.getElementById("text4").value;
    for(var j=0;j<numb2.length;j++){
        sum=sum+Math.pow(numb2[j],2);
    }
    document.writeln(sum);
}

// qn:5
function odd_or_even(){
    var r=[];

    for(var q=1;q<=15;q++){
        if(q%2==0){
            r=q;
            console.log(q+"is even");
            document.write(r+"is even");
            document.write("<br>");
        }
        else{
            r=q;
            console.log(q+"is odd");
            document.write(r+"is odd");
            document.write("<br>");
        }
    }
}

// qn:6
function truncate(){
    var trun=document.getElementById("text6").value;
    var len=trun.length;

    trun=trun.substring(0,5);
    document.write(trun);
}

// qn:7
function findLarge(){
    var N1=document.getElementById("text7a").value;
    var N2=document.getElementById("text7b").value;
    var lar=Math.max(N1,N2);
    document.write(lar);
}

// qn:8
function alphabet(str){
    var arr=document.getElementById("text8").value;
    var arr=arr.split('').sort().join('');
    var tmp;
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                tmp=arr[i];
                arr[i]=arr[j];
                arr[j]=tmp;
            }
        }
    }
document.getElementById("q4").innerHTML=arr;
}

// qn:9
function show_pattern_string(){
    var j="JAVASCRIPT";
    var priN=[];
    for(var e=0;e<j.length;e++){
        priN+=j[e];
        document.write(priN);
        document.write("<br>");
    }
}

// qn:10
function pattern(){
    var a="****";
    var con=[];
    for(var f=0;f<a.length;f++){
        con+=a[f];
        document.write(con);
        document.write("<br>");
    }
}