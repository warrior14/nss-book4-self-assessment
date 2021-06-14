import { getVeggies, getSides, getEntrees, getPurchases } from "./database.js"

const veggies = getVeggies()
const sides = getSides()
const entrees = getEntrees()

const buildOrderListItem = (purchase) => {
    console.log('Purchase', purchase.veggieId);

    const veggiePrice = veggies.find(
        (veggie) => {
            console.log('veggie', veggie.id);
            return veggie.id === purchase.veggieId;
        }
    )

        
    const sidePrice = sides.find(
        (side) => {
            return side.id === purchase.sideId;
        }
    )


    const entreePrice = entrees.find(
        (entree) => {
            return entree.id === purchase.entreeId;
        }
    )


    console.log(`veggieprice ${veggiePrice}, entreprice ${JSON.stringify(entreePrice)}, sideprice ${JSON.stringify(sidePrice) }`);
    const total = veggiePrice.price + entreePrice.price + sidePrice.price

    return `<li>
        Receipt #${purchase.id} = ${total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}
    </li>`
}

export const Sales = () => {
    const sales = getPurchases()
    return `
        <ul>
            ${sales.map(
                (sale) => {
                    // Reflect: What is the scope of this `return` keyword?
                    return buildOrderListItem(sale)
                }
            ).join("")}
        </ul>`
}

