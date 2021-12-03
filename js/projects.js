var converter = new showdown.Converter();
var PROJECTS = [];
var WORKSHOPS = [];

function clickChangeTag() {
  let inputTag = document.getElementById("inputTag");
  filterTagsProjects(inputTag.value);
}

function filterTagsProjects(tag) {
  let projects = [];
  let project;
  for (let i = 0; i < PROJECTS.length; i++) {
    project = PROJECTS[i];
    const uppercased = project.tags.map(t => t.toUpperCase());
    if (uppercased.includes(tag.toUpperCase())) {
      projects.push(project);
    }
  }
  showProjects(projects);
}

function showProjects(projects) {
  let projects_div = document.getElementById("projects");
  let myHTML = '';
  let project;
  let extraImageHTML;

  for (let i = 0; i < projects.length; i++) {
    project = projects[i];
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
  
  projects_div.innerHTML = myHTML;
}

function jsonEscape(str)  {
  return str.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t");
}