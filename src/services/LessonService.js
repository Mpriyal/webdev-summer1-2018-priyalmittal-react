const LESSON_API_URL = 'http://localhost:8080/api/course/CID/module/MID/lesson';
const LESSON_API = 'http://localhost:8080/api/lesson';
let _singleton = Symbol();

export default class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }

    createLesson(courseId, moduleId, lesson) {
        return fetch(LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId),
            {
                body: JSON.stringify(lesson),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json();
        }
        )
    }

    findAllLessons() {
        return fetch(
            LESSON_API)
            .then(function (response) {
                return response.json();
            }
            )
    }

    findAllLessonsForModule(courseId, moduleId) {
            return fetch(
                LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId))
                .then(function (response) {
                    if(response.status === 500) {
                        return null;
                    }
                    else {
                        return response.json();
                        console.log(response);
                    }
                })
    }

    deleteLesson(lessonId) {
        return fetch(LESSON_API+ '/' +lessonId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }


}