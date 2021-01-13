function canGenPoints(){
	return true
}

function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade("l", 11)) gain = gain.mul(upgradeEffect("l", 11))
	return gain
}



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
		mult = mult.mul(buyableEffect("l", 11))
        if (hasUpgrade("t", 11)) mult = mult.times(upgradeEffect("t", 11))
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
    tabFormat: {
		"Upgrades": {
			content: [["raw-html", function() {return "You have " + layerText("h2", "l", formatWhole(player.l.points)) + " lines"}],
                    "blank","prestige-button","blank",
                   ["raw-html", function() {return (player.l.points.lt(1000))?("You have <h5 id='color:#ffffff;'>" + formatWhole(player.points) + "</h5> points"):""}],
                    "blank","upgrades"],
			},
		"Buyables": {
			content: [["raw-html", function() {return "You have " + layerText("h2", "l", formatWhole(player.l.points)) + " lines"}],
                    "blank","buyables"],
			},
		},
    upgrades: {
        rows: 4,
        cols: 4,
        11: {
            description: "Lines boost point gain.",
            cost: new Decimal(1),
            effect() {
                let eff = new Decimal(player.l.points).add(2).pow(0.4).max(1)
                if (hasUpgrade("l", 12)) eff = eff.times(tmp.l.upgrades[12].effect)
                return eff
            },
            tooltip() {return "Currently: x" + format(this.effect())},
        },
        12: {
            description: "Boost the previous upgrade based on bought upgrades.",
            cost: new Decimal(5),
            effect() {
                let eff = Decimal.pow(2, player.l.upgrades.length)
                if (hasUpgrade("l", 13)) eff = eff.times(tmp.l.upgrades[13].effect)
                return eff
            },
            tooltip() {return "Currently: x" + format(this.effect())},
            unlocked() {return (hasUpgrade("l", 11))}
        },
        13: {
            description: "Boost the previous upgrade based on points.",
            cost: new Decimal(20),
            effect() {
                let eff = new Decimal(player.points).add(1).log(2).add(1)
                if (hasUpgrade("l", 21)) eff = eff.times(tmp.l.upgrades[21].effect)
                return eff
            },
            tooltip() {return "Currently: x" + format(this.effect())},
            unlocked() {return (hasUpgrade("l", 12))}
        },
		14: {
			description: "Unlock the first line buyable.",
			cost: new Decimal(60),
			unlocked() {return (hasUpgrade("l", 13))}
		},
        21: {
            description: "Boost the previous boost upgrade based on time spent since reset.",
            cost: new Decimal(100),
            effect() {
                let eff = new Decimal(player.l.resetTime).add(1).pow(0.25)
                if (hasUpgrade("l", 22)) eff = eff.times(tmp.l.upgrades[22].effect)
                return eff
            },
            tooltip() {return "Currently: x" + format(this.effect())},
            unlocked() {return (hasUpgrade("l", 14))}
        },
        22: {
            description: "Boost the previous upgrade based on your total lines.",
            cost: new Decimal(400),
            effect() {
                let eff = new Decimal(player.l.total).add(1).pow(1/3)
                if (hasUpgrade("l", 23)) eff = eff.times(tmp.l.upgrades[23].effect)
                return eff
            },
            tooltip() {return "Currently: x" + format(this.effect())},
            unlocked() {return (hasUpgrade("l", 21))}
        },
        23: {
            description: "Boost the previous upgrade based on your points (again).",
            cost: new Decimal(2000),
            effect() {
                return new Decimal(player.points).add(1).log(3).add(1)
            },
            tooltip() {return "Currently: x" + format(this.effect())},
            unlocked() {return (hasUpgrade("l", 22))}
        },
    },
	buyables: {
		rows: 2,
		cols: 2,
		11: {
			title: "Parallel Lines",
	        cost() { return new Decimal(100).mul(Decimal.pow(2.5, getBuyableAmount(this.layer, this.id))) },
			description: "Boost line gain.",
			effect() { return Decimal.pow(1.5, getBuyableAmount(this.layer, this.id)) },
			effectDisplay() {return "x" + format(this.effect()) + " line gain"},
	        canAfford() { return player[this.layer].points.gte(this.cost()) },
	        buy() {
	            player[this.layer].points = player[this.layer].points.sub(this.cost())
	            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
        	},
		},
	},
    doReset(rLayer) {
        if (rLayer == "l") player.l.resetTime = 0
        if (layers[rLayer].row > this.row) {
            player.l.points = new Decimal(0)
            player.l.total = new Decimal(0)
            player.l.best = new Decimal(0)
            let keep = []
            layerDataReset(this.layer, keep)
            if (hasUpgrade("t", 13)) player.l.upgrades.push(11,12,13,14)
        }
    }
})



addLayer("t", {
    name: "triangle", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "T", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "rgb(94, 247, 59)",
    requires: new Decimal(25000), // Can be a function that takes requirement increases into account
    resource: "triangles", // Name of prestige currency
    baseResource: "lines", // Name of resource prestige is based on
    baseAmount() {return player.l.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    branches: ["l"],
    hotkeys: [
        {key: "t", description: "T: Reset for triangles", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    tabFormat: [["raw-html", function() {return "You have " + layerText("h2", "t", formatWhole(player.t.points)) + " triangles"}],
                    "blank","prestige-button","blank",
                   ["raw-html", function() {return (player.t.points.lt(1000))?("You have " + layerText("h5", "l", formatWhole(player.l.points)) + " lines"):""}],
                    "blank","upgrades"],
    upgrades: {
        rows: 4,
        cols: 4,
        11: {
            description: "Triangles boost line gain.",
            cost: new Decimal(1),
            effect() {
                let eff = new Decimal(player.t.points).add(4).sqrt()
                if (hasUpgrade("t", 11)) eff = eff.mul(tmp.t.upgrades[12].effect)
                return eff
            },
            tooltip() {return "Currently: x" + format(this.effect())}
        },
        12: {
            description: "Boost the previous upgrade based on lines.",
            cost: new Decimal(5),
            effect() {
                let eff = new Decimal(player.l.points).add(1).log(16).add(1)
                return eff
            },
            tooltip() {return "Currently: x" + format(this.effect())},
            unlocked() {return (hasUpgrade("t", 11))}
        },
        13: {
            description: "Keep the first row of line upgrades.",
            cost: new Decimal(10),
            unlocked() {return (hasUpgrade("t", 12))}
        },
    }
})
