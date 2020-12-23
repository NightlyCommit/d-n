import * as tape from "tape";
import {createDice} from "../src";
import {stub, spy} from "sinon";

tape('d-n', (test) => {
  const d2 = createDice(2);

  let randomStub = stub(Math, 'random');

  randomStub.returns(1);

  test.same(d2(), 2);

  randomStub.returns(0);

  test.same(d2(), 1);

  let callCount: number = 0;

  randomStub.callsFake(() => {
    callCount++;

    return callCount === 2 ? 0.4 : 0.5;
  });

  d2();

  test.same(callCount, 2, '0.5 should trigger a re-roll');

  test.end();
});