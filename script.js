function togglemenu(){
    const menutoggle = document.querySelector('.toggle')
    const sidebar = document.querySelector('.sidebar')
    const imgsidebar = document.querySelector('.imgsidebar')
    const img2 = document.querySelector('.img2')
    const img3 = document.querySelector('.img3')
    
    menutoggle.classList.toggle('active')
    sidebar.classList.toggle('active')
    imgsidebar.classList.toggle('active')
    img2.classList.toggle('active')
    img3.classList.toggle('active')
}

