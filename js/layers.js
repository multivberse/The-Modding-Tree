addLayer("l", {
    name: "line", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "rgb(65, 124, 242)",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "lines", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "l", description: "L: Reset for lines", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    tabFormat: [["raw-html", function() {return "You have " + layerText("h2", "l", formatWhole(player.l.points)) + " lines"}],
                    "blank","prestige-button","blank",
                   ["raw-html", function() {return (player.l.points.lt(1000))?("You have <h5 id='color:#ffffff;'>" + format(player.points) + "</h5> points"):""}],
                    "blank","upgrades"],
    upgrades: {
        rows: 3,
        cols: 3,
        11: {
            description: "Lines boost point gain.",
            cost: new Decimal(1),
            effect() {
                return new Decimal(player.l.points).pow(0.4).max(1)
            },
            tooltip() {return "Currently: x" + format(this.effect())}
        }
    }
})
