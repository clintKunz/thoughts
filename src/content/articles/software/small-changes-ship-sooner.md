---
title: "Small changes ship sooner"
description: "Batch size is the variable that quietly controls how fast a team can move."
publishedAt: 2026-07-23
category: software
tags:
  - delivery
  - code-review
---

When a team feels slow, the explanations usually point at people or tools: reviews are backed up, the test suite drags, someone is a bottleneck. Often the real cause is upstream of all of that. The changes are simply too big.

A large change is not linearly harder than a small one. It is harder in several ways at once. It takes longer to review, and the review that eventually happens is worse, because past a certain size a reviewer stops reasoning about the design and starts skimming for obvious mistakes. It conflicts more with other people's work while it waits. When something breaks, the change contains so many possible causes that finding the real one becomes its own project. And because it took so long to build, nobody wants to reverse it, so a bad decision inside it tends to survive.

Small changes invert each of those. A reviewer can hold the whole thing in their head, so the feedback is about whether the approach is right rather than whether the syntax is. A failure points at something specific. Reverting costs nothing emotionally, which means the decision to revert gets made on the merits.

The usual objection is that some work is genuinely large, and that is true. What is usually not true is that it has to arrive in one piece. Most large work can be split along a seam: put the new code behind a flag and turn it on separately, add the write path before the read path, migrate data in a change that does nothing else, extract a refactor that is provably behavior-preserving and land it first. Each of those is independently reviewable and, importantly, independently safe.

There is a second effect that is easy to underestimate. Small changes make feedback arrive while you still care. Merge something within a day and you find out quickly whether it was right, at a point when the context is still loaded in your head and fixing it is cheap. Merge something three weeks later and the same discovery costs a re-learning tax before any of the work can begin.

None of this requires new tooling or a process document. It requires deciding, before starting, what the smallest useful version of the change is, and treating "how do I split this" as part of the design work rather than an afterthought once the branch has grown.
