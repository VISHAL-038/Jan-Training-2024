let arr =[13,432,3,43,10,32];
let largest=arr[0];
if(arr.length<2){
    console.log("array ahould have atleast  2 numbers");
}
for(let i=0;i<=arr.length;i++)
{
    if(arr[i]>largest){
        largest=arr[i];
    }   
}
console.log(largest);

//second largest