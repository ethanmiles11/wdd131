const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function(){
    if (input.value.trim() !== "") {
        // Create new list item
        const li = document.createElement("li");
        li.textContent = input.value;

        // Create delete button to go with list item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";

        // Add delete functionality
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
        });

        //Append delete button and list item
        li.append(deleteButton);
        list.append(li);
        input.focus();
    } else {
        input.value = "";
        input.focus();
    }
});


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

