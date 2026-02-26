let s = "sandhyarai";
let count = 0;

s = s.toUpperCase();

for (let i = 0; i < s.length; i++) {
    if (
        s[i] === "A" ||
        s[i] === "E" ||
        s[i] === "I" ||
        s[i] === "O" ||
        s[i] === "U"
    ) {
        count++;
    }
}

console.log("vowel:", count);