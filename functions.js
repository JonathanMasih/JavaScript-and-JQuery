function makeTextNode(text) {
	return document.createTextNode(text);
}

function makeLabel(label, id) {
	var newLabel = document.createElement("label");
	if (id !== undefined && id != "") {
		newLabel.setAttribute("for", id);
	}
	newLabel.appendChild(makeTextNode(label));
	return newLabel;
}

function makeInput(type, id , value , label) {
	var newInput = document.createElement("input");
	newInput.setAttribute("type", type);
	if (id !== undefined && id != "") {
		newInput.setAttribute("id", id);
		newInput.setAttribute("name", id);
	}
	if (value !== undefined && value != "") {
        newInput.setAttribute("value", value);
	}
	if (label !== undefined && label != "") {
		var newDiv= document.createElement("div");
        newDiv.appendChild(  makeLabel(label,id));
		newDiv.appendChild(newInput);
	}
	if(label === undefined || label == ""){
     return newInput;
	}
	return newDiv;
}

function makeSelect( id , values , label) {
	var newSelect = document.createElement("select");
	if (id !== undefined && id != "") {
		newSelect.setAttribute("id", id);
		newSelect.setAttribute("name", id);
	}

	for(let i = 0; i < values.length; i++) {
		let newOption = document.createElement("option");
        newOption.setAttribute("value", values[i]);
		newOption.append(makeTextNode(values[i]));
		newSelect.append(newOption);
	}
	if (label !== undefined && label != "") {
		let newLabel = makeLabel(label);
		var newDiv2 = document.createElement("div");
		newDiv2.append(newLabel);
		newDiv2.append(newSelect );
	}
	if(label === undefined || label == ""){
		return newSelect;
	}

	return newDiv2;
	}
