const inputBox = document.getElementById("inputBox");
      const tasklist = document.getElementById("tasklist");



      function AddTask() {
        if (inputBox.value == "") {
          alert("you must write  something");
        } else {
          let li = document.createElement("li");
          li.innerHTML = inputBox.value;
          tasklist.appendChild(li);

          let span = document.createElement("span");
          span.innerHTML = "\u00d7";
          li.appendChild(span);
        }
        inputBox.value = "";
        saveData();
      }

      tasklist.addEventListener('click', function(e){
        if(e.target.tagName == "LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
            else if(e.target.tagName=="SPAN"){
           e.target.parentElement.remove();
           saveData();

            }
        });

        function AllclearTask(){
            tasklist.innerHTML = "";
            saveData();
        }
        // AllclearTask();

        function saveData(){
            localStorage.setItem("data",tasklist.innerHTML);
        }
        function showTask(){
            tasklist.innerHTML= localStorage.getItem("data");
        }
        showTask();