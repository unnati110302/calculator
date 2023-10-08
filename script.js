document.addEventListener("DOMContentLoaded", function(){

    const inp = document.getElementById("enter");
    const clearInp = document.getElementById("clr1");
    const answer = document.getElementById("ans");
    const clear = document.getElementById("clr2");
    const addition = document.getElementById("add");
    const subtraction = document.getElementById("sub");
    const multiplication = document.getElementById("mul");
    const division = document.getElementById("divide");

    answer.value = 0;

    clearInp.addEventListener("click", function(){
        inp.value = "";
    });

    clear.addEventListener("click", function(){
        inp.value = "";
        answer.value = 0;
    });

    addition.addEventListener("click", function(){
        if(inp.value!=""){
            const sum = parseFloat(answer.value) + parseFloat(inp.value);
            answer.value = sum;
        }
    })

    multiplication.addEventListener("click", function(){
        if(inp.value!=""){
            const pro = parseFloat(answer.value) * parseFloat(inp.value);
            answer.value = pro;
        }
    })

    subtraction.addEventListener("click", function(){
        if(inp.value!=""){
            const diff = parseFloat(answer.value) - parseFloat(inp.value);
            answer.value = diff;
        }
    })

    division.addEventListener("click", function(){
        if(inp.value!=""){
            const quo = parseFloat(answer.value) / parseFloat(inp.value);
            answer.value = quo;
        }
    })

});

