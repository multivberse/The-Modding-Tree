var devSaveBank = ["eyJ0YWIiOiJvcHRpb25zIiwidGltZSI6MTYwNDM0NTE3ODA4NywiYXV0b3NhdmUiOnRydWUsIm5vdGlmeSI6e30sIm1zRGlzcGxheSI6ImFsd2F5cyIsIm9mZmxpbmVQcm9kIjp0cnVlLCJ2ZXJzaW9uVHlwZSI6Im15bW9kIiwidmVyc2lvbiI6IjAuMCIsInRpbWVQbGF5ZWQiOjcwMjUuNDMzODE2MzQ5Mjg3LCJrZWVwR29pbmciOmZhbHNlLCJoYXNOYU4iOmZhbHNlLCJoaWRlQ2hhbGxlbmdlcyI6ZmFsc2UsImZyYW1lcmF0ZSI6ZmFsc2UsInBvaW50cyI6IjE4MzI5OTk4LjU0OTU4MjIiLCJzdWJ0YWJzIjp7fSwidSI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiOTMyNiIsInVwZ3JhZGVzIjpbMTEsMTIsMTMsMjEsMjIsMjMsMTRdLCJtaWxlc3RvbmVzIjpbXSwiY2hhbGxlbmdlcyI6W10sInNwZW50T25CdXlhYmxlcyI6IjAiLCJidXlhYmxlcyI6e30sImNsaWNrYWJsZXMiOnt9LCJhY2hpZXZlbWVudHMiOltdfSwibSI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiNCIsImJ1eWFibGVzIjp7fSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WzExLDEyLDEzXSwibWlsZXN0b25lcyI6W10sImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9fSwiYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMCIsImJ1eWFibGVzIjp7fSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WzExXSwibWlsZXN0b25lcyI6W10sImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9fSwiZGV2U3BlZWQiOjF9"]

addLayer("u", {
        name: "unit", // This is optional, only used in a few places, If absent it just uses the layer id.
        symbol: "U", // This appears on the layer's node. Default is the id with the first letter capitalized
        position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
        startData() { return {
            unlocked: true,
		  	points: new Decimal(0),
        }},
        color: "#66F542",
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
            if (hasUpgrade("m", 11)) mult = mult.times(upgradeEffect("m", 11))
            return mult
        },
        gainExp() { // Calculate the exponent on main currency from bonuses
            return new Decimal(1)
        },
        row: 0, // Row the layer is in on the tree (0 is the first row)
        hotkeys: [
            {key: "u", description: "U: Reset for units", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
        ],
        layerShown(){return true},
        upgrades: {
            rows: 2,
            cols: 4,
            11: {
                title: "U1;1",
                description: "Generate 1 point per second.",
                cost: new Decimal(1)
            },
            12: {
                title: "U1;2",
                description: "Boost point generation based on unspent units.",
                cost: new Decimal(1),
                unlocked() { return hasUpgrade(this.layer, 11)},
                effect() { return new Decimal(player[this.layer].points).add(1).pow(0.6).mul((hasUpgrade(this.layer,22))?upgradeEffect(this.layer,22):1) },
                effectDisplay() { return "x" + format(this.effect()) }
            },
            13: {
                title: "U1;3",
                description: "Boost point generation based on points.",
                cost: new Decimal(5),
                unlocked() { return hasUpgrade(this.layer, 12)},
                effect() { return new Decimal(player.points).add(1).pow(0.25).mul((hasUpgrade(this.layer,23))?upgradeEffect(this.layer,23):1) },
                effectDisplay() { return "x" + format(this.effect()) },
                onPurchase() { player["m"].unlocked = true }
            },
            14: {
                title: "U1;4",
                description: "Boost unit gain based on points.",
                cost: new Decimal(1000),
                unlocked() { return hasUpgrade(this.layer, 13) && hasUpgrade("m", 13)},
                effect() { return new Decimal(player.points).add(1).pow(0.15) },
                effectDisplay() { return "x" + format(this.effect()) }
            },
            21: {
                title: "U2;1",
                description: "Double unit gain.",
                unlocked() { return hasUpgrade(this.layer, 13)},
                cost: new Decimal(10)
            },
            22: {
                title: "U2;2",
                description: "Boost 1;2 based on unspent units.",
                cost: new Decimal(30),
                unlocked() { return hasUpgrade(this.layer, 21)},
                effect() { return new Decimal(player[this.layer].points).add(10).slog(10).max(1).pow(0.4) },
                effectDisplay() { return "^" + format(this.effect()) }
            },
            23: {
                title: "U2;3",
                description: "Boost 1;3 based on points.",
                cost: new Decimal(100),
                unlocked() { return hasUpgrade(this.layer, 21)},
                effect() { return new Decimal(player.points).add(10).slog(10).max(1).pow(0.3) },
                effectDisplay() { return "^" + format(this.effect()) }
            },
            24: {
                title: "U2;4",
                description: "Boost unit gain based on units.",
                cost: new Decimal(10000),
                unlocked() { return hasUpgrade(this.layer, 23) && hasUpgrade("m", 13)},
                effect() { return new Decimal(player[this.layer].points).add(1).log(5).div(1.6).add(1) },
                effectDisplay() { return "x" + format(this.effect()) }
            },
        }
})



addLayer("m", {
        name: "multiplier", // This is optional, only used in a few places, If absent it just uses the layer id.
        symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
        position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
        startData() { return {
            unlocked: false,
		  	points: new Decimal(0),
        }},
        color: "#F0CA35",
        requires: new Decimal(1000), // Can be a function that takes requirement increases into account
        resource: "multipliers", // Name of prestige currency
        baseResource: "points", // Name of resource prestige is based on
        baseAmount() {return player.points}, // Get the current amount of baseResource
        type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
        exponent: 1.2, // Prestige currency exponent
        base: 5,
        branches: ["u"],
        effect() {
            mult = new Decimal(2).pow(player[this.layer].points).max(1)
            if (hasUpgrade(this.layer, 12)) mult = mult.times(upgradeEffect(this.layer, 12))
            return mult
        },
        effectDescription() {return "which are multiplying point generation by x" + format(this.effect())},
        gainMult() { // Calculate the multiplier for main currency from bonuses
            mult = new Decimal(1)
            return mult
        },
        gainExp() { // Calculate the exponent on main currency from bonuses
            return new Decimal(1)
        },
        row: 1, // Row the layer is in on the tree (0 is the first row)
        hotkeys: [
            {key: "m", description: "M: Reset for multipliers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
        ],
        layerShown() {return (player["u"].points.gte(100)) || player[this.layer].unlocked},
        upgrades: {
            rows: 1,
            cols: 3,
            11: {
                title: "M1;1",
                description: "Multipliers also boost unit gain.",
                cost: new Decimal(2),
                effect() { return new Decimal(2).pow(player[this.layer].points.add(1)).max(1).pow(0.4) },
                effectDisplay() { return "x" + format(this.effect()) },
            },
            12: {
                title: "M1;2",
                description: "Units multiply the multiplier effect.",
                cost: new Decimal(4),
                unlocked() { return hasUpgrade(this.layer, 11)},
                effect() { return new Decimal(player["u"].points).add(500).log(500).max(1) },
                effectDisplay() { return "x" + format(this.effect()) }
            },
            13: {
                title: "M1;3",
                description: "Unlock 2 more unit upgrades.",
                cost: new Decimal(5),
                unlocked() { return hasUpgrade(this.layer, 11)},
            }
        }
})
