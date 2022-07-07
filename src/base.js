export const getrequest = (url) => {
    return new Promise((succeed, fail) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {
            if (xhr.status == 200)
                succeed(xhr.response);
            else
                fail(`HTTP request failed: ${xhr.statusText}`);
        });
        xhr.addEventListener("error", () => fail("Network error"));
        xhr.send();
  });
}
