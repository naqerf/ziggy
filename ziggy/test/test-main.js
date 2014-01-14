var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/ziggy/src',
    paths: {
        'Squire': '../../node_modules/squirejs/src/Squire',
        'AsyncSpec': '../test/lib/jasmine.async',
        'formDataRepositoryContext': '../test/stub/formDataRepositoryContext',
        'formSubmissionRouter': '../test/stub/formSubmissionRouter'
    },
    shim: {
        'AsyncSpec': {
            exports: 'AsyncSpec'
        },
        'formDataRepositoryContext': {
            exports: 'formDataRepositoryContext'
        },
        'formSubmissionRouter': {
            exports: 'formSubmissionRouter'
        }
    }
});

require(tests, function () {
    window.__karma__.start();
});