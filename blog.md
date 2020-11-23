---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default

title: Blog

---

<h2 align="center">Entradas del Blog:</h2>

{% for post in site.posts %}
<div class="card text-center m-3">
  <a class="card-block stretched-link text-decoration-none"
	href="{{ post.url }}">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">
	{{ post.date | date: "%-d" }} de
	{% assign m = post.date | date: "%-m" %}
	{% case m %}
	  {% when '1' %}Enero
	  {% when '2' %}Febrero
	  {% when '3' %}Marzo
	  {% when '4' %}Abril
	  {% when '5' %}Mayo
	  {% when '6' %}Junio
	  {% when '7' %}Julio
	  {% when '8' %}Agosto
	  {% when '9' %}Septiembre
	  {% when '10' %}Octubre
	  {% when '11' %}Noviembre
	  {% when '12' %}Diciembre
	{% endcase %} de
	{{ post.date | date: "%Y" }}
      </p>
    </div>
  </a>
</div>
<!--<br/>-->
{% endfor %}

