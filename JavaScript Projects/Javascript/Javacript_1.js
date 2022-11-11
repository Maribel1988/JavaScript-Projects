function Zodiac_Function() {
    var Zodiac_Output;
    var Zodiacs = document.getElementById("Zodiac_input").value;
    var Zodiac_String = " is a an amazing zodiac sign!";
    
    switch(Zodiacs) {
        case "Aries":
            Zodiac_Output = "Aries" + Zodiac_String + " Independent and strong‒willed, you are a force to be reckoned with! You love nothing more than an exciting new goal to tackle, and you do your best work when you’re flying solo. Your passion and energy keep the rest of us on our toes!";
        break;
        case "Taurus":
            Zodiac_Output = "Taurus" + Zodiac_String + " As a Taurus, you’re a wonderful combination of laid‒back and hard‒working. You’re honest and loyal, occasionally to a fault. Your determination and attention to detail will take you far in life. ";
        break;
        case "Gemini":
            Zodiac_Output = "Gemini" + Zodiac_String + " Your ability to get along with a wide variety of people makes you a bit of a social butterfly, but you’ll take advantage of some alone time when it comes your way. Curious and deeply emotional, you love ritual and celebration.";
        break;
        case "Cancer":
            Zodiac_Output = "Cancer" + Zodiac_String + " Your intuition is downright uncanny! You do your best socializing in small groups and prefer intimate relationships even if it means your social circle is on the smaller side. Your creative spirit will bring joy to all you meet.";
        break;
        case "Leo":
            Zodiac_Output = "Leo" + Zodiac_String + " It’s no wonder your symbol is a lion. Your personality and presence are impressive to all. This may intimidate some, but your inviting spirit will help you easily make friends. Your confidence will be an asset to you throughout your life.";
        break;
        case "Virgo":
            Zodiac_Output = "Virgo" + Zodiac_String + " You are the picture of poise and elegance. You love to stay organized and have a strong focus on keeping things aesthetic. But you’re not just beauty. You’ve got brains, too! You’ll continue seeking knowledge and intellectual growth as you age.";
        break;
        case "Libra":
            Zodiac_Output = "Libra" + Zodiac_String + " You have a large social circle, and your open‒mindedness helps you get along with just about anyone. But don’t get lost in the crowd! A focus on self‒care and personal reflection will help you build your confidence over time. ";
        break;
        case "Scorpio":
            Zodiac_Output = "Scorpio" + Zodiac_String + " As a Scorpio, you can have a sharp edge, but this isn’t always a negative quality. It gives you an appreciation for authenticity and a strong sense of independence. However, you’re not always as tough as you appear. Once you let people into your life, you’re a bit of a softy. ";
        break;
        case "Sagittarius":
            Zodiac_Output = "Sagittarius" + Zodiac_String + " The road less traveled is your favorite place to be! Your bravery is admirable and will make you a good fit for leadership roles. You also have a bit of an itch in your shoes and will always be ready to take on a new adventure. ";
        break;
        case "Capricorn":
            Zodiac_Output = "Capricorn" + Zodiac_String + " Your perfectionism and high standards, though sometimes an obstacle, can be one of your superpowers when handled wisely. You have a strong sense of self, which enables you to make meaningful connections and lead the way. ";
        break;
        case "Aquarius":
            Zodiac_Output = "Aquarius" + Zodiac_String + " You may fall on the introvert side of the spectrum, but that doesn’t mean you don’t know how to have fun. You have an enviable combination of intelligence and intuition, and you are able to identify positive opportunities even in dark times.";
        break;
        case "Pisces":
            Zodiac_Output = "Pisces-" + Zodiac_String + " You wouldn’t hurt a fly! Empathy is your superpower, and you are an asset to any team you join or cause you support. Your gentleness is a virtue. However, be careful to not let your feelings get hurt too easily. Be sure to spend time building your self‒confidence.";
        break;
        default:
        Zodiac_Output = "Please enter a zodiac exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Zodiac_Output;
}

function myZodiac() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("chi_zodiac");
    ctx.drawImage(img,10,10);
  }
function myChineseZodiac() {
    var d = document.getElementById("Zodiac_Sign");
    var ctx = d.getContext("2d");
    ctx.font = "100px Monotype Corsiva";
    ctx.fillText("Chinese Zodiacs",10,80); 
}

 


