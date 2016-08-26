namespace DS3Planner.Controllers {

    export class HomeController {

        public stats;
        public helms;
        public chests;
        public arms;
        public legs;
        public rings;
        public weapons;
        public defenses: number[];

        constructor(private dataService: DS3Planner.Services.DataService, private $scope, private $http: ng.IHttpService, private $q: ng.IQService, private $state: ng.ui.IStateService) {
            let getHelms = this.$http.get('/api/armor/helms');
            let getChests = this.$http.get('/api/armor/chests');
            let getArms = this.$http.get('/api/armor/arms');
            let getLegs = this.$http.get('/api/armor/legs');
            let getRings = this.$http.get('/api/ring');
            let getWeapons = this.$http.get('/api/weapon');

            this.$q.all([getHelms, getChests, getArms, getLegs, getRings, getWeapons]).then((response) => {
                this.helms = response[0].data;
                this.chests = response[1].data;
                this.arms = response[2].data;
                this.legs = response[3].data;
                this.rings = response[4].data;
                this.weapons = response[5].data;
            });

            this.defenses = [];
            //this.$scope.build = {};
            //this.$scope.build.class = "Deprived";
            //this.setClass();
            this.$scope.class = "Deprived";
            this.setClass();
            this.updateAll(this.$scope.build.vigor, this.$scope.build.attunement, this.$scope.build.endurance, this.$scope.build.vitality);
            this.$scope.build.name = "Build Name";
            this.$scope.lolPoise = 0;
            if (parseInt(this.$scope.build.luck) < 99)
                this.$scope.itemDiscovery = "Lol this ain't a luck build";
        }

        public setClass() { //method to pull all the base data for a class and set it as the active class
            for (let entry of this.dataService.statData) {
                if (entry.name == this.$scope.class)
                    this.stats = this.dataService.statData[this.dataService.statData.indexOf(entry)];
            }
            this.$scope.build = {};

            this.$scope.level = this.stats.bLevel;
            this.$scope.build.vigor = this.stats.bVigor;
            this.$scope.build.attunement = this.stats.bAttn;
            this.$scope.build.endurance = this.stats.bEndurance;
            this.$scope.build.vitality = this.stats.bVitality;
            this.$scope.build.strength = this.stats.bStrength;
            this.$scope.build.dexterity = this.stats.bDexterity;
            this.$scope.build.intelligence = this.stats.bIntelligence;
            this.$scope.build.faith = this.stats.bFaith;
            this.$scope.build.luck = this.stats.bLuck;
        }

        public updateLevel() {
            //console.log(stats);
            let total = 0;
            //for (let i = 0; i < stats.length; i++)
            //    total += parseInt(stats[i]);
            total += parseInt(this.$scope.build.vigor);
            total += parseInt(this.$scope.build.attunement);
            total += parseInt(this.$scope.build.endurance);
            total += parseInt(this.$scope.build.vitality);
            total += parseInt(this.$scope.build.strength);
            total += parseInt(this.$scope.build.dexterity);
            total += parseInt(this.$scope.build.intelligence);
            total += parseInt(this.$scope.build.faith);
            total += parseInt(this.$scope.build.luck);
            console.log(total);
            this.$scope.level = total - 89;
        }

        public setHP(vigor) {
            let idx = parseInt(vigor);
            let eHP = this.dataService.HP[idx] * 1.3;
            this.$scope.HP = this.dataService.HP[idx].toString() + " (" + (eHP | 0) + ")";
        }

        public setFP(attunement) {
            let idx = parseInt(attunement);
            let bFP = this.dataService.FP[idx];
            this.$scope.FP = this.dataService.FP[idx];
        }

        public setStam(endurance) {
            let idx = parseInt(endurance);
            let bStam = this.dataService.stamina[idx];
            this.$scope.stamina = this.dataService.stamina[idx];
        }

        public setLoad(vitality) {
            let idx = parseInt(vitality);
            let bLoad = this.dataService.eLoad[idx];
            this.$scope.equipLoad = this.dataService.eLoad[idx];
        }

        public updateAll(vigor, attunement, endurance, vitality) {
            this.updateLevel();
            this.setHP(vigor);
            this.setFP(attunement);
            this.setStam(endurance);
            this.setLoad(vitality);
        }

        public calcAll(helm, chest, arms, legs) { // need to work on multiplicative method for absorbtion. 1 - ((1-a/100)(1-b/100)(1-c/100)(1-d/100))
            this.reZERO();

            let cWeight = 0;
            let cPoise = 0;

            for (let armor of this.helms) {//O(n) = 1 loop, 1 if per loop
                if (armor.name == helm) { //Get defenses from helm
                    this.defenses[0] += armor.physDef;
                    this.defenses[1] += armor.physAbsorb;
                    this.defenses[2] += armor.slashDef;
                    this.defenses[3] += armor.slashAbsorb;
                    this.defenses[4] += armor.strikeDef;
                    this.defenses[5] += armor.strikeAbsorb;
                    this.defenses[6] += armor.thrustDef;
                    this.defenses[7] += armor.thrustAbsorb;
                    this.defenses[8] += armor.magicDef;
                    this.defenses[9] += armor.magicAbsorb;
                    this.defenses[10] += armor.fireDef;
                    this.defenses[11] += armor.fireAbsorb;
                    this.defenses[12] += armor.lightningDef;
                    this.defenses[13] += armor.lightningAbsorb;
                    this.defenses[14] += armor.darkDef;
                    this.defenses[15] += armor.darkAbsorb;
                    this.defenses[16] += armor.bleedRes;
                    this.defenses[17] += armor.bleedRes;
                    this.defenses[18] += armor.poisonRes;
                    this.defenses[19] += armor.poisonRes;
                    this.defenses[20] += armor.frostRes;
                    this.defenses[21] += armor.frostRes;
                    this.defenses[22] += armor.curseRes;
                    this.defenses[23] += armor.curseRes;

                    cWeight += armor.weight;
                    cPoise += armor.poise;
                }
            }

            for (let armor of this.chests) {//O(n) = 1 loop, 1 if per loop
                if (armor.name == chest) { //Get defenses from chest
                    this.defenses[0] += armor.physDef;
                    this.defenses[1] += armor.physAbsorb;
                    this.defenses[2] += armor.slashDef;
                    this.defenses[3] += armor.slashAbsorb;
                    this.defenses[4] += armor.strikeDef;
                    this.defenses[5] += armor.strikeAbsorb;
                    this.defenses[6] += armor.thrustDef;
                    this.defenses[7] += armor.thrustAbsorb;
                    this.defenses[8] += armor.magicDef;
                    this.defenses[9] += armor.magicAbsorb;
                    this.defenses[10] += armor.fireDef;
                    this.defenses[11] += armor.fireAbsorb;
                    this.defenses[12] += armor.lightningDef;
                    this.defenses[13] += armor.lightningAbsorb;
                    this.defenses[14] += armor.darkDef;
                    this.defenses[15] += armor.darkAbsorb;
                    this.defenses[16] += armor.bleedRes;
                    this.defenses[17] += armor.bleedRes;
                    this.defenses[18] += armor.poisonRes;
                    this.defenses[19] += armor.poisonRes;
                    this.defenses[20] += armor.frostRes;
                    this.defenses[21] += armor.frostRes;
                    this.defenses[22] += armor.curseRes;
                    this.defenses[23] += armor.curseRes;

                    cWeight += armor.weight;
                    cPoise += armor.poise;
                }
            }

            for (let armor of this.arms) {//O(n) = 1 loop, 1 if per loop
                if (armor.name == arms) { //Get defenses from arms
                    this.defenses[0] += armor.physDef;
                    this.defenses[1] += armor.physAbsorb;
                    this.defenses[2] += armor.slashDef;
                    this.defenses[3] += armor.slashAbsorb;
                    this.defenses[4] += armor.strikeDef;
                    this.defenses[5] += armor.strikeAbsorb;
                    this.defenses[6] += armor.thrustDef;
                    this.defenses[7] += armor.thrustAbsorb;
                    this.defenses[8] += armor.magicDef;
                    this.defenses[9] += armor.magicAbsorb;
                    this.defenses[10] += armor.fireDef;
                    this.defenses[11] += armor.fireAbsorb;
                    this.defenses[12] += armor.lightningDef;
                    this.defenses[13] += armor.lightningAbsorb;
                    this.defenses[14] += armor.darkDef;
                    this.defenses[15] += armor.darkAbsorb;
                    this.defenses[16] += armor.bleedRes;
                    this.defenses[17] += armor.bleedRes;
                    this.defenses[18] += armor.poisonRes;
                    this.defenses[19] += armor.poisonRes;
                    this.defenses[20] += armor.frostRes;
                    this.defenses[21] += armor.frostRes;
                    this.defenses[22] += armor.curseRes;
                    this.defenses[23] += armor.curseRes;

                    cWeight += armor.weight;
                    cPoise += armor.poise;
                }
            }

            for (let armor of this.legs) {//O(n) = 1 loop, 1 if per loop
                if (armor.name == legs) { //Get defenses from legs
                    this.defenses[0] += armor.physDef;
                    this.defenses[1] += armor.physAbsorb;
                    this.defenses[2] += armor.slashDef;
                    this.defenses[3] += armor.slashAbsorb;
                    this.defenses[4] += armor.strikeDef;
                    this.defenses[5] += armor.strikeAbsorb;
                    this.defenses[6] += armor.thrustDef;
                    this.defenses[7] += armor.thrustAbsorb;
                    this.defenses[8] += armor.magicDef;
                    this.defenses[9] += armor.magicAbsorb;
                    this.defenses[10] += armor.fireDef;
                    this.defenses[11] += armor.fireAbsorb;
                    this.defenses[12] += armor.lightningDef;
                    this.defenses[13] += armor.lightningAbsorb;
                    this.defenses[14] += armor.darkDef;
                    this.defenses[15] += armor.darkAbsorb;
                    this.defenses[16] += armor.bleedRes;
                    this.defenses[17] += armor.bleedRes;
                    this.defenses[18] += armor.poisonRes;
                    this.defenses[19] += armor.poisonRes;
                    this.defenses[20] += armor.frostRes;
                    this.defenses[21] += armor.frostRes;
                    this.defenses[22] += armor.curseRes;
                    this.defenses[23] += armor.curseRes;

                    cWeight += armor.weight;
                    cPoise += armor.poise;
                }
            }

            for (let ring of this.rings) {
                if (ring.name == this.$scope.build.ring1)
                    cWeight += ring.weight;

                if (ring.name == this.$scope.build.ring2)
                    cWeight += ring.weight;

                if (ring.name == this.$scope.build.ring3)
                    cWeight += ring.weight;

                if (ring.name == this.$scope.build.ring4)
                    cWeight += ring.weight;

                //if (this.$scope.ring1 == "None" || this.$scope.ring2 == "None" || this.$scope.ring3 == "None" || this.$scope.ring4 == "None")
                //    cWeight += 0;
            }

            for (let weapon of this.weapons) {
                if (weapon.name == this.$scope.build.weaponsL1)
                    cWeight += weapon.weight;

                if (weapon.name == this.$scope.build.weaponsL2)
                    cWeight += weapon.weight;

                if (weapon.name == this.$scope.build.weaponsL3)
                    cWeight += weapon.weight;

                if (weapon.name == this.$scope.build.weaponsR1)
                    cWeight += weapon.weight;

                if (weapon.name == this.$scope.build.weaponsR2)
                    cWeight += weapon.weight;

                if (weapon.name == this.$scope.build.weaponsR3)
                    cWeight += weapon.weight;
            }

            this.setLoad(this.$scope.build.vitality);
            this.$scope.equipLoad = `${cWeight.toFixed(2)}/${this.$scope.equipLoad} (${((cWeight / parseInt(this.$scope.equipLoad)) * 100).toFixed(2)}%)`;

            this.$scope.lolPoise = cPoise;
        }

        public calcWepDamage() {
            for (let weapon of this.weapons) {
                if (weapon.name == this.$scope.build.weaponsL1) {
                    let damage = weapon.phys;
                    damage += weapon.magic;
                    damage += weapon.fire;
                    damage += weapon.lightning;
                    damage += weapon.dark;

                    this.$scope.l1Damage = damage;
                }

                if (weapon.name == this.$scope.build.weaponsL2) {
                    let damage = weapon.phys;
                    damage += weapon.magic;
                    damage += weapon.fire;
                    damage += weapon.lightning;
                    damage += weapon.dark;

                    this.$scope.l2Damage = damage;
                }

                if (weapon.name == this.$scope.build.weaponsL3) {
                    let damage = weapon.phys;
                    damage += weapon.magic;
                    damage += weapon.fire;
                    damage += weapon.lightning;
                    damage += weapon.dark;

                    this.$scope.l3Damage = damage;
                }

                if (weapon.name == this.$scope.build.weaponsR1) {
                    let damage = weapon.phys;
                    damage += weapon.magic;
                    damage += weapon.fire;
                    damage += weapon.lightning;
                    damage += weapon.dark;

                    this.$scope.r1Damage = damage;
                }

                if (weapon.name == this.$scope.build.weaponsR2) {
                    let damage = weapon.phys;
                    damage += weapon.magic;
                    damage += weapon.fire;
                    damage += weapon.lightning;
                    damage += weapon.dark;

                    this.$scope.r2Damage = damage;
                }

                if (weapon.name == this.$scope.build.weaponsR3) {
                    let damage = weapon.phys;
                    damage += weapon.magic;
                    damage += weapon.fire;
                    damage += weapon.lightning;
                    damage += weapon.dark;

                    this.$scope.r3Damage = damage;
                }
            }
        }

        private reZERO() {
            for (let i = 0; i < 24; i++)
                this.defenses[i] = 0;
        }

        public testCheck(log) {
            console.log(log);
        }

        public postBuild(build) {
            build.class = this.$scope.class;
            this.$http.post('/api/fullbuild', build).then((response) => {
                this.$state.go('secret');
            }).catch((reason) => {
                console.log(reason);
            });
        }
    }



    export class SecretController {
        public secrets;
        public builds;
        public ids;

        constructor(private $http: ng.IHttpService) {
            this.ids = [];
            $http.get('/api/secrets').then((results) => {
                this.secrets = results.data;
            });

            $http.get('/api/fullbuild/user').then((response) => {
                this.builds = response.data;
                console.log(this.builds);

                //for (let build of this.builds) {
                //    $http.get(`/api/fullbuild/${build.name}`).then((response) => {
                //        this.ids.push(response.data);
                //        console.log(response.data);
                //    });
                //}
            });

            
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
        public output;

        public rgbToHsl(r: any = "0", g: any = "0", b: any = "0") {
            r = parseInt(r), g = parseInt(g), b = parseInt(b);
            r /= 255, g /= 255, b /= 255;
            let max = Math.max(r, g, b), min = Math.min(r, g, b);
            let h, s, l = (max + min) / 2;

            if (max == min) { h = s = 0; }
            else {
                let d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

                switch (max) {
                    case r: h = ((g - b) / d) + (g < b ? 6 : 0); break;
                    case g: h = ((b - r) / d) + 2; break;
                    case b: h = ((r - g) / d) + 4; break;
                }
                h *= 60;
                if (h < 0) { h += 360; }
            }
            //console.log("The function triggered");
            //console.log(`${h | 0} ${(s * 100) | 0}% ${(l * 100) | 0}%`);
            this.output = `${(h + 0.5) | 0} ${((s * 100) + 0.5) | 0}% ${((l * 100) + 0.5) | 0}%`;
        }

    }

    export class BuildController {

        public stats;
        public helms;
        public chests;
        public arms;
        public legs;
        public rings;
        public weapons;
        public pBuild;
        public defenses: number[];

        constructor(private dataService: DS3Planner.Services.DataService, private $scope, private $http: ng.IHttpService, private $q: ng.IQService, private $state: ng.ui.IStateService, private $stateParams: ng.ui.IStateParamsService) {
            let getHelms = this.$http.get('/api/armor/helms');
            let getChests = this.$http.get('/api/armor/chests');
            let getArms = this.$http.get('/api/armor/arms');
            let getLegs = this.$http.get('/api/armor/legs');
            let getRings = this.$http.get('/api/ring');
            let getWeapons = this.$http.get('/api/weapon');
            let getBuild = this.$http.get(`/api/fullbuild/${this.$stateParams['id']}`);

            this.$q.all([getHelms, getChests, getArms, getLegs, getRings, getWeapons, getBuild]).then((response) => {
                this.helms = response[0].data;
                this.chests = response[1].data;
                this.arms = response[2].data;
                this.legs = response[3].data;
                this.rings = response[4].data;
                this.weapons = response[5].data;
                this.pBuild = response[6].data;
                console.log(this.pBuild);

                this.defenses = [];
                this.$scope.class = this.pBuild.class;
                this.setClass();
                //this.updateAll(this.$scope.build.vigor, this.$scope.build.attunement, this.$scope.build.endurance, this.$scope.build.vitality);
                this.$scope.build.name = this.pBuild.name;
                this.$scope.lolPoise = 0;
                if (parseInt(this.$scope.build.luck) < 99)
                    this.$scope.itemDiscovery = "Lol this ain't a luck build";

                this.$scope.build.vigor = this.pBuild.vigor;
                this.$scope.build.attunement = this.pBuild.attunement;
                this.$scope.build.endurance = this.pBuild.endurance;
                this.$scope.build.vitality = this.pBuild.vitality;
                this.$scope.build.strength = this.pBuild.strength;
                this.$scope.build.dexterity = this.pBuild.dexterity;
                this.$scope.build.intelligence = this.pBuild.intelligence;
                this.$scope.build.faith = this.pBuild.faith;
                this.$scope.build.luck = this.pBuild.luck;
                this.updateAll(this.$scope.build.vigor, this.$scope.build.attunement, this.$scope.build.endurance, this.$scope.build.vitality);

                this.$scope.build.weaponsR1 = this.pBuild.weaponsL1;
                this.$scope.build.weaponsR2 = this.pBuild.weaponsL2;
                this.$scope.build.weaponsR3 = this.pBuild.weaponsL3;
                this.$scope.build.weaponsR1 = this.pBuild.weaponsR1;
                this.$scope.build.weaponsR2 = this.pBuild.weaponsR2;
                this.$scope.build.weaponsR3 = this.pBuild.weaponsR3;
                this.calcWepDamage();

                this.$scope.build.ring1 = this.pBuild.ring1;
                this.$scope.build.ring2 = this.pBuild.ring2;
                this.$scope.build.ring3 = this.pBuild.ring3;
                this.$scope.build.ring4 = this.pBuild.ring4;

                this.$scope.build.helm = this.pBuild.helm;
                this.$scope.build.chest = this.pBuild.chest;
                this.$scope.build.arms = this.pBuild.arms;
                this.$scope.build.legs = this.pBuild.legs;
                this.calcAll(this.$scope.build.helm, this.$scope.build.chest, this.$scope.build.arms, this.$scope.build.legs);
            });
        }

        public setClass() { //method to pull all the base data for a class and set it as the active class
            for (let entry of this.dataService.statData) {
                if (entry.name == this.$scope.class)
                    this.stats = this.dataService.statData[this.dataService.statData.indexOf(entry)];
            }
            this.$scope.build = {};

            this.$scope.level = this.stats.bLevel;
            this.$scope.build.vigor = this.stats.bVigor;
            this.$scope.build.attunement = this.stats.bAttn;
            this.$scope.build.endurance = this.stats.bEndurance;
            this.$scope.build.vitality = this.stats.bVitality;
            this.$scope.build.strength = this.stats.bStrength;
            this.$scope.build.dexterity = this.stats.bDexterity;
            this.$scope.build.intelligence = this.stats.bIntelligence;
            this.$scope.build.faith = this.stats.bFaith;
            this.$scope.build.luck = this.stats.bLuck;
        }

        public updateLevel() {
            //console.log(stats);
            let total = 0;
            //for (let i = 0; i < stats.length; i++)
            //    total += parseInt(stats[i]);
            total += parseInt(this.$scope.build.vigor);
            total += parseInt(this.$scope.build.attunement);
            total += parseInt(this.$scope.build.endurance);
            total += parseInt(this.$scope.build.vitality);
            total += parseInt(this.$scope.build.strength);
            total += parseInt(this.$scope.build.dexterity);
            total += parseInt(this.$scope.build.intelligence);
            total += parseInt(this.$scope.build.faith);
            total += parseInt(this.$scope.build.luck);
            console.log(total);
            this.$scope.level = total - 89;
        }

        public setHP(vigor) {
            let idx = parseInt(vigor);
            let eHP = this.dataService.HP[idx] * 1.3;
            this.$scope.HP = this.dataService.HP[idx].toString() + " (" + (eHP | 0) + ")";
        }

        public setFP(attunement) {
            let idx = parseInt(attunement);
            let bFP = this.dataService.FP[idx];
            this.$scope.FP = this.dataService.FP[idx];
        }

        public setStam(endurance) {
            let idx = parseInt(endurance);
            let bStam = this.dataService.stamina[idx];
            this.$scope.stamina = this.dataService.stamina[idx];
        }

        public setLoad(vitality) {
            let idx = parseInt(vitality);
            let bLoad = this.dataService.eLoad[idx];
            this.$scope.equipLoad = this.dataService.eLoad[idx];
        }

        public updateAll(vigor, attunement, endurance, vitality) {
            this.updateLevel();
            this.setHP(vigor);
            this.setFP(attunement);
            this.setStam(endurance);
            this.setLoad(vitality);
        }

        public calcAll(helm, chest, arms, legs) { // need to work on multiplicative method for absorbtion. 1 - ((1-a/100)(1-b/100)(1-c/100)(1-d/100))
            this.reZERO();

            let cWeight = 0;
            let cPoise = 0;

            for (let armor of this.helms) {//O(n) = 1 loop, 1 if per loop
                if (armor.name == helm) { //Get defenses from helm
                    this.defenses[0] += armor.physDef;
                    this.defenses[1] += armor.physAbsorb;
                    this.defenses[2] += armor.slashDef;
                    this.defenses[3] += armor.slashAbsorb;
                    this.defenses[4] += armor.strikeDef;
                    this.defenses[5] += armor.strikeAbsorb;
                    this.defenses[6] += armor.thrustDef;
                    this.defenses[7] += armor.thrustAbsorb;
                    this.defenses[8] += armor.magicDef;
                    this.defenses[9] += armor.magicAbsorb;
                    this.defenses[10] += armor.fireDef;
                    this.defenses[11] += armor.fireAbsorb;
                    this.defenses[12] += armor.lightningDef;
                    this.defenses[13] += armor.lightningAbsorb;
                    this.defenses[14] += armor.darkDef;
                    this.defenses[15] += armor.darkAbsorb;
                    this.defenses[16] += armor.bleedRes;
                    this.defenses[17] += armor.bleedRes;
                    this.defenses[18] += armor.poisonRes;
                    this.defenses[19] += armor.poisonRes;
                    this.defenses[20] += armor.frostRes;
                    this.defenses[21] += armor.frostRes;
                    this.defenses[22] += armor.curseRes;
                    this.defenses[23] += armor.curseRes;

                    cWeight += armor.weight;
                    cPoise += armor.poise;
                }
            }

            for (let armor of this.chests) {//O(n) = 1 loop, 1 if per loop
                if (armor.name == chest) { //Get defenses from chest
                    this.defenses[0] += armor.physDef;
                    this.defenses[1] += armor.physAbsorb;
                    this.defenses[2] += armor.slashDef;
                    this.defenses[3] += armor.slashAbsorb;
                    this.defenses[4] += armor.strikeDef;
                    this.defenses[5] += armor.strikeAbsorb;
                    this.defenses[6] += armor.thrustDef;
                    this.defenses[7] += armor.thrustAbsorb;
                    this.defenses[8] += armor.magicDef;
                    this.defenses[9] += armor.magicAbsorb;
                    this.defenses[10] += armor.fireDef;
                    this.defenses[11] += armor.fireAbsorb;
                    this.defenses[12] += armor.lightningDef;
                    this.defenses[13] += armor.lightningAbsorb;
                    this.defenses[14] += armor.darkDef;
                    this.defenses[15] += armor.darkAbsorb;
                    this.defenses[16] += armor.bleedRes;
                    this.defenses[17] += armor.bleedRes;
                    this.defenses[18] += armor.poisonRes;
                    this.defenses[19] += armor.poisonRes;
                    this.defenses[20] += armor.frostRes;
                    this.defenses[21] += armor.frostRes;
                    this.defenses[22] += armor.curseRes;
                    this.defenses[23] += armor.curseRes;

                    cWeight += armor.weight;
                    cPoise += armor.poise;
                }
            }

            for (let armor of this.arms) {//O(n) = 1 loop, 1 if per loop
                if (armor.name == arms) { //Get defenses from arms
                    this.defenses[0] += armor.physDef;
                    this.defenses[1] += armor.physAbsorb;
                    this.defenses[2] += armor.slashDef;
                    this.defenses[3] += armor.slashAbsorb;
                    this.defenses[4] += armor.strikeDef;
                    this.defenses[5] += armor.strikeAbsorb;
                    this.defenses[6] += armor.thrustDef;
                    this.defenses[7] += armor.thrustAbsorb;
                    this.defenses[8] += armor.magicDef;
                    this.defenses[9] += armor.magicAbsorb;
                    this.defenses[10] += armor.fireDef;
                    this.defenses[11] += armor.fireAbsorb;
                    this.defenses[12] += armor.lightningDef;
                    this.defenses[13] += armor.lightningAbsorb;
                    this.defenses[14] += armor.darkDef;
                    this.defenses[15] += armor.darkAbsorb;
                    this.defenses[16] += armor.bleedRes;
                    this.defenses[17] += armor.bleedRes;
                    this.defenses[18] += armor.poisonRes;
                    this.defenses[19] += armor.poisonRes;
                    this.defenses[20] += armor.frostRes;
                    this.defenses[21] += armor.frostRes;
                    this.defenses[22] += armor.curseRes;
                    this.defenses[23] += armor.curseRes;

                    cWeight += armor.weight;
                    cPoise += armor.poise;
                }
            }

            for (let armor of this.legs) {//O(n) = 1 loop, 1 if per loop
                if (armor.name == legs) { //Get defenses from legs
                    this.defenses[0] += armor.physDef;
                    this.defenses[1] += armor.physAbsorb;
                    this.defenses[2] += armor.slashDef;
                    this.defenses[3] += armor.slashAbsorb;
                    this.defenses[4] += armor.strikeDef;
                    this.defenses[5] += armor.strikeAbsorb;
                    this.defenses[6] += armor.thrustDef;
                    this.defenses[7] += armor.thrustAbsorb;
                    this.defenses[8] += armor.magicDef;
                    this.defenses[9] += armor.magicAbsorb;
                    this.defenses[10] += armor.fireDef;
                    this.defenses[11] += armor.fireAbsorb;
                    this.defenses[12] += armor.lightningDef;
                    this.defenses[13] += armor.lightningAbsorb;
                    this.defenses[14] += armor.darkDef;
                    this.defenses[15] += armor.darkAbsorb;
                    this.defenses[16] += armor.bleedRes;
                    this.defenses[17] += armor.bleedRes;
                    this.defenses[18] += armor.poisonRes;
                    this.defenses[19] += armor.poisonRes;
                    this.defenses[20] += armor.frostRes;
                    this.defenses[21] += armor.frostRes;
                    this.defenses[22] += armor.curseRes;
                    this.defenses[23] += armor.curseRes;

                    cWeight += armor.weight;
                    cPoise += armor.poise;
                }
            }

            for (let ring of this.rings) {
                if (ring.name == this.$scope.build.ring1)
                    cWeight += ring.weight;

                if (ring.name == this.$scope.build.ring2)
                    cWeight += ring.weight;

                if (ring.name == this.$scope.build.ring3)
                    cWeight += ring.weight;

                if (ring.name == this.$scope.build.ring4)
                    cWeight += ring.weight;

                //if (this.$scope.ring1 == "None" || this.$scope.ring2 == "None" || this.$scope.ring3 == "None" || this.$scope.ring4 == "None")
                //    cWeight += 0;
            }

            for (let weapon of this.weapons) {
                if (weapon.name == this.$scope.build.weaponsL1)
                    cWeight += weapon.weight;

                if (weapon.name == this.$scope.build.weaponsL2)
                    cWeight += weapon.weight;

                if (weapon.name == this.$scope.build.weaponsL3)
                    cWeight += weapon.weight;

                if (weapon.name == this.$scope.build.weaponsR1)
                    cWeight += weapon.weight;

                if (weapon.name == this.$scope.build.weaponsR2)
                    cWeight += weapon.weight;

                if (weapon.name == this.$scope.build.weaponsR3)
                    cWeight += weapon.weight;
            }

            this.setLoad(this.$scope.build.vitality);
            this.$scope.equipLoad = `${cWeight.toFixed(2)}/${this.$scope.equipLoad} (${((cWeight / parseInt(this.$scope.equipLoad)) * 100).toFixed(2)}%)`;

            this.$scope.lolPoise = cPoise;
        }

        public calcWepDamage() {
            for (let weapon of this.weapons) {
                if (weapon.name == this.$scope.build.weaponsL1) {
                    let damage = weapon.phys;
                    damage += weapon.magic;
                    damage += weapon.fire;
                    damage += weapon.lightning;
                    damage += weapon.dark;

                    this.$scope.l1Damage = damage;
                }

                if (weapon.name == this.$scope.build.weaponsL2) {
                    let damage = weapon.phys;
                    damage += weapon.magic;
                    damage += weapon.fire;
                    damage += weapon.lightning;
                    damage += weapon.dark;

                    this.$scope.l2Damage = damage;
                }

                if (weapon.name == this.$scope.build.weaponsL3) {
                    let damage = weapon.phys;
                    damage += weapon.magic;
                    damage += weapon.fire;
                    damage += weapon.lightning;
                    damage += weapon.dark;

                    this.$scope.l3Damage = damage;
                }

                if (weapon.name == this.$scope.build.weaponsR1) {
                    let damage = weapon.phys;
                    damage += weapon.magic;
                    damage += weapon.fire;
                    damage += weapon.lightning;
                    damage += weapon.dark;

                    this.$scope.r1Damage = damage;
                }

                if (weapon.name == this.$scope.build.weaponsR2) {
                    let damage = weapon.phys;
                    damage += weapon.magic;
                    damage += weapon.fire;
                    damage += weapon.lightning;
                    damage += weapon.dark;

                    this.$scope.r2Damage = damage;
                }

                if (weapon.name == this.$scope.build.weaponsR3) {
                    let damage = weapon.phys;
                    damage += weapon.magic;
                    damage += weapon.fire;
                    damage += weapon.lightning;
                    damage += weapon.dark;

                    this.$scope.r3Damage = damage;
                }
            }
        }

        private reZERO() {
            for (let i = 0; i < 24; i++)
                this.defenses[i] = 0;
        }

        public testCheck(log) {
            console.log(log);
        }

        public postBuild(build) {
            this.$http.post('/api/fullbuild', build).then((response) => {
                this.$state.go('secret');
            }).catch((reason) => {
                console.log(reason);
            });
        }
    }

}
