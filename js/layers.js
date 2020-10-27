addLayer("u", {
        name: "unit", // This is optional, only used in a few places, If absent it just uses the layer id.
        symbol: "U", // This appears on the layer's node. Default is the id with the first letter capitalized
        position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
        startData() { return {
            unlocked: true,
		  	points: new Decimal(0),
        }},
        color: "#56E38A",
        requires: new Decimal(10), // Can be a function that takes requirement increases into account
        resource: "units", // Name of prestige currency
        baseResource: "points", // Name of resource prestige is based on
        baseAmount() {return player.points}, // Get the current amount of baseResource
        type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
        exponent: 0.5, // Prestige currency exponent
        gainMult() { // Calculate the multiplier for main currency from bonuses
            mult = new Decimal(1)
            if (hasUpgrade(this.layer, 21)) mult = mult.times(2)
            if (hasUpgrade(this.layer, 22)) mult = mult.times(upgradeEffect(this.layer, 22))
            if (hasUpgrade(this.layer, 23)) mult = mult.times(upgradeEffect(this.layer, 23))
            if (hasUpgrade("b", 11)) mult = mult.times(upgradeEffect("b", 11))
            return mult
        },
        gainExp() { // Calculate the exponent on main currency from bonuses
            return new Decimal(1)
        },
        row: 0, // Row the layer is in on the tree (0 is the first row)
        hotkeys: [
            {key: "u", description: "Reset for units", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
        ],
        layerShown(){return true},
        upgrades: {
            rows: 2,
            cols: 3,
            11: {
                description: "Generate 1 point per second.",
                cost: new Decimal(1)
            },
            12: {
                description: "Boost point generation based on unspent units.",
                cost: new Decimal(1),
                unlocked() { return hasUpgrade(this.layer, 11)},
                effect() { return new Decimal(player[this.layer].points).add(1).pow(0.6) },
                effectDisplay() { return "x" + format(this.effect()) }
            },
            13: {
                description: "Boost point generation based on points.",
                cost: new Decimal(5),
                unlocked() { return hasUpgrade(this.layer, 12)},
                effect() { return new Decimal(player.points).add(1).pow(0.25) },
                effectDisplay() { return "x" + format(this.effect()) }
            },
            21: {
                description: "Double unit gain.",
                unlocked() { return hasUpgrade(this.layer, 13)},
                cost: new Decimal(15)
            },
            22: {
                description: "Boost unit gain based on unspent units.",
                cost: new Decimal(40),
                unlocked() { return hasUpgrade(this.layer, 21)},
                effect() { return new Decimal(player[this.layer].points).add(1).pow(0.15) },
                effectDisplay() { return "x" + format(this.effect()) }
            },
            23: {
                description: "Boost unit gain based on points.",
                cost: new Decimal(100),
                unlocked() { return hasUpgrade(this.layer, 21)},
                effect() { return new Decimal(player.points).add(1).log(5).div(1.6).add(1) },
                effectDisplay() { return "x" + format(this.effect()) }
            },
        }
})
addLayer("b", {
        name: "booster", // This is optional, only used in a few places, If absent it just uses the layer id.
        symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
        position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
        startData() { return {
            unlocked: true,
		  	points: new Decimal(0),
        }},
        color: "#3A94E8",
        requires: new Decimal(5000), // Can be a function that takes requirement increases into account
        resource: "boosters", // Name of prestige currency
        baseResource: "points", // Name of resource prestige is based on
        baseAmount() {return player.points}, // Get the current amount of baseResource
        type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
        exponent: 1.15, // Prestige currency exponent
        base: 5,
        branches: ["u"],
        effect() {
            mult = new Decimal(2).pow(player[this.layer].points).max(1)
            if (hasUpgrade(this.layer, 12)) mult = mult.times(upgradeEffect(this.layer, 12))
            return mult
        },
        effectDescription() {return "which are boosting point generation by x" + format(this.effect())},
        gainMult() { // Calculate the multiplier for main currency from bonuses
            mult = new Decimal(1)
            return mult
        },
        gainExp() { // Calculate the exponent on main currency from bonuses
            return new Decimal(1)
        },
        row: 1, // Row the layer is in on the tree (0 is the first row)
        hotkeys: [
            {key: "b", description: "Reset for boosters", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
        ],
        layerShown() {return (player["u"].points.gte(100)) || player[this.layer].unlocked},
        upgrades: {
            rows: 1,
            cols: 2,
            11: {
                description: "Boosters also boost unit gain.",
                cost: new Decimal(2),
                effect() { return new Decimal(2).pow(player[this.layer].points.add(1)).max(1).pow(0.4) },
                effectDisplay() { return "x" + format(this.effect()) },
            },
            12: {
                description: "Units multiply the booster effect.",
                cost: new Decimal(4),
                unlocked() { return hasUpgrade(this.layer, 11)},
                effect() { return new Decimal(player["u"].points).add(1000).log(1000).max(1) },
                effectDisplay() { return "x" + format(this.effect()) }
            },
        }
})
