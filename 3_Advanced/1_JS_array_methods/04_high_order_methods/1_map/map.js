// JavaScript - map() array method

const workers = new Map([
    ["John", "Admin"],
    ["Jaloliddin", "Developer"],
    ["Lucy", "Product Manager"],
]);

const SetValueToMap = (key, value) => workers.set(key, value);
const DeleteValueFromMap = (key) => workers.delete(key);
const getResult = () => workers;
const ClearMap = () => workers.clear();
const ShowEntires = () => workers.entries();
const GetValueFromMap = (key) => key !== null || key !== undefined ? `Found result: ${workers.get(key)}` : undefined;

const RESULT = [];
RESULT.push(workers);

SetValueToMap("Doe", "Software Engineer");
SetValueToMap("A.J", "Senior Architect");
//SetValueToMap("Jaloliddin", "Senior Architect");

function findKeyValue(specKey, map) {
    try {
        let result = "Empty Result";
        for (const [key, value] of map.entries()) {
            if (key === specKey) {
                result = `Here is the found result value of entered key of '${specKey}': ${value}`;
                break;
            } else {
                result = `There is no such worker with this key: ${specKey}`;
            }
        }
        return result;
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
}

const KEY = "Lucy";
const MAP = workers;
const resultOfKeySearch = findKeyValue(KEY, MAP);

console.log(resultOfKeySearch);

DeleteValueFromMap("Lucy");

//ClearMap(); // <- clears whole map

let found = GetValueFromMap("Jaloliddin");
console.log(found);

console.log(RESULT);
