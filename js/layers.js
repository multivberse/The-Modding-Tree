var devSaveBank = ["eyJ0YWIiOiJvcHRpb25zIiwidGltZSI6MTYwNDM0NTE3ODA4NywiYXV0b3NhdmUiOnRydWUsIm5vdGlmeSI6e30sIm1zRGlzcGxheSI6ImFsd2F5cyIsIm9mZmxpbmVQcm9kIjp0cnVlLCJ2ZXJzaW9uVHlwZSI6Im15bW9kIiwidmVyc2lvbiI6IjAuMCIsInRpbWVQbGF5ZWQiOjcwMjUuNDMzODE2MzQ5Mjg3LCJrZWVwR29pbmciOmZhbHNlLCJoYXNOYU4iOmZhbHNlLCJoaWRlQ2hhbGxlbmdlcyI6ZmFsc2UsImZyYW1lcmF0ZSI6ZmFsc2UsInBvaW50cyI6IjE4MzI5OTk4LjU0OTU4MjIiLCJzdWJ0YWJzIjp7fSwidSI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiOTMyNiIsInVwZ3JhZGVzIjpbMTEsMTIsMTMsMjEsMjIsMjMsMTRdLCJtaWxlc3RvbmVzIjpbXSwiY2hhbGxlbmdlcyI6W10sInNwZW50T25CdXlhYmxlcyI6IjAiLCJidXlhYmxlcyI6e30sImNsaWNrYWJsZXMiOnt9LCJhY2hpZXZlbWVudHMiOltdfSwibSI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiNCIsImJ1eWFibGVzIjp7fSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WzExLDEyLDEzXSwibWlsZXN0b25lcyI6W10sImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9fSwiYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMCIsImJ1eWFibGVzIjp7fSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WzExXSwibWlsZXN0b25lcyI6W10sImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9fSwiZGV2U3BlZWQiOjF9",
"eyJ0YWIiOiJvcHRpb25zIiwidGltZSI6MTYwNTI5MjI0MjEwNiwiYXV0b3NhdmUiOnRydWUsIm5vdGlmeSI6e30sIm1zRGlzcGxheSI6ImFsd2F5cyIsIm9mZmxpbmVQcm9kIjp0cnVlLCJ2ZXJzaW9uVHlwZSI6Im15bW9kIiwidmVyc2lvbiI6IjAuMS1iZXRhIiwidGltZVBsYXllZCI6MTg1Ni43NTgwOTU1NTM5NDUyLCJrZWVwR29pbmciOmZhbHNlLCJoYXNOYU4iOmZhbHNlLCJoaWRlQ2hhbGxlbmdlcyI6ZmFsc2UsImZyYW1lcmF0ZSI6dHJ1ZSwicG9pbnRzIjoiNzEyNjQuMjUzNzAzMzA3NzciLCJzdWJ0YWJzIjp7fSwidSI6eyJ1bmxvY2tlZCI6dHJ1ZSwiYmVzdCI6IjE0MDIiLCJwb2ludHMiOiIxNDAyIiwidXBncmFkZXMiOlsxMSwxMiwxMywyMSwyMiwyMywxNF0sIm1pbGVzdG9uZXMiOltdLCJjaGFsbGVuZ2VzIjpbXSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsImFjdGl2ZUNoYWxsZW5nZSI6bnVsbH0sIm0iOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjIiLCJiZXN0IjoiNSIsImJ1eWFibGVzIjp7fSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WzExLDEyLDEzXSwibWlsZXN0b25lcyI6WyIwIl0sImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9fSwiZCI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMiIsImJlc3QiOiIyIiwicG93ZXIiOiIxMjIuMDI4NjgzMTA2ODEzNDYiLCJidXlhYmxlcyI6e30sImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOlsxMV0sIm1pbGVzdG9uZXMiOltdLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fX0sImRldlNwZWVkIjoxfQ==",
"eyJ0YWIiOiJvcHRpb25zIiwidGltZSI6MTYwNTI5NTM1OTg1NSwiYXV0b3NhdmUiOnRydWUsIm5vdGlmeSI6e30sIm1zRGlzcGxheSI6ImFsd2F5cyIsIm9mZmxpbmVQcm9kIjp0cnVlLCJ2ZXJzaW9uVHlwZSI6Im15bW9kIiwidmVyc2lvbiI6IjAuMS1iZXRhIiwidGltZVBsYXllZCI6NDk3NC41MjYzMzgzMDc0MzQsImtlZXBHb2luZyI6ZmFsc2UsImhhc05hTiI6ZmFsc2UsImhpZGVDaGFsbGVuZ2VzIjpmYWxzZSwiZnJhbWVyYXRlIjp0cnVlLCJwb2ludHMiOiI0NDgwMjM2MzAuMjk3NzI1NSIsInN1YnRhYnMiOnt9LCJ1Ijp7InVubG9ja2VkIjp0cnVlLCJiZXN0IjoiMzcwMjgyNyIsInBvaW50cyI6IjM3MDI4MjciLCJ1cGdyYWRlcyI6WzExLDEyLDEzLDIxLDIyLDIzLDE0LDI0XSwibWlsZXN0b25lcyI6W10sImNoYWxsZW5nZXMiOltdLCJzcGVudE9uQnV5YWJsZXMiOiIwIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsfSwibSI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiNiIsImJlc3QiOiI2IiwiYnV5YWJsZXMiOnt9LCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTEsMTIsMTNdLCJtaWxlc3RvbmVzIjpbIjAiXSwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e319LCJkIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiI0IiwiYmVzdCI6IjUiLCJwb3dlciI6IjM3NzEuNTIwNzYyMDA2NzY2IiwiYnV5YWJsZXMiOnt9LCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTEsMTIsMTMsMTRdLCJtaWxlc3RvbmVzIjpbIjAiXSwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e319LCJkZXZTcGVlZCI6MX0="]

addLayer("u", {
        name: "unit", // This is optional, only used in a few places, If absent it just uses the layer id.
        symbol: "U", // This appears on the layer's node. Default is the id with the first letter capitalized
        position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
        startData() { return {
            unlocked: true,
            best: new Decimal(0),
		  	points: new Decimal(0),
        }},
        color: "#BFFFDE",
        requires: new Decimal(10), // Can be a function that takes requirement increases into account
        resource: "units", // Name of prestige currency
        baseResource: "points", // Name of resource prestige is based on
        baseAmount() {return player.points}, // Get the current amount of baseResource
        type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
        exponent: 0.5, // Prestige currency exponent
        gainMult() { // Calculate the multiplier for main currency from bonuses
            var mult = new Decimal(1)
            if (hasUpgrade(this.layer, 21)) mult = mult.times(2)
            if (hasUpgrade(this.layer, 22)) mult = mult.times(upgradeEffect(this.layer, 22))
            if (hasUpgrade(this.layer, 23)) mult = mult.times(upgradeEffect(this.layer, 23))
            if (hasUpgrade(this.layer, 24)) mult = mult.times(upgradeEffect(this.layer, 24))
            if (hasUpgrade("m", 11)) mult = mult.times(upgradeEffect("m", 11))
            if (player.d.unlocked) mult = mult.times(tmp.d.powerEff)
            return mult
        },
        gainExp() { // Calculate the exponent on main currency from bonuses
            return new Decimal(1)
        },
        tabFormat: [["raw-html", function() {return "You have " + layerText("h2", "u", formatWhole(player.u.points)) + " units"}],
                    "blank","prestige-button","blank",
                   ["raw-html", function() {return (player.u.points.lt(1000))?("You have <h5 id='color:#ffffff;'>" + format(player.points) + "</h5> points"):""}],
                    "blank","upgrades"],
        row: 0, // Row the layer is in on the tree (0 is the first row)
        hotkeys: [
            {key: "u", description: "U: Reset for units", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
        ],
        passiveGeneration() {return (hasMilestone("m", 2))?0.25:0},
        layerShown(){return true},
        doReset(resettingLayer) {
			let keep = [];
			if (hasMilestone("m", 0) && resettingLayer=="m") keep.push("upgrades")
            if (hasMilestone("d", 0) && resettingLayer=="d") keep.push("upgrades")
			if (layers[resettingLayer]) {
				if (layers[resettingLayer].row > this.row) layerDataReset("u", keep)
			} else layerDataReset("u", keep);
		},
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
                description: "Unspent units boost point generation.",
                cost: new Decimal(1),
                unlocked() { return hasUpgrade(this.layer, 11)},
                effect() { return new Decimal(player[this.layer].points).add(1).pow(0.5).mul((hasUpgrade(this.layer,22))?upgradeEffect(this.layer,22):1) },
                effectDisplay() { return "x" + format(this.effect()) }
            },
            13: {
                title: "U1;3",
                description: "Points boost their own generation.",
                cost: new Decimal(5),
                unlocked() { return hasUpgrade(this.layer, 12)},
                effect() { return new Decimal(player.points).add(1).pow(0.2).mul((hasUpgrade(this.layer,23))?upgradeEffect(this.layer,23):1) },
                effectDisplay() { return "x" + format(this.effect()) },
            },
            14: {
                title: "U1;4",
                description: "Points boost unit gain.",
                cost: new Decimal(10000),
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
                description: "U1;2 uses a better formula.",
                cost: new Decimal(75),
                unlocked() { return hasUpgrade(this.layer, 21)},
                effect() { return new Decimal(player[this.layer].points).add(10).log(4).max(1).pow(0.4) }
            },
            23: {
                title: "U2;3",
                description: "U1;3 uses a better formula.",
                cost: new Decimal(500),
                unlocked() { return hasUpgrade(this.layer, 21)},
                effect() { return new Decimal(player.points).add(10).log(4).max(1).pow(0.3) }
            },
            24: {
                title: "U2;4",
                description: "Units boost their own gain.",
                cost: new Decimal(100000),
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
            best: new Decimal(0),
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
        addBase() {
            var base = new Decimal(0)
            if (player.p.unlocked) base = base.plus(tmp.p.effect)
            return base
        },
        effectBase() {
            var base = new Decimal(2)
            base = base.plus(tmp.m.addBase)
            return base
        },
        effect() {
            var mult = new Decimal(tmp.m.effectBase)
                    .pow(player.m.points)
                    .add(tmp.m.addBase)
            if (hasUpgrade(this.layer, 12)) mult = mult.times(upgradeEffect(this.layer, 12))
            return mult.max(1)
        },
        tabFormat: [["raw-html", function() {return "You have " + layerText("h2", "m", formatWhole(player.m.points)) + " multipliers, which are multiplying point generation by x" + layerText("h4", "m", format(tmp.m.effect))}],
                    "blank","prestige-button","blank",
                    ["raw-html", function() {return "Your best multipliers is " + layerText("h5", "m", formatWhole(player.m.best))}],
                    "blank","milestones","blank","upgrades"],
        gainMult() { // Calculate the multiplier for main currency from bonuses
            var mult = new Decimal(1)
            mult = mult.div(tmp.d.powerEff)
            return mult
        },
        gainExp() { // Calculate the exponent on main currency from bonuses
            return new Decimal(1)
        },
        row: 1, // Row the layer is in on the tree (0 is the first row)
        hotkeys: [
            {key: "m", description: "M: Reset for multipliers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
        ],
        layerShown() {return player.u.best.gte(1) || player.m.unlocked},
        canBuyMax() {return hasMilestone("m", 1)},
        doReset(resettingLayer) {
			let keep = [];
			if (hasMilestone("p", 0) && resettingLayer=="p") keep.push("milestones")
			if (layers[resettingLayer]) {
				if (layers[resettingLayer].row > this.row) layerDataReset("m", keep)
			} else layerDataReset("m", keep);
		},
        upgrades: {
            rows: 1,
            cols: 4,
            11: {
                title: "M1;1",
                description: "Your best multipliers boost unit gain.",
                cost: new Decimal(2),
                effect() { return new Decimal(1.25).pow(player[this.layer].points.add(1)).max(1) },
                effectDisplay() { return "x" + format(this.effect()) },
            },
            12: {
                title: "M1;2",
                description: "Units multiply the multiplier effect.",
                cost: new Decimal(4),
                unlocked() { return hasUpgrade(this.layer, 11)},
                effect() { return new Decimal(player.u.points).add(500).log(500).max(1) },
                effectDisplay() { return "x" + format(this.effect()) }
            },
            13: {
                title: "M1;3",
                description: "Unlock a new column of unit upgrades.",
                cost: new Decimal(5),
                unlocked() { return hasUpgrade(this.layer, 11)},
            },
            14: {
                title: "M1;4",
                description: "Unlock a new layer.",
                cost: new Decimal(9),
                unlocked() { return hasUpgrade(this.layer, 13)},
            }
        },
        milestones: {
            0: {
                requirementDescription: "5 Multipliers",
                done() { return player.m.best.gte(5) },
                effectDescription: "Keep unit upgrades on reset.",
            },
            1: {
                requirementDescription: "8 Multipliers",
                done() { return player.m.best.gte(8) },
                effectDescription: "You can buy max multipliers.",
            },
            2: {
                requirementDescription: "9 Multipliers",
                done() { return player.m.best.gte(9) },
                effectDescription: "You automatically gain 25% of unit gain per second."
            }
        }
})



addLayer("d", {
        name: "divider", // This is optional, only used in a few places, If absent it just uses the layer id.
        symbol: "D", // This appears on the layer's node. Default is the id with the first letter capitalized
        position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
        startData() { return {
            unlocked: false,
		      	points: new Decimal(0),
            best: new Decimal(0),
            power: new Decimal(0),
        }},
        color: "#8A75F0",
        requires: new Decimal(40000), // Can be a function that takes requirement increases into account
        resource: "dividers", // Name of prestige currency
        baseResource: "points", // Name of resource prestige is based on
        baseAmount() {return player.points}, // Get the current amount of baseResource
        type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
        exponent: 1.2, // Prestige currency exponent
        base: 5,
        branches: ["m","u"],
        effect() {
            var mult = new Decimal(2).pow(player[this.layer].points).max(1)
            if (hasUpgrade(this.layer, 12)) mult = mult.times(upgradeEffect(this.layer, 12))
            return mult
        },
        powerGain() {
            var gain = new Decimal(2).pow(player[this.layer].points).sub(1).mul(0.1).max(0)
            if (hasUpgrade(this.layer, 11)) gain = gain.mul(upgradeEffect(this.layer, 11))
            if (hasUpgrade(this.layer, 12)) gain = gain.mul(upgradeEffect(this.layer, 12))
            return gain
        },
        powerEff() {
            var eff = new Decimal(player[this.layer].power.add(1)).log10().add(1).pow(0.6)
            if (hasUpgrade(this.layer, 13)) eff = eff.mul(upgradeEffect(this.layer, 13))
            return eff
        },
        tabFormat: [["raw-html", function() {return "You have " + layerText("h2", "d", formatWhole(player.d.points)) + " dividers, which are generating <h4 style='color:#8a75f0;'>" + format(tmp.d.powerGain) + "</h4> division power/sec"}],
                    "blank","prestige-button","blank",
                    ["raw-html", function() {return "You have " + layerText("h4", "d", format(player.d.power)) + " division power, which divides the costs of multipliers and units by " + layerText("h4", "d", format(tmp.d.powerEff, 3))}],
                    ["display-text", function() {return "<br>Your best dividers is " + layerText("h5", "d", formatWhole(player.d.best))},{}],
                    "blank","milestones","blank","upgrades"],
        update(diff) {
            if (player[this.layer].unlocked) player[this.layer].power = player[this.layer].power.add(this.powerGain().mul(diff))
        },
        gainMult() { // Calculate the multiplier for main currency from bonuses
            var mult = new Decimal(1)
            if (hasUpgrade(this.layer, 14)) mult = mult.div(upgradeEffect(this.layer, 14))
            return mult
        },
        gainExp() { // Calculate the exponent on main currency from bonuses
            return new Decimal(1)
        },
        row: 1, // Row the layer is in on the tree (0 is the first row)
        hotkeys: [
            {key: "d", description: "D: Reset for dividers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
        ],
        layerShown() {return player.m.best.gte(1)||player.d.unlocked},
        doReset() {
            player.d.power = new Decimal(0)
        },
        canBuyMax() {return hasMilestone("d", 1)},
        upgrades: {
            rows: 1,
            cols: 4,
            11: {
                title: "D1;1",
                description: "Units boost division power gain.",
                cost: new Decimal(2),
                effect() { return new Decimal(player.u.points).div(50).add(1).log(50).add(1).max(1) },
                effectDisplay() { return "x" + format(this.effect()) },
            },
            12: {
                title: "D1;2",
                description: "Your best dividers boost division power gain.",
                cost: new Decimal(4),
                effect() { return new Decimal(player.d.best).add(1).pow(1/3) },
                effectDisplay() { return "x" + format(this.effect()) },
            },
            13: {
                title: "D1;3",
                description: "Points boost division power effect.",
                cost: new Decimal(5),
                effect() { return new Decimal(player.points).div(100).add(10).slog(10).pow(1.1) },
                effectDisplay() { return "x" + format(this.effect()) },
            },
            14: {
                title: "D1;4",
                description: "Division power affects dividers (to a lesser extent).",
                cost: new Decimal(5),
                effect() { return new Decimal(tmp.d.powerEff).pow(2/3) },
                effectDisplay() { return "/" + format(this.effect()) }
            }
        },
        milestones: {
            0: {
                requirementDescription: "5 Dividers",
                done() { return player.d.best.gte(5) },
                effectDescription: "Keep unit upgrades on reset.",
            },
            1: {
                requirementDescription: "8 Dividers",
                done() { return player.d.best.gte(8) },
                effectDescription: "You can buy max dividers.",
            }
        }
})



addLayer("p", {
        name: "plus", // This is optional, only used in a few places, If absent it just uses the layer id.
        symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
        position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
        startData() { return {
            unlocked: true,
            best: new Decimal(0),
		  	points: new Decimal(0),
        }},
        color: "#66F542",
        requires: new Decimal(1e10), // Can be a function that takes requirement increases into account
        resource: "pluses", // Name of prestige currency
        baseResource: "units", // Name of resource prestige is based on
        baseAmount() {return player.u.points}, // Get the current amount of baseResource
        type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
        exponent: 0.25, // Prestige currency exponent
        branches: ["m"],
        effect() {
            var eff = new Decimal(player.p.points).sqrt().plus(1).log(5).div(2.5).max(0)
            return eff
        },
        gainMult() { // Calculate the multiplier for main currency from bonuses
            var mult = new Decimal(1)
            return mult
        },
        gainExp() { // Calculate the exponent on main currency from bonuses
            return new Decimal(1)
        },
        tabFormat: [["raw-html", function() {return "You have " + layerText("h2", "p", formatWhole(player.p.points)) + " pluses, which are adding +" + layerText("h4", "p", format(tmp.p.effect)) + " to the multiplier base and effect"}],
                    "blank","prestige-button","blank",
                    ["raw-html", function() {return "Your best pluses is " + layerText("h5", "p", formatWhole(player.p.best))}],
                    ["raw-html", function() {return "You have gained a total of " + layerText("h5", "p", formatWhole(player.p.total)) + " pluses"}],
                    "blank","milestones","blank","upgrades"],
        row: 2, // Row the layer is in on the tree (0 is the first row)
        hotkeys: [
            {key: "p", description: "P: Reset for pluses", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
        ],
        layerShown(){return hasUpgrade("m", 14)||player.p.unlocked},
        upgrades: {
            rows: 1,
            cols: 1,
            11: {
                title: "P1;1",
                description: "Your total pluses boost point gain.",
                cost: new Decimal(5),
                effect() {return new Decimal(player.p.total).plus(500).div(500).sqrt().mul(500).sub(500).div(5).plus(1)},
                effectDisplay() {return "x" + format(this.effect())}
            },
        },
        milestones: {
            0: {
                requirementDescription: "2 Total Pluses",
                done() { return player.p.total.gte(2) },
                effectDescription: "Keep multiplier milestones on reset.",
            },
            1: {
                requirementDescription: "100 Total Pluses",
                done() { return player.p.total.gte(100) },
                effectDescription: "Automatically buy multipliers.",
            }
        }
})
