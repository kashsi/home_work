
/* BOX ********************************** */
var elementBox = document.createElement('div');
elementBox.className = "elemBox";
elementBox.style.marginRight = "auto";
elementBox.style.marginLeft = "auto";
elementBox.style.marginTop = "30px";
elementBox.style.marginBottom = "30px";
elementBox.style.width = "600px";
elementBox.style.height = "620px";
elementBox.style.border = "2px solid blue";
document.body.appendChild(elementBox);


/* HEADER ********************************** */
var elementHeader = document.createElement('div');
elementHeader.className = "header";
elementHeader.innerHTML = "<h2>Тест по программированию</h2>";
elementHeader.style.marginRight = "auto";
elementHeader.style.marginLeft = "auto";
elementHeader.style.marginTop = "30px";
elementHeader.style.marginBottom = "30px";
elementHeader.style.width = "350px";
elementHeader.style.fontFamily = "arial";
elementBox.appendChild(elementHeader);

/* OL ELEMENTS ********************************** */

/* OL 1 ********************************** */

var elemOl_1 = document.createElement('ol');
elemOl_1.className = "elemOl";
elemOl_1.id = "elemOl_1";
elemOl_1.style.marginLeft = "60px";
elemOl_1.style.marginTop = "30px";
elemOl_1.style.marginBottom = "20px";
elemOl_1.style.width = "200px";
elemOl_1.style.fontFamily = "arial";
elemOl_1.style.fontSize = "18px";
							
var elemLi_1_1 = document.createElement('li');
elemLi_1_1.className = "elemLi";
elemLi_1_1.id = "elemLi_1_1";
elemLi_1_1.style.marginTop = "10px";
elemLi_1_1.style.marginLeft = "20px";
elemLi_1_1.style.listStyle = "none";
elemLi_1_1.style.fontSize = "16px";

var elementCheckbox_1_1 = document.createElement('input');
elementCheckbox_1_1.className = "checkBox";
elementCheckbox_1_1.id = "elementCheckbox_1_1";
elementCheckbox_1_1.type = "checkbox";
elemLi_1_1.appendChild(elementCheckbox_1_1);

var elemLabel_1_1 = document.createElement('label');
elemLabel_1_1.id = "elemLabel_1_1";
elemLabel_1_1.innerHTML = "<label for='elementCheckbox_1_1'> Варинат ответа № 1";
elemLi_1_1.appendChild(elemLabel_1_1);

var elemLi_1_2 = elemLi_1_1.cloneNode(true);
elemLi_1_2.id = "elemLi_1_2";
var elemLi_1_3 = elemLi_1_1.cloneNode(true);
elemLi_1_3.id = "elemLi_1_3";

elemOl_1.appendChild(elemLi_1_1);
elemOl_1.appendChild(elemLi_1_2);
elemOl_1.appendChild(elemLi_1_3);

for(var i = 2; i <= 3; i++) {
	
	var strCheckbox = "#elemLi_1_" + i + " #elementCheckbox_1_1";
	var elementBuff = elemOl_1.querySelector(strCheckbox);
	var strCheckboxId = "elementCheckbox_1_" + i;
	elementBuff.id = strCheckboxId;
	
	var strLabel = "#elemLi_1_" + i + " #elemLabel_1_1";
	elementBuff = elemOl_1.querySelector(strLabel);
	var strLabelId = "elemLabel_1_" + i;
	elementBuff.id = strLabelId;
	elementBuff.innerHTML = "<label for='" + strCheckboxId + "'> Варинат ответа № " + i;
}

elementBox.appendChild(elemOl_1);


/* OL 2 ********************************** */

var elemOl_2 = elemOl_1.cloneNode(true);
elemOl_2.id = "elemOl_2";

for(var i = 1; i <= 3; i++) {
	
	var strLi = "#elemLi_1_" + i;
	var elementBuff = elemOl_2.querySelector(strLi);
	
	var strLiId = "elemLi_2_" + i;
	elementBuff.id = strLiId;	
	
	var strCheckbox = "#elemLi_2_" + i + " #elementCheckbox_1_" + i;
	elementBuff = elemOl_2.querySelector(strCheckbox);
	var strCheckboxId = "elementCheckbox_2_" + i;
	elementBuff.id = strCheckboxId;
	
	var strLabel = "#elemLi_2_" + i + " #elemLabel_1_" + i;
	elementBuff = elemOl_2.querySelector(strLabel);
	var strLabelId = "elemLabel_2_" + i;
	elementBuff.id = strLabelId;
	elementBuff.innerHTML = "<label for='" + strCheckboxId + "'> Варинат ответа № " + i;
}

elementBox.appendChild(elemOl_2);

/* OL 3 ********************************** */

var elemOl_3 = elemOl_1.cloneNode(true);
elemOl_3.id = "elemOl_3";

for(var i = 1; i <= 3; i++) {
	
	var strLi = "#elemLi_1_" + i;
	var elementBuff = elemOl_3.querySelector(strLi);
	
	var strLiId = "elemLi_3_" + i;
	elementBuff.id = strLiId;	
	
	var strCheckbox = "#elemLi_3_" + i + " #elementCheckbox_1_" + i;
	elementBuff = elemOl_3.querySelector(strCheckbox);
	var strCheckboxId = "elementCheckbox_3_" + i;
	elementBuff.id = strCheckboxId;
	
	var strLabel = "#elemLi_3_" + i + " #elemLabel_1_" + i;
	elementBuff = elemOl_3.querySelector(strLabel);
	var strLabelId = "elemLabel_3_" + i;
	elementBuff.id = strLabelId;
	elementBuff.innerHTML = "<label for='" + strCheckboxId + "'> Варинат ответа № " + i;
}

elementBox.appendChild(elemOl_3);


/* OL texts ********************************** */

var elemTextOl_1 = document.createElement('p');
elemTextOl_1.className = "TextOl";
elemTextOl_1.innerHTML = "1. Вопрос № 1";
elemOl_1.insertBefore(elemTextOl_1, elemOl_1.children[0]);

var elemTextOl_2 = elemTextOl_1.cloneNode(true);
elemTextOl_2.innerHTML = "2. Вопрос № 2";
elemOl_2.insertBefore(elemTextOl_2, elemOl_2.children[0]);

var elemTextOl_3 = elemTextOl_1.cloneNode(true);
elemTextOl_3.innerHTML = "3. Вопрос № 3";
elemOl_3.insertBefore(elemTextOl_3, elemOl_3.children[0]);


/* BUTTON ********************************** */
var elementBoxButton = document.createElement('div');
elementBoxButton.style.width = "280px";
elementBoxButton.style.height = "50px";
elementBoxButton.style.marginTop = "50px";
elementBoxButton.style.marginRight = "auto";
elementBoxButton.style.marginLeft = "auto";
elementBox.appendChild(elementBoxButton);

var elemButton = document.createElement('button');
elemButton.className = "button";
elemButton.innerHTML = "Проверить мои результаты";
elemButton.style.width = "280px";
elemButton.style.height = "50px";
elemButton.style.fontFamily = "arial";
elemButton.style.fontSize = "18px";

elementBoxButton.appendChild(elemButton);





