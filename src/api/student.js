import { basePath } from './config';
import { getAccessTokenApi } from './auth';

export function getStudentsFromSchool(id_school) {
    const url = `${basePath}/school/${id_school}/student`;
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(url, params)
        .then(res => res.json())
        .then(json => json)
        .catch(err => err.message);
}

export function getStudentFromSchool(id_school, username) {
    const url = `${basePath}/school/${id_school}/student/${username}`;
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(url, params)
        .then(res => res.json())
        .then(json => json)
        .catch(err => err.message);
}

export function getStudentsFromCourse(id_school, course_code) {
    const url = `${basePath}/school/${id_school}/course/${course_code}/student`;
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(url, params)
        .then(res => res.json())
        .then(json => json)
        .catch(err => err.message);
}

export function addStudent(data) {
    const url = `${basePath}/student`;
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getAccessTokenApi()}`
        },
        body: JSON.stringify(data)
    };

    return fetch(url, params)
        .then(res => res.json())
        .then(json => json)
        .catch(err => err.message);
}

export function editStudent(username, data) {
    const url = `${basePath}/student/${username}`;
    const params = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getAccessTokenApi()}`
        },
        body: JSON.stringify(data)
    };

    return fetch(url, params)
        .then(res => res.json())
        .then(json => json)
        .catch(err => err.message);
}

export function delStudent(username) {
    const url = `${basePath}/student/${username}`;
    const params = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getAccessTokenApi()}`
        },
    };

    return fetch(url, params)
        .then(res => res.json())
        .then(json => json)
        .catch(err => err.message);
}
