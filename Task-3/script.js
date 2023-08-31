let string=""
let buttons=document.querySelectorAll(".btn");
Array.from(buttons).forEach((button)=>
{
    button.addEventListener('click',(e)=>
    {
        if (e.target.textContent === '=') {
            try {
                string = eval(string);
                document.querySelector("input").value=string;
            } catch (error) {
                document.querySelector("input").value="ERROR";
            }
        } else if (e.target.textContent === 'C') {
            string = "";
            document.querySelector("input").value=string;
        }
        else if(e.target.textContent=="<")
        {
            string=string.slice(0,-1);
            document.querySelector("input").value=string;


        } else {
            string += e.target.textContent;
            document.querySelector("input").value=string;
        }
    })
})
// if(e.target.textContent=='=')
// {
//     string=eval(string);
//     document.querySelector("input").value=string;
// }
// else if(e.target.textContent=='C')  
// {
//     string="";
//     document.querySelector("input").value=string;
// }
// else{
//     string=string+e.target.innerHTML;
//     document.querySelector("input").value=string;

// }