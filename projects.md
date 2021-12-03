---
layout: projects
title: Projects
permalink: /projects
---

<h2 class="m-3">Projects</h2>

{% assign tags_p = site.data.tags_projects | sort: 'tag' %}
<div>
{% for tag in tags_p %}
  {% assign tagtag = "'" | append: {{tag.tag}} | append: "'" %}
  <span role="button" id="badge-{{tag.tag}}" class="badge bg-secondary" onclick="filterTagsProjects({{tagtag}})">{{tag.tag}}</span>
{% endfor %}
</div>

<div id="projects">
</div>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/showdown@1.9.1/dist/showdown.min.js"></script>
<script type="text/javascript" src="/js/controllers/projects.js"></script>
<script type="text/javascript">
  PROJECTS = JSON.parse(jsonEscape('{{ site.data.projects | jsonify }}'));
  WORKSHOPS = JSON.parse(jsonEscape('{{ site.data.workshops | jsonify }}'));
  showProjects(PROJECTS);
</script>