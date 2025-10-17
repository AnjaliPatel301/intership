
window.onload = () => {
  
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      const main = document.getElementById("main-content");
      main.style.display = "block";
      main.classList.add("animate__fadeInUp");
     
    }, 1070); 
      speckji()
 };
 
function speckji(){
  
 const textToSpeack="Wellocome to  my website "
     const nanags=new SpeechSynthesisUtterance(textToSpeack)

     window.speechSynthesis.speak(nanags)

}