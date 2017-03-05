window.onload = function() { 
    var st = 10;
    var z = 20;
    var ObjectArray = [];
    
    /*var objLength = document.querySelectorAll(".bl");
    for(var i=0; i < objLength.length; i++){
        ObjectArray.push(document.querySelector(".block"+(i+1)));
    }*/
    ObjectArray = document.querySelectorAll(".bl");
    
    //console.log(ObjectArray)
    var currentPointer = 0;
    var pointer = ObjectArray[currentPointer];
    pointer.classList.add("active");

    document.addEventListener("keydown", function(event){
        //console.log(event.keyCode);
        
         if (event.keyCode == 32) {
             document.querySelector(".active").classList.remove("active");
             if(currentPointer == ObjectArray.length-1) {
                 currentPointer = 0;
                 pointer = ObjectArray[currentPointer];
             } else {
                 pointer = ObjectArray[++currentPointer];
             }
             pointer.classList.add("active");
         }

        

        if (event.keyCode == 39) {
            Steps(pointer, "right");
        }
        else if (event.keyCode == 37) {
            Steps(pointer, "left");
        }
        else if (event.keyCode == 38) {
            Steps(pointer, "top");
        }
        else if (event.keyCode == 40) {
            Steps(pointer, "bottom");
        }
    });


    function checkOfCol(obj, arr) {
            var x1 = obj.offsetLeft;
            var y1 = obj.offsetTop;
            var w1 = obj.offsetWidth;
            var h1 = obj.offsetHeight;

       
        for (var i = 0; i < arr.length; i++) {
            if (obj == arr[i]) {
                continue;
            } 
            var x2 = arr[i].offsetLeft;
            var y2 = arr[i].offsetTop;
            var w2 = arr[i].offsetWidth;
            var h2 = arr[i].offsetHeight;

            
            /* столкновение справа */
            if (x1 >= x2 + w2 - z && x1 <= x2 + w2 + z && y1 <= y2+h2+z && y1 >= y2-h1-z) {
                return "right";
            }
            /* столкновение слева */
            else if (x1 >= x2 - w1 -z && x1 <= x2 - w1 +z && y1 >= y2 - h1 - z && y1 <= y2 + h2 +z) {
                return "left";
            } 
            /* столкновение сверху */
            else if (x1 >= x2-w1-z && x1<=x2+w2+z && y1 >= y2 - h1 - z && y1<= y2 + z) {
                return "top";
            }

            /* столкновение снизу */
            else if (x1 >= x2-w1-z && x1<=x2+w2+z && y1 >= y2 + h2 -z && y1<= y2 +h2 +z) {
                return "bottom";
            } 
            else {
                return "Non"
            }
        }
    }

  

    function Steps(object, direction, step = st) {
        var dir = checkOfCol(object, ObjectArray);
        if (dir != "Non") {
            direction = dir;
        }
        
        if (direction == "right") {
            object.style.left = object.offsetLeft + step + "px";
        } else if (direction == "left") {
            object.style.left = object.offsetLeft - step + "px";
        } else if (direction == "top") {
            object.style.top = object.offsetTop - step + "px";
        } else if (direction == "bottom") {
            object.style.top = object.offsetTop + step + "px";
        }
    }


}