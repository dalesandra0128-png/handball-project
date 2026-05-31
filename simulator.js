function showPosition(){

    const position =
        document.getElementById("positionSelect").value;

    const info =
        document.getElementById("positionInfo");

    if(position === ""){

        info.innerHTML =
        "<p>Please select a position.</p>";

        return;
    }

    const positions = {

        goalkeeper: {
            title: "Goalkeeper",
            role: "Last line of defense.",
            skills: "Reflexes, agility, leadership.",
            duties: "Stops shots and starts counterattacks."
        },

        backcourt: {
            title: "Backcourt Player",
            role: "Attack organizer.",
            skills: "Strength, vision, long-range shooting.",
            duties: "Creates opportunities and supports defense."
        },

        wing: {
            title: "Wing",
            role: "Fast attacking player.",
            skills: "Speed, agility, technical control.",
            duties: "Scores from difficult angles and leads fast breaks."
        },

        pivot: {
            title: "Pivot",
            role: "Space creator near the goal.",
            skills: "Strength, balance, tactical awareness.",
            duties: "Creates scoring opportunities under pressure."
        }

    };

    const p = positions[position];

    info.innerHTML = `
        <h3>${p.title}</h3>

        <p><strong>Role:</strong> ${p.role}</p>

        <p><strong>Key Skills:</strong> ${p.skills}</p>

        <p><strong>Main Duties:</strong> ${p.duties}</p>
    `;
} 
