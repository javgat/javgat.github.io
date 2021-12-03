var converter = new showdown.Converter();
var PROJECTS = [];
var WORKSHOPS = [];
let projects_tag_filter = [];

function clickChangeTag() {
  let inputTag = document.getElementById("inputTag");
  filterTagsProjects(inputTag.value);
}

function uiDeactivateTag(tag) {
  let badge = document.getElementById("badge-" + tag);
  badge.className = badge.className.replace(/(?:^|\s)bg-primary(?!\S)/g, ' bg-secondary ')
}

function uiActivateTag(tag) {
  let badge = document.getElementById("badge-" + tag);
  badge.className = badge.className.replace(/(?:^|\s)bg-secondary(?!\S)/g, ' bg-primary ')
}

function filterTagsProjects(tag) {
  if (projects_tag_filter.includes(tag)) { 
    projects_tag_filter = projects_tag_filter.filter(t => t != tag);
    uiDeactivateTag(tag);
  } else {
    projects_tag_filter.push(tag);
    uiActivateTag(tag);
  }
  filterProjectsOR();
}

function filterProjectsOR() {
  let projects = [];
  let project;
  if (projects_tag_filter.length == 0) {
    projects = PROJECTS;
  } else {
    for (let i = 0; i < PROJECTS.length; i++) {
      project = PROJECTS[i];
      const uppercased = project.tags.map(t => t.toUpperCase());
      for (let j = 0; j < projects_tag_filter.length; j++) {
        let tag = projects_tag_filter[j];
        if (uppercased.includes(tag.toUpperCase())) {
          projects.push(project);
        }
      }
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