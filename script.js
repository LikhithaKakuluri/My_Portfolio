document.addEventListener("DOMContentLoaded", function() {
    const headingElement = document.getElementById("heading-text");
    const textElement = document.getElementById("animated-text");

    const sections = [
        {
            heading: "Introduction:",
            points: ["Hello! I'm Kakuluri Likhitha."]
        },
        {
            heading: "Profession:",
            points: ["AI and ML Python developer with a strong background in data analysis."]
        },
        {
            heading: "Specialization:",
            points: [
                "Creating predictive models.",
                "Developing dynamic dashboards that turn data into actionable insights."
            ]
        },
        {
            heading: "Approach to Problem-Solving:",
            points: ["Combines technical expertise with a passion for innovation."]
        },
        {
            heading: "Commitment:",
            points: [
                "Committed to continuous learning.",
                "Excited about opportunities in artificial intelligence and machine learning."
            ]
        }
    ];

    let sectionIndex = 0;
    let pointIndex = 0;
    let wordIndex = 0;

    function displayNextWord() {
        if (sectionIndex < sections.length) {
            const section = sections[sectionIndex];
            const points = section.points;
            const line = points[pointIndex];
            const words = line.split(" ");

            if (wordIndex < words.length) {
                const span = document.createElement("span");
                span.className = "word";
                span.style.animationDelay = `${wordIndex * 0.1}s`;
                span.textContent = words[wordIndex] + " ";
                textElement.appendChild(span);
                wordIndex++;
                setTimeout(displayNextWord, 100); // Adjust the speed of word display
            } else {
                // Add a line break after each point
                textElement.appendChild(document.createElement("br"));
                pointIndex++;
                wordIndex = 0;

                if (pointIndex >= points.length) {
                    // Add space between sections
                    textElement.appendChild(document.createElement("br"));
                    
                    sectionIndex++;
                    pointIndex = 0;

                    if (sectionIndex < sections.length) {
                        // Add the next section heading
                        const heading = document.createElement("h3");
                        heading.textContent = sections[sectionIndex].heading;
                        textElement.appendChild(heading);
                    }

                    // Delay before starting the next section
                    setTimeout(displayNextWord, 500);
                } else {
                    setTimeout(displayNextWord, 500); // Delay before displaying the next point
                }
            }
        }
    }

    // Add the "About Me" heading initially
    headingElement.innerHTML = "<h1>About Me</h1>";

    // Start displaying the first section
    const firstHeading = document.createElement("h3");
    firstHeading.textContent = sections[0].heading;
    textElement.appendChild(firstHeading);
    
    setTimeout(displayNextWord, 500); // Delay before starting animation
});
