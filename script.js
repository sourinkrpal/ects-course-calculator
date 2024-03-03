document.addEventListener('DOMContentLoaded', function () {
    const ectsForm = document.getElementById('ectsForm');

    ectsForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Get the input values
        const CP_course = parseFloat(document.getElementById('CP_course').value);
        const years_of_degree = parseInt(document.getElementById('years_of_degree').value);
        const total_credits_of_degree = parseFloat(document.getElementById('total_credits_of_degree').value);
        
        // Calculate ECTS course
        const ECTS_course = CP_course * (60 * years_of_degree) / total_credits_of_degree;
        
        // Display the result
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = "Number of ECTS for the course: " + ECTS_course.toFixed(2);
    });
});
