const num:string=prompt("Enter mobile number : ");
let dig:number=0;
let dash:number=0;
let res:number=0;
function validation(num:string)
{
    for(let i=0;i<num.length;i++)
    {
        if(num[i]>='0' && num[i]<='9')
        {
            dig=dig+1;
        }
        else if(num[i]=='-')
        {
            dash=dash+1
        }
        else
        {
            return 0;
        }
    }
    if((dig==10) &&(num.charAt(0)==='9' ||num.charAt(0)==='8' ||num.charAt(0)==='7' ))
    {
        return 1;
    }
    else if(num=="")
    {
        return -1;
    }
    else
    {
        return 0;
    }
}
console.log(validation(num));