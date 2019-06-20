let score = 0
        
        function startGame() {

            document.getElementById("comments").innerHTML = "<h3>Press the Key displayed on the left box</h3>"
            document.getElementById("startBtn").style.display = "none"
            document.getElementById("endBtn").style.display = "block"
            setInterval(generateCharacter, 2000)
        }
        function generateCharacter() {
            document.getElementById("textArea").innerText = ""
            document.getElementById("keyPressed").innerText = ""
            let characterList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]
            let randomIndex = Math.floor(Math.random() * 10)
            let characterToBeDisplayed = characterList[randomIndex]

            document.getElementById("textArea").innerText = characterToBeDisplayed
            document.getElementById("scoreArea").innerText = "Score : " + score
        }

        document.addEventListener('keypress', keyIdentification)
        function keyIdentification(e) {
            //alert("key")
            let charcterTyped = e.code.substring(3)
            document.getElementById("keyPressed").innerText = charcterTyped
            keyMatching()
        }
        function keyMatching() {
            if (document.getElementById("keyPressed").innerText === document.getElementById("textArea").innerText) {
                console.log("Matched")
                score++
            }
        }
        function endGame() {
            document.getElementsByClassName("gameArea")[0].innerHTML = "<h3 style='text-align = center;margin-left:30%;'> Your Score is " + score +"!";
            document.getElementById("comments").innerHTML = ""
            
            
        }
