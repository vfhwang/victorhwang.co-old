---
layout: about
title: Weeknotes
permalink: /weeknotes/
---

<div class="postinfo">
		<h2 class="title">Farewill - Weeknotes</h2>

        {% for post in site.categories.weeknotes %}
            <p>
				<a href="{{post.url}}">{{post.title}}</a>
			</p>
		{% endfor %}

</div>
