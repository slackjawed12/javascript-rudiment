isFinite(0);
isFinite(2e64);
isFinite("10"); // true
isFinite(null); // true : null은 0으로 타입변환

isFinite(Infinity);
isFinite(NaN);
