let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i + 1;
}
console.log(sum);

const sum1 = () => {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += i + 1;
  }
  return sum;
};
console.log(sum1());

/**
 * Closure
 */
const sum2 = () => {
  let sum = 0;
  return () => {
    for (let i = 0; i < 10; i++) {
      sum += i + 1;
    }
    return sum;
  };
};

const sum2Impl = sum2();
console.log(sum2Impl());

const sum3 = (num1) => {
  return (num2) => {
    return num1 + num2;
  };
};

const sum3Impl = sum3(100);
console.log(sum3Impl(200));

const gugu = (dan) => {
  return (num) => {
    console.log(`${dan} x ${num} = ${dan * num}`);
  };
};

const guguImpl = gugu(3);
console.log("==============================");
for (let i = 1; i < 10; i++) {
  // guguImpl(3, i)
  guguImpl(i);
}

const multi = () => {
  return {
    hello() {
      console.log("안녕하세요");
    },
    how(name) {
      console.log(`${name} 아 어떻게 지내`);
    },
  };
};
const multiImpl = multi();
multiImpl.hello();
multiImpl.how("길동");
