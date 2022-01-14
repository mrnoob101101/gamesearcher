import {useDispatch} from "react-redux";
import {getGames} from "../store/main/mainSlice";

export const TestTitle = () => {
    const dispatch = useDispatch();
    return (
        <div onClick={() => dispatch(getGames())}>
            TEST
        </div>
    )
}
