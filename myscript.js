

const setOfWords = [
					"Hope you are having fun, This is a simple typing test game you can make.",
					"My name is Anoop Kumar Pandey and I am a Front End Developer.",
					"If you want to play and check your typing speed then you should go with this", 
					"and check your typing speed with accuracy."
					];
					
					const msg = document.getElementById("msg");
					const typeWords = document.getElementById("mywords");
					const btn = document.getElementById("btn");
					let startTime, endTime;
					
					const playGame = () =>{					
							let randomNumber = Math.floor(Math.random()*setOfWords.length);
							msg.innerText = setOfWords[randomNumber];
							let date = new Date();
							startTime = date.getTime();
							btn.innerText = "Done";
					}
					
					const endPlay = () =>{
							let date = new Date();
							endTime = date.getTime();
							let totalTime = ((endTime - startTime)/ 1000);
							
							let totalStr = typeWords.value;
							let wordCount = wordCounter(totalStr);
							
							let speed = Math.round((wordCount / totalTime) * 60);
							
							let finalMsg = "Your speed is " +speed+ " words per minutes. ";
							
							finalMsg += compareWords(msg.innerText, totalStr);
							
							msg.innerText = finalMsg;
							
							
					}
					
					const compareWords = (str1, str2) =>{
						let words1 = str1.split(" ");
						let words2 = str2.split(" ");
						let cnt = 0;
						
						words1.forEach(function (item, index){
						if (item == words2[index]){
							cnt++;
						}
						})
						
							let errorWords = ( words1.length - cnt );
							return (cnt + " correct out of " + words1.length + " words and the total number of error are " + errorWords + " . " );
						
					}
					
					
					const wordCounter = (str) =>{
							let response = str.split(" ").length;
							return response;
					}
					
					
					btn.addEventListener("click", function(){
							if(this.innerText == "Start"){
									typeWords.disabled = false;
									playGame();
							}else if(this.innerText == "Done"){
									typeWords.disabled = true;
									btn.innerText = "Start";
									endPlay();
							}
					})