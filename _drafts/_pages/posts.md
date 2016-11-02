---
title: Posts
date: '2016-11-03 02:04:54'
layout: post-index
---
{% for post in site.posts %} {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %} {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %} {% if forloop.first %}

{{ this_year }}

{% endif %}

{{ post.title }}

{% if forloop.last %}

{% else %} {% if this_year != next_year %}

{{next_year}}

{% endif %} {% endif %} {% endfor %}