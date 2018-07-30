---
layout: post
org:  "UK Parliament"
year:  "2017"
team:  "Product team w/ 3 designers"
date:   2018-01-05 12:00:00 -0600
title: "UK Parliament - Case Study"
categories: casestudies-wip
description: "Building the foundations of a new website for Parliament, making it easier for people to get to know their MPs and the Lords."
colour: 4700B2

---

When polled, the majority of UK citizens said that they think Parliament is important to a healthy democracy. But only 1/3 said they understand how it works, and even fewer than that say it does a good job representing their interests. 1

This is the challenge which Parliament faces. Political disengagement is a broad, unwieldy problem which has many causes. It can't be tackled in one go. But there are sensible places to start.

*image of election graph*

Most people think of Parliament once every four years or so - at election time. However, the work it does between elections is what affects people the most. There's an opportunity to be clearer about what this work is and how it affects people in a more timely way.

*image of current site*

Parliament's current website is an example of a failure to articulate this. We often see this first hand in research sessions. The current site is a place where vast quantities of stuff is published for people to comb through - perhaps acceptable 20 years ago, but an antiquated concept these days. In short, it reflects our own complex internal divisions, rather than being organised around peoples needs.

*image of beta MP page*

A few weeks before I started at Parliament the team launched a basic beta website. This was a proof of concept for a dynamic digital service built on top of structured data, rather than the current CMS driven publishing model - an important step towards being able to show people information according to their mental models. For example, we can show them everything /said and done/ about /Brexit/ in /2017/, rather than making them jump across several micro-sites. Whilst managing a data on this scale and in this way has its challenges, these are definitely exciting foundations to work with.

1 From the 2017 Report into political engagement (Hansard Society)

First steps

Contact an MP

Activity alpha

*Starting with the basics*

[building out the design system!]

As our research showed that our most common touchpoint with the public was via their MP we decided to start there. We built an agile multidisciplinary team to work on a backlog of needs people have related to MPs.

*image of team vision*

Our team vision, written together, is that:
Anyone can find the people that make up Parliament, understand the work they do and be in meaningful dialogue with them.

*Finding MPs*

*Postcode lookup*

One of the first things we made was a tool to find your MP.  Postcode was found to be the most natural method for people. We also made a few other ways to find them, such as by region, to cater for people such as those without a permenant address.

We predicted that a lot of our traffic to the MPs pages would come straight from google, so we beta tested a 'check if this is your MP' feature for their pages. However, we found this was unclear and unsuccessful. The tool came at an unexpected point in their journey, and any attempts to simplify and utilise the users location would be fruitless and misleading, as people are often outside their constituency. All they needed was some key information about the person to intuitively 'check' themselves. I tidied up the header, and we began to think about the introduction of photos.

*Header information image*

We split information related to the constituency, which had historically been lumped on the same page, onto a separate one. This better matches peoples mental models and allows us to do more with the constituency pages, such as show a boundary map and former MPs.

*Calling card image*

We also developed a flexible 'calling card' component, which is used across the site to point to MPs. This shows the role the MP holds which is most relevant to the information on the page. For example, if they answer a question on behalf of a gov department, we show their ministerial position. This ‘card’ component has become a foundational element of our design system. I’ve worked with our lead front-end developer to
**Photos**

*Photos!*

We know that a clear photograph is one of the ways they identify the person they're looking for. However, we also saw it as an opportunity to present a more human side to Parliament, and show the MPs as a cohesive group. We worked with portrait photographer Chris McAndrew to capture a set of photos with both consistency and personality. We're working on the Lords next.

*Download page*

Part of our ethos is making everything we do reusable for others. We know that journalists and MPs already use their portraits for many things. I researched the most frequently used crops of photos and, working with the data team, created a process by which these would be generated and made available for download, along with the original high-res photo. I also worked with our content designers to ensure the open license was easy to understand. We've since seen these used in a huge variety of applications, as well as make the news in their own right.

*Different applications.*

**Roles**

*Roles image*

MPs don't have a job description, and they each fulfill their duties in different ways. They can be doing many things at once, and what they do in Parliament usually changes radically over time. This leaves us with a whole lot of raw data to work with.

We started by looking at tasks people have which might relate to this information. Members of the public told us that they use it to understand how their MP is representing them in Parliament. And journalists told us that it's the kind of information that's great for writing profiles.

*Current roles as sentence*

From this, we understood that what's most important to people is what the person is doing in Parliament now. I designed a radically simple solution - translating their current roles into a plain english sentence. I worked with a content designer to get the feel of this sentence right, and we tried it out with people to make sure it made sense to them. We're currently itterating on this sentence to get it to work better for MPs or Lords who have many roles - in about 5-10% of the time we feel we could be writing this sentence in a clearer way.

*Past roles*

For past roles, we tried two things - grouping by role type, or a timeline. Unfortunately we didn't have the budget for a round of lab testing, so we [twitter] By showing this to people, we saw that having the roles displayed on a timeline helped peoples understanding of this persons career, and better fit peoples mental models of a persons career history. This historical information is secondary, so we created a separate page for it.

**What's next?**

We're iterating on what we've already got based on research, analytics and feedback. We've started thinking about better ways for people to be in contact with their MP. We're also working on making the things that MPs do in Parliament more easily understood. You can read about how we're doing that here.
