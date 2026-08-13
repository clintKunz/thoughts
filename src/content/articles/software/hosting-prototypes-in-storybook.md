---
title: "Hosting prototypes in Storybook"
description: "How our team at Wavv uses Claude and Storybook to turn product and UX debates into something you can click."
publishedAt: 2026-08-13
category: software
tags:
  - prototyping
  - storybook
  - ai
  - ux
---

Most product debates I have been in were not really disagreements about what to build. They were disagreements about what the thing would feel like once it existed, argued by people who each had a different version of it in their head. Everyone describes a slightly different product using the same words.

At Wavv we build a dialer that lives inside somebody else's CRM, and that makes the problem worse than usual. The interesting states are the ones that are hard to reach on demand. Three lines dialing at once and two of them connecting. A call landing while the agent is still writing notes on the last one. A number flagged as spam mid-session. You cannot reliably produce those states in a staging environment while five people watch, and a screenshot is not much better than a description, because the question is usually about behavior over time rather than layout.

So we started building the state instead of describing it, and hosting it in Storybook.

The workflow is unremarkable, which is part of why it works. Someone describes the interaction we are arguing about. We have Claude build a throwaway component for it, along with a story for each state worth seeing, backed by mock data rather than anything real. That gets pushed, the static Storybook build gets published, and the discussion continues against a URL instead of a description. Product, design, and support can all click through the same states without setting up a dev environment or reproducing a live call.

What makes the pairing useful is that each half fixes the other's weakness.

Claude removes most of the cost of building a version you intend to throw away. That cost was always the reason prototypes did not get built. Nobody wanted to spend two days on a UI whose purpose was to be rejected, so instead we spent two weeks building the real thing and found the problem in review. When the throwaway version takes an afternoon, being wrong stops being expensive, and you can afford to build the option you suspect is worse just to confirm that it is.

Storybook gives that work an address, which matters more than I expected. A prototype demoed on someone's laptop lives exactly as long as the meeting. A prototype published as a story has a link that can go in a ticket, a thread, or a decision record, and the person who was out that week can look at the same artifact instead of reading a summary of it.

Stories also force the states apart. Instead of one demo where the presenter narrates their way to the interesting moment, there is a story per state, named, listed in the sidebar, and reachable directly. The awkward states actually get looked at because they are sitting right there in the list rather than buried three interactions deep.

The controls help for the same reason. When reviewers can flip the number of active lines or toggle a call into a failed state themselves, they poke at whatever they personally worry about. Support asks what happens on a slow connection. Design notices the layout breaks at four lines. Those questions arrive during the cheap part of the process rather than after the work is built.

Some things we had to learn the hard way.

Prototype code is not product code, and treating it as a head start is how you end up shipping mock data. We keep prototypes in their own area of Storybook, label them as prototypes, and expect the real implementation to be written fresh once the decision is made. What we keep from a prototype is the decision, not the code. That has to be said out loud, because a prototype that looks finished invites everyone, including the person who built it, to assume it mostly is.

A generated prototype is also seductive in a particular way. It arrives complete, with reasonable-looking choices already made, which makes it feel like the answer rather than one candidate. The correction is to build more than one. Two or three variants of the same interaction cost very little now, and the conversation changes character when there is something to compare against. People are much better at judging between options than at judging a single option alone.

A prototype can also settle what something feels like without settling whether it should exist. It is easy to spend an afternoon making an interaction lovely and never ask whether the underlying idea earns its maintenance. The prototype answers a narrow question well, which is exactly why it should not be allowed to quietly answer a broader one.

The part I did not anticipate is how much this changed the tone of the discussions. When an argument is verbal, whoever describes their idea most vividly tends to win, and the rest of us agree to something we have each imagined differently. When there is a link, the artifact is the same for everybody, and the conversation gets specific fast: not whether this approach is better in general, but whether this particular behavior is right when two calls connect at once. Disagreements shrink to the size of the thing in front of you, and most of them turn out to be small.

When a decision does get made, it is worth writing down next to the link to the story, for the same reason [decision records are worth keeping](/articles/software/decision-records-that-age-well). The prototype shows what we chose. Only the record explains why the other version lost.
