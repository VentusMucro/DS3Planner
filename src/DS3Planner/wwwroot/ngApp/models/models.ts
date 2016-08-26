namespace DS3Planner.Models {
    export class characterClasses {
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
}