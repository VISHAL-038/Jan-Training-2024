
let crr = [11, 0, 37, 12, 0, 7];
let brr = 0;

for (let i = 0; i < crr.length; i++) {
    if (crr[i] !== 0) {
        crr[brr] = crr[i];
        brr++;
    }
}
for (let i = brr; i < crr.length; i++) {
    crr[i] = 0;
}

console.log(crr);



console.log("second way");
//========================================================
let i,j;
let arr=[11,0,37,12,0,7];
console.log(arr);
for(i =0; i<arr.length;i++){
    if(arr[i]==0){
        let c=0;
        for(j=i+1;j<arr.length;j++){
            if(arr[j]!=0){
                c++;
                break;
            }
        }
        if(c!=0){
            arr[i]=arr[j];
            arr[j]=0
        }        
    }  
}
console.log("after sorting");
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//=======================================================


