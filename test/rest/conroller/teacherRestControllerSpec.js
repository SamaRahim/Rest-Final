describe("teacherRestController", function(params) {
    var teacherModel = require('../../../src/rest/model/teachertModel');

    var teacherModelSpied = {
        echoMsg: jasmine.createSpy(),
        find: jasmine.createSpy(),
        findById: jasmine.createSpy(),
        save: jasmine.createSpy(),
        findByIdUpdateFullyThenSave: jasmine.createSpy(),
        findByIdUpdatePartiallyThenSave: jasmine.createSpy(),
        findByIdThenRemove: jasmine.createSpy(),
        findByIdInBodyThenRemove: jasmine.createSpy()
    };

    var studentRestController = require('../../../src/rest/controller/teacherRestController')(studentModelSpied);

    var request = { params: { id: 1 } };
    var response = {
        send: jasmine.createSpy(),
        status: jasmine.createSpy()
    };

    describe("GET /teacher/echo/:msg", function() {
        it('should call teacherModel.echoMsg function', function() {

        });
    });

    describe("GET /students", function() {
        it('teacherRestController.find should call teacherModel.find function', function() {
            teacherRestController.find(request, response);
            expect(teacherModelSpied.find).toHaveBeenCalled();
        });
    });

});