const quotes = [
    {
        quote : '"순간을 영원으로 만들어버리는데 어떻게 잊을 수가 있어요."'
        ,author : "by 최웅"
    },
    {
        quote : '"지나갈까, 여기 있을까?"'
        ,author : "by 국연수"
    },
    {
        quote : '"나만, 나만 사랑하는 널 보고 싶었나봐."'
        ,author : "by 최웅"
    },
    {
        quote : '"최웅, 그 유일함을 사랑했다는 걸"'
        ,author : "by 국연수"
    },
    {
        quote : '"내 모든 시간을 국연수를 사랑하는데 쓸 거에요"'
        ,author : "by 최웅"
    },
    {
        quote : '"네가 말하는 건 다 듣고, 다 기억하니까, 계속 말해줘."'
        ,author : "by 최웅"
    },
    {
        quote : '"내일은 네가 기억 안 나는 척해."'
        ,author : "by 최웅"
    },
    {
        quote : '"우리가 헤어진 건 다 내 오만이었어. 너 없이 살 수 있을 거라는 내 오만."'
        ,author : "by 국연수"
    },
]
const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const newQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = newQuote.quote;
author.innerText = newQuote.author;
