document.getElementById('logout').addEventListener("click", function () {
            window.location.assign('./index.html')
        })

        document.getElementById('viewall').addEventListener("click", function () {
            const update = document.getElementById('update');
            update.classList.toggle('hidden');
        })
