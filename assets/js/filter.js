(function () {
    let companies = document.querySelector("#companies");
    companies.addEventListener('change', (e) => {
        console.log('e : ', e.target.value);
        document.querySelector(".selected_company").textContent = `{% capture my_variable %}${e.target.value}{% endcapture %}`;
    })
})();