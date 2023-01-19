// обявление функции. имя и параметры в скобках
function showGeneralInfoContent() {

    // обявление переменных документ, достань элемент страницы по ее ай-ди
	// содержимое общей информаций
	var genInfoContent = document.getElementById("general-info-content")
	// кнопка
	var genInfoButton = document.getElementById("general-info-button")

	// если то что в круглых скобках правда выполни то что в первых фигурных скобках, иначе то что во вторых
	// то есть, если стиль дисплея равен none (скрыто)...
	if (genInfoContent.style.display === "none") {
	    // ... поменяй стиль дисплея на block (показано)
		genInfoContent.style.display = "block"
		// также поменяй содержание кнопки
		genInfoButton.innerHTML = "General info (hide)";
	// иначе ...
	} else {
		// поменяй стиль дисплея на none (крыто)
		genInfoContent.style.display = "none"
		// и содержание кнопки
		genInfoButton.innerHTML = "General info (show)"
	}
}

function showLanguagesContent() {
	if (document.getElementById("languages-content").style.display === "none") {
		document.getElementById("languages-content").style.display = "block"
		document.getElementById("languages-button").innerHTML = "Language skills (hide)";
	} else {
		document.getElementById("languages-content").style.display = "none"
		document.getElementById("languages-button").innerHTML = "Language skills (show)"
	}
}

function details(){
	if (x = document.getElementById("education").open){
		document.getElementById("education").open = false
	} else{
		document.getElementById("education").open = true
	}	
}
	
	

