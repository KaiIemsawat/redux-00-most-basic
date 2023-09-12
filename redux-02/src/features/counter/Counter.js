import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
    // const count = useSelector((state) => state.counter.count)
    //                                      state.sliceName.(someNameFrom state.thatName)
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch(); // declare dispatch to use useDiapatch();

    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0; // type casting to number or set it to 0 if not a number

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    };

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>
                    Add amount
                </button>
            </div>
            <div>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    );
};

export default Counter;
