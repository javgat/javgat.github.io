---
layout: projects
title: Projects
permalink: /projects
---

<h2 class="m-3">My projects</h2>

<div class="m-3 mt-4">
  <label class="form-label text-muted">Filter by tag:</label>
  {% assign tags_p = site.data.tags_projects | sort: 'tag' %}
  <div class="mx-3">
  {% for tag in tags_p %}
    {% assign tagtag = "'" | append: tag.tag | append: "'" %}
    <span role="button" id="badge-{{tag.tag}}" class="badge user-select-none bg-secondary" onclick="filterTagsProjects({{tagtag}})">{{tag.tag}}</span>
  {% endfor %}
  </div>
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