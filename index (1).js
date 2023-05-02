const randomText = [
    "Words are good because that is what we use everyday Ummm fast fingers is sooooooo good  Fidgets spinners are so popular anyways a story Digby The Littlest Duckling",
    "Digby was the littlest duckling you have ever seen  He hatched from a tiny egg and did not grow as fast as his brothers or sisters  At feeding time", 
    "he had to make do with their leftover crumbs  I will never grow bigger eating these  New experiences are the best",
    "I have no idea  I accidentally left my money in my pants pocket and it got ruined in the washer",
    "I ordered a new laptop case yesterday This could change all of our lives Airplanes are, statistically", 
    "the safest form of transportation All the bikes locked up outside the subway station are missing either a wheel", 
    "Or a seat She froze at the sight of the big spider I need to stop If you don't pay your taxes", 
    "the police show up and force you to Don't even look at me!How big an idiot do you think"
    ]

const msg = document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
const fb = document.getElementById('feedback');
let startTime , endTime;

const playgame = () =>{
    typeWords.value = "";
    let randumnumber = Math.floor(Math.random()*randomText.length);
    msg.innerText = randomText[randumnumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
    msg.style.fontSize= "large";
    msg.style.color= "black";
    msg.style.textShadow = "none";
    msg.style.backgroundColor = "#ffff";
    fb.style.display = "none";
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);
    speed = Math.round((wordCount / totalTime) * 60);
    let Msg1 = "Speed : " + speed + " wpm";
    let Msg2 = compare(msg.innerText, totalStr);
    let finalMsg = Msg1+"\n"+"Time taken : "+totalTime+"sec"+"\n"+Msg2;
    msg.innerText = finalMsg;
    msg.style.fontSize= "xx-large";
    msg.style.color= "black";
    msg.style.backgroundColor = "white";
    fb.style.display = "flex";

    if(speed>5 && speed<20)
    {
        fb.innerText = "You need Improvement😅";
    }
    else if(speed>=20 && speed<40)
    {
        fb.innerText = "Don't worry a little practice can help😊";
    }
    else if(speed>=40 && speed<=60)
    {
        fb.innertext = "You are doing great😍";
    }
    else if(speed>60 && speed<=120)
    {
        fb.innertext = "You are GODLY!!🤯";
    }
    else if(speed>120 && speed<200)
    {
        fb.innertext = "What are you doing here? Go set a world record🥶";
    }
    else if(speed>200)
    {
        fb.innertext = "Hecker!!!🤨🤨";
    }
    else{
        fb.innerText = "Bruhh!!😑";
    }
}
const compare = (str1 , str2) =>{
    let word1 = str1.split("");
    let word2 = str2.split("");
    let correct = 0;
    let wrong = 0;

    word1.forEach(function (item, index) {

        if (item == word2[index]) {
            correct++;
        }
        else if(item != word2[index]) {
            wrong++;
        }
        
    })
    let accuracy = (correct/word1.length)*100;
    return ("Your Accuracy : " + Math.round(accuracy) + "%"+"\n"+"Total Letters : "+(correct+wrong)+"\n"+"Correct Letters :"+correct+"\n"+"Wrong letters : "+wrong);
}

const wordCounter = (str) =>{
    let response  = str.split(" ").length-1;
    return response;
}

btn.addEventListener('click' , function(){
    if(this.innerText == 'Start'|| this.innerText == 'Restart'){
        typeWords.disabled = false;
        playgame();
    }else if(btn.innerText == "Done"|| this.innerText == 'Restart'){
        typeWords.disabled = true;
        fb.innerText = "";
        btn.innerText = "Restart";
        endPlay();
    }
})