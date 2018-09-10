var countDiv = 0;
var countIss = 1;

//Создаем инпут
const inp = document.createElement ("textarea");
inp.setAttribute("id", "txt");
inp.setAttribute("placeholder", "Write your issues");
document.body.appendChild(inp);

//Создаем кнопку
const btn = document.createElement("BUTTON");
btn.setAttribute("type", "button");
btn.setAttribute("id", "AddBut");
const butAddtext = document.createTextNode("ADD ISSUES"); 
btn.appendChild(butAddtext); 
inp.appendChild(btn);
document.getElementById("AddBut").disabled = true;
document.body.appendChild(btn);

//Создаем таблицу
const table = document.createElement("table");
document.body.appendChild(table);
table.setAttribute("border", "collapse");
table.setAttribute("width", "100%");
table.setAttribute("height", "800px");
const tabName = document.createTextNode("Issues List:");
table.appendChild(tabName);
document.body.appendChild(table);

Issues = { 

  enabButAdd: function() { 
     btn.disabled = false;
  },
  
   disButAdd: function() { 
     btn.disabled = true;
  },
  
  delValTxArea: function() { 
  	var textartval = document.getElementById("txt");
 		textartval.value = "";
  },
  
	createIssue: function(text) { 
  	var div = document.createElement("div");
  	var divText = document.createTextNode(countIss++ + ". " + text);
  	div.setAttribute("style", "background-color: yellow;");
    div.setAttribute("id", "tx" + countDiv);
    countDiv++;
  	//содержит кнопку выполнено
  	var div1 = document.createElement("div");
    div1.setAttribute("id", "twoBut" + countDiv);
  	var butComp = document.createElement("button");
  	var butCompText = document.createTextNode("Complete");
    butComp.setAttribute("id", "btnC" + countDiv);
  	butComp.appendChild(butCompText);
  	//кнопку не выполнено
  	var butFailed = document.createElement("button");
  	var butFailedText = document.createTextNode("Failed");
    butFailed.setAttribute("id", "btnF" + countDiv);
    butFailed.appendChild(butFailedText);
  	div1.appendChild(butComp);
  	div1.appendChild(butFailed);
  	div.appendChild (divText);
  	div.appendChild (div1);
  	table.appendChild (div);
    Issues.disButAdd();
    Issues.delValTxArea();
    Issues.issuesComp();
    Issues.issuesFailed();
  },

  issuesComp: function() { 	
  	var findButCom = document.getElementById("btnC" + countDiv);
    var accesParBut = findButCom.parentNode;
    var accesParDiv = accesParBut.parentNode; 
    var findButFai = document.getElementById("btnF" + countDiv);
    findButCom.addEventListener ("click", function(event) {
  		findButCom.disabled = true;
    	findButFai.disabled = true;
      accesParDiv.style.background = "green";
  	});  
  },

  issuesFailed: function() {  
    var findButFai = document.getElementById("btnF" + countDiv);
    var accesParBut = findButFai.parentNode;
    var accesParDiv = accesParBut.parentNode;
    var findButCom = document.getElementById("btnC" + countDiv);
    findButFai.addEventListener ("click", function(event) {	
  		findButCom.disabled  = true;
    	findButFai.disabled = true;
      accesParDiv.style.background = "red";
  	});
  }, 
};

document.getElementById ("txt");
inp.addEventListener ("input", Issues.enabButAdd);

document.getElementById("AddBut");
btn.addEventListener("click", createTask);

function createTask() {
	text = document.getElementById("txt").value;
  Issues.createIssue(text);
}