import { kMaxLength } from "buffer";

{
  // simple way
  let o=1;
  let k=2;
  let es5={
    o:o,
    k:k
  };
  let es6={
    o,
    k
  };
  console.log(es5,es6);

  let es5_method={
    hello:function(){
      console.log('hello');
    }
  };
  let es6_method={
    hello(){
      console.log('hello');
    }
  };
  console.log(es5_method.hello(),es6_method.hello());
}

{
  // attribute expression
  let a='b';
  let es5_obj={
    a:'c'
  };

  let es6_obj={
    [a]:'c'
  };
  console.log(es5_obj,es6_obj);
}

{
  // New add API for Object
  console.log('String', Object.is('abc','abc'),'abc'==='abc');
  console.log('Array', Object.is([],[]),[]===[]); //Array reference judge

  console.log('copy',Object.assign({a:'a'},{b:'b'}));
  
  let test={k:123,o:456};
  for(let [key,value] of Object.entries(test)){
    console.log([key,value]);
  }
}

// {
//   // expand calculator --- not for babel
//   let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
//   c={
//     c:'ddd',
//     d:'ccc'
//   }
// }