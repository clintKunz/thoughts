---
title: "Decision records that age well"
description: "Why a few paragraphs about a decision are worth more than the diagram that came with it."
publishedAt: 2026-08-13
category: software
tags:
  - architecture
  - documentation
featured: true
---

Code tells you what a system does. It almost never tells you why it was built that way, which alternatives were considered, or which constraint was doing most of the work at the time.

That gap is expensive in a way that is easy to miss. A year later the decision looks arbitrary, so it gets treated one of two ways: as untouchable, because nobody knows what depends on it, or as obviously wrong, because the constraint that justified it is no longer visible. Both are guesses. A few paragraphs written at the time would have made it a judgment instead.

What makes those paragraphs useful is not thoroughness. It is that they record the pressure the team was under. The context, meaning what changed or hurt enough that a decision was needed. The constraints that narrowed the options, which is the part people skip and the part that matters most. The decision itself. And the consequences that were accepted knowingly, including the work it creates.

"We chose a queue" is trivia. "We chose a queue because invoice delivery has to survive the mail provider being down, and we accepted delayed sends plus owning retries and monitoring" tells a reader what would have to be true for the decision to still be right. It also tells them what to look at first when something goes wrong.

I have come to think the format should be smaller than feels responsible. If writing one of these feels like producing a design document, people will skip it exactly when a decision is contentious and the record is most valuable. One screen is a good ceiling: a title that states the decision, a status, a date, and short sections for context, decision, and consequences. Link to the prototype or the benchmark rather than pasting it in, and write so the record still makes sense after those links rot.

The other habit worth keeping is to never rewrite one. When a decision changes, write a new record that supersedes the old one and link them in both directions. What you end up with is not a description of the current architecture, which the code already provides, but a trail of reasoning: we chose A because of X and Y, and when Y stopped being true we moved to B. That trail is the thing you cannot reconstruct later.

So the test I use before accepting a record is not whether it is complete. It is whether someone who was not in the room could tell when this decision should be reconsidered. If they can, it has done its job.
