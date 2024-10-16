document.addEventListener('DOMContentLoaded', () => {
    function showPage(pageId) {
        // Hide all pages with transition
        document.querySelectorAll('.google, .facebook').forEach(page => {
            page.classList.remove('active');
        });

        // Show the selected page with transition
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.classList.add('active');
        }

        // Reset dot colors
        document.querySelectorAll('.gf-pagination-dots .gf-dot').forEach(dot => {
            const svgElement = dot.querySelector('path, circle');
            if (svgElement) {
                svgElement.setAttribute('fill', '#28B1BB');
            }
        });

        // Highlight the active dot
        const activeDot = document.querySelector(`.gf-pagination-dots .gf-dot[data-page="${pageId}"] svg path, .gf-pagination-dots .gf-dot[data-page="${pageId}"] svg circle`);
        if (activeDot) {
            activeDot.setAttribute('fill', '#EE8725');
        }
    }

    // Event listener for pagination dots
    document.querySelectorAll('.gf-pagination-dots .gf-dot').forEach(dot => {
        dot.addEventListener('mouseenter', (event) => {
            event.preventDefault();
            const pageId = dot.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Show the first page initially
    showPage('page1');
});
