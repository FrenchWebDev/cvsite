// scroll_page
const page = document.getElementById("page");
const scroll_page_btn = document.getElementById("scroll_page_btn");
const btn_close_page = document.getElementById("btn_close_page");

scroll_page_btn.addEventListener("click", () => {
    page.classList.toggle("active_page")
    scroll_page_btn.setAttribute("style", "display:none;")
})
btn_close_page.addEventListener("click", () => {
    page.classList.toggle("active_page")
    scroll_page_btn.setAttribute("style", "display:block;")
})

