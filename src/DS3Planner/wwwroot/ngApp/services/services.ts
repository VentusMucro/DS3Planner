namespace DS3Planner.Models {
    export class CharacterClasses {
        public classes;

        constructor() {
            this.classes = [
                { name: 'Deprived', bLevel: 1, bVigor: 10, bAttn: 10, bEndurance: 10, bVitality: 10, bStrength: 10, bDexterity: 10, bIntelligence: 10, bFaith: 10, bLuck: 10 },
                { name: 'Knight', bLevel: 9, bVigor: 12, bAttn: 10, bEndurance: 11, bVitality: 15, bStrength: 13, bDexterity: 12, bIntelligence: 9, bFaith: 9, bLuck: 7 },
                { name: 'Mercenary', bLevel: 8, bVigor: 11, bAttn: 12, bEndurance: 11, bVitality: 10, bStrength: 10, bDexterity: 16, bIntelligence: 10, bFaith: 8, bLuck: 9 },
                { name: 'Warrior', bLevel: 7, bVigor: 14, bAttn: 6, bEndurance: 12, bVitality: 11, bStrength: 16, bDexterity: 9, bIntelligence: 8, bFaith: 9, bLuck: 11 },
                { name: 'Herald', bLevel: 9, bVigor: 12, bAttn: 10, bEndurance: 9, bVitality: 12, bStrength: 12, bDexterity: 11, bIntelligence: 8, bFaith: 13, bLuck: 11 },
                { name: 'Thief', bLevel: 5, bVigor: 10, bAttn: 11, bEndurance: 10, bVitality: 9, bStrength: 9, bDexterity: 13, bIntelligence: 10, bFaith: 8, bLuck: 14 },
                { name: 'Assassin', bLevel: 10, bVigor: 10, bAttn: 14, bEndurance: 11, bVitality: 10, bStrength: 10, bDexterity: 14, bIntelligence: 11, bFaith: 9, bLuck: 10 },
                { name: 'Sorcerer', bLevel: 6, bVigor: 9, bAttn: 16, bEndurance: 9, bVitality: 7, bStrength: 7, bDexterity: 12, bIntelligence: 16, bFaith: 7, bLuck: 12 },
                { name: 'Pyromancer', bLevel: 8, bVigor: 11, bAttn: 12, bEndurance: 10, bVitality: 8, bStrength: 12, bDexterity: 9, bIntelligence: 14, bFaith: 14, bLuck: 7 },
                { name: 'Cleric', bLevel: 7, bVigor: 10, bAttn: 14, bEndurance: 9, bVitality: 7, bStrength: 12, bDexterity: 8, bIntelligence: 7, bFaith: 16, bLuck: 13 }
            ];
        }
    }

    export class TestData {
        public armor;
        public rings;
        public HP;
        public FP;
        public stamina;
        public eLoad;

        constructor() {
            this.rings = [
                { name: "Ring1", Effect: "Test Effect" },
                { name: "Ring2", Effect: "Test Effect" },
                { name: "Ring3", Effect: "Test Effect" },
                { name: "Ring4", Effect: "Test Effect" },
                { name: "Ring5", Effect: "Test Effect" }
            ];

            //In theory this data array should be an array of objects with 5 fields, 4 of which are objects with 23 fields each. Might need to consider seperating things out.
            this.armor = [
                {
                    //phys,slash,strike,thrust,magic,fire,lightning,dark,bleed,poison,frost,curse
                    name: "Knight Armor", helm: {
                        name: "Knight Helmet", physDef: 20, physAbsorb: 20, slashDef: 20, slashAbsorb: 20, strikeDef: 20, strikeAbsorb: 20, thrustDef: 20, thrustAbsorb: 20, magicDef: 20, magicAbsorb: 20, fireDef: 20, fireAbsorb: 20, lightningDef: 20, lightningAbsorb: 20, darkDef: 20, darkAbsorb: 20, bleedRes: 20, poisonRes: 20, frostRes: 20, curseRes: 20
                    }, chest: {
                        name: "Knight Chest", physDef: 20, physAbsorb: 20, slashDef: 20, slashAbsorb: 20, strikeDef: 20, strikeAbsorb: 20, thrustDef: 20, thrustAbsorb: 20, magicDef: 20, magicAbsorb: 20, fireDef: 20, fireAbsorb: 20, lightningDef: 20, lightningAbsorb: 20, darkDef: 20, darkAbsorb: 20, bleedRes: 20, poisonRes: 20, frostRes: 20, curseRes: 20
                    }, arms: {
                        name: "Knight Arms", physDef: 20, physAbsorb: 20, slashDef: 20, slashAbsorb: 20, strikeDef: 20, strikeAbsorb: 20, thrustDef: 20, thrustAbsorb: 20, magicDef: 20, magicAbsorb: 20, fireDef: 20, fireAbsorb: 20, lightningDef: 20, lightningAbsorb: 20, darkDef: 20, darkAbsorb: 20, bleedRes: 20, poisonRes: 20, frostRes: 20, curseRes: 20
                    }, legs: {
                        name: "Knight Legs", physDef: 20, physAbsorb: 20, slashDef: 20, slashAbsorb: 20, strikeDef: 20, strikeAbsorb: 20, thrustDef: 20, thrustAbsorb: 20, magicDef: 20, magicAbsorb: 20, fireDef: 20, fireAbsorb: 20, lightningDef: 20, lightningAbsorb: 20, darkDef: 20, darkAbsorb: 20, bleedRes: 20, poisonRes: 20, frostRes: 20, curseRes: 20
                    }
                }
            ];

            this.HP = [0, 0, 301, 305, 311, 320, 331, 345, 362, 381, 403, 427, 454, 483, 515, 550, 594, 638, 681, 723, 764, 804, 842, 879, 914, 947, 977, 1e3, 1019, 1038, 1056, 1074, 1092, 1109, 1125, 1141, 1157, 1172, 1186, 1200, 1213, 1226, 1238, 1249, 1260, 1269, 1278, 1285, 1292, 1297, 1300, 1302, 1304, 1307, 1309, 1312, 1314, 1316, 1319, 1321, 1323, 1326, 1328, 1330, 1333, 1335, 1337, 1340, 1342, 1344, 1346, 1348, 1351, 1353, 1355, 1357, 1359, 1361, 1363, 1365, 1367, 1369, 1371, 1373, 1375, 1377, 1379, 1381, 1383, 1385, 1386, 1388, 1390, 1391, 1393, 1395, 1396, 1397, 1399, 1400];
            this.FP = [0, 50, 53, 58, 62, 67, 72, 77, 82, 87, 93, 98, 103, 109, 114, 120, 124, 130, 136, 143, 150, 157, 165, 173, 181, 189, 198, 206, 215, 224, 233, 242, 251, 260, 270, 280, 283, 286, 289, 293, 296, 299, 302, 305, 309, 312, 315, 318, 320, 323, 326, 329, 332, 334, 337, 339, 342, 344, 346, 348, 350, 352, 355, 358, 361, 364, 366, 369, 372, 375, 377, 380, 383, 385, 388, 391, 394, 396, 399, 402, 404, 407, 409, 412, 415, 417, 420, 422, 425, 427, 430, 432, 434, 437, 439, 441, 444, 446, 448, 450];
            this.stamina = [0, 81, 82, 83, 84, 85, 86, 87, 88, 90, 94, 95, 97, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 125, 127, 129, 132, 134, 136, 139, 141, 144, 146, 149, 152, 154, 157, 160, 160, 160, 160, 160, 160, 161, 161, 161, 161, 161, 161, 162, 162, 162, 162, 162, 162, 163, 163, 163, 163, 163, 163, 164, 164, 164, 164, 164, 164, 165, 165, 165, 165, 165, 165, 166, 166, 166, 166, 166, 166, 167, 167, 167, 167, 167, 167, 168, 168, 168, 168, 168, 168, 169, 169, 169, 169, 169, 170];
            this.eLoad = [0];
            for (let i = 1; i < 100; i++)
                this.eLoad.push(40 + i);
        }
    }
}

namespace DS3Planner.Services {
    import CharacterClasses = DS3Planner.Models.CharacterClasses;
    import TestData = DS3Planner.Models.TestData;

    export class DataService {
        public statData;
        public itemData;
        public armorData;
        public HP;
        public FP;
        public stamina;
        public eLoad;
        public defenses: number[];

        constructor($http: ng.IHttpService) {
            let statTransfer = new CharacterClasses;
            this.statData = statTransfer.classes;
            console.log(statTransfer.classes);

            let testTransfer = new TestData;
            this.armorData = testTransfer.armor;
            console.log(testTransfer.armor);

            this.HP = testTransfer.HP;
            console.log(testTransfer.HP);

            this.FP = testTransfer.FP;
            console.log(testTransfer.FP);

            this.stamina = testTransfer.stamina;
            console.log(testTransfer.stamina);

            this.eLoad = testTransfer.eLoad;
            console.log(testTransfer.eLoad);

            this.defenses = [];

        }

        public calcAll(helm, chest, arms, legs) {
            let helmDef;
            let chestDef;
            let armsDef;
            let legsDef;
            let helmAbsorb;
            let chestAbsorb;
            let armsAbsorb;
            let legsAbsorb;

            helmDef = 0, chestDef = 0, armsDef = 0, legsDef = 0, helmAbsorb = 0, chestAbsorb = 0, armsAbsorb = 0, legsAbsorb = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm)
                    helmDef = armor.helm.physDef;

                if (armor.chest.name == chest)
                    chestDef = armor.chest.physDef;

                if (armor.arms.name == arms)
                    armsDef = armor.arms.physDef;

                if (armor.legs.name == legs)
                    legsDef = armor.legs.physDef;
            }

            this.defenses[0] = helmDef + chestDef + armsDef + legsDef; //Calculate physical defense from armor
            helmDef = 0, chestDef = 0, armsDef = 0, legsDef = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmAbsorb = armor.helm.physAbsorb;

                if (armor.chest.name == chest) chestAbsorb = armor.chest.physAbsorb;

                if (armor.arms.name == arms) armsAbsorb = armor.arms.physAbsorb;

                if (armor.legs.name == legs) legsAbsorb = armor.legs.physAbsorb;
            }

            this.defenses[1] = helmAbsorb + chestAbsorb + armsAbsorb + legsAbsorb; //Calculate physical absorb from armor
            helmAbsorb = 0, chestAbsorb = 0, armsAbsorb = 0, legsAbsorb = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmDef = armor.helm.slashDef;

                if (armor.chest.name == chest) chestDef = armor.chest.slashDef;

                if (armor.arms.name == arms) armsDef = armor.arms.slashDef;

                if (armor.legs.name == legs) legsDef = armor.legs.slashDef;
            }

            this.defenses[2] = helmDef + chestDef + armsDef + legsDef; //Calculate slash defense from armor
            helmDef = 0, chestDef = 0, armsDef = 0, legsDef = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmAbsorb = armor.helm.slashAbsorb;

                if (armor.chest.name == chest) chestAbsorb = armor.chest.slashAbsorb;

                if (armor.arms.name == arms) armsAbsorb = armor.arms.slashAbsorb;

                if (armor.legs.name == legs) legsAbsorb = armor.legs.slashAbsorb;
            }

            this.defenses[3] = helmAbsorb + chestAbsorb + armsAbsorb + legsAbsorb; //Calculate slash absorb from armor
            helmAbsorb = 0, chestAbsorb = 0, armsAbsorb = 0, legsAbsorb = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmDef = armor.helm.strikeDef;

                if (armor.chest.name == chest) chestDef = armor.chest.strikeDef;

                if (armor.arms.name == arms) armsDef = armor.arms.strikeDef;

                if (armor.legs.name == legs) legsDef = armor.legs.strikeDef;
            }

            this.defenses[4] = helmDef + chestDef + armsDef + legsDef; //Calculate strike defense from armor
            helmDef = 0, chestDef = 0, armsDef = 0, legsDef = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmAbsorb = armor.helm.strikeAbsorb;

                if (armor.chest.name == chest) chestAbsorb = armor.chest.strikeAbsorb;

                if (armor.arms.name == arms) armsAbsorb = armor.arms.strikeAbsorb;

                if (armor.legs.name == legs) legsAbsorb = armor.legs.strikeAbsorb;
            }

            this.defenses[5] = helmAbsorb + chestAbsorb + armsAbsorb + legsAbsorb; //Calculate strike absorb from armor
            helmAbsorb = 0, chestAbsorb = 0, armsAbsorb = 0, legsAbsorb = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmDef = armor.helm.thrustDef;

                if (armor.chest.name == chest) chestDef = armor.chest.thrustDef;

                if (armor.arms.name == arms) armsDef = armor.arms.thrustDef;

                if (armor.legs.name == legs) legsDef = armor.legs.thrustDef;
            }

            this.defenses[6] = helmDef + chestDef + armsDef + legsDef; //Calculate thrust defense from armor
            helmDef = 0, chestDef = 0, armsDef = 0, legsDef = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmAbsorb = armor.helm.thrustAbsorb;

                if (armor.chest.name == chest) chestAbsorb = armor.chest.thrustAbsorb;

                if (armor.arms.name == arms) armsAbsorb = armor.arms.thrustAbsorb;

                if (armor.legs.name == legs) legsAbsorb = armor.legs.thrustAbsorb;
            }

            this.defenses[7] = helmAbsorb + chestAbsorb + armsAbsorb + legsAbsorb; //Calculate thrust absorb from armor
            helmAbsorb = 0, chestAbsorb = 0, armsAbsorb = 0, legsAbsorb = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmDef = armor.helm.magicDef;

                if (armor.chest.name == chest) chestDef = armor.chest.magicDef;

                if (armor.arms.name == arms) armsDef = armor.arms.magicDef;

                if (armor.legs.name == legs) legsDef = armor.legs.magicDef;
            }

            this.defenses[8] = helmDef + chestDef + armsDef + legsDef; //Calculate magic defense from armor
            helmDef = 0, chestDef = 0, armsDef = 0, legsDef = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmAbsorb = armor.helm.magicAbsorb;

                if (armor.chest.name == chest) chestAbsorb = armor.chest.magicAbsorb;

                if (armor.arms.name == arms) armsAbsorb = armor.arms.magicAbsorb;

                if (armor.legs.name == legs) legsAbsorb = armor.legs.magicAbsorb;
            }

            this.defenses[9] = helmAbsorb + chestAbsorb + armsAbsorb + legsAbsorb; //Calculate magic absorb from armor
            helmAbsorb = 0, chestAbsorb = 0, armsAbsorb = 0, legsAbsorb = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmDef = armor.helm.fireDef;

                if (armor.chest.name == chest) chestDef = armor.chest.fireDef;

                if (armor.arms.name == arms) armsDef = armor.arms.fireDef;

                if (armor.legs.name == legs) legsDef = armor.legs.fireDef;
            }

            this.defenses[10] = helmDef + chestDef + armsDef + legsDef; //Calculate fire defense from armor
            helmDef = 0, chestDef = 0, armsDef = 0, legsDef = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmAbsorb = armor.helm.fireAbsorb;

                if (armor.chest.name == chest) chestAbsorb = armor.chest.fireAbsorb;

                if (armor.arms.name == arms) armsAbsorb = armor.arms.fireAbsorb;

                if (armor.legs.name == legs) legsAbsorb = armor.legs.fireAbsorb;
            }

            this.defenses[11] = helmAbsorb + chestAbsorb + armsAbsorb + legsAbsorb; //Calculate fire absorb from armor
            helmAbsorb = 0, chestAbsorb = 0, armsAbsorb = 0, legsAbsorb = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmDef = armor.helm.lightningDef;

                if (armor.chest.name == chest) chestDef = armor.chest.lightningDef;

                if (armor.arms.name == arms) armsDef = armor.arms.lightningDef;

                if (armor.legs.name == legs) legsDef = armor.legs.lightningDef;
            }

            this.defenses[12] = helmDef + chestDef + armsDef + legsDef; //Calculate lightning defense from armor
            helmDef = 0, chestDef = 0, armsDef = 0, legsDef = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmAbsorb = armor.helm.lightningAbsorb;

                if (armor.chest.name == chest) chestAbsorb = armor.chest.lightningAbsorb;

                if (armor.arms.name == arms) armsAbsorb = armor.arms.lightningAbsorb;

                if (armor.legs.name == legs) legsAbsorb = armor.legs.lightningAbsorb;
            }

            this.defenses[13] = helmAbsorb + chestAbsorb + armsAbsorb + legsAbsorb; //Calculate lightning absorb from armor
            helmAbsorb = 0, chestAbsorb = 0, armsAbsorb = 0, legsAbsorb = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmDef = armor.helm.darkDef;

                if (armor.chest.name == chest) chestDef = armor.chest.darkDef;

                if (armor.arms.name == arms) armsDef = armor.arms.darkDef;

                if (armor.legs.name == legs) legsDef = armor.legs.darkDef;
            }

            this.defenses[14] = helmDef + chestDef + armsDef + legsDef; //Calculate dark defense from armor
            helmDef = 0, chestDef = 0, armsDef = 0, legsDef = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmAbsorb = armor.helm.darkAbsorb;

                if (armor.chest.name == chest) chestAbsorb = armor.chest.darkAbsorb;

                if (armor.arms.name == arms) armsAbsorb = armor.arms.darkAbsorb;

                if (armor.legs.name == legs) legsAbsorb = armor.legs.darkAbsorb;
            }

            this.defenses[15] = helmAbsorb + chestAbsorb + armsAbsorb + legsAbsorb; //Calculate dark absorb from armor
            helmAbsorb = 0, chestAbsorb = 0, armsAbsorb = 0, legsAbsorb = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmDef = armor.helm.bleedRes;

                if (armor.chest.name == chest) chestDef = armor.chest.bleedRes;

                if (armor.arms.name == arms) armsDef = armor.arms.bleedRes;

                if (armor.legs.name == legs) legsDef = armor.legs.bleedRes;
            }

            this.defenses[16] = helmDef + chestDef + armsDef + legsDef; //Calculate bleed defense from armor
            this.defenses[17] = helmDef + chestDef + armsDef + legsDef; //Calculate bleed defense from armor
            helmDef = 0, chestDef = 0, armsDef = 0, legsDef = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmDef = armor.helm.poisonRes;

                if (armor.chest.name == chest) chestDef = armor.chest.poisonRes;

                if (armor.arms.name == arms) armsDef = armor.arms.poisonRes;

                if (armor.legs.name == legs) legsDef = armor.legs.poisonRes;
            }

            this.defenses[18] = helmDef + chestDef + armsDef + legsDef; //Calculate poison defense from armor
            this.defenses[19] = helmDef + chestDef + armsDef + legsDef; //Calculate poison defense from armor
            helmDef = 0, chestDef = 0, armsDef = 0, legsDef = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmDef = armor.helm.frostRes;

                if (armor.chest.name == chest) chestDef = armor.chest.frostRes;

                if (armor.arms.name == arms) armsDef = armor.arms.frostRes;

                if (armor.legs.name == legs) legsDef = armor.legs.frostRes;
            }

            this.defenses[20] = helmDef + chestDef + armsDef + legsDef; //Calculate frost defense from armor
            this.defenses[21] = helmDef + chestDef + armsDef + legsDef; //Calculate frost defense from armor
            helmDef = 0, chestDef = 0, armsDef = 0, legsDef = 0;

            for (let armor of this.armorData) {
                if (armor.helm.name == helm) helmDef = armor.helm.curseRes;

                if (armor.chest.name == chest) chestDef = armor.chest.curseRes;

                if (armor.arms.name == arms) armsDef = armor.arms.curseRes;

                if (armor.legs.name == legs) legsDef = armor.legs.curseRes;
            }

            this.defenses[22] = helmDef + chestDef + armsDef + legsDef; //Calculate curse defense from armor
            this.defenses[23] = helmDef + chestDef + armsDef + legsDef; //Calculate curse defense from armor
            helmDef = 0, chestDef = 0, armsDef = 0, legsDef = 0;

            //console.log(this.defenses[1]);
        }

        public calcAllTest(helm, chest, arms, legs) {
            this.reZERO();
            for (let armor of this.armorData) {//O(n) = 1 loop, 4 ifs per loop, 24 statements per found if = 100n
                if (armor.helm.name == helm) { //Get defenses from helm
                    this.defenses[0] += armor.helm.physDef;
                    this.defenses[1] += armor.helm.physAbsorb;
                    this.defenses[2] += armor.helm.slashDef;
                    this.defenses[3] += armor.helm.slashAbsorb;
                    this.defenses[4] += armor.helm.strikeDef;
                    this.defenses[5] += armor.helm.strikeAbsorb;
                    this.defenses[6] += armor.helm.thrustDef;
                    this.defenses[7] += armor.helm.thrustAbsorb;
                    this.defenses[8] += armor.helm.magicDef;
                    this.defenses[9] += armor.helm.magicAbsorb;
                    this.defenses[10] += armor.helm.fireDef;
                    this.defenses[11] += armor.helm.fireAbsorb;
                    this.defenses[12] += armor.helm.lightningDef;
                    this.defenses[13] += armor.helm.lightningAbsorb;
                    this.defenses[14] += armor.helm.darkDef;
                    this.defenses[15] += armor.helm.darkAbsorb;
                    this.defenses[16] += armor.helm.bleedRes;
                    this.defenses[17] += armor.helm.bleedRes;
                    this.defenses[18] += armor.helm.poisonRes;
                    this.defenses[19] += armor.helm.poisonRes;
                    this.defenses[20] += armor.helm.frostRes;
                    this.defenses[21] += armor.helm.frostRes;
                    this.defenses[22] += armor.helm.curseRes;
                    this.defenses[23] += armor.helm.curseRes;
                }

                if (armor.chest.name == chest) { //Get defenses from chest
                    this.defenses[0] += armor.chest.physDef;
                    this.defenses[1] += armor.chest.physAbsorb;
                    this.defenses[2] += armor.chest.slashDef;
                    this.defenses[3] += armor.chest.slashAbsorb;
                    this.defenses[4] += armor.chest.strikeDef;
                    this.defenses[5] += armor.chest.strikeAbsorb;
                    this.defenses[6] += armor.chest.thrustDef;
                    this.defenses[7] += armor.chest.thrustAbsorb;
                    this.defenses[8] += armor.chest.magicDef;
                    this.defenses[9] += armor.chest.magicAbsorb;
                    this.defenses[10] += armor.chest.fireDef;
                    this.defenses[11] += armor.chest.fireAbsorb;
                    this.defenses[12] += armor.chest.lightningDef;
                    this.defenses[13] += armor.chest.lightningAbsorb;
                    this.defenses[14] += armor.chest.darkDef;
                    this.defenses[15] += armor.chest.darkAbsorb;
                    this.defenses[16] += armor.chest.bleedRes;
                    this.defenses[17] += armor.chest.bleedRes;
                    this.defenses[18] += armor.chest.poisonRes;
                    this.defenses[19] += armor.chest.poisonRes;
                    this.defenses[20] += armor.chest.frostRes;
                    this.defenses[21] += armor.chest.frostRes;
                    this.defenses[22] += armor.chest.curseRes;
                    this.defenses[23] += armor.chest.curseRes;
                }

                if (armor.arms.name == arms) { //Get defenses from arms
                    this.defenses[0] += armor.arms.physDef;
                    this.defenses[1] += armor.arms.physAbsorb;
                    this.defenses[2] += armor.arms.slashDef;
                    this.defenses[3] += armor.arms.slashAbsorb;
                    this.defenses[4] += armor.arms.strikeDef;
                    this.defenses[5] += armor.arms.strikeAbsorb;
                    this.defenses[6] += armor.arms.thrustDef;
                    this.defenses[7] += armor.arms.thrustAbsorb;
                    this.defenses[8] += armor.arms.magicDef;
                    this.defenses[9] += armor.arms.magicAbsorb;
                    this.defenses[10] += armor.arms.fireDef;
                    this.defenses[11] += armor.arms.fireAbsorb;
                    this.defenses[12] += armor.arms.lightningDef;
                    this.defenses[13] += armor.arms.lightningAbsorb;
                    this.defenses[14] += armor.arms.darkDef;
                    this.defenses[15] += armor.arms.darkAbsorb;
                    this.defenses[16] += armor.arms.bleedRes;
                    this.defenses[17] += armor.arms.bleedRes;
                    this.defenses[18] += armor.arms.poisonRes;
                    this.defenses[19] += armor.arms.poisonRes;
                    this.defenses[20] += armor.arms.frostRes;
                    this.defenses[21] += armor.arms.frostRes;
                    this.defenses[22] += armor.arms.curseRes;
                    this.defenses[23] += armor.arms.curseRes;
                }

                if (armor.legs.name == legs) { //Get defenses from legs
                    this.defenses[0] += armor.legs.physDef;
                    this.defenses[1] += armor.legs.physAbsorb;
                    this.defenses[2] += armor.legs.slashDef;
                    this.defenses[3] += armor.legs.slashAbsorb;
                    this.defenses[4] += armor.legs.strikeDef;
                    this.defenses[5] += armor.legs.strikeAbsorb;
                    this.defenses[6] += armor.legs.thrustDef;
                    this.defenses[7] += armor.legs.thrustAbsorb;
                    this.defenses[8] += armor.legs.magicDef;
                    this.defenses[9] += armor.legs.magicAbsorb;
                    this.defenses[10] += armor.legs.fireDef;
                    this.defenses[11] += armor.legs.fireAbsorb;
                    this.defenses[12] += armor.legs.lightningDef;
                    this.defenses[13] += armor.legs.lightningAbsorb;
                    this.defenses[14] += armor.legs.darkDef;
                    this.defenses[15] += armor.legs.darkAbsorb;
                    this.defenses[16] += armor.legs.bleedRes;
                    this.defenses[17] += armor.legs.bleedRes;
                    this.defenses[18] += armor.legs.poisonRes;
                    this.defenses[19] += armor.legs.poisonRes;
                    this.defenses[20] += armor.legs.frostRes;
                    this.defenses[21] += armor.legs.frostRes;
                    this.defenses[22] += armor.legs.curseRes;
                    this.defenses[23] += armor.legs.curseRes;
                }
            }
        }

        private reZERO() {
            for (let i = 0; i < 24; i++)
                this.defenses[i] = 0;
        }
    }
    angular.module('DS3Planner').service('dataService', DataService);
}
