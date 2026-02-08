const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const finalMessage = document.getElementById('finalMessage');

const noQuestions = [
    "Are you sure? 😅",
    "Think again 💌",
    "Why not? 😘",
    "Love me? 💖",
    "Come on… 😜",
    "Really now? 🤭",
    "No way! 😏",
    "Try again 😇",
    "You can't escape 💕",
    "Don't be shy 😘",
    "Keep trying 😄",
    "Love me pls ❤️",
    "Still no? 😅",
    "Say Yes soon 💌",
    "Can't resist me 😎",
    "Thinking again? 😘",
    "Hearts are waiting 💖",
    "You know it 😏",
    "Forever mine? 💕",
    "My heart is yours 💌",
    "You're too cute 😍",
    "Admit it… ❤️",
    "You really mean it? 😅",
    "Come closer 😘",
    "No escaping me 😎",
    "Cupid is watching 💘",
    "Can't hide from love 💕",
    "You're mine 😏",
    "Hearts everywhere 💖",
    "I see that smile 😄",
    "Stop teasing me 😜",
    "Love is in the air 💌",
    "You know you want ❤️",
    "Keep clicking 😘",
    "Still resisting? 😏",
    "Can't say No 💖",
    "Try harder 😅",
    "Hearts are endless 💕",
    "You're trapped 😎",
    "No way out 😘",
    "Forever mine? 💌",
    "Can't escape my love 💖",
    "My heart beats for you 💓",
    "Are you really saying no? 😏",
    "Your smile says yes 😍",
    "Hearts are pulling you 💘",
    "Every click brings you closer 💕",
    "Can't hide your feelings 😅",
    "You're falling in love 😘",
    "Too cute to resist ❤️",
    "I'm everywhere you look 😎",
    "Your heart is mine 💌",
    "Admit it… you like me 😏",
    "Can't run from love 💖",
    "Every No is a yes in disguise 😉",
    "Hearts say yes 💓",
    "Your destiny is with me 💕",
    "Try saying No again 😜",
    "Love always wins ❤️",
    "You're caught in Cupid's trap 💘",
    "Don't fight it 😅",
    "Feel the love 💖",
    "My heart beats faster for you 💌",
    "Can't resist my charm 😎",
    "You're melting 💕",
    "No way to escape 😏",
    "Forever and always 💖",
    "Your eyes say yes 😍",
    "Hearts are everywhere 💌"
];


let clickCount = 0;

// Yes button click
yesBtn.addEventListener('click', () => {
    finalMessage.classList.remove('hidden');
    noBtn.style.display = 'none';
});

// No button click
noBtn.addEventListener('click', () => {
    if(clickCount < noQuestions.length) {
        noBtn.textContent = noQuestions[clickCount];
        // Randomly move button a bit
        const x = Math.random() * 20 - 10; // -10 to 10px
        const y = Math.random() * 20 - 10;
        noBtn.style.transform = translate(${x}px, ${y}px) rotate(${Math.random()*10-5}deg);
        clickCount++;
    } else {
        noBtn.textContent = "I knew you'd say YES 💕";
        noBtn.style.background = "linear-gradient(45deg, #ff6b81, #ff85a2)";
    }
});
