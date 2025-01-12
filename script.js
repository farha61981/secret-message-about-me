// JavaScript to handle the dynamic typing effect
const textarea = document.querySelector("textarea");
const typingEffectText = document.querySelector(".text-center p");

textarea.addEventListener('input', function() {
    if (textarea.value.trim() !== "") {
        typingEffectText.textContent = "You can share about me, good or bad, or casual messages. Let me know!";
    } else {
        typingEffectText.textContent = "Type your secret message...";
    }
});
