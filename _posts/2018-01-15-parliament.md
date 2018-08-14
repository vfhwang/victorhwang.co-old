---
layout: post
org:  "UK Parliament"
year:  "2017"
team:  "Product team w/ 3 designers"
date:   2018-01-05 12:00:00 -0600
title: "UK Parliament — First steps"
categories: casestudies-wip
description: "Building the foundations of a new website for Parliament, making it easier for people to get to know their MPs and the Lords."
colour: 4700B2
imagesurl: /assets/images/parliament/

---

{:class="postimagebig"}
<img src="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png"
  alt="The new iPlayer homepage"
  data-echo="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png">


The vast majority of UK citizens think Parliament is important to a healthy democracy. But only 1/3 say they understand how it works, and even fewer say it does a good job representing their interests. [(Source - PDF)](https://assets.ctfassets.net/rdwvqctnt75b/29mtXLpqqsIyiMa24QqUa4/157873def28828c1764bea7098bba28a/report__audit-of-political-engagement-14.pdf)

This is the challenge which Parliament faces. Political disengagement is a broad, unwieldy problem which has many causes. It can't be tackled in one go. But there are sensible places to start.

{:class="postimage"}
<img src="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png"
alt="Previous iPlayer homepage screenshot" data-echo="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png">
*A sketch of a graph I did when I first joined, showing (my hypothesis about) election cycles and Parliamentary work*

Most people think of Parliament once every four years or so - at election time. However, the work it does between elections is what affects people the most. There's an opportunity to be clearer about what this work is and how it affects people in a more timely way.

## Our starting point

Parliament's current website doesn't get close to articulating this. It was born in a time when the goal was to 'be digital', rather than to serve people's needs. It is a place where vast quantities of stuff is published for people to comb through, and closer to a digital leaflet than a service provider.

{:class="postimage"}
<img src="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png"
alt="Previous iPlayer homepage screenshot" data-echo="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png">
*The current website. Unresponsive, cluttered and from a different era.*

I believe that this publishing mentality stems from the way Parliament talks about itself. One of the first things I was told when I arrived was that we are 'transparent'.

'Transparent' is important, of course. But it isn't user centered. It excuses us from thinking about what people want and need. It's how you end up with reams of jargon-heavy content no one asked for and no hierarchy. It sets the bar pretty low in terms of what's acceptable of an organisation, and should be incidental - not the goal.

There are also over 50 different microsites, reflecting our own complex internal divisions, rather than being organised around peoples needs.

{:class="postimage"}
<img src="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png"
alt="Previous iPlayer homepage screenshot" data-echo="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png">
*How the beta website looked when I joined the team*

A few weeks before I started at Parliament the team launched a basic beta website. This was a proof of concept for a dynamic digital service built on top of structured data, rather than the current CMS driven publishing model - an important step towards being able to show people information according to their mental models.

For example, we can show them everything _said_ about _Brexit_ in _2017_, rather than making them jump across several microsites. Whilst managing a data driven service on this scale has its challenges, particularly when everyone is your user, they are definitely exciting foundations to work with.

We've worked alongside the Data and Search team from the start, to ensure we avoid the mistakes that lead to the current birds nest of bad microsites.

## First steps

As our research showed that our most common touchpoint with the public was via their MP we decided to start there. We built an agile multidisciplinary team to work on a backlog of needs people have related to MPs.

{:class="postimage"}
<img src="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png"
alt="Previous iPlayer homepage screenshot" data-echo="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png">
*The team vision pinned above our team area*

Our team vision, written together, is that:
Anyone can find the people that make up Parliament, understand the work they do and be in meaningful dialogue with them.

## Helping people find their MP

{:class="postimage"}
<img src="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png"
alt="Previous iPlayer homepage screenshot" data-echo="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png">
*Postcode lookup video*

One of the first things we made was a tool to find your MP.  Postcode was found to be the most natural method for people. We also made a few other ways to find them, such as by region, to cater for people such as those without a permanent address.

We predicted that a lot of our traffic to the MPs pages would come straight from google, so we  tested a 'check if this is your MP' feature for their pages.

However, people struggled to understand what we'd made. The tool came at an unexpected point in their journey, and any attempts to simplify, perhaps by utilising the users current location, would be fruitless and misleading, as people are often outside their constituency.

All they needed was some key information about the person to intuitively 'check' themselves. I redesigned our header, at the same time defining a scalable pattern for our headers. This has now been incorporated into our design system.

{:class="postimagebig"}
<img src="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png"
alt="Previous iPlayer homepage screenshot" data-echo="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png">
*Our MP page, and matching constituency page*

We split information related to the constituency, which had historically been lumped on the same page, onto a separate one. This better matches peoples mental models and allows us to do more with the constituency pages, such as show a boundary map and former MPs.

{:class="postimage"}
<img src="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png"
alt="Previous iPlayer homepage screenshot" data-echo="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png">
*Our calling card component, in various guises*

We also developed a flexible 'calling card' component, which is used across the site to point to MPs. This shows the role the MP holds which is most relevant to the information on the page. For example, if they answer a question on behalf of a gov department, we show their ministerial position.

This component is particularly important, as everything in Parliament is done by someone. Rebuilding that link between the stuff being done and the people doing it is foundational.

This ‘card’ component has become a core element of our design system - ensuring a consistent user experience and code base. I'm hoping to write a post about that another time.

## Finding the human side of Parliament


{:class="postimagebig"}
<img src="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png"
alt="Previous iPlayer homepage screenshot" data-echo="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png">
*Some of the photos of MPs*

We know that a clear photograph is one of the ways they identify the person they're looking for. It's one of the most useful things on our current website.

However, we also saw photos as an opportunity to present a more human side to Parliament. We worked with portrait photographer [Chris McAndrew](insert link) to capture a set of photos with both consistency and personality. A few months later we managed to get photos for most of the Lords, too. These are used across our site.

{:class="postimage"}
<img src="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png"
alt="Previous iPlayer homepage screenshot" data-echo="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png">
*Each photographed MP or Lord has a media page to download various crops.*

Part of our ethos is making everything we do reusable for others. We open source all our code and design patterns, and that should extend to our content too.

We know that journalists and MPs already use their portraits for many things. I researched the most frequently used crops of photos and, working with the data team, created a process by which these would be generated and made available for download, along with the original high-res photo.

I also worked with our content designers to ensure the open license was easy to understand. We've since seen these used by a plethora of different people and outlets, as well as make the news in their own right.

{:class="postimage"}
<img src="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png"
alt="Previous iPlayer homepage screenshot" data-echo="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png">
*Some of the places we've seen our images crop up*

## Roles


MPs don't have a job description, and they each fulfil their duties in different ways. They usually have many different roles at once, and (if reelected) what they do can change radically over time. This leaves us with a whole lot of raw data to work with, and a potentially unwieldy page. I started exploring possible solutions by working with Research to look at people's goals when looking at  someone's roles.

{:class="postimage"}
<img src="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png"
alt="Previous iPlayer homepage screenshot" data-echo="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png">
*An early sketch of a persons roles as a list*


Research told us that members of the public use it to understand how their MP is representing them in Parliament. And for journalists it's the kind of information that's great for writing profiles.

{:class="postimage"}
<img src="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png"
alt="Previous iPlayer homepage screenshot" data-echo="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png">
*The way the roles sentence is constructed.*

From this, we understood that what's most important to people is what the person is doing in Parliament now. I designed a radically simple solution - translating their current roles into a plain english sentence. I worked with a content designer to get the feel of this sentence right, and we tried it out with people to make sure it made sense to them.

We saw that this sentence could be useful for a wide number of journeys that cross the MPs and Lords pages - for example, they provide helpful context when looking to contact them, and help a citizen understand what their MP does everyday in Parliament.

{:class="postimage"}
<img src="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png"
alt="Previous iPlayer homepage screenshot" data-echo="{{page.imagesurl}}UKP-Alexa-Artwork-1200.png">
*The roles page. As this historical information serves a niche need, we've split it onto its own page.*

For past roles, we tried two things - grouping by role type, or a timeline. Unfortunately we didn't have the budget for a round of lab testing, so we put a couple of prototypes out on twitter with some questions. This is far from perfect research practice, but it's better than putting something out blind.

By showing this to people, we saw that having the roles displayed on a timeline helped peoples understanding of this persons career, and better fit peoples mental models of a persons career history. We've since iterated on this first implementation, allowing users to filter by a particular role type.

## What's next?

We've been working on making the things that MPs do in Parliament more easily understood, including showing their activity in real time.

We've also started thinking about better ways for people to be in contact with their MP and the Lords. At the time of writing this, we're creating a service blueprint for both of those.

And we're working on making our design system public. We're taking the brand that we created with [Someone](https://someoneinlondon.com/projects/the-first-visual-identity-for-uk-parliament) and extending it, creating scalable and delightful patterns to use across our digital products.

I've also written a couple of blog posts which expand on some of the things I've mentioned in this case study. You can read them [here]() and [here]().
