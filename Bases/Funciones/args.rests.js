"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const fullName = (firstName, ...restargs) => {
        return `${firstName} ${restargs}`;
    };
    const superMan = fullName("Stark", "Joseph", "Kent");
    console.log(superMan);
})();
