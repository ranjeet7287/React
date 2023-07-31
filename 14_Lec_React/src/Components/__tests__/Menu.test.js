import Body from "../Body";
import HeaderComponents from "../Header"
import ResturantMenu from "../resturantmenu";
import { render, waitFor ,fireEvent, getByAltText } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import { MenuData } from "../../mocks/data";
import "@testing-library/jest-dom";

globalThis.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{ 
            return Promise.resolve(MenuData)
        }
    });
});


test("Add item to Cart",async()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <HeaderComponents/>
                <ResturantMenu/>
            </Provider>
        </StaticRouter>
    );

    await waitFor(()=>expect(body.getByTestId("menu")))

    const addBtn=body.getAllByTestId("addbtn");


    fireEvent.click(addBtn[0]);


    const cart=body.getByTestId("cart-item");
    expect(cart.innerHTML).toBe("1_Cart");

    // console.log(shimmer);
});