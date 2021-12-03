---
layout: default
title: Proyectos
permalink: /projects
---

<div class="mb-3">
  <label for="inputTag" class="form-label">Tag</label>
  <input type="text" class="form-control" id="inputTag" aria-describedby="tagHelp">
  <div id="tagHelp" class="form-text">Search projects by tag.</div>
</div>
<button type="button" onclick="clickChangeTag()" class="btn btn-primary">Search</button>

<h2 class="m-3">Projects</h2>

<div id="projects">
</div>

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

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/showdown@1.9.1/dist/showdown.min.js"></script>
<script type="text/javascript" src="/js/projects.js"></script>
<script type="text/javascript">
  PROJECTS = JSON.parse(jsonEscape('{{ site.data.projects | jsonify }}'));
  WORKSHOPS = JSON.parse(jsonEscape('{{ site.data.workshops | jsonify }}'));
  showProjects(PROJECTS);
</script>