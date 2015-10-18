(function(){
	var num1, num2, yourOp="",exp="",
	expSplit, opsFlag=0, evalexp="",
	number=$('.num'), endExp=false,
	ops = $('.operator'),
	numberDisplay=$('#numDisplay'),
	cancelAll=$('.cancelAll'),
	cancelLast=$('.cancelLast');

	$(number).on('click', function(){
		opsFlag=0
		if(endExp){
			numberDisplay.text("");
			endExp=false;
		}
		var yourNumber = $(this).text();
		numberDisplay.append(yourNumber);
	});

	$(ops).on('click', function(){
		yourOp = $(this).text();
		numberDisplay.append(yourOp);
		opsFlag++;
		buildExp();	
	});

	$(cancelAll).on('click', function(){
		resetAll();
		numberDisplay.text("");
	});	

	$(cancelLast).on('click', function(){
		numberDisplay.text("");
	});	

	function buildExp(){
		num1=parseFloat(numberDisplay.text());
		if(endExp!==true){
			addOp(yourOp);
			numberDisplay.text(exp);
		}
		numberDisplay.text("");
		if(endExp && opsFlag===1){
			evalexp=evaluateExpression(exp)
			numberDisplay.text(evalexp);
			exp="";
      	}
      	if(endExp && opsFlag>1){
			numberDisplay.text(evalexp);
      	}
	}
	//}
function addOp(yourOp){
	switch(yourOp){
		case "+":
		if(opsFlag>1){
			exp =(exp.substring(0,exp.length-1))  ;
			exp+= yourOp ;
		}else{
			exp+= num1+yourOp ;
		}
		break;
		case "-":
		if(opsFlag>1){
			exp =(exp.substring(0,exp.length-1))  ;
			exp+= yourOp ;
		}else{
			exp+= num1+yourOp ;
		}
		break;
		case "X":
		if(opsFlag>1){
			exp =(exp.substring(0,exp.length-1))  ;
			exp+= yourOp ;
		}else{
			exp+= num1+yourOp ;
		}
		break;
		case "/":
		if(opsFlag>1){
			exp =(exp.substring(0,exp.length-1))  ;
			exp+= yourOp ;
		}else{
			exp+= num1+yourOp ;
		}
		break;
		case "+":
		if(opsFlag>1){
			exp =(exp.substring(0,exp.length-1))  ;
			exp+= yourOp ;
		}else{
			exp+= num1+yourOp ;
		}
		break;
		case "%":
		if(opsFlag>1){
			exp =(exp.substring(0,exp.length-1))  ;
			exp+= yourOp ;
		}else{
			exp+= num1+yourOp ;
		}
		break;
		case "=":
		if((opsFlag>1)&&(endExp!==true)){
			exp =(exp.substring(0,exp.length-1))  ;
			opsFlag=1;
		}else{
			exp+= num1 ;
		}
		
		endExp=true;
		break;
	}
}

function evaluateExpression(exp){
	var opArr=[], index=0, numArr=[]; 

	 		expSplit= exp.split('');
	 		console.log(expSplit);
		//go through array and seperate nums from ops	
	for (var c = 0; c < expSplit.length; c++) {
        if (isNaN(parseInt(expSplit[c])) && expSplit[c] !== ".") {
            opArr[index] = expSplit[c];
            index++;
            numArr[index] = "";
        } else {
        	if(numArr[index]==undefined)
        	numArr[index]="";
            numArr[index] += expSplit[c];
        }
    }
    console.log(numArr);
    console.log(opArr);

     // Calculate the expression
    exp = parseFloat(numArr[0]);
    for (var o = 0; o < opArr.length; o++) {
        var num = parseFloat(numArr[o + 1]);
        switch (opArr[o]) {
            case "+":
                exp += num;
                break;
            case "-":
                exp -= num;
                break;
            case "X":
                exp *= num;
                break;
            case "/":
                exp /= num;
                break;
            case "%":
				exp = exp / 100 *num;
				break;
        }
    }

    return exp;

}

function resetAll(){
	exp="";
	endExp=false;
}


})();