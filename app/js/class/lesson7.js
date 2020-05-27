{
  function test(x, y='world'){
    console.log("default",x,y);
  }
  test('hello');
}

{
  let x='test';
  function test2(x,y=x){
    console.log('Effective field',x,y);
  }
  test2('kill');
}

{
  function test3(...arg){
    for(let v of arg){
      console.log('rest',v);
    }
  }
  test3(1,2,3,4,'a');
}

{
  console.log(...[1,2,4]);
}

{
  let arrow=v=>v*2;
  let arrow2=()=>5;
  console.log('arrow',arrow(3));
  console.log(arrow2());
}

{
  function tail(x){
    console.log('tail',x);
  }
  function fx(x){
    return tail(x);
  }
  fx(123);
}