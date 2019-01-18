$(document).ready(function() {
    $.getJSON('/data/projects.json', function (projects) {
        let template = $('#projectTemplate').html();
        let $projects = $();
        projects.forEach(function (project) {
            let $project = $(template);
            $('.card-title', $project).text(project.name);
            $('.card-text', $project).text(project.description);
            $('.card-page', $project).attr('href', project.page);
            $('.card-link', $project).attr('href', project.source);
            $projects = $projects.add($project);
        });
        $('#projectContainer').html($projects);
    });
});
