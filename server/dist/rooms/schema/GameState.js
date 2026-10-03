"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = exports.Player = exports.DroppedCoin = exports.ChasingChicken = exports.Trap = exports.Egg = exports.Pet = void 0;
const schema_1 = require("@colyseus/schema");
class Pet extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.id = "";
        this.name = "Kitty";
        this.rarity = "common";
        this.size = "normal";
        this.mutation = "none";
        this.moneyPerSec = 1.0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.carriedBy = "";
        this.baseIndex = -1;
        this.isGroundPet = false;
    }
}
exports.Pet = Pet;
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Pet.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Pet.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Pet.prototype, "rarity", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Pet.prototype, "size", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Pet.prototype, "mutation", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Pet.prototype, "moneyPerSec", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Pet.prototype, "x", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Pet.prototype, "y", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Pet.prototype, "z", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Pet.prototype, "carriedBy", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Pet.prototype, "baseIndex", void 0);
__decorate([
    (0, schema_1.type)("boolean"),
    __metadata("design:type", Boolean)
], Pet.prototype, "isGroundPet", void 0);
class Egg extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.id = "";
        this.tier = "common";
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.carriedBy = "";
        this.baseIndex = -1;
        this.hatchTimeRemaining = 0;
        this.dropCooldown = 0;
        this.lastDroppedBy = "";
        this.hasChicken = false;
        this.isGuarded = false;
        this.guardType = "chicken";
        this.guardX = 0;
        this.guardZ = 0;
        this.guardState = "sleeping";
        this.guardTargetId = "";
    }
}
exports.Egg = Egg;
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Egg.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Egg.prototype, "tier", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Egg.prototype, "x", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Egg.prototype, "y", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Egg.prototype, "z", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Egg.prototype, "carriedBy", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Egg.prototype, "baseIndex", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Egg.prototype, "hatchTimeRemaining", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Egg.prototype, "dropCooldown", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Egg.prototype, "lastDroppedBy", void 0);
__decorate([
    (0, schema_1.type)("boolean"),
    __metadata("design:type", Boolean)
], Egg.prototype, "hasChicken", void 0);
__decorate([
    (0, schema_1.type)("boolean"),
    __metadata("design:type", Boolean)
], Egg.prototype, "isGuarded", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Egg.prototype, "guardType", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Egg.prototype, "guardX", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Egg.prototype, "guardZ", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Egg.prototype, "guardState", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Egg.prototype, "guardTargetId", void 0);
class Trap extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.id = "";
        this.ownerId = "";
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
}
exports.Trap = Trap;
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Trap.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Trap.prototype, "ownerId", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Trap.prototype, "x", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Trap.prototype, "y", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Trap.prototype, "z", void 0);
class ChasingChicken extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.id = "";
        this.targetPlayerId = "";
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.lifetime = 4.0;
    }
}
exports.ChasingChicken = ChasingChicken;
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], ChasingChicken.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], ChasingChicken.prototype, "targetPlayerId", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], ChasingChicken.prototype, "x", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], ChasingChicken.prototype, "y", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], ChasingChicken.prototype, "z", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], ChasingChicken.prototype, "lifetime", void 0);
class DroppedCoin extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.id = "";
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.amount = 0;
        this.despawnTimer = 8.0;
    }
}
exports.DroppedCoin = DroppedCoin;
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], DroppedCoin.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], DroppedCoin.prototype, "x", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], DroppedCoin.prototype, "y", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], DroppedCoin.prototype, "z", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], DroppedCoin.prototype, "amount", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], DroppedCoin.prototype, "despawnTimer", void 0);
class Player extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.id = "";
        this.name = "";
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.rotationY = 0;
        this.speed = 10;
        this.money = 0;
        this.baseIndex = -1;
        this.onTreadmill = false;
        this.speedStat = 1;
        this.carriedEggTier = "";
        this.carriedEgg = null;
        this.carriedPet = null;
        this.incubatorEggs = new schema_1.ArraySchema();
        this.pets = new schema_1.ArraySchema();
        this.groundPets = new schema_1.ArraySchema();
        // Mechanics & Competitive Fields
        this.batCooldown = 0;
        this.trapCount = 3;
        this.trappedTimer = 0;
        this.stolenMoneyTotal = 0;
        this.hatchedEggsTotal = 0;
        this.caughtStunTimer = 0;
        this.invulnerableTimer = 0;
        // Shop Upgrades
        this.treadmillTier = 1;
        this.baseTier = 1;
        this.maxPetSlots = 6;
        // Rare Rewards
        this.hasDivineTrail = false;
        this.equippedDivineTrail = false;
        this.hasAngelicTreadmill = false;
        this.equippedAngelicTreadmill = false;
        this.lastHatchedReward = "";
        // Red Alert & Freeze System
        this.redAlerts = 0;
        this.frozenTimer = 0;
        this.freezeEndTime = 0;
        this.lastAlertTime = 0;
        this.lastInteractTime = 0;
        // Bloxity SDK Equipped Cosmetics
        this.skinId = "";
        this.hatId = "";
        this.hairId = "";
        this.faceId = "";
        this.shirtId = "";
        this.pantsId = "";
    }
}
exports.Player = Player;
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Player.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Player.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "x", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "y", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "z", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "rotationY", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "speed", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "money", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "baseIndex", void 0);
__decorate([
    (0, schema_1.type)("boolean"),
    __metadata("design:type", Boolean)
], Player.prototype, "onTreadmill", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "speedStat", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Player.prototype, "carriedEggTier", void 0);
__decorate([
    (0, schema_1.type)(Egg),
    __metadata("design:type", Object)
], Player.prototype, "carriedEgg", void 0);
__decorate([
    (0, schema_1.type)(Pet),
    __metadata("design:type", Object)
], Player.prototype, "carriedPet", void 0);
__decorate([
    (0, schema_1.type)([Egg]),
    __metadata("design:type", Object)
], Player.prototype, "incubatorEggs", void 0);
__decorate([
    (0, schema_1.type)([Pet]),
    __metadata("design:type", Object)
], Player.prototype, "pets", void 0);
__decorate([
    (0, schema_1.type)([Pet]),
    __metadata("design:type", Object)
], Player.prototype, "groundPets", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "batCooldown", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "trapCount", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "trappedTimer", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "stolenMoneyTotal", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "hatchedEggsTotal", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "caughtStunTimer", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "invulnerableTimer", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "treadmillTier", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "baseTier", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "maxPetSlots", void 0);
__decorate([
    (0, schema_1.type)("boolean"),
    __metadata("design:type", Boolean)
], Player.prototype, "hasDivineTrail", void 0);
__decorate([
    (0, schema_1.type)("boolean"),
    __metadata("design:type", Boolean)
], Player.prototype, "equippedDivineTrail", void 0);
__decorate([
    (0, schema_1.type)("boolean"),
    __metadata("design:type", Boolean)
], Player.prototype, "hasAngelicTreadmill", void 0);
__decorate([
    (0, schema_1.type)("boolean"),
    __metadata("design:type", Boolean)
], Player.prototype, "equippedAngelicTreadmill", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Player.prototype, "lastHatchedReward", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "redAlerts", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "frozenTimer", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "freezeEndTime", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], Player.prototype, "lastAlertTime", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Player.prototype, "skinId", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Player.prototype, "hatId", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Player.prototype, "hairId", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Player.prototype, "faceId", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Player.prototype, "shirtId", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], Player.prototype, "pantsId", void 0);
class GameState extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.players = new schema_1.MapSchema();
        this.mapEggs = new schema_1.MapSchema();
        this.placedTraps = new schema_1.MapSchema();
        this.chasingChickens = new schema_1.MapSchema();
        this.droppedCoins = new schema_1.MapSchema();
        this.dayNightProgress = 0;
        this.richestPlayerId = "";
    }
}
exports.GameState = GameState;
__decorate([
    (0, schema_1.type)({ map: Player }),
    __metadata("design:type", Object)
], GameState.prototype, "players", void 0);
__decorate([
    (0, schema_1.type)({ map: Egg }),
    __metadata("design:type", Object)
], GameState.prototype, "mapEggs", void 0);
__decorate([
    (0, schema_1.type)({ map: Trap }),
    __metadata("design:type", Object)
], GameState.prototype, "placedTraps", void 0);
__decorate([
    (0, schema_1.type)({ map: ChasingChicken }),
    __metadata("design:type", Object)
], GameState.prototype, "chasingChickens", void 0);
__decorate([
    (0, schema_1.type)({ map: DroppedCoin }),
    __metadata("design:type", Object)
], GameState.prototype, "droppedCoins", void 0);
__decorate([
    (0, schema_1.type)("number"),
    __metadata("design:type", Number)
], GameState.prototype, "dayNightProgress", void 0);
__decorate([
    (0, schema_1.type)("string"),
    __metadata("design:type", String)
], GameState.prototype, "richestPlayerId", void 0);
