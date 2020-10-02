import { createStore } from 'redux';
import * as actions from '../store/actions';
import rootReducer from '../store/reducers';
import { stack, stacks } from '../data/fixtures';


describe("Index.js Tests", () => {

  describe("Redux Store tests", ()=> {
    it('creates store with inital state', () => {
      const store = createStore(rootReducer);
      const testStack = {
        id: 0, title: 'example', cards: []
      };

      store.dispatch(actions.setStack(testStack));

      expect(store.getState()).toEqual({
        stack: testStack,
        stacks: []
      });
    });

    //this test is duplicated below in 'Action Tests'

  });


  describe('Actions Tests', () => {
    it('sets main stack via action', () => {
        const expectedAction = {
          type: actions.SET_STACK,
          stack
        };

      expect(actions.setStack(stack))
        .toEqual(expectedAction);
    });

    it('add stack via action', () => {
      const expectedAction = {
        type: actions.ADD_STACK,
        stack
      };

      expect(actions.addStack(stack))
        .toEqual(expectedAction);
    });

    it('loads stack via action', () => {
      const expectedAction = {
        type: actions.LOAD_STACKS,
        stacks
      };

      expect(actions.loadStacks(stacks)).toEqual(expectedAction);
    });


  });


});

describe("Reducers Tests", () => {

  it('return initial state', () => {
      const initialState = { stack: {}, stacks: [] };

      expect(rootReducer({}, {})).toEqual(initialState);
  });

  it('sets main stack', () => {
    expect(rootReducer({}, { type: actions.SET_STACK, stack }))
      .toEqual({ stack, stacks: [] });
  })

  it('loads stacks', () => {
    expect(rootReducer({}, { type: actions.LOAD_STACKS, stacks }))
      .toEqual({ stack: {}, stacks});
  });

    it('adds stack', () =>{
      const testStack = { title: 'data', cards: [] };

      expect(rootReducer({}, {
        type: actions.ADD_STACK,
        stack: testStack
      })).toEqual({
        stack: {},
        stacks: [{ ...testStack, id: 0 }]
      });

    });



});