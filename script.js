document.addEventListener("DOMContentLoaded", function() {
    
    const dashboardSection = document.getElementById("dashboard-section");
    const analyticsSection = document.getElementById("analytics-section");
    const reportsSection = document.getElementById("reports-section");
    
    const navDashboard = document.getElementById("nav-dashboard");
    const navAnalytics = document.getElementById("nav-analytics");
    const navReports = document.getElementById("nav-reports");

    const allLinks = [navDashboard, navAnalytics, navReports];

    function hideAllSections() {
        dashboardSection.style.display = "none";
        analyticsSection.style.display = "none";
        reportsSection.style.display = "none";
        
        allLinks.forEach(link => link.setAttribute("aria-selected", "false"));
    }

    function fadeInSection(section, activeLink) {
        section.style.display = "block";
        section.style.animation = "fadeInUp 0.3s ease-out forwards"; // Faster animation for brutalism
        activeLink.setAttribute("aria-selected", "true");
    }

    navDashboard.addEventListener("click", function(e) {
        e.preventDefault();
        hideAllSections();
        dashboardSection.style.display = "flex"; 
        navDashboard.setAttribute("aria-selected", "true");
    });

    navAnalytics.addEventListener("click", function(e) {
        e.preventDefault();
        hideAllSections();
        fadeInSection(analyticsSection, navAnalytics);
    });

    navReports.addEventListener("click", function(e) {
        e.preventDefault();
        hideAllSections();
        fadeInSection(reportsSection, navReports);
    });

    // Brutalist Button Interaction
    document.getElementById("start-btn").addEventListener("click", function() {
        this.innerText = "ACTIVE";
        this.style.backgroundColor = "#000000"; 
        this.style.color = "#ccff00"; // Acid green text
        document.getElementById("status-message").style.display = "block";
    });

    const calculateBtn = document.getElementById("calculate-btn");
    const treeInput = document.getElementById("trees");
    const flightInput = document.getElementById("flights");
    const errorMsg = document.getElementById("error-msg");
    const resultDisplay = document.getElementById("result-display");
    const co2Result = document.getElementById("co2-result");

    calculateBtn.addEventListener("click", function() {
        const trees = parseInt(treeInput.value);
        const flights = parseInt(flightInput.value);

        if (isNaN(trees) || isNaN(flights)) {
            errorMsg.innerText = " ERROR: ENTER VALID NUMBERS. ";
            errorMsg.style.padding = "10px";
            resultDisplay.style.display = "none";
            return;
        }
        
        if (trees < 0 || flights < 0) {
            errorMsg.innerText = " ERROR: NEGATIVE VALUES REJECTED. ";
            errorMsg.style.padding = "10px";
            resultDisplay.style.display = "none";
            return;
        }

        errorMsg.innerText = "";
        errorMsg.style.padding = "0";
        
        const treeOffset = trees * 21; 
        const flightOffset = flights * 250; 
        const totalOffset = treeOffset + flightOffset;

        co2Result.innerText = totalOffset;
        resultDisplay.style.display = "block";
    });
});