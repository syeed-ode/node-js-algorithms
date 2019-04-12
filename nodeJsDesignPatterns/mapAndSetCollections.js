const profiles = new Map();
profiles.set('twitter', '@adalovelace');
profiles.set('facebook', 'adalovelace');
profiles.set('googleplus', 'ada');
console.log(profiles.size); // 3
for (const entry of profiles) {
    console.log(entry);
}
console.log('');
console.log(profiles.has('twitter')); // true
console.log('');
profiles.get('twitter'); // "@adalovelace"
profiles.has('youtube'); // false
profiles.delete('facebook');
profiles.has('facebook'); // false
profiles.get('facebook'); // undefined
for (const entry of profiles) {
    console.log(entry);
}

console.log('');
console.log('');
console.log('');
const tests = new Map();
tests.set(() => 2+2, 4);
tests.set(() => 2*2, 4);
tests.set(() => 2/2, 1);
for (const entry of tests) {
    console.log((entry[0]() === entry[1]) ? 'PASS' : 'FAIL');
}