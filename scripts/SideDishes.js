import { getSides, setSide } from "./database.js"

const sides = getSides()

document.addEventListener("change", (event) => {
    if (event.target.name === "sideDish") {
        setSide(parseInt(event.target.value))
    }
})



export const Sides = () => {
    let html = "<ul>";

    const listItems = sides.map(side => {
        return `<li>
            <input type="radio" name="sideDish" value="${side.id}" /> ${side.title}
        </li>`
    });

    html += listItems.join("");
    html += "</ul>";

    return html;
    
};


// Requirement: The radio input elements that this component funcion renders must all have a name of "sideDish"