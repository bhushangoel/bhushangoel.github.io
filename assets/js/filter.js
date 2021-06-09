(function () {
    let companies = document.querySelector("#companies");
    companies.addEventListener('change', (e) => {
        console.log('e : ', e.target.value);
    })
})();