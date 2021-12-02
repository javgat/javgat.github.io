---
layout: default
title: Proyectos
permalink: /projects
---
<h2 class="m-3">Projects</h2>

{% for project in site.data.projects %}

<div class="card m-2" >
  <div class="card-body">
    <h5 class="card-title mx-2">{{ project.name }}</h5>
    <p class="card-text" markdown="1">
{{ project.description }}
    </p>
{% if project.has_image %}
<img src="{{ project.image.src }}" alt="{{ project.image.alt }}"
 class="mx-auto d-block rounded img-fluid" width="500"/>
{% endif %}
  </div>
</div>

{% endfor %}

<br />

<h3 class="m-3">Workshops</h3>

{% for ws in site.data.workshops %}

<div class="card m-2" >
  <div class="card-body">
    <h5 class="card-title mx-2">{{ ws.name }}</h5>
    <p class="card-text" markdown="1">
{{ ws.description }}
    </p>
{% if ws.has_image %}
<img src="{{ ws.image.src }}" alt="{{ ws.image.alt }}"
 class="mx-auto d-block rounded img-fluid" style="height: 600px"/>
{% endif %}
  </div>
</div>

{% endfor %}