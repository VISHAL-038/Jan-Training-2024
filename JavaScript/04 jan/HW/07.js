var score = 85;
    var grade;

    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
    }

    console.log("Grade: " + grade);

    // Display result in HTML
    document.write("<p>Grade: " + grade + "</p>");