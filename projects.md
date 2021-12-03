---
layout: default
title: Proyectos
permalink: /projects
---

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

<script type="text/javascript">
  function jsonEscape(str)  {
    return str.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t");
  }

  var converter = new showdown.Converter();

  const projects = JSON.parse(jsonEscape('{{ site.data.projects | jsonify }}'));
  const workshops = JSON.parse(jsonEscape('{{ site.data.workshops | jsonify }}'));

  let projects_div = document.getElementById("projects");
  let myHTML = '';
  let project;
  let extraImageHTML;

  for (let i = 0; i < projects.length; i++) {
    project = projects[i]
    if (project.has_image) {
      extraImageHTML = '\
  <img src="' + project.image.src + '" alt="' + project.image.alt + '"\
  class="mx-auto d-block rounded img-fluid" width="500"/>';
    } else {
      extraImageHTML = '';
    }
    myHTML += '\
  <div class="card m-2" >\
    <div class="card-body">\
      <h5 class="card-title mx-2">' + project.name + '</h5>\
      <p class="card-text" markdown="1">\n\
  ' + converter.makeHtml(project.description) + '\n\
      </p>' + extraImageHTML + '\
    </div>\
  </div>\n';
  }

  projects_div.innerHTML = myHTML
</script>