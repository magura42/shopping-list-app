import ajax from "nanoajax";
export function postUser(user, callback) {
    ajax.ajax({
        url: "/api/user",
        method: "POST",
        body: "firstName=" + user.firstName + "&lastName=" + user.lastName
    }, function (code) {
        callback(code);
    });
}
export function fetchUsers(callback) {
    ajax.ajax({
        url: "/api/users",
        method: "GET"
    }, function (_, response) {
        callback(JSON.parse(response));
    });
}
//# sourceMappingURL=ajaxcalls.js.map