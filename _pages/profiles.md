---
layout: page
permalink: /people/
title: People
description: Members of the DARoS Lab.
nav: true
nav_order: 4
---

{% assign m = site.data.members %}

{% comment %} ---------- PI ---------- {% endcomment %}
{% for person in m.pi %}
<div class="row align-items-center mb-4">
  <div class="col-sm-3 text-center">
    {% if person.photo %}
      {% capture ppath %}assets/img/{{ person.photo }}{% endcapture %}
      {% include figure.liquid loading="eager" path=ppath class="img-fluid rounded z-depth-1" %}
    {% endif %}
  </div>
  <div class="col-sm-9">
    <h4 class="mb-1">{{ person.name }}</h4>
    <p class="text-muted mb-1">{{ person.title }}</p>
    <p>{% for link in person.links %}{% assign k = link[0] %}<a href="{% if k == 'email' %}mailto:{% endif %}{{ link[1] }}">[{% if k == 'scholar' %}google scholar{% else %}{{ k }}{% endif %}]</a>{% unless forloop.last %} &nbsp; {% endunless %}{% endfor %}</p>
  </div>
</div>
{% endfor %}

{% comment %} ---------- other groups ---------- {% endcomment %}
{% assign groups = "phd,Ph.D. Students|masters,Master's Students|undergrad,Undergraduate Researchers|alumni,Alumni" | split: "|" %}
{% for g in groups %}
  {% assign key = g | split: "," | first %}
  {% assign label = g | split: "," | last %}
  {% assign list = m[key] %}
  {% if list and list != empty %}
<h3>{{ label }}</h3>
<ul>
  {% for person in list %}
  <li>
    <strong>{{ person.name }}</strong>{% if person.focus %} &mdash; {{ person.focus }}{% endif %}
    {%- if person.degree %} &mdash; {{ person.degree }}{% endif %}
    {%- if person.now %}, now at {{ person.now }}{% endif %}
    {% for link in person.links %} <a href="{% if link[0] == 'email' %}mailto:{% endif %}{{ link[1] }}">[{% if link[0] == 'scholar' %}google scholar{% else %}{{ link[0] }}{% endif %}]</a>{% endfor %}
  </li>
  {% endfor %}
</ul>
  {% endif %}
{% endfor %}
