---
title: "Hosting prototypes in Storybook"
description: "At Wavv we build cheap, clickable prototypes in Storybook to speed up product and UX decisions."
publishedAt: 2026-08-13
category: software
tags:
  - prototyping
  - storybook
  - ux
---

Most product debates are really disagreements about what the thing will feel like once it exists, argued by people who each have a slightly different version in their head. The fastest way past that is to stop describing it and build it.

At Wavv we have started doing exactly that. When there is a question about a flow or a screen, we build a quick prototype of it, and because it is cheap to build now, we actually do it. That is the whole shift. It used to be that a throwaway UI was too expensive to justify, so we argued from descriptions and found out we disagreed later. Now the prototype is fast enough that building one is the easy option, and the conversation happens against something you can click instead of something you have to imagine.

We host these in Storybook, and the nice things Storybook gives you for free are exactly the things these conversations need.

You can see the states. Each variation is its own story, named and listed in the sidebar, so the awkward cases get looked at instead of buried three steps into a demo. When we are weighing two directions, we put them side by side — the standard dialer setup and a wizard version of it — and let people compare rather than react to a single option.

You can see the components. The same pieces we are prototyping with are sitting right next to the real components, so it is obvious what already exists and what is new.

And you can see the whole flow. We lay the onboarding out as connected screens on one canvas — create a board, import contacts, set up the dialer, pick numbers — so you can follow the path end to end instead of clicking through it blind. A scale control zooms the whole thing in and out when you want the overview or the detail.

![A Storybook story showing the Wavv onboarding as connected screens on one canvas, with a wizard variant branching off and a scale control at the bottom.](/images/prototypes-storybook-flow.jpg)

None of this is fancy. We are building real UIs, hosting them where the states, components, and flows are all easy to see, and letting a link carry the discussion. It makes the conversation faster and more concrete, and that is the entire reason we like it.
