document.addEventListener('DOMContentLoaded', function () {
    const ectsForm = document.getElementById('ectsForm');
    const resultDiv = document.getElementById('result');

    ectsForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Get the input values
        const ects_type = document.getElementById('ects_type').value;
        let CP_acquired = parseFloat(document.getElementById('CP_acquired').value);
        const years_of_degree = parseInt(document.getElementById('years_of_degree').value);
        const total_credits_of_degree = parseFloat(document.getElementById('total_credits_of_degree').value);
        
        // Input validation
        if (isNaN(CP_acquired) || isNaN(years_of_degree) || isNaN(total_credits_of_degree) ||
            CP_acquired <= 0 || years_of_degree <= 0 || total_credits_of_degree <= 0) {
            resultDiv.textContent = "Please enter valid positive numbers.";
            resultDiv.style.color = "red";
            return;
        }
        
        // Calculate ECTS course
        let ECTS_course;
        let outputMessage;
        if (ects_type === "degree") {
            ECTS_course = CP_acquired * (60 * years_of_degree) / total_credits_of_degree;
            outputMessage = "ECTS earned for the degree: ";
        } else {
            const CP_course = CP_acquired; // For subject specific ECTS
            ECTS_course = CP_course * (60 * years_of_degree) / total_credits_of_degree;
            const subject_name = document.getElementById('subject_name').value;
            outputMessage = "ECTS earned for " + subject_name + ": ";
        }
        
        // Display the result
        resultDiv.textContent = outputMessage + ECTS_course.toFixed(2);
        resultDiv.style.color = "#007bff";
        resultDiv.style.fontSize = "24px"; // Make the output text larger
        
        // Reset form
        ectsForm.reset();
    });

    // Show/hide subject name field based on ECTS type selection
    const ectsTypeSelect = document.getElementById('ects_type');
    const subjectSpecificField = document.getElementById('subject_specific_field');

    ectsTypeSelect.addEventListener('change', function () {
        if (ectsTypeSelect.value === 'subject_specific') {
            subjectSpecificField.style.display = 'block';
        } else {
            subjectSpecificField.style.display = 'none';
        }
    });
});
