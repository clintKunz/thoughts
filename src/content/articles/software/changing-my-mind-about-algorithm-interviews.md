---
title: "Changing my mind about algorithm interviews"
description: "I used to think DS and Algo interviews tested the wrong thing. Failing one taught me they test something I actually use."
publishedAt: 2026-08-14
category: software
tags:
  - interviews
  - algorithms
  - career
draft: true
---

I used to think DS and Algo interviews were a joke. You memorize tricks you never use at work, do them under pressure, and that decides whether you get the job. I didn't write red-black trees at work. I wrote flows, fixed bugs, argued about product. So I barely practiced.

Then I failed one, went to a team meeting, and saw myself needing the same skill.

The interview was a trees question. The answer was a depth-first search. Not a trick — close to problems I see at work. I just didn't see that soon enough. I spent too long going the wrong way, and by the time I figured it out, time was almost gone. Even then I hadn't practiced DFS enough to write it cleanly.

A few days later we spent most of a team meeting on a flow as if it were new. It wasn't. We had solved that same kind of problem before somewhere else in the product. Once somebody said so, the meeting moved. Same miss as the interview.

I was bothered I did poorly. The job paid a lot more than I make now. But Tony Finau [said](https://www.pgatour.com/article/news/latest/2026/08/09/brooks-koepka-keegan-bradley-fedexcup-playoffs-bubble-top-70) of a bad season: "you either win or you learn. I haven't done a lot of winning this year, so I've done a lot of learning."

What I learned is pretty simple. The interview is less about inventing an algorithm and more about recognizing what kind of problem you're looking at, then using the pattern that fits. And there aren't that many kinds. Trees and graphs. Two pointers. Sliding windows. Hash maps. Binary search. Heaps. Once you know the types, preparing gets easier. You look for the type, then practice how to solve that type.

That shows up at work too. This is a caching problem. This is a race condition. This is the same permissions check we already wrote three times. Spotting the type early saves a lot of time.

I may not write algorithms often, but I run into the same kinds of problems over and over. Flows are full of them. And sometimes we miss them for what they are, just like I did in the interview.

So I changed my mind. These interviews are useful practice for spotting the type of problem you're in and getting better at solving it.

I practice differently now. Less treating each problem as brand new. More asking what kind of problem it is before I write anything, then practicing that type until it feels easy.
