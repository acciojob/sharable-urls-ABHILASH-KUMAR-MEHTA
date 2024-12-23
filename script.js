// your code here
document.getElementById("button").addEventListener("click", function () {
            const name = document.getElementById("name").value.trim();
            const year = document.getElementById("year").value.trim();

            let url = "https://localhost:8080/?";
            const params = [];

            if (name) {
                params.push(`name=${encodeURIComponent(name)}`);
            }

            if (year) {
                params.push(`year=${encodeURIComponent(year)}`);
            }

            if (params.length > 0) {
                url += params.join("&");
            } else {
                url = "https://localhost:8080/";
            }

            document.getElementById("url").textContent = url;
        });