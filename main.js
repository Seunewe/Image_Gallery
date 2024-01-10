const panels = document.querySelectorAll('.panel');
const panelxx = document.querySelectorAll('.panelx');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })

    const removeActiveClasses = () => {
        panels.forEach((panel) => {
            panel.classList.remove('active');
        })
    }
})

panelxx.forEach((panelx) => {
    panelx.addEventListener('click', () => {
        removeActiveClasses();
        panelx.classList.add('active');
    })

    const removeActiveClasses = () => {
        panelxx.forEach((panelx) => {
            panelx.classList.remove('active');
        })
    }
})

